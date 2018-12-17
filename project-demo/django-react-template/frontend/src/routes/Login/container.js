import React, { Component }  from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Actions from './actions';
import './style.css';

class LoginApp extends Component{
  handleSubmit=(e)=>{
    e.preventDefault();
    let data = "username="+ encodeURIComponent(this.refs.name.value)+"&password="+ encodeURIComponent(this.refs.passwd.value);
    this.props.dispatch(Actions.authLogin(data));
  }
  componentDidMount(){
    document.body.className="signin";
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.userInfo.auth){
      let {location} = this.props;
      if(location.state && location.state.nextPathname){
        this.props.router.replace(location.state.nextPathname);
      }else{
        window.location = "/";
      }
    }
  }
  componentWillUnmount(){
    document.body.className="";
  }
  render(){
    return(
      <section>
        <div className="panel panel-signin">
          <div className="panel-body">
            <div className="logo text-center">
              <h2 style={{color: "#1FB5AD"}}>小农大筹</h2>
            </div>
            <h4 className="text-center mb5" style={{color: "#1FB5AD"}}>Agriculture</h4>
            <div style={{marginBottom: "30px"}}></div>
            <form onSubmit={this.handleSubmit}>
              <div className="input-group mb15">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-user"></i>
                </span>
                <input type="text" className="form-control" placeholder="用户名" ref="name"></input>
              </div>
              <div className="input-group mb15">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-lock"></i>
                </span>
                <input type="password" className="form-control" placeholder="密码" ref="passwd"></input>
              </div>
              <div className="clearfix">
                <button type="submit" className="btn btn-primary btn-block">
                  登录
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

function mapStateToProps(state) {
  const { loginReducer } = state;
  const { userInfo } = loginReducer;
  return { userInfo }
}

export default withRouter(connect(mapStateToProps)(LoginApp))
