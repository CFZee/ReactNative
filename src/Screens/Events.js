import React, { Component } from "react";
import { Container, Header, Right, Title, Card, Content, Button, Left, Body, Text } from "native-base";
import { View, Image, TouchableOpacity, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../src/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);
import { StackActions, NavigationActions } from 'react-navigation';
import { Dimensions, PixelRatio, TouchableHighlight } from 'react-native';
import themes from '../components/themes/Variables.js';
import { getEventInfo } from '../Services/API';
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
let eventsDetails=[];
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
    this.props.navigation.navigate('Dashboard', {
      dashboardEventId : event_id
    })
  }

  render() {
    const { navigation } = this.props;
    const event_id = navigation.getParam('eventId');
    console.log(event_id);
    const event_name = navigation.getParam('eventName');
    const event_description = navigation.getParam('eventBody');
    const event_date = navigation.getParam('eventDate');
    return (
      <Container style={styles.container,{backgroundColor:'#EEEEEE'}}>
      <LinearGradient start={{x: 0, y: 2}} end={{x: 1, y: 2}} colors={['#88BE49','#447A47']}>
      <Header span transparent androidStatusBarColor='transparent'
        style={{height:130}}>
          <Left style={{flex:1}}>
            <Button transparent onPress={() => this.props.navigation.navigate('Home')} style={{flex:1,paddingBottom:15,alignContent:'center',justifyContent:'center'}} >
            <Icon name='back-arrow' style={{color:'white',fontSize:15}}/>
            </Button>
          </Left>
          <Body style={{flex:1}}>
          <Title style={{flex:0,alignContent:'center',paddingBottom:25,paddingLeft:40,fontSize: themes.fonts.INIT_FONT_SIZE_XL,fontFamily: themes.fonts.INIT_FONT_Family}}>Events</Title>
          </Body>
          <Right style={{flex:1}} />
        </Header>
        </LinearGradient>
        <Content>
          <Image
          style={{width: 500, height: 250,flexDirection:'row',flex:1}}
          source={{uri: 'https://images.pexels.com/photos/1384614/pexels-photo-1384614.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}}/>
         <Card style={styles.shadow}>
            <View style={{flexDirection:'column'}}>
              <View>
            <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,textAlign:'left',paddingTop:15,paddingLeft:10,paddingBottom:8,color: themes.colors.INIT_COLOR_Blue,fontFamily: themes.fonts.INIT_FONT_Family}}>
                {event_name}
                </Text>
                </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_S,textAlign:'left',paddingLeft:10,paddingBottom:8,color: themes.colors.INIT_COLOR_Green,fontFamily: themes.fonts.INIT_FONT_Family}}>
                {event_date}
                </Text>
                </View>
                <View>
                  <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M,textAlign:'left',paddingLeft:10,paddingBottom:15,color: themes.colors.INIT_COLOR_Grey,fontFamily: themes.fonts.INIT_FONT_Family}}>
                  {event_description}
                  </Text>
                </View>
                </View>
                </Card>       
                <View style={{ margin: 15 }}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#88BE49', '#447A47']} style={{ borderRadius: 100 }}>
              <TouchableOpacity onPress={() => this.dashboardInfoScreen(event_id)}
                style={{ borderRadius: 100, justifyContent: 'space-between', padding: 15 }}>
                <Text style={{ color: themes.colors.INIT_COLOR_White, alignSelf: 'center', textTransform: 'capitalize', fontSize: themes.fonts.INIT_FONT_SIZE_L, paddingHorizontal: 5, marginLeft: 8, marginRight: 8, fontFamily: themes.fonts.INIT_FONT_Family }}>Open</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </Content>    
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


