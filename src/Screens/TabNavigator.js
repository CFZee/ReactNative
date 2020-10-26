import React from 'react';  
import {StyleSheet, Text, View,Button} from 'react-native';  
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Profile from './Profile'
import Search from "./Search";
import Dashboard from './Dashboard'
import Speakers from './Speakers';
import Favorites from './Favorites';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../src/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);
import  themes from '../components/themes/Variables.js';



const TabNavigator = createBottomTabNavigator(  
      {  
        
        Home:{  
          screen:Favorites,  
          navigationOptions:{ 
            tabBarLabel:'Home',  
            tabBarIcon:({tintColor})=>(  
                tintColor=themes.colors.INIT_COLOR_Green,
                <Icon name="store" color={tintColor} style={{paddingTop:8}}  size={22}/>  
            )  
          }  
        },  
        Map:{  
            screen:Favorites,  
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