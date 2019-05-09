import React from 'react';
import { Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default class FacebookButton extends React.Component {
    render() {
      return (
        <TouchableOpacity style={style.FacebookStyle} activeOpacity={0.5}>
             <Image
                 source={require('../images/facebook/facebook-icon.png')}
                 style={style.ImageIconStyle}
             />
             <Text style={style.TextStyle}> Sign in with facebook </Text>  
        </TouchableOpacity>
      );
    }
}

const style = StyleSheet.create({
    FacebookStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'rgba(65, 93, 174, 1.0)',
      height: 40,
      width: '90%',
      borderRadius: 5,
      margin: 10,
      marginBottom: 50
    },
    ImageIconStyle: {
        marginLeft: 40,
        height: 20,
        width: 20
    },
    TextStyle: {
        color: '#fff',
        textAlign: 'center',
        marginLeft: 12,
        fontSize: 16,
        fontFamily: "SFUIDisplay-Regular"
    },
  })