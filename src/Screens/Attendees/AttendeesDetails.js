import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container, Card, Header, Content, Button, Left, Body, Right, List,Thumbnail,CardItem} from 'native-base';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions, createDrawerNavigator } from 'react-navigation';
import fontelloConfig from '../../../src/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);
import LinearGradient from 'react-native-linear-gradient';
import themes from '../../components/themes/Variables.js';
import {Dimensions, PixelRatio} from 'react-native';


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



export default class AttendeesDetails extends Component{
  render () {
    const { goBack } = this.props.navigation;
    const { navigation } = this.props;  
    const user_name = navigation.getParam('userName');  
    const user_designation = navigation.getParam('userDesignation');  
    const user_organization = navigation.getParam('userOrganization');  

    return(
      <Container style={styles.Container,{backgroundColor:'#EEEEEE'}}>
            <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 1}} colors={['#88BE49','#447A47']}>
      <Header  transparent androidStatusBarColor='transparent'
        style={{height:250}}>
          <Left style={{flex:1}}>
            <Button transparent onPress={() => goBack()}
             style={{flex:1,paddingBottom:35,alignContent:'center',justifyContent:'center'}}>
            <Icon name='back-arrow' style={{color:'white',fontSize:15,marginBottom:100}}/>
            </Button>
          </Left>
          <Body style={{flex:1,marginBottom:-40}}>
          </Body>
          <Right style={{flex:1}} />
      </Header>
      </LinearGradient>
      <Content>
      <CardItem style={styles.shadow1}>
       <View>
              <View>
            <Text style={{fontWeight:'bold',fontSize:16,color: themes.colors.INIT_COLOR_Blue,textAlign:'left',paddingLeft:15,paddingBottom:5,fontFamily: themes.fonts.INIT_FONT_Family}}>
             {user_name}
                </Text>
                </View>
                <View>
                  <Text style={{width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_XL,textAlign:'left',paddingLeft:15,paddingBottom:5,color: themes.colors.INIT_COLOR_Grey,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  {user_designation}
                </Text>
                </View>
                <View>
                  <Text style={{width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_XL,textAlign:'left',paddingLeft:15,paddingBottom:5,color: themes.colors.INIT_COLOR_Grey,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  {user_organization}
                </Text>
                </View>
                </View>
        </CardItem>
       </Content>
      </Container>
    );
  }
}

const styles = ({
    container: {
    flex: 1,
    backgroundColor: '#EEEEEE'
    },
    shadow1: {
    marginRight: 15,
    marginLeft: 15,
    marginTop: 40,
    paddingTop: 10,
    paddingBottom: 15,
    paddingLeft:10,
    paddingRight:10,
    backgroundColor: '#fff',
    borderColor:'#fff',
    borderWidth: 1,
    flex: 1,
    padding: 19,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 10,
    elevation: 10,
    shadowOffset: { width: 4,height: 4},
    shadowColor: "grey",
    shadowOpacity: 1.0,
    shadowRadius: 5
    },
    shadow2: {
    marginRight: 15,
    marginLeft: 15,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#fff',
    borderColor:'#fff',
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 100,
    elevation: 10,
    shadowOffset: { width:0,height: 8},
    shadowColor: "grey",
    shadowOpacity: 50,
    shadowRadius: 50
    }
});