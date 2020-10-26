import React, { Component } from 'react';
import { Text, View,StyleSheet} from 'react-native';
import { StackActions} from 'react-navigation';
import { Container, Header,Content, Button,Left, Body, Right, CardItem,Title,Card,Separator,Thumbnail} from 'native-base';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../../../src/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions, PixelRatio} from 'react-native';
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


export default class InaugurationChemicalsTechnicalSession extends Component {
  render() {
    const { navigation } = this.props;
    const event_name = navigation.getParam('eventName');
    const event_description = navigation.getParam('eventBody');
    const speaker_name = navigation.getParam('eventSpeakerName');
    const speaker_designation = navigation.getParam('eventSpeakerDesignation');
    const event_date = navigation.getParam('eventDate');
    const speaker_organisation = navigation.getParam('eventSpeakerOrganization');
    const speaker_image = navigation.getParam('eventSpeakerImage');
    const event_location = ' Seminar Hall 14';

    return (
      <Container style ={styles.container}>
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#88BE49', '#447A47']} style={styles.LinearGradient}>
          <Header span transparent androidStatusBarColor='transparent'
            style={{ height: heightPercentageToDP('40%') }}>
            <View>
              <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                <Button transparent style={{ width: widthPercentageToDP('20%') }}>
                  <Icon name='back-arrow' style={{ color: themes.colors.INIT_COLOR_White,fontSize: themes.fonts.INIT_FONT_SIZE_XL,marginLeft:-60 }} onPress={() => this.props.navigation.dispatch(StackActions.popToTop())} />
                </Button>
                <Title style={styles.title}>Session</Title>
              </View>
              <Card style={styles.shadow}>
          <CardItem>
            <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_XL,color: themes.colors.INIT_COLOR_Blue,fontFamily: themes.fonts.INIT_FONT_Family, padding: 7 }}>
            {event_name}
            </Text>
          </CardItem>
          <CardItem style={{ paddingLeft: 17, paddingTop: 2 }}>
            <Left style={{ marginTop: -10, paddingLeft: 7 }}>
              <Icon name='clock' style={{ fontSize: themes.fonts.INIT_FONT_SIZE_XL,color: themes.colors.INIT_COLOR_Green }} />
              <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L,color: themes.colors.INIT_COLOR_Grey,fontFamily: themes.fonts.INIT_FONT_Family ,marginLeft:10}}>
              {event_date}
              </Text>
            </Left></CardItem>
          <CardItem style={{ paddingLeft: 17, paddingTop: -5 }}>
            <Left style={{ paddingBottom: 10, paddingLeft: 5 }}>
              <Icon name='placeholder' style={{ fontSize: themes.fonts.INIT_FONT_SIZE_XL,paddingLeft:3,color: themes.colors.INIT_COLOR_Green }} />
              <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L,color: themes.colors.INIT_COLOR_Grey,fontFamily: themes.fonts.INIT_FONT_Family,marginLeft:10}}> 
                {event_location}
              </Text>
            </Left>
          </CardItem>
        </Card>
          </View>
          </Header>
          </LinearGradient>
          <Content>
          <Card style={styles.shadow2}>
          <CardItem >
            <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_XL,marginTop:10,color: themes.colors.INIT_COLOR_Blue,fontFamily: themes.fonts.INIT_FONT_Family}}> Description </Text>
            </CardItem>
            <CardItem >
            <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,padding:5,marginTop:-20,textAlign:'auto',color: themes.colors.INIT_COLOR_Grey,fontFamily: themes.fonts.INIT_FONT_Family}}>
             {event_description}
              </Text>
          </CardItem>
          </Card>
<Separator transparent style={styles.container2}>
            <Text style={{color: themes.colors.INIT_COLOR_Blue,fontFamily: themes.fonts.INIT_FONT_Family,fontSize: themes.fonts.INIT_FONT_SIZE_XL}}>Speakers</Text>
          </Separator>
          <Card style={{marginTop:5, marginLeft:15,marginRight:15}}>
          <CardItem>
          <Left style={{flex:1,padding:5}}>
            <Thumbnail source = {{uri:speaker_image}} style={{alignSelf:'center'}}/>
           </Left>
          <Body style={{alignSelf:'center',marginLeft:-50}}>
          <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_XL,color: themes.colors.INIT_COLOR_Blue,fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-50}}>{speaker_name} </Text>
          <Text style={{paddingTop:5,fontSize: themes.fonts.INIT_FONT_SIZE_M,color: themes.colors.INIT_COLOR_Grey,fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('65%')}}>{speaker_designation} </Text>
          <Text style={{paddingTop:5,fontSize: themes.fonts.INIT_FONT_SIZE_M,color: themes.colors.INIT_COLOR_Grey,fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%')}}>{speaker_organisation} </Text>
          </Body>
          <Right style={{flex:1}}>
          </Right>
            </CardItem >
            </Card>
          </Content>
            </Container>
    );
  }
}



const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#EEEEEE',
      },
      container2 : {
        backgroundColor: '#EEEEEE',
        paddingLeft:20,
        fontFamily: themes.fonts.INIT_FONT_Family,
        color: themes.colors.INIT_COLOR_Blue,
        fontSize: themes.fonts.INIT_FONT_SIZE_M
      },
   title: {
    fontSize: 14,
    fontFamily: themes.fonts.INIT_FONT_Family ,
    alignSelf: 'center',
    color:'white',
    textAlign: 'center',
    justifyContent: 'center',
    width:widthPercentageToDP('50%')
    },
   shadow: {
    height:heightPercentageToDP('17%'),width:widthPercentageToDP('90%')
  },
  shadow2: {
   marginTop:20,
   marginLeft:15,
   marginRight:15
  }
})
