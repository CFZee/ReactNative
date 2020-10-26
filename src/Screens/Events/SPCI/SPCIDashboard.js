import React, { Component } from 'react';
import { Text, View,ScrollView,Linking } from 'react-native';
import { Container, Card, Header, Content, Button, Left, Body, Right, List} from 'native-base';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../../../src/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);
import LinearGradient from 'react-native-linear-gradient';
import { createAppContainer, StackActions, NavigationActions ,createBottomTabNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SPCITechnicalSession from './SPCITechnicalSession'; 
import SPCIAboutTheEvent from './SPCIAboutTheEvent';
import SponsorsPartnerExhibitor from '../../sponsorspartnerexhibitor';
import Favorites from '../../Favorites';
import Speakers from '../../Speakers';
import SPCIAbstract from './SPCIAbstract';
import Attendees from '../../Attendees';
import MeetingsAndEvents from '../../MeetingsAndEvents';
import AboutIGCW from '../../AboutIGCW';
import Events from '../../Events';
import SPCIAbstractDetail from './SPCIAbstractDetail';
import EventOpenDelete from '../../EventOpenDelete';
import Profile from '../../Profile';
import ProfileEditPage from '../../ProfileEditPage'
import NetworkingAndSpecialEvents from '../../NetworkingAndSpecialEvents'
import NetworkSession from '../../NetworkSession';
import {Dimensions, PixelRatio} from 'react-native';
import Search from "../../Search";
import themes from '../../../components/themes/Variables';
import Speakers1 from '../../Speakers/Speakers1'
import Presenters from '../../Speakers/Presenters'
import SpeakerModerator from '../../SpeakerModerator'
import all_attendees from '../../Attendees/all_attendees'
import Academia from '../../Attendees/Academia';
import Government from '../../Attendees/Government';
import Industry from '../../Attendees/Industry';
import Student from '../../Attendees/Student';
import Others from '../../Attendees/Others'
import SPCITechnicalAndSpecialEvents from './SPCITechnicalAndSpecialEvents'
import SpeakersAndPresenters from '../../Speakers/SpeakersAndPresenters'
import FloorPlan1 from '../../FloorPlan/Floorplan1';
import FloorPlan3 from '../../FloorPlan/FloorPlan3.js';
import SpeakerDetail from './SpeakerDetail';



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

export class SPCIDashboard extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'IGCW Events',
    headerLeft: <Icon name="menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
    drawerIcon: () => (
      <Icon name='right-arrow' style={{textAlign:'right'}}/>
    ),
  })

  menuClick(){
    this.props.navigation.openDrawer()
}

    render() {
      const { navigation } = this.props;
      const event_id = navigation.getParam('eventId');
      console.log(event_id);
      return(
        <Container style={styles.container}>
        <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 1}} colors={['#88BE49','#447A47']} style={{flex:1}}>
            <ScrollView>
            <Header transparent androidStatusBarColor='transparent' style={{height:100}}>
            <Left style={{flex:1,alignSelf:'center'}}>
                <Button style={{height:heightPercentageToDP('10%'),width:widthPercentageToDP('10%')}} transparent onPress={() => this.props.navigation.dispatch(StackActions.popToTop())}>
                    <Icon name='back-arrow' style={{color:'white',fontSize:20}}/>
                    </Button>
                    </Left>
                    <Body style={{flex:1,marginLeft:60,alignSelf:'center'}}>
                        <Text style={{alignItems:'center',marginLeft:-50,marginLeft:-50,color:themes.colors.INIT_COLOR_White,width:widthPercentageToDP('80%'),fontFamily:themes.fonts.INIT_FONT_Family,fontSize:14}} >      Green Chemistry for Speciality  </Text>
                        <Text style={{alignItems:'center',marginLeft:-50,marginLeft:-50,color:themes.colors.INIT_COLOR_White,width:widthPercentageToDP('80%'),fontFamily:themes.fonts.INIT_FONT_Family,fontSize:14}} >& Fine Chemicals Industry  Dashboard</Text>
                        </Body>
                        <Right style={{flex:1,alignSelf:'center'}}>
                          </Right>
                </Header>
                <Content>
                    <View style={{paddingTop:15}}>
                        <List style={{marginRight:15,marginLeft:15,backgroundColor:'#fff',borderRadius:70}}>
                                <Button transparent style={{alignSelf:'center',position:'relative'}}
                                onPress={()  => this.props.navigation.navigate('MeetingsAndEvents')}>
                                  <Left style={{flex:1}} />
                                  <Body style={{flex:1,marginRight:-10}}>
                                <Text style={{color:'#3A4759',fontFamily:'Montserrat',textAlign:'right'}}> See All Events</Text> 
                                </Body>
                                <Right style={{marginRight:25,flex:1}}>
                                <Icon name='forward-arrow' style={{color:'#447A47',fontSize: 12}}/> 
                                </Right>
                                </Button>
                            </List>
                        </View>
                    <View style={{flexDirection:'row',paddingTop:5}}>
                        <Left style={{flex:1,marginLeft:15}}>
                        <Card style={{height:heightPercentageToDP('15%'),width:widthPercentageToDP('27%'),alignItems:'center',justifyContent:'center',borderRadius:10}}>
                        <Button transparent style={{height:heightPercentageToDP('15%'),width:widthPercentageToDP('27%'),justifyContent:'space-around'}}
                        onPress={()  => this.props.navigation.navigate('SPCITechnicalAndSpecialEvents')}>
                            <Icon name='iconfinder_39_2529953' style={{fontSize:40,color:'#447A47'}}/>
                            </Button>
                        </Card>
                        <Text style={{color:'white',fontSize:12,fontFamily: themes.fonts.INIT_FONT_Family,alignSelf:'center'}}> Detail Agenda </Text>
                        </Left>
                        <Body style={{flex:1,paddingTop:15}}>
                        <Card style={{height:heightPercentageToDP('15%'),width:widthPercentageToDP('27%'),alignItems:'center',justifyContent:'center',borderRadius:10}}>
                        <Button transparent style={{height:heightPercentageToDP('15%'),width:widthPercentageToDP('27%'),justifyContent:'space-around'}}
                        onPress={()  => this.props.navigation.navigate('SponsorsPartnerExhibitor')}>
                            <Icon name='store' style={{fontSize:40,color:'#447A47'}}/>
                            </Button>
                        </Card>
                        <Text style={{alignSelf:'center',color:'white',fontSize:12,fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-10,marginLeft:-5}}>Partners, Supporters{'\n'}      & Exihibitors </Text>
                        </Body>
                        <Right style={{flex:1,marginRight:15,paddingTop:15}}>
                        <Card style={{height:heightPercentageToDP('15%'),width:widthPercentageToDP('27%'),alignItems:'center',justifyContent:'center',borderRadius:10}}>
                        <Button transparent style={{height:heightPercentageToDP('15%'),width:widthPercentageToDP('27%'),justifyContent:'space-around'}}
                         onPress={()  => this.props.navigation.navigate('NetworkingAndSpecialEvents')}>
                            <Icon name='iconfinder_apologize_hand_ramadan_hand_drawn_3213241' style={{fontSize:60,color:'#447A47'}}/>
                            </Button>
                        </Card>
                        <Text style={{alignSelf:'center',paddingLeft:5,marginRight:-10,color:'white',fontFamily:'Montserrat',fontSize:12}}>Networking & {'\n'}Special Events </Text>
                        </Right>
                        </View>
                        <View style={{flexDirection:'row',marginTop:-15}}>
                        <Left style={{flex:1,marginLeft:15,marginTop:15}}>
                        <Card style={{height:heightPercentageToDP('15%'),width:widthPercentageToDP('27%'),alignItems:'center',justifyContent:'center',borderRadius:10}}>
                        <Button transparent style={{height:heightPercentageToDP('15%'),width:widthPercentageToDP('27%'),justifyContent:'space-around'}}
                        onPress={()  => this.props.navigation.navigate('Favorites')}>
                            <Icon name='heart' style={{fontSize:35,color:'#447A47'}}/>
                            </Button>
                        </Card>
                        <Text style={{alignSelf:'center',color:'white',fontFamily:'Montserrat',fontSize:12}}> My Favorites </Text>
                        </Left>
                        <Body style={{flex:1,marginTop:10}}>
                        <Card style={{marginTop:10,height:heightPercentageToDP('15%'),width:widthPercentageToDP('27%'),alignItems:'center',justifyContent:'center',borderRadius:10}}>
                        <Button transparent style={{height:heightPercentageToDP('15%'),width:widthPercentageToDP('27%'),justifyContent:'space-around'}}
                          onPress={()  => this.props.navigation.navigate('Speakers')}>
                            <Icon name='speech-bubble' style={{fontSize:40,color:'#447A47'}}/>
                            </Button>
                        </Card>
                        <Text style={{color:'white',fontFamily:'Montserrat',fontSize:12,alignSelf:'center'}}> Speakers </Text>
                        </Body>
                        <Right style={{flex:1,marginRight:15,paddingTop:15}}>
                        <Card style={{height:heightPercentageToDP('15%'),width:widthPercentageToDP('27%'),alignItems:'center',justifyContent:'center',borderRadius:10}}>
                        <Button transparent style={{height:heightPercentageToDP('15%'),width:widthPercentageToDP('27%'),justifyContent:'space-around'}}
                         onPress={()  => this.props.navigation.navigate('SPCIAbstract')}>
                            <Icon name='presentation' style={{fontSize:40,color:'#447A47'}}/>
                            </Button>
                        </Card>
                        <Text style={{alignSelf:'center',marginRight:-10,color:'white',fontFamily:'Montserrat',fontSize:12}}> Abstracts </Text>
                        </Right>
                        </View>
                        <View style={{flexDirection:'row',marginTop:-12}}>
                        <Left style={{flex:1,marginLeft:15,marginTop:15}}>
                        <Card style={{height:heightPercentageToDP('15%'),width:widthPercentageToDP('27%'),alignItems:'center',justifyContent:'center',borderRadius:10}}>
                        <Button transparent style={{height:heightPercentageToDP('15%'),width:widthPercentageToDP('27%'),justifyContent:'space-around'}}
                        onPress={()  => this.props.navigation.navigate('FloorPlan1')}>
                            <Icon name='map' style={{fontSize:40,color:'#447A47'}}/>
                            </Button>
                        </Card>
                        <Text style={{alignSelf:'center',marginLeft:-5,color:'white',fontFamily:'Montserrat',fontSize:12}}> Floor Plan </Text>
                        </Left>
                        <Body style={{flex:1}}>
                        <Card style={{marginTop:20,height:heightPercentageToDP('15%'),width:widthPercentageToDP('27%'),alignItems:'center',justifyContent:'center',borderRadius:10}}>
                        <Button onPress={()  => Linking.openURL('https://www.google.com/maps/place/Indian+Institute+of+Technology+Bombay/@19.1334302,72.9110792,17z/data=!3m1!4b1!4m5!3m4!1s0x3be7c7f189efc039:0x68fdcea4c5c5894e!8m2!3d19.1334302!4d72.9132679')}  transparent style={{height:heightPercentageToDP('15%'),width:widthPercentageToDP('27%'),justifyContent:'space-around'}}>
                                <Icon name='target' style={{fontSize:40,color:'#447A47'}}/>
                                </Button>
                        </Card>
                        <Text style={{alignSelf:'center',color:'white',fontSize:12,fontFamily:'Montserrat'}}> Locate Me </Text>
                        </Body>
                        <Right style={{flex:1,marginRight:15,paddingTop:15}}>
                        <Card style={{marginTop:5,height:heightPercentageToDP('15%'),width:widthPercentageToDP('27%'),alignItems:'center',justifyContent:'center',borderRadius:10}}>
                        <Button transparent style={{height:heightPercentageToDP('15%'),width:widthPercentageToDP('27%'),justifyContent:'space-around'}}
                        onPress={()  => this.props.navigation.navigate('Attendees')}>
                            <Icon name='iconfinder_people-group-team-peoples-friend_3643747' style={{fontSize:40,color:'#447A47'}}/>
                            </Button>
                        </Card>
                        <Text style={{alignSelf:'center',marginRight:-10,color:'white',fontSize:12,fontFamily:'Montserrat'}}>Attendees </Text>
                        </Right>
                        </View>
                        <Button rounded style={{marginTop:15,marginLeft: 15,padding:5,marginRight: 15,flex:1,backgroundColor:'#fff'}}onPress={() => this.props.navigation.navigate('SPCIAboutTheEvent')}>
                            <Left style={{flex:1,alignSelf:'center'}}/>
                            <Body style={{flex:1,alignSelf:'center'}}>
               <Text style={{fontSize:12,color:'#3A4759',fontFamily:'Montserrat'}}> About the Event </Text>
               </Body>
               <Right style={{flex:1,alignSelf:'center'}}/>
                </Button>
                        <Button rounded  onPress={()  => this.props.navigation.navigate('AboutIGCW')}style={{marginTop:25,marginLeft: 15,marginBottom:10,padding:5,marginRight: 15,flex:1,backgroundColor:'#fff',alignItems:'center'}}>
              <Left style={{flex:1,alignSelf:'center'}}/>
              <Body style={{flex:1,alignSelf:'center'}}>
               <Text style={{fontSize:12,color:'#3A4759',fontFamily:'Montserrat',alignSelf:'center'}}> About IGCW </Text>
               </Body>
               <Right style={{flex:1,alignSelf:'center'}}/>
                </Button>
                </Content>
            <Text>
            </Text>
                </ScrollView>
                </LinearGradient>
        </Container>
    );
    }
}

const TabNavigator = createBottomTabNavigator(  
      {  
        
        Home:{  
          screen:SPCIDashboard,  
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

  TabNavigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible;
    if (navigation.state.routes.length > 1) {
      navigation.state.routes.map(route => {
        if (route.routeName === "CustomHide") {
          tabBarVisible = false;
        } else {
          tabBarVisible = true;
        }
      });
    }
  
    return {
      tabBarVisible
    };
  };
const SpeakersNav = createStackNavigator ({
  Home:{screen:Speakers},
  Speakers1:{screen:Speakers1},
  Presenters:{screen:Presenters},
  Search:{screen:Search},
  SpeakersAndPresenters:{screen:SpeakersAndPresenters}
},{
  initialRouteName: 'Home',
  headerMode:'none',
  mode: 'modal',
})


const SPCITechnicalAndSpecialEventsNav = createStackNavigator ({
  Home:{screen:SPCITechnicalAndSpecialEvents},
  SPCITechnicalSession:{screen:SPCITechnicalSession},
  SpeakerDetail:{
    screen:SpeakerDetail
  },
  SPCIAbstract:{
    screen:SPCIAbstract
  },
  SPCIAbstractDetail:{
    screen:SPCIAbstractDetail
  },
  SpeakerModerator:{
    screen:SpeakerModerator
  },
  Search:{
    screen:Search
  },
},{
  initialRouteName: 'Home',
  headerMode:'none',
  mode: 'modal',
})

const SponsorsPartnerExhibitorNav = createStackNavigator ({
  Home:{screen:SponsorsPartnerExhibitor},
  Search:{
    screen:Search
  },
  SpeakerModerator:{
    screen:SpeakerModerator
  },
},{
  initialRouteName: 'Home',
  headerMode:'none',
  mode: 'modal',
})

const NetworkingAndSpecialEventsNav = createStackNavigator ({
  Home:{screen:NetworkingAndSpecialEvents},
  NetworkSession:{screen:NetworkSession},
  Search:{
    screen:Search
  },
},{
  initialRouteName: 'Home',
  headerMode:'none',
  mode: 'modal',
})

const MeetingsAndEventsNav = createStackNavigator ({
  Home:{screen:MeetingsAndEvents},
  Search:{
    screen:Search
  },
  EventOpenDelete:{
    screen:EventOpenDelete
  },
  Events:{
    screen:Events
  },
},{
  initialRouteName: 'Home',
  headerMode:'none',
  mode: 'modal',
})


const FavoritesNav = createStackNavigator(
  {
    Home: {
      screen: Favorites,
    },
    Search:{
      screen:Search
    },
    SPCIAboutTheEvent:{
      screen:SPCIAboutTheEvent
    }
  },
  {
    initialRouteName: 'Home',
    headerMode:'none',
    mode: 'modal',

  },

);

const SPCIAbstractNav = createStackNavigator(
  {
    Home: {
      screen: SPCIAbstract,
    },
    Search:{
      screen:Search
    },
    SPCIAbstractDetail:{
      screen:SPCIAbstractDetail
    },
    SPCIAboutTheEvent: {
      screen:SPCIAboutTheEvent,
  },

  },
  {
    initialRouteName: 'Home',
    headerMode:'none',
    mode: 'modal',
  },

);

const ProfileNav = createStackNavigator(
  {
    Home: {
      screen: Profile,
    },
    ProfileEditPage:{
      screen:ProfileEditPage
    },
  },
  {
    initialRouteName: 'Home',
    headerMode:'none',
    mode: 'modal',
  },

);

const SPCIAboutTheEventNav = createStackNavigator(
  {
    Home: {
      screen: SPCIAboutTheEvent,
    },
    Search:{
      screen:Search
    },
  },
  {
    initialRouteName: 'Home',
    headerMode:'none',
    mode: 'modal',
  },

);

const AttendeesNav = createStackNavigator(
  {
    Home: {
      screen: Attendees,
    },
    all_attendees: {
      screen: all_attendees,
    },
    Others:{
      screen:Others
    },
    Student:{
      screen:Student
    },
    Industry:{
      screen:Industry
    },
    Government:{
      screen:Government
    },
    Academia:{
      screen:Academia
    },
    Search:{
      screen:Search
    }
  },
  {
    initialRouteName: 'Home',
    headerMode:'none',
    mode: 'modal',

  },

);

  const AppStackNavigator = createStackNavigator({
    Home:{
      screen:TabNavigator
    },
    FloorPlan1:{
      screen:FloorPlan1
    },
    SPCIAboutTheEvent:{
      screen:SPCIAboutTheEventNav
    },
    SPCITechnicalAndSpecialEvents: {
      screen: SPCITechnicalAndSpecialEventsNav,
    },
    Tab:{
      screen:TabNavigator
    },
    Home: {
      screen: TabNavigator,
    },
    SponsorsPartnerExhibitor: {
      screen : SponsorsPartnerExhibitorNav,
    },
    Favorites:{
      screen:FavoritesNav,
    },
    Speakers:{
      screen:SpeakersNav,
      
  },
  SPCIAbstract:{
    screen:SPCIAbstractNav
},
Attendees:{
  screen:AttendeesNav
  },
  MeetingsAndEvents:{
    screen:MeetingsAndEventsNav,
  },
  AboutIGCW:{
    screen:AboutIGCW
},
NetworkSession:{
  screen:NetworkSession
},
profile:{
  screen:ProfileNav
},
NetworkingAndSpecialEvents:{
  screen:NetworkingAndSpecialEventsNav
},
  }, {
      initialRouteName: 'Home',
      headerMode:'none',
      mode: 'modal',
  });

  
export default createAppContainer(AppStackNavigator);

 

const styles = ({
    container: {
    flex: 1,
    backgroundColor: '#447A47'
    },
    call: {
        flex: 1,
        width: undefined,
        height: undefined,
        backgroundColor:'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardStyle: {
    marginRight:5,
    marginLeft:5,
    paddingTop:5,
    paddingBottom:5,
    borderRadius:70,
    borderWidth: 1,
    justifyContent:'space-between',
    marginTop: 25,
    marginBottom: 10,
    elevation:15,
    textShadowOffset: { width: 1, height: 4 },
    textShadowRadius: 5,
    shadowColor: "light-grey",  
    shadowOpacity: 0.1,
    shadowRadius: 2
 },
    shadow1: {
    marginRight: 15,
    marginLeft: 15,
    marginTop: 40,
    paddingTop: 15,
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
    marginTop: 25,
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
    marginTop: 15,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft:0,
    paddingRight:0,
    backgroundColor: '#fff',
    borderColor:'#fff',
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 100,
    elevation: 10,
    shadowOffset: { width:4,height: 4},
    shadowColor: "grey",
    shadowOpacity: 10,
    shadowRadius: 5
    }
});