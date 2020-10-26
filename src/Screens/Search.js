import React, { Component } from 'react';
import { Header,Left,Right,Body,Container } from 'native-base';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../src/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions, PixelRatio} from 'react-native';
import themes from '../components/themes/Variables.js';


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

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <Container style={styles.container}>
      <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 1}} colors={['#88BE49','#447A47']}>
      <Header transparent androidStatusBarColor='transparent' style={{height:100}}>
          <Left style={{flex:1}} >
            <Icon name='back-arrow' style={{color: themes.colors.INIT_COLOR_White,fontSize: themes.fonts.INIT_FONT_SIZE_XL,paddingLeft:5}} onPress={() => this.props.navigation.push('Home')}/>
          </Left>  
          <Body style={{flex:1,marginLeft:-160}}>
          <Input 
          containerStyle={{ width:widthPercentageToDP('81%') }}
          inputContainerStyle={{
              borderWidth:0,
              borderColor:'transparent',
              borderRadius: 5,
              alignSelf:'center'
            }}
          inputStyle={{color: 'black',backgroundColor:'white',padding:-5,fontFamily: themes.fonts.INIT_FONT_Family}}
          onChangeText={(text) => this.setState({ text })}
         placeholder=' Search '
         fontSize={10}
         leftIcon={
          <Icon
            name='search'
            size={15}
            style={{color:themes.colors.INIT_COLOR_Grey,fontFamily: themes.fonts.INIT_FONT_Family,backgroundColor:'white',paddingTop:12,paddingLeft:10,height:40,borderRadius:10,width:50,marginRight:-20}}
          />}
          rightIcon={
            <Icon
              name='cancel-1'
              size={15}
              color='#9B9C9F'
              style={{backgroundColor:'white',paddingTop:12,paddingLeft:25,height:40,borderRadius:10,width:50,marginLeft:-25}}

            />
        }/>
          </Body>
          <Right style={{flex:1,alignSelf:'center'}}>
            <Text style={{color: themes.colors.INIT_COLOR_White,paddingRight:5,fontSize: themes.fonts.INIT_FONT_SIZE_L}} > Cancel</Text>
            </Right>
          </Header>
          </LinearGradient>
        <View style={styles.textDisplay}>
          <Text>{this.state.text}</Text>
        </View>
        </Container>    
        );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  main: {
    height: 125,
    backgroundColor: "#88BE49"
  },
  textBox: {
    margin: 25,
    padding: 10,
    color: "white",
    fontFamily: "Montserrat"
  },
  textDisplay: {
    padding: 15,
    backgroundColor: "white",
  }
})