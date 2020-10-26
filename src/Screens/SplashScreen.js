import React, { Component } from 'react';
import { View,ImageBackground,Image } from 'react-native';
import {Dimensions, PixelRatio} from 'react-native';

const widthPercentageToDP = widthPercent => {
  const screenWidth = Dimensions.get('window').width;
  // Convert string input to decimal number
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100);
};
const heightPercentageToDP = heightPercent => {
  const screenHeight = Dimensions.get('window').height;
  // Convert string input to decimal number
  const elemHeight = parseFloat(heightPercent);
return PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
};
export {
  widthPercentageToDP,
  heightPercentageToDP
};

export default class SplashScreen extends Component {
render(){
    return(
        <View style={Styles.Container}>
            <View style={{}}>
            <Image source={require('../components/Photos/image.png')} style={{margin:10,height:heightPercentageToDP('90%'),width:widthPercentageToDP('95%'), resizeMode:"contain"}}/>
        </View>
        
        <View style={Styles.Content}>
        <Image source={require('../components/Photos/tree.png')}/>
            </View>
        </View>
    );
}
}


const Styles  = {
    Container:{
        backgroundColor:'white',
        flex:2
    },
    Content:{
        justifyContent:'flex-end',
        flex:1,
        position:'relative',
        alignSelf:'center'
    }
}