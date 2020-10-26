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

session3InfoScreen = () => {
  this.props.navigation.navigate('SPCITechnicalSession', {
    eventName: "Welcome and Introduction to Conference on Green Chemistry for Speciality & Fine Chemicals Industry Secto    ",
    eventBody: ""   ,
    eventLocation:"",
    eventDate: "17th October 2019",
    eventSpeakerName:"Dr. Rahul Nabar",
        // eventSpeakerImage:item.speaker[0].profile_image.guid,
    eventSpeakerDesignation: 'Dept. of Chemical Engineering,',
    eventSpeakerOrganization:'IIT-Bombay, India	',
  })
}
session4InfoScreen = () => {
  this.props.navigation.navigate('SPCITechnicalSession', {
    eventName: "Keynote: Innovating for a Sustainable Future    ",
    eventBody: "Global & local trends in Speciality & Fine Chemicals industry, our mindset, gaps & challenges at hand and future direction. Need for green chemistry to achieve sustainability.     ",
    eventLocation:"",
    eventDate: "17th October 2019",
    eventSpeakerName:"Dr. Achala Danait   ",
    eventSpeakerImage:"http://165.22.216.45/wp-content/uploads/2019/10/Dr.-Achala-.png",
    eventSpeakerDesignation: ' Vice President, Regional Innovation Centre',
    eventSpeakerOrganization:' Clariant Chemicals (India) Ltd., India ',
  })
}
session5InfoScreen = () => {
  this.props.navigation.navigate('SPCITechnicalSession', {
    eventName: "Green Sustainable processes to generate Bio-based Ingredients    ",
    eventBody: "Green Chemistry initiatives at L'oreal, successful case studies and impact    ",
    eventLocation:"",
    eventDate: "17th October 2019",
    eventSpeakerName:"Dr. Steve Thomas Pannakal",
    eventSpeakerImage:"http://165.22.216.45/wp-content/uploads/2019/08/Dr.-Steve.png",
    eventSpeakerDesignation:'Principal Scientist & Head (Bio-technology),Center of Excellence for Natural Extracts',
    eventSpeakerOrganization:' Asia, Research & Innovation, LOreal India Pvt. Ltd India'

  })
}
session6InfoScreen = () => {
  this.props.navigation.navigate('SPCITechnicalSession', {
    eventName: "Sustainability and Responsible Care Excellence at BASF    ",
    eventBody: "BASF's commitment to environmental sustainability, EHS tools/best practices used, some successful Green Chemistry & Green Engineering case studies    ",
    eventLocation:"",
    eventDate: "17th October 2019",
    eventSpeakerName:"Dr. Dhananjay Deulgaonkar ",
    eventSpeakerImage:"http://165.22.216.45/wp-content/uploads/2019/10/Dr.-Dhananjay-Deulgaonkar.png",
    eventSpeakerDesignation: 'EHS Manager-Innovation Campus Mumbai and Sub Regional Environment Safety Manager',
    eventSpeakerOrganization:'South Asia, BASF India Ltd., India',
  })
}
session7InfoScreen = () => {
  this.props.navigation.navigate('SPCITechnicalSession', {
    eventName: "Green Chemistry initiatives in Process developments at Excel Industries Limited    ",
    eventBody: "Excel's commitment to environmental sustainability, various Green Chemistry case studies around Catalysis, Atom Economy, Safer Solvents, etc. Sharing pilot scale results on Renewable Feedstock to Energy    ",
    eventLocation:"",
    eventDate: "17th October 2019",
    eventSpeakerName:"Dr. Laxmikant Patil ",
    eventSpeakerDesignation: 'Chief Manager - R&D',
    eventSpeakerImage:"http://165.22.216.45/wp-content/uploads/2019/09/Dr-Patil..jpg",
    eventSpeakerOrganization:'Excel Industries Ltd., India ',
  })
}
session8InfoScreen = () => {
  this.props.navigation.navigate('SPCITechnicalSession', {
    eventName: "My experiences with Flow Chemistry    ",
    eventBody: "Case Studies on use of Continuous Flow Reactors for different chemical procresses    ",
    eventLocation:"",
    eventDate: "17th October 2019",
    eventSpeakerName:"Dr. Balakrishnan Ganesan",
    eventSpeakerImage:"http://165.22.216.45/wp-content/uploads/2019/09/balakrishnan.png",
    eventSpeakerDesignation:'Research Director .',
    eventSpeakerOrganization:'Chemical Development Group, Syngene International Ltd., India',
  })
}
session9InfoScreen = () => {
  this.props.navigation.navigate('SPCITechnicalSession', {
    eventName: "Biopolymers & Adhesives    ",
    eventBody: "Green Chemistry & Green Engineering tools and techniques being explored by Pidilite & its impact on economics & environment    ",
    eventLocation:"",
    eventDate: "17th October 2019",
    eventSpeakerName:"Mr. R. N. Mohanty ",
    eventSpeakerImage:"http://165.22.216.45/wp-content/uploads/2019/08/Mr.-Mohanti.jpg",
    eventSpeakerDesignation:'President',
    eventSpeakerOrganization:'Technology, Pidilite Industries Ltd., India.',
    // eventSpeakerImage:item.speaker[0].profile_image.guid,
    // eventSpeakerDesignation:item.speaker[0].speaker_designation,
    // eventSpeakerOrganization:item.speaker[0].speaker_organization,
  })
}
session10InfoScreen = () => {
  this.props.navigation.navigate('SPCITechnicalSession', {
    eventName: "Green Chemistry through effective Industry-Academia Collaborations: Challenges and Opportunities    ",
    eventBody: "Challenges at the interface of Industry & Academic Collaboration, its need to increase penetration of Green Chemistry in Specialty & Fine Chemicals Industry    ",
    eventLocation:"",
    eventDate: "17th October 2019",
    eventSpeakerName:"Dr. Rahul Nabar  ",
    eventSpeakerDesignation:' Dept. of Chem. Engg.',
    eventSpeakerOrganization:'IIT-Bombay, India',    // eventSpeakerImage:item.speaker[0].profile_image.guid,
    // eventSpeakerDesignation:item.speaker[0].speaker_designation,
    // eventSpeakerOrganization:item.speaker[0].speaker_organization,
  })
}
session11InfoScreen = () => {
  this.props.navigation.navigate('SPCITechnicalSession', {
    eventName: "Bio-based Chemicals: Future of the Chemical Industry    ",
    eventBody: "Bio-based Chemicals: Future of the Chemical Industry    ",
    eventLocation:"",
    eventDate: "17th October 2019",
    eventSpeakerName:"Mr. Shirish Paranjpe    ",
    eventSpeakerDesignation:'Marketing Manager',
    eventSpeakerOrganization:'Godavari Biorefineries Ltd., India', 
    eventSpeakerImage:"http://165.22.216.45/wp-content/uploads/2019/09/Shirish-Paranjpe.jpg",
    // eventSpeakerImage:item.speaker[0].profile_image.guid,
    // eventSpeakerDesignation:item.speaker[0].speaker_designation,
    // eventSpeakerOrganization:item.speaker[0].speaker_organization,
  })
}
session12InfoScreen = () => {
  this.props.navigation.navigate('SPCITechnicalSession', {
    eventName: "Contributions from NCL in Green Catalysis    ",
    eventBody: "Contributions from NCL in Green Catalysis    ",
    eventLocation:"",
    eventDate: "17th October 2019",
    eventSpeakerName:"Dr. Paresh L. Dhepe    ",
    eventSpeakerImage:"http://165.22.216.45/wp-content/uploads/2019/10/pl.dhepe_46_big.png",
    eventSpeakerDesignation:'Principal Senior Scientist, Catalysis & Inorganic Chemistry Division',
    eventSpeakerOrganization:'CSIR-National Chemical Laboratories, India',    // eventSpeakerImage:item.speaker[0].profile_image.guid,
    // eventSpeakerDesignation:item.speaker[0].speaker_designation,
    // eventSpeakerOrganization:item.speaker[0].speaker_organization,
  })
}
session13InfoScreen = () => {
  this.props.navigation.navigate('SPCITechnicalSession', {
    eventName: "Recent Trends in IT enabled Process Engineering    ",
    eventBody: "Using information technology solutions to optimize processes to reduce environmental footprint & improve economic performance, new software tools    ",
    eventLocation:"",
    eventDate: "17th October 2019",
    eventSpeakerName:"Mr. Alok Pandit    ",
    eventSpeakerDesignation:'CEO',
    eventSpeakerImage:"http://165.22.216.45/wp-content/uploads/2019/10/Alok-Pandit.png",
    eventSpeakerOrganization:'Equinox Software & Services Pvt. Ltd., India',    // eventSpeakerImage:item.speaker[0].profile_image.guid,
    // eventSpeakerDesignation:item.speaker[0].speaker_designation,
    // eventSpeakerOrganization:item.speaker[0].speaker_organization,
  })
}
session14InfoScreen = () => {
  this.props.navigation.navigate('SPCITechnicalSession', {
    eventName: "Close Circuit Spray Dryers for Pharmaceutical & Chemical Industry, highlighting energy efficiency & modern  Safety features    ",
    eventBody: "Spray dryers principles, closed circuit dryers, drying products soluble in solvent other than water    ",
    eventLocation:"",
    eventDate: "17th October 2019",
    eventSpeakerName:"Mr. Prashant S. Dravid   ",
    eventSpeakerDesignation:'Director',
    eventSpeakerOrganization:'Systems Sales, SPXFlow Technology (India) Pvt. Ltd., India',    // eventSpeakerImage:item.speaker[0].profile_image.guid,
    // eventSpeakerDesignation:item.speaker[0].speaker_designation,
    // eventSpeakerOrganization:item.speaker[0].speaker_organization,
  })
}
session15InfoScreen = () => {
  this.props.navigation.navigate('SPCITechnicalSession', {
    eventName: "Closing Remarks & Acknowledgements    ",
    eventBody: "Closing Remarks & Acknowledgements    ",
    eventLocation:"",
    eventDate: "17th October 2019",
    eventSpeakerName:"Mr. R. N. Mohanty",
    eventSpeakerDesignation:'President',
    eventSpeakerOrganization:'Technology, Pidilite Industries Ltd., India ',    // eventSpeakerImage:item.speaker[0].profile_image.guid,
    // eventSpeakerDesignation:item.speaker[0].speaker_designation,
    // eventSpeakerOrganization:item.speaker[0].speaker_organization,
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
                        <Text style={{alignItems:'center',marginLeft:-50,marginLeft:-50,color:themes.colors.INIT_COLOR_White,width:widthPercentageToDP('80%'),fontFamily:themes.fonts.INIT_FONT_Family,fontSize:14}} >      Green Chemistry for Speciality  </Text>
                        <Text style={{alignItems:'center',marginLeft:-50,marginLeft:-50,color:themes.colors.INIT_COLOR_White,width:widthPercentageToDP('80%'),fontFamily:themes.fonts.INIT_FONT_Family,fontSize:14}} >& Fine Chemicals Industry  Dashboard</Text>
                        </Body>
                        <Right style={{flex:1,alignSelf:'center'}}>
                          </Right>
                </Header>
                </LinearGradient>
                
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
                 Welcome and Introduction to Conference on "Green Chemistry for Speciality & Fine Chemicals Industry Sector"
                 </Text>
                 </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Indigo,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  11:00 am - 11:10 am
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
                 Keynote: Innovating for a Sustainable Future
                 </Text>
                 </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Indigo,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  11:10 am - 11:40 pm
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
                 Green Sustainable processes to generate Bio-based Ingredients
                 </Text>
                 </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Indigo,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  11:40 pm - 12:10 pm
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
                      <Icon active name='heart' style={{color:themes.colors.INIT_COLOR_Yellow,fontSize:20}} />
                  </Left>
          </LinearGradient>
                  <Body style={{flex:1}}>
                      <View style={{flexDirection:'column',marginLeft:9,marginRight:-60,paddingTop:15,marginBottom:15}}>
                            <View>
                 <Text style={{width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_XL,color: themes.colors.INIT_COLOR_Blue,fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-50}}>
                 Sustainability and Responsible Care Excellence at BASF
                 </Text>
                 </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Indigo,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  12:10 pm - 12:40 pm
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
                  12:40 pm - 2:00 pm
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
                 Green Chemistry initiatives in Process developments at Excel Industries Limited
                 </Text>
                 </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Indigo,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  2:00 pm - 2:30 pm
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
                 My experiences with Flow Chemistry
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
                 Biopolymer based Green Adhesives
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
                  3:30 pm - 4:10 pm
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
                 Green Chemistry through effective Industry-Academia Collaborations: Challenges and Opportunities
                 </Text>
                 </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Indigo,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  4:10 pm - 4:25 pm
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
                 Bio-based Chemicals: Future of the Chemical Industry
                 </Text>
                 </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Indigo,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  4:25 pm - 4:40 pm
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
                 Contributions from NCL in Green Catalysis
                 </Text>
                 </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Indigo,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  4:40 pm - 4:55 pm
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
                 Recent Trends in IT enabled Process Engineering
                 </Text>
                 </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Indigo,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  4:55 pm - 5:10 pm
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
                  <TouchableWithoutFeedback onPress={() => this.session14InfoScreen()}>
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
                 Close Circuit Spray Dryers for Pharmaceutical & Chemical Industry, highlighting energy efficiency & modern  Safety features
                 </Text>
                 </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Indigo,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  5:10 pm - 5:25 pm
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
                  <TouchableWithoutFeedback onPress={() => this.session15InfoScreen()}>
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
                  5:25 pm - 5:30 pm
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
                  5:30 pm - 6:00 pm
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