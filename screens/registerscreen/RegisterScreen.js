import React, {Component} from 'react';
import { View , Text,StyleSheet, TouchableOpacity} from 'react-native';
import LogoTitle from '../common/LogoTitle';

const style = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  loginButton: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 181, 30, 1.0)'
  },
  buttonText: {
    color: 'white',
    padding: 15,
    fontSize: 15,
    fontFamily: "SFUIDisplay-Regular"
  }
})
export default class RegisterScreen extends Component {

  static navigationOptions = {
    headerTitle: <LogoTitle/>,
    headerStyle: {
      backgroundColor: '#FFAE00',
    },
    headerTintColor: '#fff'
  };

  registerButtonHanlder = () => {

  }
    render() {
      return (
        <View style={style.container}>
          <Text> Your Register screen</Text>
          <TouchableOpacity style={style.loginButton} onPress={this.registerButtonHanlder}>
              <Text style={style.buttonText}> Continue </Text>
          </TouchableOpacity>
        </View>
      );
    }
}
