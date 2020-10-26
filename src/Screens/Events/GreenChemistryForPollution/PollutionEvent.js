import React, { Component } from "react";
import { Container, Header, Right, Title, Card, Content, Button, Left, Body, Text } from "native-base";
import { View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../../../src/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);
import { Dimensions, PixelRatio } from 'react-native';
import themes from '../../../components/themes/Variables';
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
export default class Events extends Component {
  constructor(props) {
    super(props);
  }

  dashboardInfoScreen = (event_id) => {
    console.log(event_id)
    this.props.navigation.navigate('PollutionDashboard', {
      dashboardEventId : event_id
    })
  }

  render() {
    const { navigation } = this.props;
    const event_id = navigation.getParam('eventId');
    console.log(event_id);
    return (
      <Container style={styles.container,{backgroundColor:'#EEEEEE'}}>
      <LinearGradient start={{x: 0, y: 2}} end={{x: 1, y: 2}} colors={['#88BE49','#447A47']}>
      <Header transparent androidStatusBarColor='transparent'
                style={{ height: 100 } }> 
                <Left style={{flex:1,alignSelf:'center'}}>
                    <Button transparent  style={{width:widthPercentageToDP('20%')}} onPress={() => this.props.navigation.navigate('Home')}>               
                         <Icon name='back-arrow' style={{color: themes.colors.INIT_COLOR_White,fontSize: themes.fonts.INIT_FONT_SIZE_IconSize_M}}/>
                        </Button>
                </Left>
                <Body style={{flex:1,alignSelf:'center'}}>   
                 <Text style={{color: themes.colors.INIT_COLOR_White,fontSize: themes.fonts.INIT_FONT_SIZE_XL,alignSelf:'center',marginLeft:-50,marginRight:-50,fontFamily: themes.fonts.INIT_FONT_Family}}> 
                 IGCW(2019)-Event
                 </Text>
                </Body>
                <Right style={{flex:1,alignSelf:'center'}}>
                </Right>
                </Header>
        </LinearGradient>
        <Content>
          {/* <Image
          style={{width: 500, height: 250,flexDirection:'row',flex:1}}
          source={{uri: 'https://images.pexels.com/photos/1384614/pexels-photo-1384614.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}}/> */}
         <Card style={styles.shadow}>
            <View style={{flexDirection:'column'}}>
              <View>
            <Text style={{fontWeight: 'bold',fontSize:18,textAlign:'left',paddingTop:15,paddingLeft:10,paddingBottom:8,color: themes.colors.INIT_COLOR_Blue,fontFamily: themes.fonts.INIT_FONT_Family}}>
            Conference on "Green Chemistry for Pollution Prevention at Source" for PCB Officers & other Government Bodies			
                </Text>
                </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_XL,textAlign:'left',paddingLeft:10,paddingBottom:8,color: themes.colors.INIT_COLOR_Indigo,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  16th October 2019
                </Text>
                </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_XL,textAlign:'left',paddingLeft:10,paddingBottom:15,color: themes.colors.INIT_COLOR_Grey,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  To share global environmental realities, changing regulatory landscape & introduce Green Chemistry as approach for Pollution Prevention at Source.To share global best practices, frameworks, initiatives & models of environment regulatory bodies from other countries.To share successful industrial case studies and introduce new innovative green chemistry/environmental solutions to officers. To discuss challenges, gaps, mindset issues and suggest way forward for government/regulatory bodies.		
                  </Text>
                </View>
                </View>
                </Card>
                <View style={{ margin: 15 }}>
          </View>
        </Content>
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#88BE49', '#447A47']} style={{ borderRadius: 100,margin:20 }}>
              <TouchableOpacity onPress={() => this.dashboardInfoScreen(event_id)}
                style={{ borderRadius: 100, justifyContent: 'space-between', padding: 15 }}>
                <Text style={{ color: themes.colors.INIT_COLOR_White, alignSelf: 'center', textTransform: 'capitalize', fontSize: themes.fonts.INIT_FONT_SIZE_L, paddingHorizontal: 5, marginLeft: 8, marginRight: 8, fontFamily: themes.fonts.INIT_FONT_Family }}>Open</Text>
              </TouchableOpacity>
            </LinearGradient>
      </Container>
    );
       }
}




const styles = ({
  container: {
    flex: 1,
    backgroundColor: '#D5D6D6',
  },
  contentContainer: {
    paddingVertical: 20
  },
  shadow: {
    marginRight: 15,
    marginLeft: 15,
    marginTop: 40,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#fff',
    borderWidth: 1,
    flex: 1,
    padding: 19,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 15,
    elevation: 10,
    shadowOffset: { width: 3, height: 4 },
    shadowColor: "grey",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    borderRadius: -5
  },
});
