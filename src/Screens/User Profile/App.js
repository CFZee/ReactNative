/*Example of RealM Database in React Native*/
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import Home from './Home';
import Register from './Register';
import ProfileEditPage from './ProfileEditPage';
import Profile from './Profile';
import Delete from './Delete'
 
const App = createStackNavigator({
  HomeScreen: {
    screen: Home,
    navigationOptions: {
      title: 'HomeScreen',
      headerStyle: { backgroundColor: '#3a59b7' },
      headerTintColor: '#ffffff',
    },
  },
  View: {
    screen: Profile,
    navigationOptions: {
      title: 'View User',
      headerStyle: { backgroundColor: '#3a59b7' },
      headerTintColor: '#ffffff',
    },
  },
  Update: {
    screen: ProfileEditPage,
    navigationOptions: {
      title: 'Update User',
      headerStyle: { backgroundColor: '#3a59b7' },
      headerTintColor: '#ffffff',
    },
  },
  Delete: {
    screen: Delete,
    navigationOptions: {
      title: 'Register User',
      headerStyle: { backgroundColor: '#3a59b7' },
      headerTintColor: '#ffffff',
    },
},
  Register: {
    screen: Register,
    navigationOptions: {
      title: 'Register User',
      headerStyle: { backgroundColor: '#3a59b7' },
      headerTintColor: '#ffffff',
    },
  },
});

export default createAppContainer(App);