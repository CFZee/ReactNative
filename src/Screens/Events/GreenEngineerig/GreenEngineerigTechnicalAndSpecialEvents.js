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

class TechnicalAndSpecialEvents extends Component {
//   constructor() {
//     super();
//     this.state = { Day1: []  },
//     this.state = { Day2: []  },
//     this.state = { Day3: []  },


//     this.state = {
//      customStyleIndex: 0,
//       };
//     this.state = {
//         show: true,
//       };
//       this.state = {
//         show2: true,
//       };
//       this.state = {
//         show3: true,
//       };
//       this.state={
//         toggle:false,
//         toggle2:false,
//         toggle3:true
//     }
// }

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


session4InfoScreen = () => {
  this.props.navigation.navigate('GreenEngineerigTechnicalSession', {
    eventName: "Welcome & Introduction to Workshop on Green Engineering",
    eventBody: " ",
    eventLocation:"",
    eventDate: "16th October 2019",
    eventSpeakerImage:"http://165.22.216.45/wp-content/uploads/2019/10/Prof.-R-Gudi.png",
    eventSpeakerName:" Prof. R. D. Gudi   ",    
    eventSpeakerDesignation: ' HOD, Dept. of Chemical Engineering',
    eventSpeakerOrganization:' IIT-Bombay	 ',
  })
}
session5InfoScreen = () => {
  this.props.navigation.navigate('GreenEngineerigTechnicalSession', {
    eventName: "Key Note: Green and sustainable chemistry and engineering – the two are inseparable    ",
    eventBody: "Introduction to Green Engineering, Inherent Safety    ",
    eventLocation:"",
    eventDate: "16th October 2019",
    eventSpeakerName:"Dr. David Constable",
    eventSpeakerImage:"http://165.22.216.45/wp-content/uploads/2019/10/David-Constable.png",
    eventSpeakerDesignation:'Science Director',
    eventSpeakerOrganization:'ACS-Green Chemistry Institute, USA',

  })
}
session6InfoScreen = () => {
  this.props.navigation.navigate('GreenEngineerigTechnicalSession', {
    eventName: "Examples of Intensified Separations for Greener Processes    ",
    eventBody: "Advanced Separations in API Operations, purification of thermally labile products    ",
    eventLocation:"",
    eventDate: "16th October 2019",
    eventSpeakerImage:"http://165.22.216.45/wp-content/uploads/2019/08/Dr.-Chuck-Orella.jpg",
    eventSpeakerName:"Dr. Chuck Orella  ",
    eventSpeakerDesignation: 'Director Chemical Engineering R&D',
    eventSpeakerOrganization:'Merck & Co. Inc., USA',
  })
}
session7InfoScreen = () => {
  this.props.navigation.navigate('GreenEngineerigTechnicalSession', {
    eventName: "Continuous Flow Process: A New Paradigm in Green Chemistry    ",
    eventBody: "Fundamentals of Flow Reactors    ",
    eventLocation:"",
    eventDate: "16th October 2019",
    eventSpeakerImage:"http://165.22.216.45/wp-content/uploads/2019/08/Mr.-Anil-Kumar-Jain.png",
    eventSpeakerName:"Prof. Anil Kumar  ",
    eventSpeakerDesignation: 'Chair Professor',
    eventSpeakerOrganization:'Continuous Flow Chemistry Lab, Chemistry Department, IIT-Bombay, India ',
  })
}
session8InfoScreen = () => {
  this.props.navigation.navigate('GreenEngineerigTechnicalSession', {
    eventName: "Flow Chemistry leading to Green Re-Engineering of Chemical Plant    ",
    eventBody: "Flow Reactors: Recent advances & Scale-up in India    ",
    eventLocation:"",
    eventDate: "16th October 2019",
    eventSpeakerName:"Mr. Vijay Kirpalani",
    eventSpeakerImage:"http://165.22.216.45/wp-content/uploads/2019/08/Vijay-Kirpalani.png",
    eventSpeakerDesignation:'CEO.',
    eventSpeakerOrganization:' Pi-Process Intensification Experts LLP, India    ',
  })
}
session9InfoScreen = () => {
  this.props.navigation.navigate('GreenEngineerigTechnicalSession', {
    eventName: "New Developments in Process Intensification - Reactors & Chromatographic Separations    ",
    eventBody: "New developments in Process Intensification     ",
    eventLocation:"",
    eventDate: "16th October 2019",
    eventSpeakerName:"Dr. Deepak Palekar  ",
    eventSpeakerDesignation:'Head - Strategy & Technology',
    eventSpeakerOrganization:'STEP Pvt. Ltd., India.',
    eventSpeakerImage:"http://165.22.216.45/wp-content/uploads/2019/08/Deepak-sir1.jpg",
  })
}
session10InfoScreen = () => {
  this.props.navigation.navigate('GreenEngineerigTechnicalSession', {
    eventName: "Role of Green Engineering/Chemistry in promoting sustainability practices    ",
    eventBody: "Design/retrofit of chemical processes to be done through concept of Sustainability and using Green Engineering as a tool    ",
    eventLocation:"",
    eventDate: "16th October 2019",
    eventSpeakerName:"Prof. Ravindra Gudi  ",
    eventSpeakerDesignation:'  HOD, Dept. of Chemical Engg.',
    eventSpeakerOrganization:'IIT-Bombay',
    eventSpeakerImage:"http://165.22.216.45/wp-content/uploads/2019/10/Prof.-R-Gudi.png",
  })
}
session11InfoScreen = () => {
  this.props.navigation.navigate('GreenEngineerigTechnicalSession', {
    eventName: "Process optimization and industrial scale-up: Mettler Toledo Solutions    ",
    eventBody: "Process optimization and scale-up of industrial processes safely    ",
    eventLocation:"",
    eventDate: "16th October 2019",
    eventSpeakerImage:"http://165.22.216.45/wp-content/uploads/2019/08/prashant-waske.png",
    eventSpeakerName:"Dr. Prashant Waske    ",
    eventSpeakerDesignation:'Sr. Manager - IMSG (AutoChem)',
    eventSpeakerOrganization:'Mettler Toledo India Pvt. Ltd., India',
  })
}

session12InfoScreen = () => {
  this.props.navigation.navigate('GreenEngineerigTechnicalSession', {
    eventName: "Smashing the shackles of Mass Transfer    ",
    eventBody: "Effective mixing/agitation - a green engineering tool to impact competitiveness and reduce environmental footprint",
    eventLocation:"",
    eventDate: "16th October 2019",
    eventSpeakerName:"Mr. Vineet Shroff    ",
    eventSpeakerDesignation:'CEO',
    eventSpeakerOrganization:'Standard Engineers, India', 
    eventSpeakerImage:"http://165.22.216.45/wp-content/uploads/2019/09/Mr-Vineet-Shroff..jpg",
  })
}
session13InfoScreen = () => {
  this.props.navigation.navigate('GreenEngineerigTechnicalSession', {
    eventName: "Closing Remarks & Acknowledgements    ",
    eventBody: "Closing Remarks & Acknowledgements    ",
    eventLocation:"",
    eventDate: "16th October 2019",
    eventSpeakerName:"Dr. Deepak Palekar ",
    eventSpeakerDesignation:'Head - Strategy & Technology',
    eventSpeakerOrganization:'STEP Pvt. Ltd., India    ', 
    eventSpeakerImage:"http://165.22.216.45/wp-content/uploads/2019/09/Mr-Vineet-Shroff..jpg",
  })
}

    render() {
        return(
            <Container style={styles.Container,{backgroundColor:'#D9DCDE'}}>
                <ScrollView>
                <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 1}} colors={['#88BE49','#447A47']} style={{flex:1}}>
                <Header transparent androidStatusBarColor='transparent' style={{height:100}}>
            <Left style={{flex:1,alignSelf:'center'}}>
                <Button style={{height:heightPercentageToDP('10%'),width:widthPercentageToDP('10%')}} transparent onPress={() => this.props.navigation.dispatch(StackActions.popToTop())}>
                    <Icon name='back-arrow' style={{color:'white',fontSize:20}}/>
                    </Button>
                    </Left>
                    <Body style={{flex:1,marginLeft:60,alignSelf:'center'}}>
                        <Text style={{alignItems:'center',marginLeft:-50,marginLeft:-50,color:themes.colors.INIT_COLOR_White,width:widthPercentageToDP('90%'),fontFamily:themes.fonts.INIT_FONT_Family,fontSize:14}} > Workshop on Green Engineering Dashboard</Text>
                        </Body>
                        <Right style={{flex:1,alignSelf:'center'}}>
                          </Right>
                </Header>
                </LinearGradient>
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
                 Welcome & Introduction to "Workshop on Green Engineering" by Prof. R. D. Gudi, HOD, Dept. of Chemical Engineering, IIT-Bombay	
                 </Text>
                 </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Indigo,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  11:30 am - 11:40 am
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
                  <TouchableWithoutFeedback onPress={() => this.session5InfoScreen()}>
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
                 Key Note: Green and sustainable chemistry and engineering – the two are inseparable
                 </Text>
                 </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Indigo,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  11:40 am - 12:30 pm
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
                  <TouchableWithoutFeedback onPress={() => this.session6InfoScreen()}>
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
                 Examples of Intensified Separations for Greener Processes
                 </Text>
                 </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Indigo,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  12:30 pm - 1:00 pm
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
                 Lunch Break, Visiting IGCW Expo		
                 </Text>
                 </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Indigo,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  1:00 pm - 2:30 pm
                      </Text>
                  </View>
                </View>
                  </Body>
                    <Right style={{flex:1,marginLeft:-25}} >
                  
                  </Right>
              </CardItem>
    </View>
                <View>
                  <TouchableWithoutFeedback onPress={() => this.session7InfoScreen()}>
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
                 Continuous Flow Process: A New Paradigm in Green Chemistry
                 </Text>
                 </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Indigo,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  2:30 pm - 3:00 pm
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
                  <TouchableWithoutFeedback onPress={() => this.session8InfoScreen()}>
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
                 Flow Chemistry leading to Green Re-Engineering of Chemical Plant
                 </Text>
                 </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Indigo,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  3:00 pm - 3:30 pm
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
                  <TouchableWithoutFeedback onPress={() => this.session9InfoScreen()}>
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
                 New Developments in Process Intensification - Reactors & Chromatographic Separations
                 </Text>
                 </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Indigo,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  3:30 pm - 4:00 pm
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
                 Tea/Coffeee Break, Visiting IGCW Expo		
                 </Text>
                 </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Indigo,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  4:00 pm - 4:40 pm
                      </Text>
                  </View>
                </View>
                  </Body>
                    <Right style={{flex:1,marginLeft:-25}} >
                  
                  </Right>
              </CardItem>
    </View>
    <View>
                  <TouchableWithoutFeedback onPress={() => this.session10InfoScreen()}>
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
                 Role of Green Engineering/Chemistry in promoting sustainability practices
                 </Text>
                 </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Indigo,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  4:40 pm - 5:00 pm
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
                  <TouchableWithoutFeedback onPress={() => this.session11InfoScreen()}>
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
                 Process optimization and industrial scale-up: Mettler Toledo Solutions
                 </Text>
                 </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Indigo,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  5:00 pm - 5:20 pm
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
                  <TouchableWithoutFeedback onPress={() => this.session12InfoScreen()}>
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
                 Smashing the shackles of Mass Transfer
                 </Text>
                 </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Indigo,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  5:20 pm - 5:40 pm
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
                  <TouchableWithoutFeedback onPress={() => this.session13InfoScreen()}>
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
                 Closing Remarks & Acknowledgements
                 </Text>
                 </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Indigo,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  5:30 pm - 5:45 pm
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
               <CardItem style={styles.shadow2}>
          <LinearGradient colors={['#88BE49','#447A47']} style={{alignSelf:'stretch'}}>
                  <Left style={{flex:1,margin:25}}>
                      <Icon active name='heart' style={{color:themes.colors.INIT_COLOR_Yellow,fontSize:20}} />
                  </Left>
          </LinearGradient>
                  <Body style={{flex:1}}>
                      <View style={{flexDirection:'column',marginLeft:9,marginRight:-60,paddingTop:15,marginBottom:15}}>
                            <View>
                 <Text style={{width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_XL,color: themes.colors.INIT_COLOR_Blue,fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-50}}>
                 Tea/Coffeee Break, Visiting IGCW Expo		
                 </Text>
                 </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Indigo,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  5:45 pm - 6:30 pm
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