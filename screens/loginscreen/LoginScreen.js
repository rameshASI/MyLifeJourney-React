import React, {Component} from 'react';
import { View , Text , TouchableOpacity, StyleSheet } from 'react-native';
import LogoTitle from '../common/LogoTitle';
import FacebookButton from '../common/FacebookButton';
import { TextField } from 'react-native-material-textfield';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const style = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(241, 241, 241, 1.0)'
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
  },
  inputContainer: {
    flex: 1,
    width: '85%',
    marginTop: 24,
  },
  buttonForgotPassword: {
    marginTop: 40,
    alignItems: 'center'
  },
  registerText: {
    marginTop: 40,
    alignItems: 'center'
  },
})
class LoginScreen extends Component {

  constructor(props){
    super(props)
    this.onFocus = this.onFocus.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.onSubmitEmail = this.onSubmitEmail.bind(this);
    this.onSubmitPassword = this.onSubmitPassword.bind(this);
    this.onAccessoryPress = this.onAccessoryPress.bind(this);

    this.emailRef = this.updateRef.bind(this, 'email');
    this.passwordRef = this.updateRef.bind(this, 'password');

    this.renderPasswordAccessory = this.renderPasswordAccessory.bind(this);

    this.state = {
      secureTextEntry: true
    }
  }
  
  static navigationOptions = {
    headerTitle: <LogoTitle/>,
    headerStyle: {
      backgroundColor: '#FFAE00',
    },
    headerTintColor: '#fff'
  };

  loginButtonHandler = () => {

  }

  onFocus() {
    let { errors = {} } = this.state;

    for (let name in errors) {
      let ref = this[name];

      if (ref && ref.isFocused()) {
        delete errors[name];
      }
    }

    this.setState({ errors });
  }
  onChangeText(text) {
    ['email', 'password']
      .map((name) => ({ name, ref: this[name] }))
      .forEach(({ name, ref }) => {
        if (ref.isFocused()) {
          this.setState({ [name]: text });
        }
      });
  }
  onAccessoryPress() {
    this.setState(({ secureTextEntry }) => ({ secureTextEntry: !secureTextEntry }));
  }

  onSubmitEmail() {
    this.password.focus();
  }

  onSubmitPassword() {
    this.password.blur();
  }
  onSubmit() {
    let errors = {};
    ['email', 'password']
      .forEach((name) => {
        let value = this[name].value();

        if (!value) {
          errors[name] = 'Should not be empty';
        } else {
          if ('password' === name && value.length < 6) {
            errors[name] = 'Too short';
          }
        }
      });

    this.setState({ errors });
  }
  updateRef(name, ref) {
    this[name] = ref;
  }
  renderPasswordAccessory() {

    let name = this.state.secureTextEntry ? 'visibility': 'visibility-off';

    return (
      <MaterialIcon
        size={24}
        name={name}
        color={TextField.defaultProps.baseColor}
        onPress={this.onAccessoryPress}
        suppressHighlighting
      />
    );
  }

  forgotPasswordHandler = () => {
    console.log('Forgot password screen handler')
    this.props.navigation.push('ForgotPasswordScreen')
  }

  registerButtonHandler = () => {
    console.log('Register button handler')
    this.props.navigation.navigate('RegisterScreen')
  }

  render() {
    let { errors = {}, secureTextEntry, ...data } = this.state;

    let defaultEmail = `${'test'}@${'example'}.com`
    .replace(/\s+/g, '_')
    .toLowerCase();

      return (
        <View style={style.container}>
         <View style={style.inputContainer}>
           <TextField 
              ref={this.emailRef}
              value={data.email}
              defaultValue={defaultEmail}
              keyboardType='email-address'
              autoCapitalize='none'
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={this.onChangeText}
              onSubmitEditing={this.onSubmitEmail}
              returnKeyType='next'
              label='Email Address'
              error={errors.email}
            />  
             <TextField
              ref={this.passwordRef}
              value={data.password}
              secureTextEntry={secureTextEntry}
              autoCapitalize='none'
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              clearTextOnFocus={true}
              onFocus={this.onFocus}
              onChangeText={this.onChangeText}
              onSubmitEditing={this.onSubmitPassword}
              returnKeyType='done'
              label='Password'
              error={errors.password}
              title='Password should have minimum six character'
              maxLength={30}
              characterRestriction={20}
              renderAccessory={this.renderPasswordAccessory}
            />
            <TouchableOpacity  onPress={this.forgotPasswordHandler} style={style.buttonForgotPassword}>
               <Text style={{fontSize: 12 , fontFamily: 'SFUIDisplay-Regular'}}> forgot your password? </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={this.registerButtonHandler} style={style.registerText}>
              <Text style={{fontSize: 12 , fontFamily: 'SFUIDisplay-Regular'}}> Don't have an account?
                <Text style={{fontSize: 12 , fontFamily: 'SFUIDisplay-Bold', color:'black'}}> REGISTER </Text>
              </Text>
            </TouchableOpacity>
            <View style={{marginTop: 50 , flex:1 , alignItems: "center"}}> 
                <FacebookButton/>
            </View>
          </View>
          <TouchableOpacity style={style.loginButton} onPress={this.loginButtonHandler}>
              <Text style={style.buttonText}> Sign in </Text>
          </TouchableOpacity>
        </View>
      );
    }
}

export default LoginScreen