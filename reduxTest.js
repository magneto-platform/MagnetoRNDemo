
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text
} from 'react-native';
import {connect}  from 'react-redux';
import * as changeCount  from './redux/actions/counts';
import {bindActionCreators}  from 'redux';


class  ReduxCount extends React.Component{    
  decrementCount() {
    let { count, actions } = this.props;
    count--;
    actions.changeCount(count);
    console.log('counter redux updated: '+JSON.stringify(count));
  }
  incrementCount() {
    let { count, actions } = this.props;
    count++;
    actions.changeCount(count);
    console.log('counter redux updated: '+JSON.stringify(count));
  }
  render() {
    const { count } = this.props;
    return (
      <View styles={styles.container}>
          <View style={{height:100}}>
              <Text style={{marginTop:16,fontSize:24,color:'red',alignSelf:'center'}}>
                  khaled
              </Text>
          </View>
        <Button
          title="increment"
          onPress={() => this.incrementCount()}
        />
        <Text style={{marginTop:16,fontSize:24,color:'red',alignSelf:'center'}}>{count}</Text>
        <Button
          title="decrement"
          onPress={() => this.decrementCount()}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});


const ActionCreators = Object.assign(
    {},
    changeCount,
);
const mapStateToProps = state => ({
  count: state.count.count,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReduxCount)