import React, { Component  } from 'react';
import { Container, Header,Right, Title, Content, Button, Left, Body, Text } from "native-base";
import { View, Image } from 'react-native';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../src/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions, PixelRatio} from 'react-native';
import  themes from '../components/themes/Variables.js';


const widthPercentageToDP = widthPercent => {
  const screenWidth = Dimensions.get('window').width;
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100);
};
const heightPercentageToDP = heightPercent => {
  const screenHeight = Dimensions.get('window').height;
  const elemHeight = parseFloat(heightPercent);
return PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
};
export {
  widthPercentageToDP,
  heightPercentageToDP
};


export default class AboutGCW extends Component {
    render(){
      const {goBack} = this.props.navigation;
        return(
            <Container style={styles.container,{backgroundColor:'white'}}>
      <LinearGradient start={{x: 0, y: 2}} end={{x: 1, y: 2}} colors={['#88BE49','#447A47']}>
      <Header span transparent androidStatusBarColor='transparent'
        style={{height:130}}>
          <Left style={{flex:1}}>
            <Button transparent style={{flex:1,paddingBottom:15,alignContent:'center',justifyContent:'center'}}onPress={() => goBack()} >
            <Icon name='back-arrow' style={styles.Tp}/>
            </Button>
          </Left>
          <Body style={{flex:1}}>
          <Title style={{flex:0,alignSelf:'center',paddingBottom:25,fontSize:13,fontFamily:themes.fonts.INIT_FONT_Family,color:themes.colors.INIT_COLOR_White}}>About IGCW</Title>
          </Body>
          <Right style={{flex:1}} />
        </Header>
        </LinearGradient>
        <Content>
          <View style={{width:widthPercentageToDP('100%'),height:heightPercentageToDP('80%')}}>
          <View style={{position:"relative"}}>
          <View style={{padding:15}}>
          <Text style={{fontSize:10,color:themes.colors.INIT_COLOR_Blue,fontFamily:themes.fonts.INIT_FONT_Family}}>Industrail Green Chemistry Foundation {'\n'}(IGCW) </Text>
          </View>
          <View style={{position:"relative",paddingBottom:8,width:widthPercentageToDP('61%')}}>
          <Text style={{paddingLeft:15,fontSize:9,color:themes.colors.INIT_COLOR_Grey,fontFamily:themes.fonts.INIT_FONT_Family}}>Industrial Green Chemistry World (IGCW) is a series of biennial Conventions, held in Mumbai, since 2009, up to 2025 commitment. </Text>
          </View>
          <View style={{position:"relative",paddingBottom:8,width:widthPercentageToDP('60%')}}>
          <Text style={{paddingLeft:15,fontSize:9,color:themes.colors.INIT_COLOR_Grey,fontFamily:themes.fonts.INIT_FONT_Family}}>The IGCW Convention is globally recognized as first-of-its-kind "Green Industrial Chemistry" platform the focusses on the Implementation and Industrialisation of GC&E based Processes, practices and products, and thus impact their triple-bottom-line benefits of People, Planet and profit.
 </Text>
          </View>
          </View>
          <View style={{position:"relative",width:widthPercentageToDP('61%')}}>
          <Text style={{paddingLeft:15,fontSize:9,color:themes.colors.INIT_COLOR_Grey,fontFamily:themes.fonts.INIT_FONT_Family}}>The IGCW Convention & Ecosystem is designed to facilitate diverse stakeholders of Chemical Industry, including Govt. bodies, Environment regulatory bodies, Solution and Technology Providers, Academia and Research Institutes, etc. for collectively accelerating the implementation of GC&E practice in India. </Text>
          </View>
          <View style={{position:'absolute'}}>
          <View style={{flexDirection:"column-reverse",justifyContent:'flex-start',alignSelf:'auto'}}>
          <View style={{position:'absolute',flex:1,}}>
          <Image source={require('../components/Photos/IGCW2019LOGO.jpg')} style={{marginLeft:100,width:widthPercentageToDP('20%'),height:heightPercentageToDP('50%'),resizeMode:'contain'}}/>
            </View>
            <View style={{flex:1}}>
        <Image source={require('../components/Photos/tb.png')} style={{height:heightPercentageToDP('80%'),width:widthPercentageToDP('100%')}}/>
        </View>
        </View>
        </View>
        </View>
        
            </Content>
            </Container>

        );
    }
}

const styles = ({
    container: {
      backgroundColor: 'white',
      justifyContent:'flex-start'
    },
    Tp:{
      color:themes.colors.INIT_COLOR_White,
    }
})