import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import LogoTitle from '../common/LogoTitle';
import { TextField } from 'react-native-material-textfield';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  container: {
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
  innerContainer:{
    flex: 1,
    width: '100%',
    marginTop: 24,
  },
   contentContainer: {
    padding: 8,
  },
  registerText: {
    marginTop: 40,
    alignItems: 'center'
  }
})
export default class RegisterScreen extends Component {

  constructor(props) {
    super(props);
    this.onFocus = this.onFocus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.onSubmitFirstName = this.onSubmitFirstName.bind(this);
    this.onSubmitLastName = this.onSubmitLastName.bind(this);
    this.onSubmitPhoneNumber = this.onSubmitPhoneNumber.bind(this);
    this.onSubmitEmail = this.onSubmitEmail.bind(this);
    this.onSubmitPassword = this.onSubmitPassword.bind(this);
    this.onAccessoryPress = this.onAccessoryPress.bind(this);

    this.firstnameRef = this.updateRef.bind(this, 'firstname');
    this.lastnameRef = this.updateRef.bind(this, 'lastname');
    this.phoneNumberRef = this.updateRef.bind(this, 'phone');
    this.emailRef = this.updateRef.bind(this, 'email');
    this.passwordRef = this.updateRef.bind(this, 'password');
    this.renderPasswordAccessory = this.renderPasswordAccessory.bind(this);

    this.state = {
      firstname: '',
      lastname: '',
      phone: '',
      email:'',
      password: '',
      secureTextEntry: true,
    };
  }

  static navigationOptions = {
    headerTitle: <LogoTitle />,
    headerStyle: {
      backgroundColor: '#FFAE00',
    },
    headerTintColor: '#fff'
  };

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
    ['firstname', 'lastname', 'phone', 'email', 'password']
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

  onSubmitFirstName() {
    this.lastname.focus();
  }

  onSubmitLastName() {
    this.phone.focus();
  }

  onSubmitPhoneNumber() {
    this.email.focus()
  }
  onSubmitEmail() {
    this.password.focus();
  }

  onSubmitPassword() {
    this.password.blur();
  }

  onSubmit() {
    let errors = {};

    ['firstname', 'lastname', 'phone' ,'email', 'password']
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

  renderPasswordAccessory() {
    let { secureTextEntry } = this.state;

    let name = secureTextEntry?
      'visibility':
      'visibility-off';

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

  updateRef(name, ref) {
    this[name] = ref;
  }
  signInButtonHandler = () => {
    this.props.navigation.navigate('LoginScreen')
  }
  render() {
    let { errors = {}, secureTextEntry, ...data } = this.state;
    let { firstname = 'name', lastname = 'house' } = data;

    let defaultEmail = `${'test'}@${'example'}.com`
      .replace(/\s+/g, '_')
      .toLowerCase();

    return (
      <View style={styles.container}>
      <ScrollView style={{flex:1, width: '90%'}}
          contentContainerStyle={styles.contentContainer}
          keyboardShouldPersistTaps='handled'
        >
          <View style={styles.innerContainer}>
            <TextField
              ref={this.firstnameRef}
              value={data.firstname}
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={this.onChangeText}
              onSubmitEditing={this.onSubmitFirstName}
              returnKeyType='next'
              label='First Name'
              error={errors.firstname}
            />

            <TextField
              ref={this.lastnameRef}
              value={data.lastname}
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={this.onChangeText}
              onSubmitEditing={this.onSubmitLastName}
              returnKeyType='next'
              label='Last Name'
              error={errors.lastname}
            />

            <TextField
              ref={this.phoneNumberRef}
              value={data.phone}
              onFocus={this.onFocus}
              onChangeText={this.onChangeText}
              onSubmitEditing={this.onSubmitPhoneNumber}
              returnKeyType='next'
              multiline={true}
              blurOnSubmit={true}
              label='Phone Number'
              title='Phone number must be 10 digits.'
            />

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
              title='Password should be minimum 6 characters'
              maxLength={30}
              characterRestriction={20}
              renderAccessory={this.renderPasswordAccessory}
            />
          </View>
          <TouchableOpacity  onPress={this.signInButtonHandler} style={styles.registerText}>
              <Text style={{fontSize: 12 , fontFamily: 'SFUIDisplay-Regular'}}> already have an account?
                <Text style={{fontSize: 12 , fontFamily: 'SFUIDisplay-Bold', color:'black'}}> SIGN IN </Text>
              </Text>
          </TouchableOpacity>
        </ScrollView>
        <TouchableOpacity style={styles.loginButton} onPress={this.registerButtonHanlder}>
          <Text style={styles.buttonText}> Continue </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
