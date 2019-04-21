import React from 'react';
import {
  View,
  Text,
  Component,
  ActivityIndicator,
} from 'react-native';

export default class Waiting extends React.Component {
  render() {
    var { width, height, isVisible } = this.props;
    if ( isVisible ) {
      return(
        <View 
         style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: width,
          height: height,
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
         }}>
         <ActivityIndicator
            animating={true}
            color={'#fff'}
            size={'large'} 
            style={{margin: 15}} />
           <Text style={{color: '#fff'}}>正在保存，请稍后...</Text>
        </View> 
      );
    }
    return null;
  }
};