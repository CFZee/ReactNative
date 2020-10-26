import React, { Component } from 'react';
import { Text, View,StyleSheet,FlatList} from 'react-native';
import { Container, Header, Content, Button,Left, Body, Right, CardItem,Title,Card,Separator,Thumbnail} from 'native-base';
import BottomNavigation, {FullTab} from 'react-native-material-bottom-navigation';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../src/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions, PixelRatio} from 'react-native';
import themes from '../components/themes/Variables.js';
import { networkSessionsInfo } from '../Services/API';


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


export default class TechnicalSession extends Component {

  constructor(props) {
    super();
    this.state = { dataSource: [] };
  }
  componentDidMount() {
    networkSessionsInfo().then((data) => {
      let NetworkDetails = data;
      this.setState({
        dataSource: NetworkDetails
      });
      console.log(this.state.dataSource[0].speakers[0]['speaker_name']);
    });
  }

  renderItem1 = ({ item }) => {
    return (
      <View>
        <Card style={styles.shadow}>
          <CardItem>
            <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L,color: themes.colors.INIT_COLOR_Blue,fontFamily: themes.fonts.INIT_FONT_Family, padding: 7 }}>
            {item.event[0]['event_name']}
            </Text>
          </CardItem>
          <CardItem style={{ paddingLeft: 17, paddingTop: 2 }}>
            <Left style={{ marginTop: -10, paddingLeft: 7 }}>
              <Icon name='clock' style={{ fontSize: themes.fonts.INIT_FONT_SIZE_XL,color: themes.colors.INIT_COLOR_Green }} />
              <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_M,color: themes.colors.INIT_COLOR_Grey,fontFamily: themes.fonts.INIT_FONT_Family ,marginLeft:10}}>
              {item.date_and_time}
              </Text>
            </Left></CardItem>
          <CardItem style={{ paddingLeft: 17, paddingTop: -5 }}>
            <Left style={{ paddingBottom: 10, paddingLeft: 5 }}>
              <Icon name='placeholder' style={{ fontSize: themes.fonts.INIT_FONT_SIZE_XL,paddingLeft:3,color: themes.colors.INIT_COLOR_Green }} />
              <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_M,color: themes.colors.INIT_COLOR_Grey,fontFamily: themes.fonts.INIT_FONT_Family,marginLeft:10}}>'
              {item.location}
              </Text>
            </Left>
          </CardItem>
        </Card>
      </View>
    );
  }

  renderItem2 = ({ item }) => {
    return (
      <View>
        <Card style={styles.shadow2}>
          <CardItem>
          </CardItem>
          <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_L,paddingLeft:20,marginTop:-10,textAlign:'auto',color: themes.colors.INIT_COLOR_Blue,fontFamily: themes.fonts.INIT_FONT_Family}}> Description </Text>
          <CardItem >
          <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M,padding:5,marginTop:-10,textAlign:'auto',color: themes.colors.INIT_COLOR_Grey,fontFamily: themes.fonts.INIT_FONT_Family}}>
              {item.event[0]['event_description']}
            </Text>
          </CardItem>
        </Card>
      </View>
    );
  }

  renderItem3 = ({ item }) => {
    return (
      <View>
        <Card style={{
          marginTop: 5,
          marginLeft: 15,
          marginRight: 15
        }}>
          <CardItem>
            <Left style={{ flex: 1, padding: 5 }}>
              <Thumbnail source={{ uri: item.speakers[0].profile_image.guid}} style={{ alignSelf: 'center' }} />
            </Left>
            <Body style={{ alignSelf: 'center', marginLeft: -60 }}>
              <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L,color: themes.colors.INIT_COLOR_Blue,fontFamily: themes.fonts.INIT_FONT_Family}}>
                 {item.speakers[0]['speaker_name']} 
                 </Text>
              <Text style={{marginRight:-80,fontSize: themes.fonts.INIT_FONT_SIZE_S,color: themes.colors.INIT_COLOR_Grey,fontFamily: themes.fonts.INIT_FONT_Family }}>
                 {item.speakers[0]['designation']} 
                 </Text>
            </Body>
            <Right style={{ flex: 1 }}>
              <Icon name='forward-arrow' style={{ color: themes.colors.INIT_COLOR_Green,fontSize: themes.fonts.INIT_FONT_SIZE_L }} onPress={() => this.props.navigation.navigate('SpeakerModerator')} />
            </Right>
          </CardItem >
        </Card>
      </View>
    );
  }

  renderItem4 = ({ item }) => {
    return (
      <View>
        <Card style={{
          marginTop: 5,
          marginLeft: 15,
          marginRight: 15
        }}>
          <CardItem>
            <Left style={{ flex: 1, padding: 5 }}>
              <Thumbnail source={{ uri: item.speakers[1].profile_image.guid}} style={{ alignSelf: 'center' }} />
            </Left>
            <Body style={{ alignSelf: 'center', marginLeft: -60 }}>
              <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L,color: themes.colors.INIT_COLOR_Blue,fontFamily: themes.fonts.INIT_FONT_Family}}>
                 {item.speakers[1].speaker_name} </Text>
              <Text style={{marginRight:-40,fontSize: themes.fonts.INIT_FONT_SIZE_M,color: themes.colors.INIT_COLOR_Grey,fontFamily: themes.fonts.INIT_FONT_Family }}>
                 {item.speakers[1].designation} </Text>
            </Body>
            <Right style={{ flex: 1 }}>
              <Icon name='forward-arrow' style={{ color: themes.colors.INIT_COLOR_Green,fontSize: themes.fonts.INIT_FONT_SIZE_L }} onPress={() => this.props.navigation.navigate('SpeakerModerator')} />
            </Right>
          </CardItem >
        </Card>
      </View>
    );
  }

  tabs = [
    {
      key: 'home',
      icon: 'store',
  
    },
    {
      key: 'map',
      icon: 'map',
      
    },
    {
      key: 'user',
      icon: 'iconfinder_39_2529953',
      
    },
    {
      key: 'text',
      icon: 'speech-bubble',
    },
    {
      key: 'search',
      icon: 'search',
    }
  ];


  renderIcon = icon => ({ isActive }) => (
    <Icon size={25} style={{paddingTop:8,marginLeft:25,paddingRight:25}} color='#447A47' name={icon} />
  );
 
  renderTab = ({ tab, isActive }) => (
    <FullTab
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      renderIcon={this.renderIcon(tab.icon)}
    />
  );
  render() {
    return (
      <Container style={styles.container}>
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#88BE49', '#447A47']} style={styles.LinearGradient}>
          <Header span transparent androidStatusBarColor='transparent'
            style={{ height: 220 }}>
            <View>
              <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                <Button transparent style={{ width: widthPercentageToDP('20%') }}>
                  <Icon name='back-arrow' style={{ color: themes.colors.INIT_COLOR_White,fontSize: themes.fonts.INIT_FONT_SIZE_XL,marginLeft:-60 }} onPress={() => this.props.navigation.dispatch(StackActions.popToTop())} />
                </Button>
                <Title style={styles.title}>Sessions</Title>
              </View>
              <FlatList
                style={{ height: heightPercentageToDP('100%') }}
                data={this.state.dataSource}
                keyExtractor={item => item.name}
                renderItem={this.renderItem1}
              />
            </View>
          </Header>
        </LinearGradient>
        <Content>
          <FlatList
            data={this.state.dataSource}
            keyExtractor={item => item.description}
            renderItem={this.renderItem2}
          />
        
          <Separator transparent style={styles.container2}>
          <Text style={{color: themes.colors.INIT_COLOR_Blue,fontFamily: themes.fonts.INIT_FONT_Family,fontSize: themes.fonts.INIT_FONT_SIZE_XL}}>Speakers</Text>
          </Separator>
          <FlatList
            data={this.state.dataSource}
            keyExtractor={item => item.speakersname}
            renderItem={this.renderItem3}
          />
          <FlatList
          style={{marginTop:10}}
                data={this.state.dataSource}
                keyExtractor={item => item.name}
                renderItem={this.renderItem4}
              />

          <Separator transparent style={styles.container2}>
          <Text style={{color: themes.colors.INIT_COLOR_Blue,fontFamily: themes.fonts.INIT_FONT_Family,fontSize: themes.fonts.INIT_FONT_SIZE_XL}}>Moderators</Text>
          </Separator>
          <FlatList
            data={this.state.dataSource}
            keyExtractor={item => item.description}
            renderItem={this.renderItem3}
          />
          <FlatList
          style={{marginTop:10,marginBottom:20}}
                data={this.state.dataSource}
                keyExtractor={item => item.name}
                renderItem={this.renderItem4}
              />
        </Content>
        <BottomNavigation onTabPress={newTab => this.setState({ activeTab: newTab.key })}
          renderTab={this.renderTab}
          tabs={this.tabs} />
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
        fontSize: themes.fonts.INIT_FONT_SIZE_L
      },
   title: {
    fontSize: themes.fonts.INIT_FONT_SIZE_XL,
    fontFamily: themes.fonts.INIT_FONT_Family,  
    alignSelf: 'center', 
    color: themes.colors.INIT_COLOR_White,
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