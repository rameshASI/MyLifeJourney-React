import React, {Component} from 'react';
import 
{ 
  View ,
  Text , 
  StyleSheet , 
  TouchableOpacity,
  Dimensions,
  Image
} from 'react-native';
import Swiper from 'react-native-swiper';
import FacebookButton from '../common/FacebookButton';
const { width } = Dimensions.get('window');

export default class HomeScreen extends Component {
  
    constructor() {
      super();
      this.state = {
        displayInfo : {}
      }
    }

    loginButtonHandler = () => {
      console.log('login button pressed')
      this.props.navigation.push('LoginScreen')
    }

    registerButtonHandler = () => {
      //RegisterScreen
      this.props.navigation.push('RegisterScreen')
      console.log('Register button pressed')
    }

    componentDidMount(){
      let that = this;
      let dataReleased = null;
      let xhrReleased = new XMLHttpRequest();
  
      xhrReleased.addEventListener("readystatechange", function(){
          if(this.readyState === 4 ) {
            let dataArray = JSON.parse(this.responseText).data;
            console.log(dataArray)
            let dataObj = {}
            for (let i = 0 ; i < dataArray.length ; i ++){
                let object = dataArray[i];
                if (object.key === "about"){
                  dataObj.about = object.description
                } else if (object.key === "circle_descr") {
                  dataObj.circle_descr = object.description
                } else if (object.key === "album_descr") {
                  dataObj.album_descr = object.description
                } else if (object.key === "trails_descr") {
                  dataObj.trails_descr = object.description
                } else if (object.key === "breadcrumb_descr") {
                  dataObj.breadcrumb_descr = object.description
                } else if (object.key === "mediapool_descr") {
                  dataObj.mediapool_descr = object.description
                }
            }
            console.log(dataObj)
            that.setState({
              displayInfo : dataObj
            })
            console.log("Welcome info : ", that.state.displayInfo)
          }
      })
      xhrReleased.open("GET" , "http://portal.mljdev.com/api/contents");
      xhrReleased.send(dataReleased);
    }

    render() {
      return (
        <View style={style.container}>
          <View style={{marginTop: 40}}>
            <Text style={style.baseText}>
              <Text style={style.titleText}> MY LIFE </Text>
              <Text style={{fontSize: 30 , fontFamily: 'SFUIDisplay-Heavy' }}> JOURNEY </Text>
            </Text>
          </View>
          <View style={{flex: 1, width: '100%' }}>
          <Swiper style={style.wrapper} horizontal={true}
             onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
             dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 6, height: 6, borderRadius: 4, marginLeft: 4, marginRight: 4, marginTop: 4, marginBottom: 4}} />}
             activeDot={<View style={{backgroundColor: '#000', width: 6, height: 6, borderRadius: 4, marginLeft: 4, marginRight: 4, marginTop: 4, marginBottom: 4}} />}
             >
              <View style={style.slide}>
                <Image 
                    style={style.image}
                    source={require('../images/welcome-logo.png')}
                  />
                <Text style={style.infoTitle}> Welcome </Text>
                <Text style={style.infoSubTitle}>{this.state.displayInfo.about}</Text>
              </View>
              <View style={style.slide}>
                <Image 
                    style={style.image}
                    source={require('../images/welcome-circles.png')}
                  />
               <Text style={style.infoTitle}> Circle </Text>
               <Text style={style.infoSubTitle}>{this.state.displayInfo.circle_descr}</Text>
              </View>
              <View style={style.slide}>
                <Image 
                    style={style.image}
                    source={require('../images/welcome-albums.png')}
                  />
                <Text style={style.infoTitle}> Album </Text>
                <Text style={style.infoSubTitle}>{this.state.displayInfo.album_descr}</Text>
              </View>
              <View style={style.slide}>
                <Image 
                    style={style.image}
                    source={require('../images/welcome-trails.png')}
                  />
                <Text style={style.infoTitle}> Trails </Text>
                <Text style={style.infoSubTitle}>{this.state.displayInfo.trails_descr}</Text>
              </View>
              <View style={style.slide}>
                <Image 
                    style={style.image}
                    source={require('../images/welcome-breadcrumbs.png')}
                  />
                <Text style={style.infoTitle}> Breadcrumb </Text>
                <Text style={style.infoSubTitle}>{this.state.displayInfo.breadcrumb_descr}</Text>
              </View>
              <View style={style.slide}>
               <Image 
                    style={style.image}
                    source={require('../images/welcome-mediapool.png')}
                  />
                <Text style={style.infoTitle}> Media Pool </Text>
                <Text style={style.infoSubTitle}>{this.state.displayInfo.mediapool_descr}</Text>
              </View>
          </Swiper>
          </View>
          <FacebookButton/>
          <View style={{flexDirection: "row"}}>
            <TouchableOpacity style={style.registerButton} onPress={this.registerButtonHandler}>
              <Text style={style.buttonText}> Register </Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.loginButton} onPress={this.loginButtonHandler}>
              <Text style={style.buttonText}> Sign in </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
}

const style = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  baseText : {
    color: 'black',
  },
  titleText: {
    fontSize: 30,
    fontFamily: "SFUIDisplay-Regular"
  },
  registerButton: {
    width: '50%',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 181, 30, 1.0)',
  },
  loginButton: {
    width: '50%',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 152, 25, 1.0)'
  },
  facebookButton: {
    backgroundColor: 'blue',
    alignItems: 'center',
    marginBottom : 25,
    width: '50%'
  },
  buttonText: {
    color: 'white',
    padding: 15,
    fontSize: 15,
    fontFamily: "SFUIDisplay-Regular"
  },
  wrapper: {
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoTitle: {
    color : 'black',
    fontSize: 30,
    marginTop: 20,
    margin: 10,
    textAlign: 'center',
    fontFamily: "SFUIDisplay-Bold"
  },
  infoSubTitle: {
    color : 'black',
    fontSize: 14,
    height: 36,
    marginTop : 0,
    marginRight: 20,
    marginLeft: 20,
    textAlign: 'center',
    fontFamily: "SFUIDisplay-Regular"
  },
  image : {
    width: 225,
    height: 225,
  },
  FacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(65, 93, 174, 1.0)',
    height: 40,
    width: '75%',
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