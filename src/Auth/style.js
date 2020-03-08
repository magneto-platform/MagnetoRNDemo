import { StyleSheet, Dimensions, Platform} from 'react-native';

const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    scrollView: {
      width: '100%', 
      height: '100%', 
      position: 'absolute'
    },
    containerView: {
      height: '100%',
      width: '100%',
      backgroundColor: '#F2F4FC',
      alignItems: 'center',
    },
    TitleView: {
      marginTop: 32,
      width: '80%',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf:'center'
    },
    headerView:{
      width:'100%',
      height:88,
      backgroundColor:'#FAFDFF'
    },
    TextVerify:{
      fontSize: 17, 
      textAlign:'center' ,
      alignSelf:'center'
    },
    TimerText:{
      color:'#26313F',
      fontSize:14,
      textAlign:'center',
      marginTop:13
    },
    ResendText:{
      color:'#E5E5EA',
      textDecorationLine:'underline',
      marginTop:18
    },
    TextConfirm:{
      color:'#C7C7CC',
      fontWeight:'500'
    },
    confrimView:{
      backgroundColor: '#E5E5EA',
      borderRadius: 10,
      marginTop: 40,
      alignItems: 'center',
      height: 50,
      alignSelf: 'center',
      width:deviceWidth-32,
      justifyContent: 'center',
    },
    Error:{
      fontSize:14,
      color:'#FF3B30',
      textAlign:'center',
      marginTop:13
    }
});

export default styles;