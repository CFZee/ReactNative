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


export default class InaugurationTechnicalSession1 extends Component {
  render() {
    const { navigation } = this.props;
    const event_name = navigation.getParam('eventName');
    const event_description = navigation.getParam('eventBody');
    const speaker_name1 = navigation.getParam('eventSpeakerName1');
    const speaker_designation1 = navigation.getParam('eventSpeakerDesignation1');
    const event_date = navigation.getParam('eventDate');
    const speaker_organisation1= navigation.getParam('eventSpeakerOrganization1');
    const speaker_image1 = navigation.getParam('eventSpeakerImage1');
    const event_location = "Main Auditorium";
    const speaker_name2 = navigation.getParam('eventSpeakerName2');
    const speaker_designation2 = navigation.getParam('eventSpeakerDesignation2');
    const speaker_organisation2 = navigation.getParam('eventSpeakerOrganization2');
    const speaker_image2 = navigation.getParam('eventSpeakerImage2');
    const speaker_name3 = navigation.getParam('eventSpeakerName3');
    const speaker_designation3 = navigation.getParam('eventSpeakerDesignation3');
    const speaker_organisation3 = navigation.getParam('eventSpeakerOrganization3');
    const speaker_image3 = navigation.getParam('eventSpeakerImage3');
    const speaker_name5 = navigation.getParam('eventSpeakerName5');
    const speaker_designation5 = navigation.getParam('eventSpeakerDesignation5');
    const speaker_organisation5 = navigation.getParam('eventSpeakerOrganization5');
    const speaker_image5 = navigation.getParam('eventSpeakerImage5');
    const speaker_name6 = navigation.getParam('eventSpeakerName6');
    const speaker_designation6 = navigation.getParam('eventSpeakerDesignation6');
    const speaker_organisation6 = navigation.getParam('eventSpeakerOrganization6');
    const speaker_image6 = navigation.getParam('eventSpeakerImage6');
    const speaker_name7 = navigation.getParam('eventSpeakerName7');
    const speaker_designation7 = navigation.getParam('eventSpeakerDesignation7');
    const speaker_organisation7 = navigation.getParam('eventSpeakerOrganization7');
    const speaker_image7 = navigation.getParam('eventSpeakerImage7');
    const speaker_name8 = navigation.getParam('eventSpeakerName8');
    const speaker_designation8 = navigation.getParam('eventSpeakerDesignation8');
    const speaker_organisation8 = navigation.getParam('eventSpeakerOrganization8');
    const speaker_image8 = navigation.getParam('eventSpeakerImage8');

    return (
      <Container style ={styles.container}>
         <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#88BE49', '#447A47']} style={styles.LinearGradient}>
          <Header span transparent androidStatusBarColor='transparent'
            style={{ height: heightPercentageToDP('40%') }}>
            <View>
              <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                <Button transparent style={{ width: widthPercentageToDP('20%') }}>
                  <Icon name='back-arrow' style={{ color: themes.colors.INIT_COLOR_White,fontSize: themes.fonts.INIT_FONT_SIZE_XL,marginLeft:-60 }} onPress={() => this.props.navigation.navigate('TechnicalAndSpecialEvents')} />
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
          <View style={styles.cardStyle}>
          <Card style={{marginTop:5, marginLeft:15,marginRight:15}}>
          <CardItem>
          <Left style={{flex:1,padding:5}}>
            <Thumbnail source = {{uri:speaker_image1}} style={{alignSelf:'center'}}/>
           </Left>
          <Body style={{alignSelf:'center',marginLeft:-50}}>
          <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_XL,color: themes.colors.INIT_COLOR_Blue,fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-50}}> {speaker_name1} </Text>
          <Text style={{paddingTop:5,fontSize: themes.fonts.INIT_FONT_SIZE_M,color: themes.colors.INIT_COLOR_Grey,fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('65%')}}> {speaker_designation1} </Text>
          <Text style={{paddingTop:5,fontSize: themes.fonts.INIT_FONT_SIZE_M,color: themes.colors.INIT_COLOR_Grey,fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%')}}> {speaker_organisation1} </Text>

          </Body>
          <Right style={{flex:1}}>
          </Right>
            </CardItem >
            </Card>
            </View>
            <View style={styles.cardStyle}>
          <Card style={{marginTop:5, marginLeft:15,marginRight:15}}>
          <CardItem>
          <Left style={{flex:1,padding:5}}>
            <Thumbnail source = {{uri:speaker_image2}} style={{alignSelf:'center'}}/>
           </Left>
          <Body style={{alignSelf:'center',marginLeft:-50}}>
          <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_XL,color: themes.colors.INIT_COLOR_Blue,fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-50}}> {speaker_name2} </Text>
          <Text style={{paddingTop:5,fontSize: themes.fonts.INIT_FONT_SIZE_M,color: themes.colors.INIT_COLOR_Grey,fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('65%')}}> {speaker_designation2} </Text>
          <Text style={{paddingTop:5,fontSize: themes.fonts.INIT_FONT_SIZE_M,color: themes.colors.INIT_COLOR_Grey,fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%')}}> {speaker_organisation2} </Text>

          </Body>
          <Right style={{flex:1}}>
          </Right>
            </CardItem >
            </Card>
            </View>
            <View style={styles.cardStyle}>
          <Card style={{marginTop:5, marginLeft:15,marginRight:15}}>
          <CardItem>
          <Left style={{flex:1,padding:5}}>
            <Thumbnail source = {{uri:speaker_image3}} style={{alignSelf:'center'}}/>
           </Left>
          <Body style={{alignSelf:'center',marginLeft:-50}}>
          <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_XL,color: themes.colors.INIT_COLOR_Blue,fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-50}}> {speaker_name3} </Text>
          <Text style={{paddingTop:5,fontSize: themes.fonts.INIT_FONT_SIZE_M,color: themes.colors.INIT_COLOR_Grey,fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('65%')}}> {speaker_designation3} </Text>
          <Text style={{paddingTop:5,fontSize: themes.fonts.INIT_FONT_SIZE_M,color: themes.colors.INIT_COLOR_Grey,fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%')}}> {speaker_organisation3} </Text>

          </Body>
          <Right style={{flex:1}}>
          </Right>
            </CardItem >
            </Card>
            </View>
            <View style={styles.cardStyle}>
          <Card style={{marginTop:5, marginLeft:15,marginRight:15}}>
          <CardItem>
          <Left style={{flex:1,padding:5}}>
            <Thumbnail source = {{uri:speaker_image5}} style={{alignSelf:'center'}}/>
           </Left>
          <Body style={{alignSelf:'center',marginLeft:-50}}>
          <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_XL,color: themes.colors.INIT_COLOR_Blue,fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-50}}> {speaker_name5} </Text>
          <Text style={{paddingTop:5,fontSize: themes.fonts.INIT_FONT_SIZE_M,color: themes.colors.INIT_COLOR_Grey,fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('65%')}}> {speaker_designation5} </Text>
          <Text style={{paddingTop:5,fontSize: themes.fonts.INIT_FONT_SIZE_M,color: themes.colors.INIT_COLOR_Grey,fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%')}}> {speaker_organisation5} </Text>

          </Body>
          <Right style={{flex:1}}>
          </Right>
            </CardItem >
            </Card>
            </View>
            <View style={styles.cardStyle}>
          <Card style={{marginTop:5, marginLeft:15,marginRight:15}}>
          <CardItem>
          <Left style={{flex:1,padding:5}}>
            <Thumbnail source = {{uri:speaker_image6}} style={{alignSelf:'center'}}/>
           </Left>
          <Body style={{alignSelf:'center',marginLeft:-50}}>
          <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_XL,color: themes.colors.INIT_COLOR_Blue,fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-50}}> {speaker_name6} </Text>
          <Text style={{paddingTop:5,fontSize: themes.fonts.INIT_FONT_SIZE_M,color: themes.colors.INIT_COLOR_Grey,fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('65%')}}> {speaker_designation6} </Text>
          <Text style={{paddingTop:5,fontSize: themes.fonts.INIT_FONT_SIZE_M,color: themes.colors.INIT_COLOR_Grey,fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%')}}> {speaker_organisation6} </Text>
          </Body>
          <Right style={{flex:1}}>
          </Right>
            </CardItem >
            </Card>
            </View>
            <View style={styles.cardStyle}>
          <Card style={{marginTop:5, marginLeft:15,marginRight:15}}>
          <CardItem>
          <Left style={{flex:1,padding:5}}>
            <Thumbnail source = {{uri:speaker_image7}} style={{alignSelf:'center'}}/>
           </Left>
          <Body style={{alignSelf:'center',marginLeft:-50}}>
          <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_XL,color: themes.colors.INIT_COLOR_Blue,fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-50}}> {speaker_name7} </Text>
          <Text style={{paddingTop:5,fontSize: themes.fonts.INIT_FONT_SIZE_M,color: themes.colors.INIT_COLOR_Grey,fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('65%')}}> {speaker_designation7} </Text>
          <Text style={{paddingTop:5,fontSize: themes.fonts.INIT_FONT_SIZE_M,color: themes.colors.INIT_COLOR_Grey,fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%')}}> {speaker_organisation7} </Text>
          </Body>
          <Right style={{flex:1}}>
          </Right>
            </CardItem >
            </Card>
            </View>
            <View style={styles.cardStyle}>
          <Card style={{marginTop:5, marginLeft:15,marginRight:15}}>
          <CardItem>
          <Left style={{flex:1,padding:5}}>
            <Thumbnail source = {{uri:speaker_image8}} style={{alignSelf:'center'}}/>
           </Left>
          <Body style={{alignSelf:'center',marginLeft:-50}}>
          <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_XL,color: themes.colors.INIT_COLOR_Blue,fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-50}}> {speaker_name8} </Text>
          <Text style={{paddingTop:5,fontSize: themes.fonts.INIT_FONT_SIZE_M,color: themes.colors.INIT_COLOR_Grey,fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('65%')}}> {speaker_designation8} </Text>
          <Text style={{paddingTop:5,fontSize: themes.fonts.INIT_FONT_SIZE_M,color: themes.colors.INIT_COLOR_Grey,fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%')}}> {speaker_organisation8} </Text>

          </Body>
          <Right style={{flex:1}}>
          </Right>
            </CardItem >
            </Card>
            </View>
            <View style={styles.cardStyle}>
          <Card style={{marginTop:5, marginLeft:15,marginRight:15}}>
          <CardItem>
          <Left style={{flex:1,padding:5}}>
            <Thumbnail source = {{uri:speaker_image9}} style={{alignSelf:'center'}}/>
           </Left>
          <Body style={{alignSelf:'center',marginLeft:-50}}>
          <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_XL,color: themes.colors.INIT_COLOR_Blue,fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-50}}> {speaker_name9} </Text>
          <Text style={{paddingTop:5,fontSize: themes.fonts.INIT_FONT_SIZE_M,color: themes.colors.INIT_COLOR_Grey,fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('65%')}}> {speaker_designation9} </Text>
          <Text style={{paddingTop:5,fontSize: themes.fonts.INIT_FONT_SIZE_M,color: themes.colors.INIT_COLOR_Grey,fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%')}}> {speaker_organisation9} </Text>

          </Body>
          <Right style={{flex:1}}>
          </Right>
            </CardItem >
            </Card>
            </View>
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
      cardStyle:{
          marginTop:10,
          marginBottom:10
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
