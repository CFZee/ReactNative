import React, { Component } from 'react';
import { CardItem, Container, Header, Left, Body, Right, Button, Content, Text } from 'native-base';
import { View, FlatList, TouchableHighlight } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createAppContainer, StackActions, createBottomTabNavigator } from 'react-navigation';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../src/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);
import { Dimensions, PixelRatio } from 'react-native';
import { abstractInfo } from '../Services/API';
import themes from '../components/themes/Variables.js';
import Dashboard from './Dashboard';
import Search from "./Search";
import Profile from './Profile';
import Speakers from './Speakers';
import Events from './Events'
// import Realm from 'realm';
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
let realm = null;
let realm2 = null;
let allObjects = [];

/*deleteUser = (item) => {
  let objects = [], objects2 = [];
  objects = realm.objects('favorite')
  objects = realm.objects('favorite2;');
  console.log(objects);
};
*/

class Favorites extends Component {
  // constructor(props) {
  //   super();
  //   this.state = {
  //     Event: [],
  //     FlatListItems: [],
  //   };
  //   realm = new Realm({ path: 'FavDatabase.realm' });
  //   var user_detail = realm.objects('favorite2');
  //   user_detail.map(item => {
  //     item.type = 'abstract';
  //     allObjects.push(item);
  //   })
  //   this.state = {
  //     Event: user_detail,
  //   };

  //   realm2 = new Realm({ path: 'FavDatabase.realm' });
  //   var user_details = realm2.objects('favorite');
  //   user_details.map(item => {
  //     item.type = 'speaker';
  //     allObjects.push(item);
  //   })
  //   this.state = {
  //     FlatListItems: user_details,
  //   };
  // }

  // renderItem = ({ item }) => {
  //   if (item.type == "speaker" || item.type == "attendee") {
  //     return (
  //       <View>
  //         <CardItem style={styles.shadow}>
  //           <LinearGradient colors={['#88BE49', '#447A47']} style={{ alignSelf: 'stretch' }}>
  //             <Left style={{ flex: 1, margin: 25 }}>
  //               <TouchableHighlight onPress={() => deleteUser(item)}>
  //                 <Icon active name='heart' style={{ color: 'yellow', fontSize: 20 }} />
  //               </TouchableHighlight>
  //             </Left>
  //           </LinearGradient>
  //           <Body style={{ flex: 1 }}>
  //             <View style={{ flexDirection: 'column', marginLeft: 9, marginRight: -60, paddingTop: 15, marginBottom: 15 }}>
  //               <View>
  //                 <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family }}>
  //                   {item.name}
  //                 </Text>
  //               </View>
  //               <View>
  //                 <Text style={{
  //                   fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',
  //                   lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family, marginRight: -45
  //                 }}>
  //                   {item.subtitle}
  //                 </Text>
  //               </View>
  //               <View>
  //                 <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_S, paddingTop: 5, color: themes.colors.INIT_COLOR_Green, fontFamily: themes.fonts.INIT_FONT_Family }}>
  //                   {item.group}
  //                 </Text>
  //               </View>
  //             </View>
  //           </Body>
  //           <Right style={{ flex: 1, marginLeft: -25 }} >
  //             <Button transparent onPress={() => { this.props.navigation.navigate('AboutTheEvent') }}>
  //               <Icon name='forward-arrow' style={{ fontSize: themes.fonts.INIT_FONT_SIZE_IconSize_SM, color: themes.colors.INIT_COLOR_Green }} />
  //             </Button>
  //           </Right>
  //         </CardItem>
  //       </View>
  //     )
  //   } else {
  //     return (
  //       <View>
  //         <CardItem style={styles.shadow}>
  //           <LinearGradient colors={['#88BE49', '#447A47']} style={{ alignSelf: 'stretch' }}>
  //             <Left style={{ flex: 1, margin: 25 }}>
  //               <TouchableHighlight onPress={() => deleteUser(item)}>
  //                 <Icon active name='heart' style={{ color: 'yellow', fontSize: 20 }} />
  //               </TouchableHighlight>
  //             </Left>
  //           </LinearGradient>
  //           <Body style={{ flex: 1 }}>
  //             <View style={{ flexDirection: 'column', marginLeft: 9, marginRight: -60, paddingTop: 15, marginBottom: 15 }}>
  //               <View>
  //                 <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family }}>
  //                   {item.name}
  //                 </Text>
  //               </View>
  //               <View>
  //                 <Text style={{
  //                   fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',
  //                   lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family, marginRight: -45
  //                 }}>
  //                   {item.subtitle}
  //                 </Text>
  //               </View>
  //               <View>
  //                 <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_S, paddingTop: 5, color: themes.colors.INIT_COLOR_Green, fontFamily: themes.fonts.INIT_FONT_Family }}>
  //                   {item.event_start}
  //                 </Text>
  //               </View>
  //             </View>
  //           </Body>
  //           <Right style={{ flex: 1, marginLeft: -25 }} >
  //             <Button transparent onPress={() => { this.props.navigation.navigate('AboutTheEvent') }}>
  //               <Icon name='forward-arrow' style={{ fontSize: themes.fonts.INIT_FONT_SIZE_IconSize_SM, color: themes.colors.INIT_COLOR_Green }} />
  //             </Button>
  //           </Right>
  //         </CardItem>
  //       </View>
  //     )
  //   }

  // }




  // isCompleted(rowData) {
  //   if (this.state.status != 'new') {
  //     this.itemsRef.child(rowData.id).update({
  //       status: 'completed'
  //     });
  //     this.setState({
  //       isCompleted: true
  //     })
  //   }
  // }
  render() {
    return (
      <Container style={{
        flex: 1,
        backgroundColor: '#EEEEEE'
      }}>
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#88BE49', '#447A47']}>
          <Header span transparent androidStatusBarColor='transparent'
            style={{ height: 100 }}>
            <Left style={{ flex: 1, alignSelf: 'center' }}>
              <Button transparent style={{ width: widthPercentageToDP('20%') }} onPress={() => this.props.navigation.dispatch(StackActions.popToTop())}>
                <Icon name='back-arrow' style={{ color: themes.colors.INIT_COLOR_White, fontSize: themes.fonts.INIT_FONT_SIZE_IconSize_SM }} />
              </Button>
            </Left>
            <Body style={{ flex: 1, alignSelf: 'center', paddingTop: 20 }}>
              <Text style={{ fontFamily: themes.fonts.INIT_FONT_Family, color: themes.colors.INIT_COLOR_White, fontSize: themes.fonts.INIT_FONT_SIZE_XL, paddingLeft: 20 }}>
                Favorites
                 </Text>
            </Body>
            <Right style={{ flex: 1, alignSelf: 'center' }}>
              <Button transparent style={{ width: widthPercentageToDP('12.5%') }} onPress={() => { this.props.navigation.navigate('Search') }}>
                <Icon name='search' style={{ color: themes.colors.INIT_COLOR_White, fontSize: themes.fonts.INIT_FONT_SIZE_IconSize_SM }} />
              </Button>
            </Right>
          </Header>
        </LinearGradient>
        <Content>
          {/* <FlatList
            data={allObjects}
            keyExtractor={(item, index) => index.toString()}
            renderItem={this.renderItem}
          /> */}
          {/* <FlatList
          data={this.state.Event}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderItem2}
        /> */}
        </Content>
      </Container>
    );
  }
}
const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Favorites,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          tintColor = themes.colors.INIT_COLOR_Green,
          <Icon name="store" color={tintColor} style={{ paddingTop: 8 }} size={22} />
        )
      }
    },
    Map: {
      screen: FloorPlan3,
      navigationOptions: {
        tabBarLabel: 'FloorPlan',
        tabBarIcon: ({ tintColor }) => (
          tintColor = themes.colors.INIT_COLOR_Green,
          <Icon name="map" color={tintColor} style={{ paddingTop: 8 }} size={22} />
        )
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => (
          tintColor = themes.colors.INIT_COLOR_Green,
          <Icon name="iconfinder_39_2529953" color={tintColor} style={{ paddingTop: 8 }} size={22} />
        )
      }
    },
    Text: {
      screen: Speakers,
      navigationOptions: {
        tabBarLabel: 'Speakers',
        tabBarIcon: ({ tintColor }) => (
          tintColor = themes.colors.INIT_COLOR_Green,
          <Icon name="speech-bubble" color={tintColor} style={{ paddingTop: 8 }} size={22} />
        )
      }
    },
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarLabel: 'Search',
        tabBarIcon: ({ }) => (
          tintColor = themes.colors.INIT_COLOR_Green,
          <Icon name="search" color={tintColor} style={{ opacity: 0.8 }} style={{ paddingTop: 8 }} size={22} />
        )
      }
    },
  },
  {
    initialRouteName: "Home"
  },
);
export default createAppContainer(TabNavigator);

const styles = {
  shadow: {
    marginRight: 15,
    marginLeft: 15,
    marginTop: 15,
    paddingLeft: -20,
    paddingTop: -20,
    paddingBottom: -20,
    marginBottom: 15,
    elevation: 10,
    shadowOffset: { width: 0, height: 8 },
    shadowColor: "black",
    shadowOpacity: 100,
    shadowRadius: 10
  },
};