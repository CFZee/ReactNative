import React, {Component}from 'react';
import { CardItem,Container, Header,Thumbnail, Left, Body, Right, Button,Content,Text ,Separator} from 'native-base';
import { View,ScrollView,TouchableWithoutFeedback,TouchableOpacity,Image } from 'react-native';
import { StackActions, NavigationActions} from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../src/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);
import {Dimensions, PixelRatio} from 'react-native';
import  themes from '../components/themes/Variables.js';


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


export default class MeetingsAndEvents extends Component {
  
    render()
    {
             return(
        <Container style={styles.Container,{backgroundColor:'#EEEEEE'}}>
        <ScrollView>
                <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 1}} colors={['#88BE49','#447A47']} style={{flex:1}}>
                <Header transparent androidStatusBarColor='transparent'
                style={{ height: 100 } }> 
                <Left style={{flex:1,alignSelf:'center'}}>
                    <Button transparent  style={{width:widthPercentageToDP('20%')}} onPress={() => this.props.navigation.navigate('Dashboard')}>               
                         <Icon name='back-arrow' style={{color: themes.colors.INIT_COLOR_White,fontSize: themes.fonts.INIT_FONT_SIZE_IconSize_M}}/>
                        </Button>
                </Left>
                <Body style={{flex:1,alignSelf:'center'}}>   
                 <Text style={{color: themes.colors.INIT_COLOR_White,fontSize: themes.fonts.INIT_FONT_SIZE_XL,alignSelf:'center',marginLeft:-50,marginRight:-50,fontFamily: themes.fonts.INIT_FONT_Family}}> 
                 IGCW(2019)-Events
                 </Text>
                </Body>
                <Right style={{flex:1,alignSelf:'center'}}>
                </Right>
                </Header>
                </LinearGradient>
        <Content>
            <View style={{marginTop:15}}>
            <Separator transparent style={styles.container2}>
            <Text style={{color: themes.colors.INIT_COLOR_Blue,fontFamily: themes.fonts.INIT_FONT_Family,fontSize: themes.fonts.INIT_FONT_SIZE_XL}}>Day 1, 16th October 2019</Text>
          </Separator>
          <View>
          <TouchableWithoutFeedback onPress={() => { this.props.navigation.navigate('InaugurationEvent')}}>
          <CardItem style={styles.shadow}>
              <Left style={{flex:1}}>
              <Image source={require('../components/Photos/IGCW2019LOGO.jpg')} style={{width:widthPercentageToDP('17%'),height:heightPercentageToDP('10%'),resizeMode:'stretch'}}/>
              </Left>
              <Body style={{flex:1}}>
              <View style={{flexDirection:'column',marginLeft:-35,marginRight:-60,paddingTop:15,marginBottom:15}}>
                      <View>
                      <Text style={{fontWeight: 'bold',fontSize:15,color:themes.colors.INIT_COLOR_Blue,fontFamily:themes.fonts.INIT_FONT_Family,alignSelf:'flex-start',width:widthPercentageToDP('60%')}}>
          6th Industrial Green Chemistry World (IGCW2019) - Convention & Ecosystem - Inauguration Ceremony				
          </Text>
          </View>
          <View>
          <Text style={{fontSize:themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color:themes.colors.INIT_COLOR_Grey,fontFamily:themes.fonts.INIT_FONT_Family}}>
              6th Industrial Green Chemistry World (IGCW2019) - Convention & Ecosystem - Inauguration Ceremony		
              </Text>
          </View>
          <View>
          <Text style={{paddingTop:5,fontSize:themes.fonts.INIT_FONT_SIZE_L,color:themes.colors.INIT_COLOR_Indigo,fontFamily:themes.fonts.INIT_FONT_Family}}>
              16th October 2019		
                  </Text>
              </View>
          </View>
          </Body>
          <Right style={{flex:1,marginLeft:-25}} >
              <Button transparent>
              <Icon name='forward-arrow' style={{fontSize:themes.fonts.INIT_FONT_SIZE_L,color:themes.colors.INIT_COLOR_Green}} />
              </Button>
              </Right>
          </CardItem>
          </TouchableWithoutFeedback>
          </View>
          <View>
            <TouchableWithoutFeedback onPress={() => { this.props.navigation.navigate('LeadershipSummitEvent')}} >
            <CardItem style={styles.shadow}>
                <Left style={{flex:1}}>
                <Image source={require('../components/Photos/IGCW2019LOGO.jpg')} style={{width:widthPercentageToDP('17%'),height:heightPercentageToDP('10%'),resizeMode:'stretch'}}/>
                </Left>
                <Body style={{flex:1}}>
                <View style={{flexDirection:'column',marginLeft:-35,marginRight:-60,paddingTop:15,marginBottom:15}}>
                        <View>
                        <Text style={{fontWeight: 'bold',fontSize:15,color:themes.colors.INIT_COLOR_Blue,fontFamily:themes.fonts.INIT_FONT_Family,alignSelf:'flex-start',width:widthPercentageToDP('65%')}}>
            Chemical Industry Leadership Summit on "Sustainability through Green Chemistry"			
            </Text>
            </View>
            <View>
            <Text style={{fontSize:themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color:themes.colors.INIT_COLOR_Grey,fontFamily:themes.fonts.INIT_FONT_Family}}>
                To share various global and local realities being faced by Chemical Industry in the domain of environment and sustainability...
                </Text>
            </View>
            <View>
            <Text style={{paddingTop:5,fontSize:themes.fonts.INIT_FONT_SIZE_L,color:themes.colors.INIT_COLOR_Indigo,fontFamily:themes.fonts.INIT_FONT_Family}}>
                16th October 2019		

                    </Text>
                </View>
            </View>
            </Body>
            <Right style={{flex:1,marginLeft:-25}} >
                <Button transparent>
                <Icon name='forward-arrow' style={{fontSize:themes.fonts.INIT_FONT_SIZE_L,color:themes.colors.INIT_COLOR_Green}} />
                </Button>
                </Right>
            </CardItem>
            </TouchableWithoutFeedback>
            </View>
            <View>
          <TouchableWithoutFeedback onPress={() => { this.props.navigation.navigate('AwardsEvent')}}>
          <CardItem style={styles.shadow}>
              <Left style={{flex:1}}>
              <Image source={require('../components/Photos/IGCW2019LOGO.jpg')} style={{width:widthPercentageToDP('17%'),height:heightPercentageToDP('10%'),resizeMode:'stretch'}}/>
              </Left>
              <Body style={{flex:1}}>
              <View style={{flexDirection:'column',marginLeft:-35,marginRight:-60,paddingTop:15,marginBottom:15}}>
                      <View>
                      <Text style={{fontWeight: 'bold',fontSize:15,color:themes.colors.INIT_COLOR_Blue,fontFamily:themes.fonts.INIT_FONT_Family,alignSelf:'flex-start',width:widthPercentageToDP('60%')}}>
                      IGCW2019 Green Chemistry Awards Evening		
          </Text>
          </View>
          <View>
          <Text style={{fontSize:themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color:themes.colors.INIT_COLOR_Grey,fontFamily:themes.fonts.INIT_FONT_Family}}>
          IGCW2019 Green Chemistry Awards Evening		
              </Text>
          </View>
          <View>
          <Text style={{paddingTop:5,fontSize:themes.fonts.INIT_FONT_SIZE_L,color:themes.colors.INIT_COLOR_Indigo,fontFamily:themes.fonts.INIT_FONT_Family}}>
              16th October 2019		
                  </Text>
              </View>
          </View>
          </Body>
          <Right style={{flex:1,marginLeft:-25}} >
              <Button transparent>
              <Icon name='forward-arrow' style={{fontSize:themes.fonts.INIT_FONT_SIZE_L,color:themes.colors.INIT_COLOR_Green}} />
              </Button>
              </Right>
          </CardItem>
          </TouchableWithoutFeedback>
          </View>
          <View>
           <TouchableWithoutFeedback onPress={() => { this.props.navigation.navigate('PollutionEvent')}}>
           <CardItem style={styles.shadow}>
               <Left style={{flex:1}}>
               <Image source={require('../components/Photos/IGCW2019LOGO.jpg')} style={{width:widthPercentageToDP('17%'),height:heightPercentageToDP('10%'),resizeMode:'stretch'}}/>
               </Left>
               <Body style={{flex:1}}>
               <View style={{flexDirection:'column',marginLeft:-35,marginRight:-60,paddingTop:15,marginBottom:15}}>
                       <View>
                       <Text style={{fontWeight: 'bold',fontSize:15,color:themes.colors.INIT_COLOR_Blue,fontFamily:themes.fonts.INIT_FONT_Family,alignSelf:'flex-start',width:widthPercentageToDP('60%')}}>
           Conference on "Green Chemistry for Pollution Prevention at Source" for PCB Officers & other Government Bodies			
           </Text>
           </View>
           <View>
           <Text style={{fontSize:themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color:themes.colors.INIT_COLOR_Grey,fontFamily:themes.fonts.INIT_FONT_Family}}>
               To share global environmental realities, changing regulatory landscape...	
               </Text>
           </View>
           <View style={{marginTop:-5}}>
           <Text style={{paddingTop:5,fontSize:themes.fonts.INIT_FONT_SIZE_L,color:themes.colors.INIT_COLOR_Indigo,fontFamily:themes.fonts.INIT_FONT_Family}}>
               16th October 2019		

                   </Text>
               </View>
           </View>
           </Body>
           <Right style={{flex:1,marginLeft:-25}} >
               <Button transparent>
               <Icon name='forward-arrow' style={{fontSize:themes.fonts.INIT_FONT_SIZE_L,color:themes.colors.INIT_COLOR_Green}} />
               </Button>
               </Right>
           </CardItem>
           </TouchableWithoutFeedback>
           </View>
           <View>
           <TouchableWithoutFeedback onPress={() => { this.props.navigation.navigate('GCEEvent')}}>
           <CardItem style={styles.shadow}>
               <Left style={{flex:1}}>
               <Image source={require('../components/Photos/IGCW2019LOGO.jpg')} style={{width:widthPercentageToDP('17%'),height:heightPercentageToDP('10%'),resizeMode:'stretch'}}/>
               </Left>
               <Body style={{flex:1}}>
               <View style={{flexDirection:'column',marginLeft:-35,marginRight:-60,paddingTop:15,marginBottom:15}}>
                       <View>
                       <Text style={{fontWeight: 'bold',fontSize:15,color:themes.colors.INIT_COLOR_Blue,fontFamily:themes.fonts.INIT_FONT_Family,alignSelf:'flex-start',width:widthPercentageToDP('60%')}}>
                       ACS-GCI Workshop on Green Chemistry & Engg. Tools, Techniques & Metrics			
           </Text>
           </View>
           <View>
           <Text style={{fontSize:themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color:themes.colors.INIT_COLOR_Grey,fontFamily:themes.fonts.INIT_FONT_Family}}>
           To share about ACS-Green Chemistry Institute Pharmaceutical Roundtable, their commitment &...	
               </Text>
           </View>
           <View style={{marginTop:-5}}>
           <Text style={{paddingTop:5,fontSize:themes.fonts.INIT_FONT_SIZE_L,color:themes.colors.INIT_COLOR_Indigo,fontFamily:themes.fonts.INIT_FONT_Family}}>
               16th October 2019		

                   </Text>
               </View>
           </View>
           </Body>
           <Right style={{flex:1,marginLeft:-25}} >
               <Button transparent>
               <Icon name='forward-arrow' style={{fontSize:themes.fonts.INIT_FONT_SIZE_L,color:themes.colors.INIT_COLOR_Green}} />
               </Button>
               </Right>
           </CardItem>
           </TouchableWithoutFeedback>
           </View>
           <View>
           <TouchableWithoutFeedback onPress={() => { this.props.navigation.navigate('GreenEngineerigEvent')}}>
           <CardItem style={styles.shadow}>
               <Left style={{flex:1}}>
               <Image source={require('../components/Photos/IGCW2019LOGO.jpg')} style={{width:widthPercentageToDP('17%'),height:heightPercentageToDP('10%'),resizeMode:'stretch'}}/>
               </Left>
               <Body style={{flex:1}}>
               <View style={{flexDirection:'column',marginLeft:-35,marginRight:-60,paddingTop:15,marginBottom:15}}>
                       <View>
                       <Text style={{fontWeight: 'bold',fontSize:15,color:themes.colors.INIT_COLOR_Blue,fontFamily:themes.fonts.INIT_FONT_Family,alignSelf:'flex-start',width:widthPercentageToDP('60%')}}>
           Workshop on Green Engineering			
           </Text>
           </View>
           <View>
           <Text style={{fontSize:themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color:themes.colors.INIT_COLOR_Grey,fontFamily:themes.fonts.INIT_FONT_Family}}>
               To introduce the basic concept & Principles of Green Engineering...	
               </Text>
           </View>
           <View>
           <Text style={{paddingTop:5,fontSize:themes.fonts.INIT_FONT_SIZE_L,color:themes.colors.INIT_COLOR_Indigo,fontFamily:themes.fonts.INIT_FONT_Family}}>
               16th October 2019		

                   </Text>
               </View>
           </View>
           </Body>
           <Right style={{flex:1,marginLeft:-25}} >
               <Button transparent>
               <Icon name='forward-arrow' style={{fontSize:themes.fonts.INIT_FONT_SIZE_L,color:themes.colors.INIT_COLOR_Green}} />
               </Button>
               </Right>
           </CardItem>
           </TouchableWithoutFeedback>
           </View>
          <View>
          <TouchableWithoutFeedback onPress={() => { this.props.navigation.navigate('BiomimicryEvent')}}>
          <CardItem style={styles.shadow}>
              <Left style={{flex:1}}>
              <Image source={require('../components/Photos/IGCW2019LOGO.jpg')} style={{width:widthPercentageToDP('17%'),height:heightPercentageToDP('10%'),resizeMode:'stretch'}}/>
              </Left>
              <Body style={{flex:1}}>
              <View style={{flexDirection:'column',marginLeft:-35,marginRight:-60,paddingTop:15,marginBottom:15}}>
                      <View>
                      <Text style={{fontWeight: 'bold',fontSize:15,color:themes.colors.INIT_COLOR_Blue,fontFamily:themes.fonts.INIT_FONT_Family,alignSelf:'flex-start',width:widthPercentageToDP('60%')}}>
          Workshop on Biomimicry			
          </Text>
          </View>
          <View>
          <Text style={{fontSize:themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color:themes.colors.INIT_COLOR_Grey,fontFamily:themes.fonts.INIT_FONT_Family}}>
              To introduce the basic concept, fundamentals and potential applications of Biomimicry...
              </Text>
          </View>
          <View>
          <Text style={{paddingTop:5,fontSize:themes.fonts.INIT_FONT_SIZE_L,color:themes.colors.INIT_COLOR_Indigo,fontFamily:themes.fonts.INIT_FONT_Family}}>
              16th October 2019		

                  </Text>
              </View>
          </View>
          </Body>
          <Right style={{flex:1,marginLeft:-25}} >
              <Button transparent>
              <Icon name='forward-arrow' style={{fontSize:themes.fonts.INIT_FONT_SIZE_L,color:themes.colors.INIT_COLOR_Green}} />
              </Button>
              </Right>
          </CardItem>
          </TouchableWithoutFeedback>
          </View>
           </View>
          <View>
          <Separator transparent style={styles.container2}>
            <Text style={{color: themes.colors.INIT_COLOR_Blue,fontFamily: themes.fonts.INIT_FONT_Family,fontSize: themes.fonts.INIT_FONT_SIZE_XL}}>Day 2, 17th October 2019</Text>
          </Separator>
          <View>
          <TouchableWithoutFeedback onPress={() => { this.props.navigation.navigate('InaugurationD2Event')}}>
          <CardItem style={styles.shadow}>
              <Left style={{flex:1}}>
              <Image source={require('../components/Photos/IGCW2019LOGO.jpg')} style={{width:widthPercentageToDP('17%'),height:heightPercentageToDP('10%'),resizeMode:'stretch'}}/>
              </Left>
              <Body style={{flex:1}}>
              <View style={{flexDirection:'column',marginLeft:-35,marginRight:-60,paddingTop:15,marginBottom:15}}>
                      <View>
                      <Text style={{fontWeight: 'bold',fontSize:15,color:themes.colors.INIT_COLOR_Blue,fontFamily:themes.fonts.INIT_FONT_Family,alignSelf:'flex-start',width:widthPercentageToDP('60%')}}>
          IGCW2019 (Day II) - Inauguration Ceremony			
          </Text>
          </View>
          <View>
          <Text style={{fontSize:themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color:themes.colors.INIT_COLOR_Grey,fontFamily:themes.fonts.INIT_FONT_Family}}>
              IGCW2019 (Day II) - Inauguration Ceremony...			
              </Text>
          </View>
          <View>
          <Text style={{paddingTop:5,fontSize:themes.fonts.INIT_FONT_SIZE_L,color:themes.colors.INIT_COLOR_Indigo,fontFamily:themes.fonts.INIT_FONT_Family}}>
              17th October 2019		
                  </Text>
              </View>
          </View>
          </Body>
          <Right style={{flex:1,marginLeft:-25}} >
              <Button transparent>
              <Icon name='forward-arrow' style={{fontSize:themes.fonts.INIT_FONT_SIZE_L,color:themes.colors.INIT_COLOR_Green}} />
              </Button>
              </Right>
          </CardItem>
          </TouchableWithoutFeedback>
          </View>
          <View>
            <TouchableWithoutFeedback onPress={() => { this.props.navigation.navigate('EHSEvent')}}>
            <CardItem style={styles.shadow}>
                <Left style={{flex:1}}>
                <Image source={require('../components/Photos/IGCW2019LOGO.jpg')} style={{width:widthPercentageToDP('17%'),height:heightPercentageToDP('10%'),resizeMode:'stretch'}}/>
                </Left>
                <Body style={{flex:1}}>
                <View style={{flexDirection:'column',marginLeft:-35,marginRight:-60,paddingTop:15,marginBottom:15}}>
                        <View>
                        <Text style={{fontWeight: 'bold',fontSize:15,color:themes.colors.INIT_COLOR_Blue,fontFamily:themes.fonts.INIT_FONT_Family,alignSelf:'flex-start',width:widthPercentageToDP('60%')}}>
            Workshop on Environment, Health & Safety (EHS)			
            </Text>
            </View>
            <View>
            <Text style={{fontSize:themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color:themes.colors.INIT_COLOR_Grey,fontFamily:themes.fonts.INIT_FONT_Family}}>
                To share global environmental realities, changing regulatory landscape & relevance of EHS in today's business scenario...
                </Text>
            </View>
            <View>
            <Text style={{paddingTop:5,fontSize:themes.fonts.INIT_FONT_SIZE_L,color:themes.colors.INIT_COLOR_Indigo,fontFamily:themes.fonts.INIT_FONT_Family}}>
                17th October 2019		

                    </Text>
                </View>
            </View>
            </Body>
            <Right style={{flex:1,marginLeft:-25}} >
                <Button transparent>
                <Icon name='forward-arrow' style={{fontSize:themes.fonts.INIT_FONT_SIZE_L,color:themes.colors.INIT_COLOR_Green}} />
                </Button>
                </Right>
            </CardItem>
            </TouchableWithoutFeedback>
            </View>  
            <View>
            <TouchableWithoutFeedback onPress={() => { this.props.navigation.navigate('BioCatalysisEvent')}} >
            <CardItem style={styles.shadow}>
                <Left style={{flex:1}}>
                <Image source={require('../components/Photos/IGCW2019LOGO.jpg')} style={{width:widthPercentageToDP('17%'),height:heightPercentageToDP('10%'),resizeMode:'stretch'}}/>
                </Left>
                <Body style={{flex:1}}>
                <View style={{flexDirection:'column',marginLeft:-35,marginRight:-60,paddingTop:15,marginBottom:15}}>
                        <View>
                        <Text style={{fontWeight: 'bold',fontSize:15,color:themes.colors.INIT_COLOR_Blue,fontFamily:themes.fonts.INIT_FONT_Family,alignSelf:'flex-start',width:widthPercentageToDP('60%')}}>
            Workshop on "Bio-Catalysis for accelerating Green Chemistry Processes"			
            </Text>
            </View>
            <View>
            <Text style={{fontSize:themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color:themes.colors.INIT_COLOR_Grey,fontFamily:themes.fonts.INIT_FONT_Family}}>
                To introduce the basic concept, fundamentals and potential applications of Biocatalysis...
                </Text>
            </View>
            <View>
            <Text style={{paddingTop:5,fontSize:themes.fonts.INIT_FONT_SIZE_L,color:themes.colors.INIT_COLOR_Indigo,fontFamily:themes.fonts.INIT_FONT_Family}}>
                17th October 2019		

                    </Text>
                </View>
            </View>
            </Body>
            <Right style={{flex:1,marginLeft:-25}} >
                <Button transparent>
                <Icon name='forward-arrow' style={{fontSize:themes.fonts.INIT_FONT_SIZE_L,color:themes.colors.INIT_COLOR_Green}} />
                </Button>
                </Right>
            </CardItem>
            </TouchableWithoutFeedback>
            </View>      
               <View>
            <TouchableWithoutFeedback onPress={() => { this.props.navigation.navigate('PharmaEvent')}}>
            <CardItem style={styles.shadow}>
                <Left style={{flex:1}}>
                <Image source={require('../components/Photos/IGCW2019LOGO.jpg')} style={{width:widthPercentageToDP('17%'),height:heightPercentageToDP('10%'),resizeMode:'stretch'}}/>
                </Left>
                <Body style={{flex:1}}>
                <View style={{flexDirection:'column',marginLeft:-35,marginRight:-60,paddingTop:15,marginBottom:15}}>
                        <View>
                        <Text style={{fontWeight: 'bold',fontSize:15,color:themes.colors.INIT_COLOR_Blue,fontFamily:themes.fonts.INIT_FONT_Family,alignSelf:'flex-start',width:widthPercentageToDP('60%')}}>
            Conference on "Green Chemistry for Pharma/API Industry Sector"			
            </Text>
            </View>
            <View>
            <Text style={{fontSize:themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color:themes.colors.INIT_COLOR_Grey,fontFamily:themes.fonts.INIT_FONT_Family}}>
                To share various business, regulatory, supply chain dynamics happening globally in Pharma Industry related to sustainability...
                </Text>
            </View>
            <View>
            <Text style={{paddingTop:5,fontSize:themes.fonts.INIT_FONT_SIZE_L,color:themes.colors.INIT_COLOR_Indigo,fontFamily:themes.fonts.INIT_FONT_Family}}>
                17th October 2019		

                    </Text>
                </View>
            </View>
            </Body>
            <Right style={{flex:1,marginLeft:-25}} >
                <Button transparent>
                <Icon name='forward-arrow' style={{fontSize:themes.fonts.INIT_FONT_SIZE_L,color:themes.colors.INIT_COLOR_Green}} />
                </Button>
                </Right>
            </CardItem>
            </TouchableWithoutFeedback>
            </View>
            <View>
            <TouchableWithoutFeedback onPress={() => { this.props.navigation.navigate('AgroChemicalsEvent')}}>
            <CardItem style={styles.shadow}>
                <Left style={{flex:1}}>
                <Image source={require('../components/Photos/IGCW2019LOGO.jpg')} style={{width:widthPercentageToDP('17%'),height:heightPercentageToDP('10%'),resizeMode:'stretch'}}/>
                </Left>
                <Body style={{flex:1}}>
                <View style={{flexDirection:'column',marginLeft:-35,marginRight:-60,paddingTop:15,marginBottom:15}}>
                        <View>
                        <Text style={{fontWeight: 'bold',fontSize:15,color:themes.colors.INIT_COLOR_Blue,fontFamily:themes.fonts.INIT_FONT_Family,alignSelf:'flex-start',width:widthPercentageToDP('60%')}}>
            Conference on "Green Chemistry for Agro Chemicals Industry"			
            </Text>
            </View>
            <View>
            <Text style={{fontSize:themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color:themes.colors.INIT_COLOR_Grey,fontFamily:themes.fonts.INIT_FONT_Family}}>
                To share various business, regulatory, supply chain dynamics happening globally in Agro Chemicals Industry related to sustainability...
                </Text>
            </View>
            <View>
            <Text style={{paddingTop:5,fontSize:themes.fonts.INIT_FONT_SIZE_L,color:themes.colors.INIT_COLOR_Indigo,fontFamily:themes.fonts.INIT_FONT_Family}}>
                17th October 2019		

                    </Text>
                </View>
            </View>
            </Body>
            <Right style={{flex:1,marginLeft:-25}} >
                <Button transparent>
                <Icon name='forward-arrow' style={{fontSize:themes.fonts.INIT_FONT_SIZE_L,color:themes.colors.INIT_COLOR_Green}} />
                </Button>
                </Right>
            </CardItem>
            </TouchableWithoutFeedback>
            </View>
            <View>
            <TouchableWithoutFeedback  onPress={() => { this.props.navigation.navigate('SPCIEvent')}}>
            <CardItem style={styles.shadow}>
                <Left style={{flex:1}}>
                <Image source={require('../components/Photos/IGCW2019LOGO.jpg')} style={{width:widthPercentageToDP('17%'),height:heightPercentageToDP('10%'),resizeMode:'stretch'}}/>
                </Left>
                <Body style={{flex:1}}>
                <View style={{flexDirection:'column',marginLeft:-35,marginRight:-60,paddingTop:15,marginBottom:15}}>
                        <View>
                        <Text style={{fontWeight: 'bold',fontSize:15,color:themes.colors.INIT_COLOR_Blue,fontFamily:themes.fonts.INIT_FONT_Family,alignSelf:'flex-start',width:widthPercentageToDP('60%')}}>
            Conference on "Green Chemistry for Speciality & Fine Chemicals Industry Sector"			
            </Text>
            </View>
            <View>
            <Text style={{fontSize:themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color:themes.colors.INIT_COLOR_Grey,fontFamily:themes.fonts.INIT_FONT_Family}}>
                To share various business, regulatory, supply chain dynamics happening globally in Speciality & Fine Chemicals Industry related to sustainability...
                </Text>
            </View>
            <View>
            <Text style={{paddingTop:5,fontSize:themes.fonts.INIT_FONT_SIZE_L,color:themes.colors.INIT_COLOR_Indigo,fontFamily:themes.fonts.INIT_FONT_Family}}>
                17th October 2019		

                    </Text>
                </View>
            </View>
            </Body>
            <Right style={{flex:1,marginLeft:-25}} >
                <Button transparent>
                <Icon name='forward-arrow' style={{fontSize:themes.fonts.INIT_FONT_SIZE_L,color:themes.colors.INIT_COLOR_Green}} />
                </Button>
                </Right>
            </CardItem>
            </TouchableWithoutFeedback >
            </View>
            <View>
            <TouchableWithoutFeedback onPress={() => { this.props.navigation.navigate('ConferenceEvent')}}>
            <CardItem style={styles.shadow2}>
                <Left style={{flex:1}}>
                <Image source={require('../components/Photos/IGCW2019LOGO.jpg')} style={{width:widthPercentageToDP('17%'),height:heightPercentageToDP('10%'),resizeMode:'stretch'}}/>
                </Left>
                <Body style={{flex:1}}>
                <View style={{flexDirection:'column',marginLeft:-35,marginRight:-60,paddingTop:15,marginBottom:15}}>
                        <View>
                        <Text style={{fontWeight: 'bold',fontSize:15,color:themes.colors.INIT_COLOR_Blue,fontFamily:themes.fonts.INIT_FONT_Family,alignSelf:'flex-start',width:widthPercentageToDP('60%')}}>
            Conference on "Green Chemistry for Dyes & Pigment Industry Sector"			
            </Text>
            </View>
            <View>
            <Text style={{fontSize:themes.fonts.INIT_FONT_SIZE_L,paddingTop:5,color:themes.colors.INIT_COLOR_Grey,fontFamily:themes.fonts.INIT_FONT_Family}}>
                To share various business, regulatory, supply chain dynamics happening globally in Dyes & Pigments Industry related to sustainability...
                </Text>
            </View>
            <View>
            <Text style={{paddingTop:5,fontSize:themes.fonts.INIT_FONT_SIZE_L,color:themes.colors.INIT_COLOR_Indigo,fontFamily:themes.fonts.INIT_FONT_Family}}>
                17th October 2019		

                    </Text>
                </View>
            </View>
            </Body>
            <Right style={{flex:1,marginLeft:-25}} >
                <Button transparent>
                <Icon name='forward-arrow' style={{fontSize:themes.fonts.INIT_FONT_SIZE_L,color:themes.colors.INIT_COLOR_Green}} />
                </Button>
                </Right>
            </CardItem>
            </TouchableWithoutFeedback>
            </View>
                </View>
            {/* <View>
            <FlatList style={{marginTop:20}}
              data={this.state.dataSource}
              keyExtractor={item => item.event_name}
                renderItem={this.renderItem}
            />
            </View> */}
            </Content>
        </ScrollView>
        </Container>
    );
}
}


const styles = {
    container: {
      flex: 1,
      backgroundColor: '#C7CACC',
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
      },
      shadow: {
        marginTop:15,
        marginBottom:15,
        marginRight:15,
        marginLeft:10,
        paddingTop:5,
        paddingBottom:5,
        flex:2,
        padding:10 ,
        borderWidth: 1,
        borderColor: '#fff',
        elevation:15,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: "black",
        shadowOpacity: 100,
        shadowRadius: 50,
        borderRadius:-5
    },
    container2 : {
        backgroundColor: '#EEEEEE',
        paddingLeft:20,
        fontFamily: themes.fonts.INIT_FONT_Family,
        color: themes.colors.INIT_COLOR_Blue,
        fontSize: themes.fonts.INIT_FONT_SIZE_M
      },
    shadow2: {
      marginTop:15,
      marginRight:15,
      marginLeft:10,
      paddingTop:5,
      paddingBottom:5,
      flex:2,
      padding:10 ,
      borderWidth: 1,
      borderColor: '#fff',
      marginBottom: 25,
      elevation:15,
      shadowOffset: { width: 1, height: 1 },
      shadowColor: "black",
      shadowOpacity: 100,
      shadowRadius: 50,
      borderRadius:-5
  }
};