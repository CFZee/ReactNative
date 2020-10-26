import React, { Component } from 'react';
import { Text, View,ScrollView,Image ,Linking} from 'react-native';
import { Container, Card, Header, Content, Button, Left, Body, Right} from 'native-base';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../src/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);
import LinearGradient from 'react-native-linear-gradient';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions} from 'react-navigation'; 
import Dashboard from './Dashboard.js';
import AboutTheEvent from './AboutTheEvent';
import AboutIGCW from './AboutIGCW'
import EventOpenDelete from './EventOpenDelete';
import {Dimensions, PixelRatio} from 'react-native';
import Search from "./Search";
import  themes from '../components/themes/Variables.js';
import ProfileEditPage from './ProfileEditPage';
import Profile from './Profile';
import NewsAndUpdates from './NewsAndUpdates';
import ContactUS from './ContactUS';




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


class GCFDashboard extends Component {
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
        return(
            <Container style={{flex:1}}>
            <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 1}} colors={['#88BE49','#447A47']} style={{flex:1}}>
                <ScrollView>
                <Header transparent androidStatusBarColor='transparent' style={{height:100}}>
                    <Body style={{flex:1,marginLeft:150,alignSelf:'center'}}>
                        <Text style={{alignSelf:'center',color:themes.colors.INIT_COLOR_White,width:widthPercentageToDP('80%'),fontFamily:themes.fonts.INIT_FONT_Family,fontSize:14}} >Welcome To Green Chemistry</Text>
                        <Text style={{alignSelf:'center',color:themes.colors.INIT_COLOR_White,width:widthPercentageToDP('80%'),fontFamily:themes.fonts.INIT_FONT_Family,fontSize:14,marginLeft:40}} > Foundation (GCF) </Text>
                        </Body>
                    </Header>
                    <Content>
                        <View style={{flexDirection:'column'}}>
                   <View style={{flexDirection:'row',marginTop:15}}>
                            <Left style={{flex:1,marginLeft:15}}>
                            <Card style={{marginTop:-10,height:heightPercentageToDP('15%'),width:widthPercentageToDP('27%'),alignItems:'center',justifyContent:'center',borderRadius:10}}>
                            <Button transparent style={{height:heightPercentageToDP('15%'),width:widthPercentageToDP('27%'),alignItems:'center',justifyContent:'space-around'}}
                            onPress={() => {
                                this.props.navigation.dispatch(StackActions.reset({
                                  index: 0,
                                  actions: [
                                    NavigationActions.navigate({ routeName: 'Dashboard' })
                                  ],
                                }))
                              }}>
                                <Icon name='calendar' style={{fontSize:40,color:themes.colors.INIT_COLOR_Green,alignSelf:'center'}} />
                            </Button>
                            </Card>
                            <Text style={{alignSelf:'center',color:themes.colors.INIT_COLOR_White,fontSize:themes.fonts.INIT_FONT_SIZE_M,fontFamily:themes.fonts.INIT_FONT_Family}}>IGCW Events </Text>
                            </Left>
                            <Body style={{flex:1}}>
                            <Card style={{height:heightPercentageToDP('15%'),width:widthPercentageToDP('27%'),alignItems:'center',justifyContent:'center',borderRadius:10,marginTop:-10}}>
                            <Button transparent style={{height:heightPercentageToDP('15%'),width:widthPercentageToDP('27%'),alignItems:'center',justifyContent:'space-around'}}
                            onPress={()  => Linking.openURL('https://www.greenchemistree.co.in/about.html')}>
                                <Text style={{alignSelf:'center',fontSize:20,color:themes.colors.INIT_COLOR_Green,fontFamily:themes.fonts.INIT_FONT_Family}}> GCF </Text>
                                </Button>
                            </Card>
                            <Text style={{alignSelf:'center',color:themes.colors.INIT_COLOR_White,fontSize:themes.fonts.INIT_FONT_SIZE_M,fontFamily:themes.fonts.INIT_FONT_Family}}> About GCF  </Text>
                            </Body>
                            <Right style={{flex:1,marginRight:10}}>
                            <Card style={{height:heightPercentageToDP('15%'),width:widthPercentageToDP('27%'),alignItems:'center',justifyContent:'center',borderRadius:10}}>
                            <Button transparent style={{height:heightPercentageToDP('15%'),width:widthPercentageToDP('27%'),alignItems:'center',justifyContent:'space-around'}}
                            onPress={()  => Linking.openURL('https://www.greenchemistree.co.in/Activities.html')}>
                                <Icon name='iconfinder_services_2639916' style={{fontSize:40,color:themes.colors.INIT_COLOR_Green}}/>
                                </Button>
                            </Card>
                            <Text style={{alignSelf:'center',color:themes.colors.INIT_COLOR_White,fontSize:themes.fonts.INIT_FONT_SIZE_M,fontFamily:themes.fonts.INIT_FONT_Family}}> Services offered{'\n'}           by GCF  </Text>                            
                            </Right>
                            </View>
                            <View style={{flexDirection:'row'}}>
                            <Left style={{flex:1,marginLeft:15}}>
                            <Card style={{height:heightPercentageToDP('15%'),width:widthPercentageToDP('27%'),alignItems:'center',justifyContent:'center',borderRadius:10}}>
                            <Button transparent style={{height:heightPercentageToDP('15%'),width:widthPercentageToDP('27%'),alignItems:'center',justifyContent:'space-around'}}
                            onPress={()  => Linking.openURL('https://www.greenchemistree.co.in/Resource.html')}>
                                <Icon name='settings-1' style={{fontSize:40,color:themes.colors.INIT_COLOR_Green}}/>
                                </Button>
                            </Card>
                            <Text style={{alignSelf:'center',color:themes.colors.INIT_COLOR_White,fontSize:themes.fonts.INIT_FONT_SIZE_M,fontFamily:themes.fonts.INIT_FONT_Family}}>GC&E Resources &{'\n'}            Tools </Text>
                            </Left>
                            <Body style={{flex:1}}>
                            <Card style={{marginLeft:5,marginTop:-10,height:heightPercentageToDP('15%'),width:widthPercentageToDP('27%'),alignItems:'center',justifyContent:'center',borderRadius:10}}>
                            <Button transparent style={{height:heightPercentageToDP('15%'),width:widthPercentageToDP('27%'),alignItems:'center',justifyContent:'space-around'}}
                            onPress={() => {
                                this.props.navigation.dispatch(StackActions.reset({
                                  index: 0,
                                  actions: [
                                    NavigationActions.navigate({ routeName: 'NewsAndUpdates' })
                                  ],
                                }))
                              }}>
                                <Icon name='calendar' style={{fontSize:40,color:themes.colors.INIT_COLOR_Green,alignSelf:'center'}} />
                            </Button>
                            </Card>
                            <Text style={{alignSelf:'center',color:themes.colors.INIT_COLOR_White,fontSize:themes.fonts.INIT_FONT_SIZE_M,fontFamily:themes.fonts.INIT_FONT_Family}}>News & Update </Text>
                            </Body>
                            <Right style={{flex:1,marginRight:10}}>
                            <Card style={{height:heightPercentageToDP('15%'),width:widthPercentageToDP('27%'),alignItems:'center',justifyContent:'center',borderRadius:10}}>
                            <Button  onPress={()  => Linking.openURL('https://www.greenchemistree.co.in/igcw%20copy.html')} transparent style={{height:heightPercentageToDP('15%'),width:widthPercentageToDP('27%'),alignItems:'center',justifyContent:'space-around'}}>
                            <Icon name='badge' style={{fontSize:50,color:themes.colors.INIT_COLOR_Green}}/>
                                </Button>
                          
                            </Card>
                            <Text style={{alignSelf:'center',color:themes.colors.INIT_COLOR_White,fontSize:themes.fonts.INIT_FONT_SIZE_M,fontFamily:themes.fonts.INIT_FONT_Family}}>       Certificates & {'\n'}Acknowledgments </Text>
                            </Right>
                            </View>
                            <View style={{flexDirection:'row',marginBottom:60}}>
                            <Left style={{flex:1,marginLeft:15}}>
                            <Card style={{marginTop:5,height:heightPercentageToDP('15%'),width:widthPercentageToDP('27%'),alignItems:'center',justifyContent:'center',borderRadius:10}}>
                            <Button transparent style={{height:heightPercentageToDP('15%'),width:widthPercentageToDP('27%'),alignItems:'center',justifyContent:'space-around'}}
                            onPress={() => {
                                this.props.navigation.dispatch(StackActions.reset({
                                  index: 0,
                                  actions: [
                                    NavigationActions.navigate({ routeName: 'ContactUS' })
                                  ],
                                }))
                              }}>
                                <Icon name='calendar' style={{fontSize:40,color:themes.colors.INIT_COLOR_Green,alignSelf:'center'}} />
                            </Button>
                            </Card>
                            <Text style={{paddingLeft:25,color:themes.colors.INIT_COLOR_White,fontSize:themes.fonts.INIT_FONT_SIZE_M,fontFamily:themes.fonts.INIT_FONT_Family}}> Contact Us  </Text>
                            </Left>
                             </View>
                             </View>
                             </Content>
                      </ScrollView>
                </LinearGradient>
                             <View style={styles.Content}>
                             <View style={{marginLeft:80,justifyContent:'flex-end',marginTop:-70,marginBottom:-80}}>
                                <Image source={require('../components/Photos/image.png')} style={{width:'70%', resizeMode:"contain"}}/>
                                </View>
                                  </View>      
            </Container>

        );
    }
}



const ProfileNav = createStackNavigator ({
  Home:{screen:Profile},
  ProfileEditPage:{
    screen:ProfileEditPage
  }
},{
  initialRouteName: 'Home',
  headerMode:'none',
  mode: 'modal',
})

const AppNavigator = createStackNavigator({
    
     Home: {
      screen: GCFDashboard,
    },
    NewsAndUpdates :{
      screen:NewsAndUpdates
    },
    ContactUS :{
      screen:ContactUS
    },
    Dashboard:{
      screen:Dashboard
    },
    AboutIGCW:{
        screen:AboutIGCW
    },
    AboutTheEvent: {
        screen:AboutTheEvent,
    },
    GCFDashboard:{
      screen:GCFDashboard
    },
      Profile:{
        screen:ProfileNav
      }
  },
   {
      initialRouteName: 'Home',
      headerMode:'none',
  mode: 'modal',

  });

    
  export default createAppContainer(AppNavigator);

  


const styles = ({
    Content:{
        backgroundColor:'white',
        paddingTop:-20,
        textAlign:'center',

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
    elevation: 20,
    shadowOffset: { width: 4,height: 4},
    shadowColor: "grey",
    shadowOpacity: 1.0,
    shadowRadius: 50
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
    elevation: 15,
    shadowOffset: { width:4,height: 4},
    shadowColor: "grey",
    shadowOpacity: 50,
    shadowRadius: 50
    }
});