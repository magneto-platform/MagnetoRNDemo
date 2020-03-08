import React, { Component } from 'react';
import {
  Platform,
  ScrollView,
  TextInput,
  Image,
  View,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  Modal,
  Animated
} from 'react-native';
import VerifyCode from '../Component/verifyCode';
import styles from './style';

export default class VerifyScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        modalVisible:false,
        digits_number:'',
        email_val:'khaledadel122@gmail.com',
        secret_val:'',
        Timer:120,
        digits:null,
        CodeStatus:null,
        modalVisible:true,
        CodeColor:'#00000030',
        TextColor:'#00000030'
    };
  }
  componentDidMount(){
    let UserEmail = this.state.email_val;
    let EmailHost = UserEmail.slice(-12)
    let EmailSecret = UserEmail.slice(0, 3)+'****'+EmailHost;
    this.setState({secret_val:EmailSecret});
    this.handle_counter();
  }
  handle_counter = () => {
    let Max = 5;
      let counter  = setInterval(() => {
        Max = Max - 1;
        if(Max >= 0){
          this.setState({Timer:Max,modalVisible:false});
        }else{
          clearInterval(counter);
        }
      }, 1000);
  }
  handle_confirm = (code) => {
    //***** set code state ********/
    this.setState({digits:code,TextColor:'#008BFF'});
    //********** error mode ********/
    // this.setState({CodeStatus: 0, CodeColor:'#FF3B30', TextColor:'#FF3B30'});
  }
  render() {
    let spinner;
    spinner = <TouchableOpacity style={{ marginTop: 300 }}>
                <ActivityIndicator size="large" color="#61ccf6" />
              </TouchableOpacity>;
    return (
      <View style={styles.containerView}>
        <ScrollView vertical style={styles.scrollView}>
          <View style={styles.headerView}>
            <Text style={[styles.TextVerify,{color:'#26313F',marginTop:52}]}>Verify Code</Text>
          </View>
          <View style={styles.TitleView}>
            <Text style={[styles.TextVerify,{color:'#636366'}]}>
              Please type OTP you received on email address : {this.state.secret_val}
            </Text>
          </View>
          <VerifyCode 
            MarginTop={40} 
            borderColor={this.state.CodeColor}
            TextColor={this.state.TextColor}
            onComplete={(DigitVal)=> this.handle_confirm(DigitVal) } 
          />
          {this.state.CodeStatus == 0 ?
          <Text style={styles.Error}>Error message</Text>
          :
          <Text style={styles.TimerText}>{this.state.Timer}s</Text>
          }
          <Text style={[styles.ResendText,styles.TextVerify,this.state.Timer == 0  ? {color:'#008BFF'} : null]}>Resend code</Text>
          <TouchableOpacity
            style={[styles.confrimView,this.state.digits ?{backgroundColor:'#008BFF'}: null]}>
            <Text style={[styles.TextVerify,styles.TextConfirm,this.state.digits ? {color:'#FFFFFF'}: null]}>Verify code</Text>
          </TouchableOpacity>
          <Modal
            animationType="fade"
            transparent={false}
            visible={this.state.modalVisible}
            transparent = {true}
            onRequestClose={() => {
            this.active(true);
            }}>
            {spinner}
          </Modal>
        </ScrollView>
      </View>
    );
  }
}