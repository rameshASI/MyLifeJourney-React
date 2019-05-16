import React, {Component} from 'react';
import { View , Text , TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(241, 241, 241, 1.0)'
    },
    forgotPasswordButton: {
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
});

export default class ForgotPasswordScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: ''
        }
    }

    static navigationOptions = {
        headerTitle: <Text style={{fontFamily: 'SFUIDisplay-Regular' , fontSize: 18 ,color: 'white'}}>Forgot Password</Text>,
        headerStyle: {
          backgroundColor: '#FFAE00',
        },
        headerTintColor: '#fff',
    };

    forgotPasswordHandler = () => {
        console.log('Forgot Password Handler');
    }

    emailAddressHandler = (email) => {
        this.setState({email : email})
    }

    render(){
        return(
            <View style={style.container}>
                <View style={{flex: 0.2 , flexDirection: 'column'}}>
                     <View style={{backgroundColor: 'white' , marginTop: 10 , marginBottom: 10,height: 40 , flexDirection: 'row'}}>
                           <Text style={{textAlign: 'left' ,color: 'black' , padding: 10, fontFamily: 'SFUIDisplay-Regular' }}> Email Address</Text>
                           <TextInput
                                style={{height: 40,fontFamily: 'SFUIDisplay-Regular' , textAlign: 'center' }}
                                placeholder="Type Here"
                                onChangeText={this.emailAddressHandler}
                             />
                     </View>
                     <Text style={{color: 'black' , fontFamily: 'SFUIDisplay-Regular' , fontSize: 11 , textAlign: "center" , margin: 14}}> Please type the email you used in the signup process. An email will be sent with a new email for you to access. </Text>
                </View>
                <TouchableOpacity style={style.forgotPasswordButton} onPress={this.forgotPasswordHandler}>
                     <Text style={style.buttonText}> Send </Text>
                </TouchableOpacity>
            </View>
        );
    }
}