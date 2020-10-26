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
//                       <Icon active name='heart' style={{color:themes.colors.INIT_COLOR_Yellow,fontSize:20}} onPress={this.onress}/>
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
//                   <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Green,fontFamily: themes.fonts.INIT_FONT_Family}}>
//                   {item.date_and_time}
//                       </Text>
//                   </View>
//                 </View>
//                   </Body>
//                     <Right style={{flex:1,marginLeft:-25}} >
//                   <Button transparent onPress={() => {
//                   this.props.navigation.navigate('TechnicalSession')
//                 }}>
//                   <Icon name='forward-arrow' style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,color: themes.colors.INIT_COLOR_Green}} />
//                   </Button>
//                   </Right>
//               </CardItem>
//     </View>
//     );
// }


session3InfoScreen = () => {
  this.props.navigation.navigate('PharmaTechnicalSession', {
    eventName: "Welcome and Introduction to the Conference on Green Chemistry for Pharma/API Industry Sector ",
    eventBody: "Day I Inaugural Keynote Address (Main Auditorium): Green Chemistry and The Future",
    eventLocation:"",
      eventDate: "17th October 2019",
    eventSpeakerName:" Dr. Rahul Purwar   ",
    eventSpeakerImage:"http://165.22.216.45/wp-content/uploads/2019/10/rpurwar.jpg",
    eventSpeakerDesignation: 'Associate Professor',
    eventSpeakerOrganization:'Dept. of Biosciences & Biotechnology, IIT-Bombay, India ',
  })
}
session4InfoScreen = () => {
  this.props.navigation.navigate('PharmaTechnicalSession', {
    eventName: "Keynote: Business Case for Green and Sustainable Chemistry Development at MSD    ",
    eventBody: "Business case for Green Chemistry    ",
    eventLocation:"",
      eventDate: "17th October 2019",
    eventSpeakerName:"Dr. Guy Humphrey   ",
    eventSpeakerImage:"http://165.22.216.45/wp-content/uploads/2019/08/Dr.-Guy-Humphrey.jpg",
    eventSpeakerDesignation: 'Distinguished Scientist',
    eventSpeakerOrganization:'Merck, Sharp & Dohme (MSD), USA ',
  })
}
session5InfoScreen = () => {
  this.props.navigation.navigate('PharmaTechnicalSession', {
    eventName: "Pfizer’s Green Journey – Working for a Sustainable Future    ",
    eventBody: "Green Chemistry at Pfizer - initiatives, tools & techniques being used, successful case studies    ",
    eventLocation:"",
      eventDate: "17th October 2019",
    eventSpeakerName:"Dr. Rajesh Kumar",
    eventSpeakerImage:"http://165.22.216.45/wp-content/uploads/2019/09/rajesh-kumar-pifizer.jpg",
    eventSpeakerDesignation:'Chair Pfizer',
    eventSpeakerOrganization:'WRD Green Chemistry Team & Associate Research Fellow, Biocatalysis Group, Pfizer Inc., USA',

  })
}
session6InfoScreen = () => {
  this.props.navigation.navigate('PharmaTechnicalSession', {
    eventName: "Sustainability & Green Chemistry Initiatives at Sun Pharma - solvent & water savings, flow chemistry   ",
    eventBody: "Sustainability & Green Chemistry Initiatives at Sun Pharma - solvent & water savings, flow chemistry, waste reduction, etc    ",
    eventLocation:"",
      eventDate: "17th October 2019",
    eventSpeakerName:"Mr. Anil Kumar Jain   ",
    eventSpeakerImage:"http://165.22.216.45/wp-content/uploads/2019/10/AnilJain.png",
    eventSpeakerDesignation: ' CEO - API Business',
    eventSpeakerOrganization:'Sun Pharmaceutical Industries Ltd., India',
  })
}
session7InfoScreen = () => {
  this.props.navigation.navigate('PharmaTechnicalSession', {
    eventName: "Anthem’s Approach Towards Greener Chemistry    ",
    eventBody: "Greener approaches to in chemical processes to reduce effluent end and make it safer    ",
    eventLocation:"",
      eventDate: "17th October 2019",
    eventSpeakerName:"Dr. Ganesh Sambasivam",
    eventSpeakerImage:"http://165.22.216.45/wp-content/uploads/2019/10/Dr.Ganesh-.png",
    eventSpeakerDesignation:'Co-Founder & CSO',
    eventSpeakerOrganization:'Anthem Biosciences Pvt. Ltd., India',
  })
}
session8InfoScreen = () => {
  this.props.navigation.navigate('PharmaTechnicalSession', {
    eventName: "Chemistry Connect between Flow and Green: An Industrial Perspective    ",
    eventBody: "Flow Chemistry application in to API manufacturing    ",
    eventLocation:"",
      eventDate: "17th October 2019",
    eventSpeakerName:" Dr. Rakeshwar Bandichhor",
    eventSpeakerImage:"http://165.22.216.45/wp-content/uploads/2019/08/Dr.-Rakeshwar-Bandichhor.jpg",
    eventSpeakerDesignation:'Head',
    eventSpeakerOrganization:'Chemistry-API-PR&D, IPDO, Dr. Reddys Laboratories Ltd., India',
  })
}
session9InfoScreen = () => {
  this.props.navigation.navigate('PharmaTechnicalSession', {
    eventName: "Process Safety Journey - Learn from the Past and Improve the Future    ",
    eventBody: "Learnings in Process Safety, best practices & tools to achieve process safety    ",
    eventLocation:"",
      eventDate: "17th October 2019",
    eventSpeakerName:"Dr. Chuck Orella    ",
    eventSpeakerDesignation:"Director Chemical Engineering R&D",
    eventSpeakerOrganization:'Merck & Co. Inc., USA',
    eventSpeakerImage:"http://165.22.216.45/wp-content/uploads/2019/08/Dr.-Chuck-Orella.jpg",
    // eventSpeakerDesignation:item.speaker[0].speaker_designation,
    // eventSpeakerOrganization:item.speaker[0].speaker_organization,
  })
}
session10InfoScreen = () => {
  this.props.navigation.navigate('PharmaTechnicalSession', {
    eventName: "Role of EHS in Scaling-up API Manufacturing from Lab to Plant    ",
    eventBody: "Role of EHS in Scaling-up API Manufacturing from Lab to Plant    ",
    eventLocation:"",
      eventDate: "17th October 2019",
    eventSpeakerName:"Mr. Harish Verma    ",
    eventSpeakerDesignation:"Vice President & Global Head",
    eventSpeakerOrganization:'EHS, Cipla Ltd., India',
    eventSpeakerImage:"http://165.22.216.45/wp-content/uploads/2019/08/Harish-Verma.jpg",
    // eventSpeakerDesignation:item.speaker[0].speaker_designation,
    // eventSpeakerOrganization:item.speaker[0].speaker_organization,
  })
}
session11InfoScreen = () => {
  this.props.navigation.navigate('PharmaTechnicalSession', {
    eventName: "Panel Discussion: Green Chemistry Implementation in Industry - luxury or necessity? ",
    eventBody: "Moderator: Dr. Dhileep Krishnamurty, Mr. Paul Guo (Astatech, China), Mr. Steve Feng (Zhejiang, China), Dr. Sudhir Nambiar (Hikal)    ",
    eventLocation:"",
    
      eventDate: "17th October 2019",
    eventSpeakerName:"Dr. Dhileep Krishnamurty    ",
    eventSpeakerDesignation:"",
    eventSpeakerOrganization:'',
   eventSpeakerImage:"http://165.22.216.45/wp-content/uploads/2019/10/Dhileep-Krishnamurthi.png",
    // eventSpeakerDesignation:item.speaker[0].speaker_designation,
    // eventSpeakerOrganization:item.speaker[0].speaker_organization,
  })
}
session12InfoScreen = () => {
  this.props.navigation.navigate('PharmaTechnicalSession', {
    eventName: "Closing Remarks & Acknowledgements    ",
    eventBody: "",
    eventLocation:"",
      eventDate: "17th October 2019",
    eventSpeakerName:"Dr. Sudhir Nambiar ",
    eventSpeakerDesignation:"President",
    eventSpeakerOrganization:'Research & Technology, Hikal Ltd., India',
   eventSpeakerImage:"http://165.22.216.45/wp-content/uploads/2019/08/Dr.Sudhir-Nambiar.jpg",
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
                        <Text style={{alignItems:'center',marginLeft:-50,marginLeft:-50,color:themes.colors.INIT_COLOR_White,width:widthPercentageToDP('85%'),fontFamily:themes.fonts.INIT_FONT_Family,fontSize:14}} >Green Chemistry for Pharma/API Industry</Text>
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
                 Welcome and Introduction to the Conference on "Green Chemistry for Pharma/API Industry Sector"
                 </Text>
                 </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Green,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  11:00 am - 11:15 am
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
                 Keynote: Business Case for Green and Sustainable Chemistry Development at MSD
                 </Text>
                 </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Green,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  11:15 am - 11:45 am
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
                 Pfizer’s Green Journey – Working for a Sustainable Future
                 </Text>
                 </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Green,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  11:45 am - 12:15 pm
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
                 Sustainability & Green Chemistry Initiatives at Sun Pharma - solvent & water savings, flow chemistry, waste reduction, etc
                 </Text>
                 </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Green,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  12:15 pm - 12:45 pm
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
                 Lunch Break, Visiting IGCW Expo		
                 </Text>
                 </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Green,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  12:45 pm - 2:00 pm
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
    </View>
                <View>
                  <TouchableWithoutFeedback onPress={() => this.session7InfoScreen()}>
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
                 Anthem’s Approach Towards Greener Chemistry
                 </Text>
                 </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Green,fontFamily: themes.fonts.INIT_FONT_Family}}>
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
                      <Icon active name='heart' style={{color:themes.colors.INIT_COLOR_Yellow,fontSize:20}} onPress={this.onress}/>
                  </Left>
          </LinearGradient>
                  <Body style={{flex:1}}>
                      <View style={{flexDirection:'column',marginLeft:9,marginRight:-60,paddingTop:15,marginBottom:15}}>
                            <View>
                 <Text style={{width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_XL,color: themes.colors.INIT_COLOR_Blue,fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-50}}>
                 Chemistry Connect between Flow and Green: An Industrial Perspective
                 </Text>
                 </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Green,fontFamily: themes.fonts.INIT_FONT_Family}}>
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
                      <Icon active name='heart' style={{color:themes.colors.INIT_COLOR_Yellow,fontSize:20}} onPress={this.onress}/>
                  </Left>
          </LinearGradient>
                  <Body style={{flex:1}}>
                      <View style={{flexDirection:'column',marginLeft:9,marginRight:-60,paddingTop:15,marginBottom:15}}>
                            <View>
                 <Text style={{width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_XL,color: themes.colors.INIT_COLOR_Blue,fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-50}}>
                 Process Safety Journey - Learn from the Past and Improve the Future
                 </Text>
                 </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Green,fontFamily: themes.fonts.INIT_FONT_Family}}>
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
                      <Icon active name='heart' style={{color:themes.colors.INIT_COLOR_Yellow,fontSize:20}} onPress={this.onress}/>
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
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Green,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  3:30 pm - 4:15 pm
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
    </View>
                <View>
                  <TouchableWithoutFeedback onPress={() => this.session10InfoScreen()}>
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
                 Role of EHS in Scaling-up API Manufacturing from Lab to Plant
                 </Text>
                 </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Green,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  4:15 pm - 4:45 pm
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
                      <Icon active name='heart' style={{color:themes.colors.INIT_COLOR_Yellow,fontSize:20}} onPress={this.onress}/>
                  </Left>
          </LinearGradient>
                  <Body style={{flex:1}}>
                      <View style={{flexDirection:'column',marginLeft:9,marginRight:-60,paddingTop:15,marginBottom:15}}>
                            <View>
                 <Text style={{width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_XL,color: themes.colors.INIT_COLOR_Blue,fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-50}}>
                 Panel Discussion: Green Chemistry Implementation in Industry - luxury or necessity? Building from experiences from India & China
                 </Text>
                 </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Green,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  4:45 pm - 5:25 pm
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
               <CardItem style={styles.shadow2}>
          <LinearGradient colors={['#88BE49','#447A47']} style={{alignSelf:'stretch'}}>
                  <Left style={{flex:1,margin:25}}>
                      <Icon active name='heart' style={{color:themes.colors.INIT_COLOR_Yellow,fontSize:20}} onPress={this.onress}/>
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
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Green,fontFamily: themes.fonts.INIT_FONT_Family}}>
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
                      <Icon active name='heart' style={{color:themes.colors.INIT_COLOR_Yellow,fontSize:20}} onPress={this.onress}/>
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
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Green,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  5:30 pm - 6:00 pm
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