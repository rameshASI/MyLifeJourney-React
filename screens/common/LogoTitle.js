
import React from 'react';
import { Text } from 'react-native';

export default class LogoTitle extends React.Component {
    render() {
      return (
           <Text style={{color: 'white' , fontSize: 18 , fontFamily: 'SFUIDisplay-Regular'}}> MY LIFE 
              <Text style={{color: 'white' , fontFamily: 'SFUIDisplay-Bold',fontSize: 18}}> JOURNEY </Text> 
           </Text>      
      );
    }
}

