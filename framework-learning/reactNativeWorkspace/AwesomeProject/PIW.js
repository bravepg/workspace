import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  PanResponder,
  CameraRoll,
  AlertIOS,
} from 'react-native';
import Waiting from './Waiting';
import Swiper from 'react-native-swiper';
import NetworkImage from 'react-native-image-progress';
import * as Progress from 'react-native-progress';
import ViewShot from "react-native-view-shot";
import WallPaperManager from 'react-native-wallpaper-manager';
import { uniqueRandomNumbers } from './js/RandManager';
import { distance } from './js/utils';
	
const NUM_WALLPAPERS = 5;
const DOUBLE_TAP_DELAY = 400; // milliseconds
const DOUBLE_TAP_RADIUS = 20;
const { width, height } = Dimensions.get('window');

export default class PIW extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      walletJSON: [],
      isLoading: true,
      isWaitingVisible: false
    };
    this.imagePanResponder = {};
    this.prevTouchInfo = {
      X: 0,
      Y: 0,
      timeStamp: 0,
    }
    this.currentWallIndex = 0;
  }
  fetchWalletKSON = () => {
    var url = 'http://unsplash.it/list';
    fetch(url)
      .then( response => response.json() )
      .then( jsonData => {
        var randomIds = uniqueRandomNumbers(NUM_WALLPAPERS, 0, jsonData.length);
        var walls = [];
        randomIds.forEach(randomId => {
          walls.push(jsonData[randomId]);
        });
        this.setState({
          isLoading: false,
          wallsJSON: [].concat(walls)
        });
      })
      .catch( error => console.log(`获取数据有误: ${error}`) );
  }
  isDoubleTap = (currentTouchTimeStamp, { x0, y0 }) => {
    const { X, Y, timeStamp } = this.prevTouchInfo;
    const dt = currentTouchTimeStamp - timeStamp;
    return (dt < DOUBLE_TAP_DELAY && distance(X, Y, x0, y0) < DOUBLE_TAP_RADIUS);
  }
  handleStartShouldSetPanResponder = (e, gestureState) => {
    return true;
  }
  handlePanResponderGrant = (e, gestureState) => {
    const currentTouchTimeStamp = Date.now();
    if(this.isDoubleTap(currentTouchTimeStamp, gestureState)) {
      this.saveCurrentWallpaperToCameraRoll();
    }
    this.prevTouchInfo = {
      X: gestureState.x0,
      Y: gestureState.y0,
      timeStamp: currentTouchTimeStamp
    };
  }
  handlePanResponderEnd = () => {
    console.log('手指离开屏幕啦');
  }
  onMomentumScrollEnd = (e, state, context) => {
    this.currentWallIndex = state.index;
  }
  saveCurrentWallpaperToCameraRoll = () => {
    this.setState({ isWaitingVisible: true });
    const { wallsJSON } = this.state;
    const currentWall = wallsJSON[this.currentWallIndex];
    const currentWallURL = `http://unsplash.it/${currentWall.width}/${currentWall.height}?image=${currentWall.id}`;
    console.log('this.currentWallIndex', this.currentWallIndex)
    CameraRoll.saveToCameraRoll(currentWallURL)
    .then((data) => {
      this.setState({ isWaitingVisible: false });
      AlertIOS.alert(
        '保存成功',
        '壁纸已保存到本地相册',
        [
          {text: '好哒!', onPress: () => console.log('OK Pressed!')}
        ]
      );
    })
    .catch((err) =>{
      console.log('Error saving to camera roll', err);
    });
  }
  componentWillMount() {
    this.imagePanResponder = PanResponder.create({
      onStartShouldSetPanResponder: this.handleStartShouldSetPanResponder,
      onPanResponderGrant: this.handlePanResponderGrant,
      onPanResponderRelease: this.handlePanResponderEnd,
      onPanResponderTerminate: this.handlePanResponderEnd
    });
  }
  async componentDidMount() {
    this.fetchWalletKSON();
  }
  renderLoadingScreen = () => {
    return (
      <View style={styles.loadingContainer}>
        <Text>正在加载数据...</Text>
      </View>
    );
  }
  renderResults = () => {
    const { wallsJSON, isWaitingVisible } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Swiper index={this.currentWallIndex} onMomentumScrollEnd={this.onMomentumScrollEnd}>
          {wallsJSON.map((wallpaper, index) => {
            return(
              <NetworkImage
                source={{ uri: `https://unsplash.it/${wallpaper.width}/${wallpaper.height}?image=${wallpaper.id}` }} 
                key={index}
                style={ styles.wallpaperImage }
                indicator={Progress.Circle}
                indicatorProps={{
                  color:'rgba(255, 255, 255, 0.8)',
                  size:50,
                  thickness:4
                }}
                {...this.imagePanResponder.panHandlers}
                >
                <Text style={styles.label}>Photo by</Text>
                <Text style={styles.label_author_name}>{wallpaper.author}</Text>
              </NetworkImage>
            );
          })}
        </Swiper>
        <Waiting width={width} height={height} isVisible={isWaitingVisible}/>
      </View>
    );
  }
  render() {
    const { isLoading } = this.state;
    return (
      <ViewShot style={{ flex: 1 }}  ref="viewShot" options={{ format: "jpg", quality: 0.9 }}>
        {
          isLoading ?
            this.renderLoadingScreen()
            :
            this.renderResults()
        }
      </ViewShot>
    )
  }
}
const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wallpaperImage: {
    flex: 1,
    width,
    height,
    backgroundColor: '#000'
  },
  label: {
    position:'absolute',
    color:'#fff',
    fontSize:13,
    backgroundColor:'#000',
    padding:5,
    paddingLeft:8,
    top:20,
    left:20
  },
  label_author_name: {
    position:'absolute',
    color:'#fff',
    fontSize:15,
    backgroundColor:'#000',
    padding:5,
    paddingLeft:8,
    top:52,
    left:20,
    fontWeight:'bold'
  }
});