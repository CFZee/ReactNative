
import React, { Component } from 'react';
import { Text, View,Image,FlatList } from 'react-native';
import { Container, Header,Fab, Content, Button,Left, Body, Right, CardItem } from 'native-base';
import { Card } from 'react-native-elements';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions ,createBottomTabNavigator} from 'react-navigation';
import fontelloConfig from '../../../../src/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);
import BottomNavigation, {
  FullTab
} from 'react-native-material-bottom-navigation';
import {Dimensions, PixelRatio} from 'react-native';
import  themes from '../../../components/themes/Variables.js';
import { getDefaultEvent, getEventInfo } from '../../../Services/API';


let eventsDetails=[];


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

export default class AgroChemicalsAboutTheEvent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active: 'true'
    };
  }

  render() {
    return (
      <Container style={styles.container}>
                <Header transparent androidStatusBarColor='black'
          style={{height:200,width:widthPercentageToDP('100%')} }>
            <View style={{flexDirection:'column'}}>
              <View>
          <Image
          style={{width:widthPercentageToDP('100%'), height: heightPercentageToDP('32%'),alignSelf:'center'}}
          source={{uri: 'https://images.pexels.com/photos/1384614/pexels-photo-1384614.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940/'}}/>
          </View>
            <View style={{flexDirection: 'row',position:'absolute',paddingTop:25}} >
              <View>
                    <Button transparent style={{width:widthPercentageToDP('20%')}} onPress={() => this.props.navigation.dispatch(StackActions.popToTop())}>
                         <Icon name='back-arrow' style={{color:themes.colors.INIT_COLOR_White,fontSize:15}}/>
                        </Button>
                      </View>
                      <View style={{alignSelf:'center'}}>
              <Text style={{color:themes.colors.INIT_COLOR_White,fontFamily:themes.fonts.INIT_FONT_Family,marginLeft:50}}>
                                About the Event
                </Text>
                </View>
            </View>
            </View>
            </Header>
          <Fab small
            active={this.state.active}
            position="topRight"
            style={{margin:5, backgroundColor: '#fff',fontSize:20,marginBottom:-170}}
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="heart" style={{fontSize:25,color:'#E9D306'}}/>
            </Fab>
          <Content style={styles.shadow,{paddingTop:45}}>
            <Card style={styles.shadow}>
              <CardItem style={{paddingLeft:5,paddingTop:5}}>
      <Text style={{fontSize:themes.fonts.INIT_FONT_SIZE_L,fontFamily:themes.fonts.INIT_FONT_Family,color:themes.colors.INIT_COLOR_Blue}}>
      Conference on "Green Chemistry for Agro Chemicals Industry"			
</Text>
      </CardItem>
      <CardItem style={{paddingLeft:5,paddingTop:2,paddingTop:5}}>
      <Left >
        <Icon name ='calendar' style={{fontSize:20,color:themes.colors.INIT_COLOR_Green}}/>
        <Text style={{fontSize:themes.fonts.INIT_FONT_SIZE_S,color:themes.colors.INIT_COLOR_Grey,fontFamily:themes.fonts.INIT_FONT_Family,paddingLeft:10}}>Day 2, 17th October</Text>
        </Left></CardItem>
        <CardItem style={{paddingLeft:8,paddingTop:-5}}>
          <Left>
        <Icon name ='placeholder' style={{fontSize:themes.fonts.INIT_FONT_SIZE_IconSize_M,color:themes.colors.INIT_COLOR_Green}}/>
        <Text style={{fontSize:themes.fonts.INIT_FONT_SIZE_S,color:themes.colors.INIT_COLOR_Grey,fontFamily:themes.fonts.INIT_FONT_Family}}>Seminar Hall 14</Text>
          </Left>
          </CardItem>
          <CardItem style={{paddingLeft:5,paddingTop:5}}>
            <Text style={{fontFamily:themes.fonts.INIT_FONT_Family,fontSize:themes.fonts.INIT_FONT_SIZE_M}}>
              About the Meeting
              </Text>
            </CardItem>
          <CardItem style={{paddingLeft:5,paddingTop:-2,paddingBottom:5,marginRight:-15}}>
            <Text style={{fontSize:themes.fonts.INIT_FONT_SIZE_S,textAlign:'auto',color:themes.colors.INIT_COLOR_Grey,fontFamily:themes.fonts.INIT_FONT_Family}}>
            To share various business, regulatory, supply chain dynamics happening globally in Agro Chemicals Industry related to sustainability.	To share Green Chemistry initiatives, successful case studies, tools, techniques & best practices by large agro companies. To share recent innovations like Flow Chemistry & its successful implementation in Agro Chemicals Industry. To introduce new innovative green chemistry & engineering/environmental solution providers. To identify challenges, gaps & mindset issues in implementing Green Chemistry and way forward for Agro Industry.		
              </Text>
          </CardItem>

          <Body/>
      </Card>
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
  shadow: {
    marginRight:15,
    marginLeft:15,
    padding:15,
    backgroundColor:'#fff',
    padding:20 ,
    paddingBottom:50,
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: 50,
    marginBottom: 10,
    elevation:10,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "grey",
    shadowOpacity: 1.0,
    shadowRadius: 10
  }
});
