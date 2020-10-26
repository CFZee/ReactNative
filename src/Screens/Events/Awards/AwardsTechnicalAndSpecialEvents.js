import React, {Component}from 'react';
import { CardItem,Container, Header,Left, Body, Right, Button,Text } from 'native-base';
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
import FloorPlan4 from '../../FloorPlan/FloorPlan4.js';


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

class AwardsTechnicalAndSpecialEvents extends Component {
  constructor() {
    super();
    this.state = { Day1: []  },
    this.state = { Day2: []  },
    this.state = { Day3: []  },


    this.state = {
     customStyleIndex: 0,
      };
    this.state = {
        show: true,
      };
      this.state = {
        show2: true,
      };
      this.state = {
        show3: true,
      };
      this.state={
        toggle:false,
        toggle2:false,
        toggle3:true
    }
}

//   componentDidMount() {
//     technicalSessionsInfo().then((data) => {
//       data.map(item => {
//         console.log(data)
//         var Detail = { name: item.event[0].event_name};
//        if (Detail.group.toUpperCase() == "Workshop on Green Engineering") 
//        Day1Detail.push(Detail);
//         console.log(Day1Detail)

//       })
//         this.setState({
//           Day1: Day1Detail
//         });         
//         console.log(this.state.Day1)

//     });
//   }


//   renderDay1Details = ({ item }) => {
//     return (
//             <View>
//                <CardItem style={styles.shadow}>
//           <LinearGradient colors={['#88BE49','#447A47']} style={{alignSelf:'stretch'}}>
//                   <Left style={{flex:1,margin:25}}>
//                       <Icon active name='heart' style={{color:themes.colors.INIT_COLOR_Yellow,fontSize:20}} />
//                   </Left>
//           </LinearGradient>
//                   <Body style={{flex:1}}>
//                       <View style={{flexDirection:'column',marginLeft:9,marginRight:-60,paddingTop:15,marginBottom:15}}>
//                             <View>
//                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,color: themes.colors.INIT_COLOR_Blue,fontFamily: themes.fonts.INIT_FONT_Family}}>
//                   {item.slug}
//                  </Text>
//                  </View>
//                   <View>
//                   <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M,paddingTop:5,color: themes.colors.INIT_COLOR_Grey,textAlign: 'justify',
//   lineHeight: 12,fontFamily: themes.fonts.INIT_FONT_Family}}>
//                   {item.slug}
//                   </Text>
//                 </View>
//                 <View>
//                   <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Indigo,fontFamily: themes.fonts.INIT_FONT_Family}}>
//                   {item.date_and_time}
//                       </Text>
//                   </View>
//                 </View>
//                   </Body>
//                     <Right style={{flex:1,marginLeft:-25}} >
//                   <Button transparent onPress={() => {
//                   this.props.navigation.navigate('TechnicalSession')
//                 }}>
//                  IGCW2019 Completion Ceremony		
//  <Icon name='forward-arrow' style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,color: themes.colors.INIT_COLOR_Green}} />
//                   </Button>
//                   </Right>
//               </CardItem>
//     </View>
//     );
// }

session1InfoScreen = () => {
  this.props.navigation.navigate('AwardsTechnicalSession', {
    eventName: "Welcome, Acknowledgement ",
    eventBody: "Welcome, Acknowledgement ",
    eventDate: "16th October 2019",
    eventSpeakerName:"Mrs. Krishna Padia",
    eventSpeakerImage:"https://www.greenchemistree.co.in/images/GCF%20LOGO.png",
    eventSpeakerOrganization:'Green ChemisTree Foundation Team',

  })
}

session2InfoScreen = () => {
  this.props.navigation.navigate('AwardsTechnicalSession', {
    eventName: "Planery Talk: Green chemistry addressing the UN sustainable development goals    ",
    eventBody: "Planery Talk: Green chemistry addressing the UN sustainable development goals    ",
    eventLocation:"",
    eventDate: "16th October 2019",
    eventSpeakerName:"Dr. John C Warner",
    eventSpeakerDesignation: 'President & CTO',
    eventSpeakerImage:"http://165.22.216.45/wp-content/uploads/2019/08/Dr.-John-Warner-.png",
    eventSpeakerOrganization:'Warner Babcock Institute of Technology, USA',
  })
}
session3InfoScreen = () => {
  this.props.navigation.navigate('InaugurationTechnicalSession1', {
    eventName: "Dignitaries on dias - few words    ",
    eventBody: "Setting context for Inauguration, its importance, Local & global trends in Inauguration, Best practices, tools and techniques used for Environment, Health & Safety    ",
    eventLocation:"",
    eventDate: "16th October 2019",
    eventSpeakerName1:"Mr. Samir Kumar Biswas",
    eventSpeakerImage1:"",
    eventSpeakerDesignation1: 'Joint Secretary, Dept. of Chem & Petrochem',
    eventSpeakerOrganization1:'Ministry of Chem. & Fertilizers, Govt. of India',
    eventSpeakerName2:"Mr. E. Ravindran ",
    eventSpeakerImage2:"data:image/jpeg;base64,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",
    eventSpeakerDesignation2: 'IAS, Member Secretary, Maharashtra ',
    eventSpeakerOrganization2:'Pollution Control Board (MPCB), India',
    eventSpeakerName3:"Mr. Krishnamohan Narayan",
    eventSpeakerImage3:"",
    eventSpeakerDesignation3: 'Managing Director',
    eventSpeakerOrganization3:'BASF India Ltd., India',
    eventSpeakerName5:"Prof. A. K. Suresh",
    eventSpeakerImage5:"http://165.22.216.45/wp-content/uploads/2019/08/Suresh-Kumar.png",
    eventSpeakerDesignation5: 'Dy. Director',
    eventSpeakerOrganization5:'IIT-Bombay',
    eventSpeakerName6:"Prof. Paul Anastas",
    eventSpeakerImage6:"http://165.22.216.45/wp-content/uploads/2019/10/Prof.Paul-Anastas.png",
    eventSpeakerDesignation6: 'Director',
    eventSpeakerOrganization6:' Centre for Green Chemistry & Green Engg. At Yale, USA',
    eventSpeakerName7:"Dr. John Warner",
    eventSpeakerImage7:"http://165.22.216.45/wp-content/uploads/2019/08/Dr.-John-Warner-.png",
    eventSpeakerDesignation7: 'President & CTO',
    eventSpeakerOrganization7:'Warner Babcock Institute of Green Chemsitry, USA',
    eventSpeakerName8:"Dr. David Constable",
    eventSpeakerImage8:"http://165.22.216.45/wp-content/uploads/2019/10/David-Constable.png",
    eventSpeakerDesignation8: 'Science Director',
    eventSpeakerOrganization8:'ACS-Green Chemistry Institute, USA ',
    eventSpeakerName9:"Dr. Claudio Cinquemani",
    eventSpeakerImage9:"http://165.22.216.45/wp-content/uploads/2019/08/Claudio_Chinquemani_web.jpg",
    eventSpeakerDesignation9: 'Research & Innnovation Director',
    eventSpeakerOrganization9:'ISC3, Germany',

  })
}
session4InfoScreen = () => {
  this.props.navigation.navigate('AwardsTechnicalSession2', {
    eventName: "About IGCW2019 Green Chemistry Awards (Nomination Process, Selection Process, Criteria)    ",
    eventBody: "About IGCW2019 Green Chemistry Awards (Nomination Process, Selection Process, Criteria)    ",
    eventLocation:"",
    eventDate: "16th October 2019",
    eventSpeakerName1:"Mr. Harish Verma   ",
    eventSpeakerName2:"Ms. Ashwini Gunnal",
    eventSpeakerImage1:"http://165.22.216.45/wp-content/uploads/2019/10/Harish-Verma.png",
    eventSpeakerName2:"Mr. Nitesh Mehta",
    eventSpeakerImage2:"",
    eventSpeakerDesignation2: '',
    eventSpeakerOrganization2:'',
    eventSpeakerName3:"Dr. David Constable",
    eventSpeakerImage3:"http://165.22.216.45/wp-content/uploads/2019/10/David-Constable.png",
    eventSpeakerDesignation3: 'Science Director',
    eventSpeakerOrganization3:'ACS-Green Chemistry Institute, USA ',
    eventSpeakerDesignation1: ' Vice President & Global Head - Awards',
    eventSpeakerOrganization1:' Cipla Ltd., India ',
  })
}
session5InfoScreen = () => {
  this.props.navigation.navigate('AwardsTechnicalSession', {
    eventName: "Acknowledgements & Concluding Remarks    ",
    eventBody: "Acknowledgements & Concluding Remarks    ",
    eventLocation:"",
    eventDate: "16th October 2019",
    eventSpeakerName:"Green ChemisTree Foundation Team    ",
    eventSpeakerImage:"https://www.greenchemistree.co.in/images/GCF%20LOGO.png",
    eventSpeakerDesignation:'Green ChemisTree Foundation Team  ',

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
                        <Text style={{alignItems:'center',marginLeft:-50,marginLeft:-50,color:themes.colors.INIT_COLOR_White,width:widthPercentageToDP('85%'),fontFamily:themes.fonts.INIT_FONT_Family,fontSize:14}} >IGCW2019 GC Awards Evening Dashboard	</Text>
                        </Body>
                        <Right style={{flex:1,alignSelf:'center'}} />
                </Header>
                </LinearGradient>
                <View>
                  <TouchableWithoutFeedback onPress={() => this.session1InfoScreen()}>
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
                 Welcome & Acknowledgements
                 </Text>
                 </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Indigo,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  6:30 pm - 6:40 pm
                      </Text>
                  </View>
                </View>
                  </Body>
                    <Right style={{flex:1,marginLeft:-25}} >
                  <Button transparent>
                  <Icon name='forward-arrow' style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,color: themes.colors.INIT_COLOR_Green}} />
                  </Button>
                  </Right>
              </CardItem>
              </TouchableWithoutFeedback>
    </View>
                <View>
                  <TouchableWithoutFeedback onPress={() => this.session2InfoScreen()}>
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
                 Planery Talk: Green chemistry addressing the UN sustainable development goals
                 </Text>
                 </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Indigo,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  6:40 pm - 7:10 pm
                      </Text>
                  </View>
                </View>
                  </Body>
                    <Right style={{flex:1,marginLeft:-25}} >
                  <Button transparent>
                  <Icon name='forward-arrow' style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,color: themes.colors.INIT_COLOR_Green}} />
                  </Button>
                  </Right>
              </CardItem>
              </TouchableWithoutFeedback>
    </View>
    <View>
    <TouchableWithoutFeedback onPress={() => this.session3InfoScreen()}>
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
                 Dignitaries on dias - few words
                 </Text>
                 </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Indigo,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  7:10 pm - 7:30 pm
                      </Text>
                  </View>
                </View>
                  </Body>
                    <Right style={{flex:1,marginLeft:-25}} >
                    <Button transparent>
                  <Icon name='forward-arrow' style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,color: themes.colors.INIT_COLOR_Green}} />
                  </Button>
                  </Right>
              </CardItem>
              </TouchableWithoutFeedback>
    </View>
    <View>
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
                 Acknowledgements for Mentors, Jury, Supporters

                 </Text>
                 </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Indigo,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  7:30 pm - 7:45 pm
                      </Text>
                  </View>
                </View>
                  </Body>
                    <Right style={{flex:1,marginLeft:-25}} >
              
                  </Right>
              </CardItem>
    </View>
  
                <View>
                  <TouchableWithoutFeedback onPress={() => this.session4InfoScreen()}>
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
                 About IGCW2019 Green Chemistry Awards (Nomination Process, Selection Process, Criteria)
                 </Text>
                 </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Indigo,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  7:45 pm - 8:00 pm
                      </Text>
                  </View>
                </View>
                  </Body>
                    <Right style={{flex:1,marginLeft:-25}} >
                  <Button transparent>
                  <Icon name='forward-arrow' style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,color: themes.colors.INIT_COLOR_Green}} />
                  </Button>
                  </Right>
              </CardItem>
              </TouchableWithoutFeedback>
    </View>
                <View>
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
                 IGCW Green Chemistry Award Felicitation Ceremony
                 </Text>
                 </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Indigo,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  7:45 pm - 8:15 pm
                      </Text>
                  </View>
                </View>
                  </Body>
                    <Right style={{flex:1,marginLeft:-25}} >
                 </Right>
              </CardItem>
    </View>
                <View>
                  <TouchableWithoutFeedback onPress={() => this.session5InfoScreen()}>
               <CardItem style={styles.shadow}>
          <LinearGradient colors={['#88BE49','#447A47']} style={{alignSelf:'stretch'}}>
                  <Left style={{flex:1,margin:25}}>
                      <Icon active name='heart' style={{color:themes.colors.INIT_COLOR_Yellow,fontSize:20}} />
                  </Left>
          </LinearGradient>
                  <Body style={{flex:1}}>
                      <View style={{flexDirection:'column',marginLeft:9,marginRight:-60,paddingTop:15,marginBottom:15}}>
                            <View>
                 <Text style={{width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_XL,color: themes.colors.INIT_COLOR_Blue,fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-50}}>
                 Acknowledgements & Concluding Remarks
                 </Text>
                 </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Indigo,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  8:15 pm - 8:30 pm
                      </Text>
                  </View>
                </View>
                  </Body>
                    <Right style={{flex:1,marginLeft:-25}} >
                  <Button transparent>
                  <Icon name='forward-arrow' style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,color: themes.colors.INIT_COLOR_Green}} />
                  </Button>
                  </Right>
              </CardItem>
              </TouchableWithoutFeedback>
    </View>
    <View>
               <CardItem style={styles.shadow}>
          <LinearGradient colors={['#88BE49','#447A47']} style={{alignSelf:'stretch'}}>
                  <Left style={{flex:1,margin:25}}>
                      <Icon active name='heart' style={{color:themes.colors.INIT_COLOR_Yellow,fontSize:20}} />
                  </Left>
          </LinearGradient>
                  <Body style={{flex:1}}>
                      <View style={{flexDirection:'column',marginLeft:9,marginRight:-60,paddingTop:15,marginBottom:15}}>
                            <View>
                 <Text style={{width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_XL,color: themes.colors.INIT_COLOR_Blue,fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-50}}>
                 Networking Dinner	
                 </Text>
                 </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Indigo,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  8:30 pm Onwards
                      </Text>
                  </View>
                </View>
                  </Body>
                    <Right style={{flex:1,marginLeft:-25}} >
                 </Right>
              </CardItem>
    </View>
       </ScrollView>
            </Container>
        );
    }
}

const TabNavigator = createBottomTabNavigator(  
  {  
    
    Home:{  
      screen:AwardsTechnicalAndSpecialEvents,  
      navigationOptions:{ 
        tabBarLabel:'Home',  
        tabBarIcon:({tintColor})=>(  
            tintColor=themes.colors.INIT_COLOR_Green,
            <Icon name="store" color={tintColor} style={{paddingTop:8}}  size={22}/>  
        )  
      }  
    },  
    Map:{  
        screen:FloorPlan4,  
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
        shadowColor: "black",
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
      shadowColor: "black",
      shadowOpacity: 10,
      shadowRadius: 5
  },
};