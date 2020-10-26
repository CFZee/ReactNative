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
//                   <Icon name='forward-arrow' style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,color: themes.colors.INIT_COLOR_Green}} />
//                   </Button>
//                   </Right>
//               </CardItem>
//     </View>
//     );
// }
session3InfoScreen = () => {
  this.props.navigation.navigate('BiomimicryTechnicalSession', {
    eventName: "Welcome To Biomimicry",
    eventBody: "",
    eventLocation:"",
    eventDate: "16th October 2019",
    eventSpeakerName:"Prof. Bapat",
    eventSpeakerImage:'',
    eventSpeakerDesignation: 'Industrial Design Centre',
    eventSpeakerOrganization:'IIT-Bombay	',
  })
}
session4InfoScreen = () => {
  this.props.navigation.navigate('BiomimicryTechnicalSession', {
    eventName: "Nature’s Molecular Mechanisms of the Circular Economy ",
    eventBody: "Nature’s Molecular Mechanisms of the Circular Economy",
    eventLocation:"",
    eventDate: "16th October 2019",
    eventSpeakerName:"Dr. John Warner   ",
    eventSpeakerImage:'http://165.22.216.45/wp-content/uploads/2019/08/Dr.-John-Warner-.png',
    eventSpeakerDesignation: 'President & CTO',
    eventSpeakerOrganization:'Warner Babcock Institute of Green Chemistry, USA ',
  })
}
session5InfoScreen = () => {
  this.props.navigation.navigate('BiomimicryTechnicalSession', {
    eventName: "Roles and Key Features of Chemistry in the Living Natural World ",
    eventBody: "Roles and Key Features of Chemistry in the Living Natural World",
    eventLocation:"",
    eventDate: "16th October 2019",
    eventSpeakerName:" Mr. Mark Dorfman",
    eventSpeakerImage:'http://165.22.216.45/wp-content/uploads/2019/08/Dr.Mark-Dorfman.jpg',
    eventSpeakerDesignation:'Sr. Principal & Lead Chemist',
    eventSpeakerOrganization:'Biomimicry 3.8, USA',

  })
}
session6InfoScreen = () => {
  this.props.navigation.navigate('BiomimicryTechnicalSession', {
    eventName: "Biomimetic Green Chemistry Success Stories ",
    eventBody: "Biomimetic Green Chemistry Success Stories ",
    eventLocation:"",
    eventDate: "16th October 2019",
    eventSpeakerImage:'http://165.22.216.45/wp-content/uploads/2019/08/Dr.-John-Warner-.png',
    eventSpeakerName:" Dr. John Warner   ",
    eventSpeakerDesignation: ' President & CTO',
    eventSpeakerOrganization:'Warner Babcock Institute of Green Chemistry, USA ',
  })
}
session7InfoScreen = () => {
  this.props.navigation.navigate('BiomimicryTechnicalSession', {
    eventName: "Overcoming Obstacles to Successful Design and Implementation of Biomimicry Projects    ",
    eventBody: "Overcoming Obstacles to Successful Design and Implementation of Biomimicry Projects    ",
    eventLocation:"",
    eventDate: "16th October 2019",
    eventSpeakerName:" Mr. Mark Dorfman",
    eventSpeakerImage:'http://165.22.216.45/wp-content/uploads/2019/08/Dr.Mark-Dorfman.jpg',
    eventSpeakerDesignation:'Sr. Principal & Lead Chemist',
    eventSpeakerOrganization:'Biomimicry 3.8, USA',
  })
}
session8InfoScreen = () => {
  this.props.navigation.navigate('BiomimicryTechnicalSession', {
    eventName: "Biomimetic Adhesives and an Indian Perspective on Biomimicry    ",
    eventBody: "Biomimetic Adhesives and an Indian Perspective on Biomimicry    ",
    eventLocation:"",
    eventDate: "16th October 2019",
    eventSpeakerName:"Mr. R.N. Mohanty",
    // eventSpeakerImage:item.speaker[0].profile_image.guid,
    eventSpeakerDesignation:'President',
    eventSpeakerOrganization:'Pidilite Industries Limited',
  })
}
session9InfoScreen = () => {
  this.props.navigation.navigate('BiomimicryTechnicalSession', {
    eventName: "The Biomimicry Methodology    ",
    eventBody: "The Biomimicry Methodology    ",
    eventLocation:"",
    eventDate: "16th October 2019",
    eventSpeakerName:" Mr. Mark Dorfman",
    eventSpeakerImage:'http://165.22.216.45/wp-content/uploads/2019/08/Dr.Mark-Dorfman.jpg',
    eventSpeakerDesignation:'Sr. Principal & Lead Chemist',
    eventSpeakerOrganization:'Biomimicry 3.8, USA',
  })
}
session10InfoScreen = () => {
  this.props.navigation.navigate('BiomimicryTechnicalSession', {
    eventName: "Closing Remarks    ",
    eventBody: "Closing Remarks    ",
    eventLocation:"",
    eventDate: "16th October 2019",
    eventSpeakerName:" Mr. Mark Dorfman",
    eventSpeakerImage:'http://165.22.216.45/wp-content/uploads/2019/08/Dr.Mark-Dorfman.jpg',
    eventSpeakerDesignation:'Sr. Principal & Lead Chemist',
    eventSpeakerOrganization:'Biomimicry 3.8, USA',
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
                        <Text style={{alignItems:'center',marginLeft:-50,marginLeft:-50,color:themes.colors.INIT_COLOR_White,width:widthPercentageToDP('80%'),fontFamily:themes.fonts.INIT_FONT_Family,fontSize:14}} >      Workshop on Biomimicry Dashboard</Text>
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
                 Welcome by Prof. Bapat, Industrial Design Centre, IIT-Bombay	
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
                 Nature’s Molecular Mechanisms of the Circular Economy
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
                 Roles and Key Features of Chemistry in the Living Natural World
                 </Text>
                 </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Indigo,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  12:30 pm - 1:30 pm
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
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Indigo,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  1:30 pm - 2:30 pm
                      </Text>
                  </View>
                </View>
                  </Body>
                    <Right style={{flex:1,marginLeft:-25}} >
                
                  </Right>
              </CardItem>
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
                 Biomimetic Green Chemistry Success Stories
                 </Text>
                 </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Indigo,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  2:30 pm - 3:15 pm
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
                 Overcoming Obstacles to Successful Design and Implementation of Biomimicry Projects
                 </Text>
                 </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Indigo,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  3:15 pm - 4:00 pm
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
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Indigo,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  4:00 pm - 4:30 pm
                      </Text>
                  </View>
                </View>
                  </Body>
                    <Right style={{flex:1,marginLeft:-25}} >
                  
                  </Right>
              </CardItem>
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
                 Biomimetic Adhesives and an Indian Perspective on Biomimicry
                 </Text>
                 </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Indigo,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  4:30 pm - 5:00 pm
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
                 The Biomimicry Methodology
                 </Text>
                 </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color: themes.colors.INIT_COLOR_Indigo,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  5:00 pm - 5:30 pm
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
                 Closing Remarks
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