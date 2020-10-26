import React, {Component}from 'react';
import { CardItem,Container, Header,Left, Body, Right, Button,Text, Content } from 'native-base';
import { View,ScrollView,FlatList,TouchableWithoutFeedback} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../../../src/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);
import { createAppContainer, StackActions ,createBottomTabNavigator} from 'react-navigation';
import {Dimensions, PixelRatio} from 'react-native';
import {technicalSessionsInfo} from '../../../Services/API';
import themes from '../../../components/themes/Variables';
import Search from "../../Search";
import Profile from '../../Profile';
import Favorites from '../../Favorites';
import Speakers from '../../Speakers';
import FloorPlan3 from '../../FloorPlan/FloorPlan3.js';


let Day1Detail = [];


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

class TechnicalAndSpecialEvents extends Component {
  constructor() {
    super();
    this.state = { Day1: []  }
  }

  componentDidMount() {
    technicalSessionsInfo().then((data) => {
      console.log(data)
      data.map(item => {
        console.log(item)
        // console.log(item.session_name)
        // console.log(item.event)
        var Detail = { name: item.event[0].event_name};
       if (Detail.group.toUpperCase() == "Workshop on Green Engineering") 
       Day1Detail.push(Detail);
        // console.log(Day1Detail)

      })
        this.setState({
          Day1: Day1Detail
        });         
        // console.log(this.state.Day1)

    });
  }
  


  renderDayDetails = ({ item }) => {
    return (
            <View>
              <TouchableWithoutFeedback onPress={() => this.sessionInfoScreen()}>
               <CardItem style={styles.shadow}>
          <LinearGradient colors={['#88BE49','#447A47']} style={{alignSelf:'stretch'}}>
                  <Left style={{flex:1,margin:25}}>
                      <Icon active name='heart' style={{color:themes.colors.INIT_COLOR_Yellow,fontSize:20}} onPress={this.onress}/>
                  </Left>
          </LinearGradient>
                  <Body style={{flex:1}}>
                      <View style={{flexDirection:'column',marginLeft:9,marginRight:-60,paddingTop:15,marginBottom:15}}>
                            <View>
                 <Text style={{width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_XL,color: themes.colors.INIT_COLOR_Blue,fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-50}}>
                 {item.name}
                 </Text>
                 </View>
                <View>
                  {/* <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Indigo,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  11:00 am - 11:10 am
                      </Text> */}
                  </View>
                </View>
                  </Body>
                    {/* <Right style={{flex:1,marginLeft:-25}} >
                  <Button transparent>
                  <Icon name='forward-arrow' style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,color: themes.colors.INIT_COLOR_Green}} />
                  </Button>
                  </Right> */}
              </CardItem>
              </TouchableWithoutFeedback>
    </View>
    );
}

sessionInfoScreen = () => {
  this.props.navigation.navigate('AgroChemicalsTechnicalSession', {
    eventName: "Welcome and Introduction to Conference on Green Chemistry for Agro Chemicals Industry Sector   ",
    eventBody: "  "   ,
    eventLocation:"",
    eventDate: "17th October 2019",
    eventSpeakerName:"Dr. Yogendra Shastri ",
    eventSpeakerImage:"http://165.22.216.45/wp-content/uploads/2019/10/Shastri-YN.jpg",
    eventSpeakerDesignation: 'Assistant Professor, Dept. of Chemical Engineering',
    eventSpeakerOrganization:'IIT-Bombay, India	',
  })
}


    render() {
        return(
            <Container style={styles.Container,{backgroundColor:'#D9DCDE'}}>
                <ScrollView>
                <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 1}} colors={['#88BE49','#447A47']} style={{flex:1}}>
                <Header transparent androidStatusBarColor='transparent'
                style={{ height: 100 } }> 
                <Left style={{flex:1,alignSelf:'center'}}>
                    <Button transparent  style={{width:widthPercentageToDP('20%')}} onPress={() => this.props.navigation.dispatch(StackActions.popToTop())}>               
                         <Icon name='back-arrow' style={{color: themes.colors.INIT_COLOR_White,fontSize: themes.fonts.INIT_FONT_SIZE_IconSize_M}}/>
                        </Button>
                </Left>
                <Body style={{flex:1,marginLeft:60,alignSelf:'center'}}>
                        <Text style={{alignItems:'center',marginLeft:-50,marginLeft:-50,color:themes.colors.INIT_COLOR_White,width:widthPercentageToDP('80%'),fontFamily:themes.fonts.INIT_FONT_Family,fontSize:14}} >Green Chemistry for Agro Chemicals</Text>
                        <Text style={{alignItems:'center',marginLeft:-50,marginLeft:-50,color:themes.colors.INIT_COLOR_White,width:widthPercentageToDP('80%'),fontFamily:themes.fonts.INIT_FONT_Family,fontSize:14}} >            Industry Dashboard</Text>
                        </Body>
                        <Right style={{flex:1,alignSelf:'center'}}>
                          </Right>
                </Header>
                </LinearGradient>
                <Content>
                <FlatList
          style={{ marginBottom: 100 }}
          data={this.state.Day1}
          keyExtractor={item => item.name}
          renderItem={this.renderDayDetails}
        />
        </Content>
       </ScrollView>
            </Container>
        );
    }
}

const TabNavigator = createBottomTabNavigator(  
  {  
    
    Home:{  
      screen:TechnicalAndSpecialEvents,  
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

const styles = {
    container: {
      flex: 1,
      backgroundColor: '#D9DCDE',
    },
    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding:10,
      },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
      },
      shadow: {
        marginRight:15,
        marginLeft:15,
        marginTop:20,
        paddingLeft:-20,
        paddingTop:-20,
        paddingBottom:-20,
        elevation:10,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: "grey",
        shadowOpacity: 10,
        shadowRadius: 5
    },
    shadow2: {
      marginRight:15,
      marginLeft:15,
      marginTop:20,
      paddingLeft:-20,
      paddingTop:-20,
      paddingBottom:-20,
      marginBottom:20,
      elevation:10,
      shadowOffset: { width: 1, height: 1 },
      shadowColor: "grey",
      shadowOpacity: 10,
      shadowRadius: 5
  },
};