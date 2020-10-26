import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Content, ListItem, List, Title, Text } from 'native-base';
import { StyleSheet,View } from 'react-native';
import { createAppContainer, StackActions ,createBottomTabNavigator} from 'react-navigation';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../src/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions, PixelRatio} from 'react-native';
import themes from '../components/themes/Variables.js';
import Search from "./Search";
import Profile from './Profile';
import Favorites from './Favorites';
import Speakers from './Speakers';
import Floorplan1 from './FloorPlan/Floorplan1.js';
import FloorPlan3 from './FloorPlan/FloorPlan3.js';

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

class Attendees extends Component {
  render() {
    return (
      <Container style ={styles.container,{backgroundColor:'#EEEEEE'}}>
              <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#88BE49','#447A47']} style={styles.LinearGradient}>
              <Header span transparent androidStatusBarColor='transparent'
              style={{ height: 100 } }> 
             <Left style={{flex:1,alignSelf:'center'}}>
                  <Button transparent style={{width:widthPercentageToDP('20%')}} onPress={() => this.props.navigation.dispatch(StackActions.popToTop())}>               
                       <Icon name='back-arrow' style={{color:themes.colors.INIT_COLOR_White,fontSize: themes.fonts.INIT_FONT_SIZE_IconSize_M}}/>
                      </Button>
              </Left>
              <Body style={{flex:1,alignSelf:'center',paddingTop:20,marginLeft:-40}}>   
               <Text style={{width:widthPercentageToDP('80%'),color:themes.colors.INIT_COLOR_White,fontSize: themes.fonts.INIT_FONT_SIZE_XL,fontFamily: themes.fonts.INIT_FONT_Family}}> 
               Attendees
               </Text>
              </Body>
              <Right style={{flex:1,alignSelf:'center'}} />
              </Header>
          </LinearGradient>   
      <Content>
      <View style={{marginTop:25,marginBottom:10}}>
                          <List style={{marginRight:15,marginLeft:15,backgroundColor:'#fff',borderRadius:70,elevation:7,shadowOffset: { width: 4, height: 4 },shadowColor: "black",shadowOpacity: 1.0,shadowRadius: 5}}>
                                  <Button transparent style={{alignSelf:'center',position:'relative'}}onPress={() => {this.props.navigation.navigate('all_attendees')}}>
                                    <Left />
                                    <Body style={{flex:1,marginRight:-100,alignSelf:'center'}}>
                                  <Text style={{width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_L,color:themes.colors.INIT_COLOR_Blue,fontFamily: themes.fonts.INIT_FONT_Family}}>See All Attendees</Text> 
                                  </Body>
                                  <Right style={{marginRight:20,flex:1}}>
                                  <Icon name='forward-arrow' style={{color:themes.colors.INIT_COLOR_Green,fontSize: 12}}/> 
                                  </Right>
                                  </Button>
                              </List>
                          </View>
                          <View style={{marginTop:10,marginBottom:10}}>
                          <List style={{marginRight:15,marginLeft:15,backgroundColor:'#fff',elevation:7,shadowOffset: { width: 4, height: 4 },shadowColor: "black",shadowOpacity: 1.0,shadowRadius: 5}}>
                                  <Button transparent style={{alignSelf:'auto',position:'relative'}}onPress={() => {this.props.navigation.navigate('Academia')}}>
                                    <Left style={{flex:1,marginLeft:15}}>
                                    <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,color:themes.colors.INIT_COLOR_Blue,fontFamily: themes.fonts.INIT_FONT_Family,paddingHorizontal:5}}>Academia</Text> 
                                    </Left>
                                    <Right style={{marginRight:20,flex:1}}>
                                  <Icon name='forward-arrow' style={{color:themes.colors.INIT_COLOR_Green,fontSize: 12}}/> 
                                  </Right>
                                  </Button>
                              </List>
                          </View>
        <View style={{marginTop:10,marginBottom:10}}>
        <List style={{marginRight:15,marginLeft:15,backgroundColor:'#fff',elevation:7,shadowOffset: { width: 4, height: 4 },shadowColor: "black",shadowOpacity: 1.0,shadowRadius: 5}}>
                                <Button transparent style={{alignSelf:'auto',position:'relative'}}onPress={() => {this.props.navigation.navigate('Government')}}>
                                  <Left style={{flex:1,marginLeft:15}}>
                                    <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,color:themes.colors.INIT_COLOR_Blue,fontFamily: themes.fonts.INIT_FONT_Family,paddingHorizontal:5}}>Government</Text> 
                                    </Left>
                                    <Right style={{marginRight:20,flex:1}}>
                                  <Icon name='forward-arrow' style={{color:themes.colors.INIT_COLOR_Green,fontSize: 12}}/> 
                                  </Right>
                                  </Button>
                              </List>
                          </View>
                           <View style={{marginTop:10,marginBottom:10}}>
                           <List style={{marginRight:15,marginLeft:15,backgroundColor:'#fff',elevation:7,shadowOffset: { width: 4, height: 4 },shadowColor: "black",shadowOpacity: 1.0,shadowRadius: 5}}>
                              <Button transparent style={{alignSelf:'auto',position:'relative'}}onPress={() => {this.props.navigation.navigate('Industry')}}>
                                  <Left style={{flex:1,marginLeft:15}}>
                                    <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,color:themes.colors.INIT_COLOR_Blue,fontFamily: themes.fonts.INIT_FONT_Family,paddingHorizontal:5}}>Industry</Text> 
                                    </Left>
                                    <Right style={{marginRight:20,flex:1}}>
                                  <Icon name='forward-arrow' style={{color:themes.colors.INIT_COLOR_Green,fontSize: 12}}/> 
                                  </Right>
                                  </Button>
                              </List>
                          </View>
                           <View style={{marginTop:10,marginBottom:10}}>
                           <List style={{marginRight:15,marginLeft:15,backgroundColor:'#fff',elevation:7,shadowOffset: { width: 4, height: 4 },shadowColor: "black",shadowOpacity: 1.0,shadowRadius: 5}}>
                          <Button transparent style={{alignSelf:'auto',position:'relative'}}onPress={() => {this.props.navigation.navigate('Student')}}>
                                    <Left style={{flex:1,marginLeft:15}}>
                                    <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,color:themes.colors.INIT_COLOR_Blue,fontFamily: themes.fonts.INIT_FONT_Family,paddingHorizontal:5}}>Student</Text> 
                                    </Left>
                                    <Right style={{marginRight:20,flex:1}}>
                                  <Icon name='forward-arrow' style={{color:themes.colors.INIT_COLOR_Green,fontSize: 12}}/> 
                                  </Right>
                                  </Button>
                              </List>
                          </View>
                          <View style={{marginTop:10,marginBottom:20}}>
                          <List style={{marginRight:15,marginLeft:15,backgroundColor:'#fff',elevation:7,shadowOffset: { width: 4, height: 4 },shadowColor: "black",shadowOpacity: 1.0,shadowRadius: 5}}>
                          <Button transparent style={{alignSelf:'auto',position:'relative'}}onPress={() => {this.props.navigation.navigate('Others')}}>
                                  <Left style={{flex:1,marginLeft:15}}>
                                    <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,color:themes.colors.INIT_COLOR_Blue,fontFamily: themes.fonts.INIT_FONT_Family,paddingHorizontal:5}}>Others</Text> 
                                    </Left>
                                    <Right style={{marginRight:20,flex:1}}>
                                  <Icon name='forward-arrow' style={{color:themes.colors.INIT_COLOR_Green,fontSize: 12}}/> 
                                  </Right>
                                  </Button>
                              </List>
                          </View>
          </Content>
    </Container>
  );
}
}
const TabNavigator = createBottomTabNavigator(  
  {  
    
    Home:{  
      screen:Attendees,  
      navigationOptions:{ 
        tabBarLabel:'Home',  
        tabBarIcon:({tintColor})=>(  
            tintColor=themes.colors.INIT_COLOR_Green,
            <Icon name="store" color={tintColor} style={{paddingTop:8}}  size={22}/>  
        )  
      }  
    },  
    Map:{  
        screen:FloorPlan3,  
        navigationOptions:{  
            tabBarLabel:'FloorPlan',  
          tabBarIcon:({tintColor})=>(  
            tintColor=themes.colors.INIT_COLOR_Green,
              <Icon name="map" color={tintColor} style={{paddingTop:8}} size={22}/>  
          )  
        }  
      },  
    Profile: {  
      screen:Profile,  
      navigationOptions:{  
        tabBarLabel:'Profile',  
        tabBarIcon:({tintColor})=>(  
          tintColor=themes.colors.INIT_COLOR_Green,
          <Icon name="iconfinder_39_2529953" color={tintColor} style={{paddingTop:8}} size={22}/>  
        )  
      }  
    },  
    Text:{  
        screen:Speakers,  
        navigationOptions:{  
            tabBarLabel:'Speakers',  
          tabBarIcon:({tintColor})=>(  
            tintColor=themes.colors.INIT_COLOR_Green,
              <Icon name="speech-bubble" color={tintColor} style={{paddingTop:8}} size={22}/>  
          )  
        }  
      },  
    Search:{  
        screen:Search,  
        navigationOptions:{  
        tabBarLabel:'Search',  
          tabBarIcon:({})=>(  
            tintColor=themes.colors.INIT_COLOR_Green,
              <Icon name="search" color={tintColor} style={{opacity:0.8}} style={{paddingTop:8}} size={22}/>  
          )  
        }  
      },  
  },  
  {  
    initialRouteName: "Home"  
  },  
  
);  

export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D5D6D6',
      },
      contentContainer: {
        paddingVertical: 20
      },

   title: {
    fontSize: 15,
    color:'#fff' ,
    alignSelf: 'center', 
    textAlign: 'center',
    justifyContent: 'center'
    },
  element: {
    flex: 1,
    paddingTop: 5,
    paddingBottom:5,
    paddingLeft:5,
    fontSize: 12,
    color:themes.colors.INIT_COLOR_Blue ,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.15,
  }
});