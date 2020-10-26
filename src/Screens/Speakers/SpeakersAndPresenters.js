import { CardItem, Container, Header, Thumbnail, Left, Body, Right, Button, Content, Text } from 'native-base';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions, createDrawerNavigator } from 'react-navigation';
import React, { Component } from 'react';
import { View, ScrollView, Image, FlatList, TouchableWithoutFeedback } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions, PixelRatio} from 'react-native';
import {speakersAndpresentersInfo} from '../../Services/API';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../../src/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);
import themes from '../../components/themes/Variables.js';


let Details = [];

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


let _saveItem = async (value) => {
  try {
    console.log(value.id);
    // let o = {name: value}
    console.log("Saved data successfully");
  } catch (error) {
    console.log(error + " Error saving data");
  }
}


export default class SpeakersAndPresenters extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  })

  constructor(props) {
    super();
    this.state = { dataSource: [] };
  }
  componentDidMount() {
    speakersAndpresentersInfo().then((data) => {
      data.map(item => {
        var o = { name: item.speaker_name,
          avatarUrl: item.profile_image.guid,
           subtitle: item.designation, 
           group: item.group ,
           organization:item.organization,
           description:item.speaker_description };
        Details.push(o);
        console.log(Details);
      })
        this.setState({
          dataSource: Details
        });
        this.filterData(Details);

    });
  }
  
  filterData(Details) {
    for (let i = 65; i <= 90; i++) {
      let o = { name: String.fromCharCode(i) };
      Details.push(o);
    }
    Details.sort((a, b) => {
      let newNamea = a.name.replace(/^(Dr|Mr|Prof).\s/i, '');
      let newNameb = b.name.replace(/^(Dr|Mr|Prof).\s/i, '');
      if (newNamea > newNameb) {
        return 1
      } else {
        return -1
      }
    });
    console.log(Details[0]);
  }

  speakersDetailScreen = (item) => {
    this.props.navigation.navigate('SpeakerModerator', {
        userName: item.name,
        userDesignation:item.subtitle,
        userProfileImage:item.avatarUrl,
        userOrganization:item.organization,
        userDescription:item.description

    })
}
  renderItem = ({ item }) => {
    if (item.name.length > 1) {
      return (
        <View style={styles.item}>
                <Product favorite={item.favorite}  />
            <TouchableWithoutFeedback onPress={() => this.speakersDetailScreen(item)}>
              <View style={{flexDirection:'row'}}>
                <Image source={{ uri: item.avatarUrl }} style={{marginLeft:10, width: 40, height: 40, borderRadius: 50, marginRight: 10 }} />
                <Text style={{ fontFamily: themes.fonts.INIT_FONT_Family, fontSize: themes.fonts.INIT_FONT_SIZE_L ,marginTop:10}} >{item.name}</Text>
              </View>
            </TouchableWithoutFeedback>
        </View>
      )
    } else {
      return (
          <View style={styles.itemSeparator}>
            <Text style={{ fontFamily: themes.fonts.INIT_FONT_Family, fontSize: themes.fonts.INIT_FONT_SIZE_XL }} >
            {item.name}
            </Text>
          </View>
      )
    }
  }
  render() {
    return (
      <View >
        <View >
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#88BE49', '#447A47']} style={styles.LinearGradient}>
            <Header transparent androidStatusBarColor='transparent'
              style={{ height: 100 }}>
              <Left style={{flex:1,alignSelf:'center'}}>
                <Button transparent onPress={() => this.props.navigation.navigate('Home')}>
                <Icon name='back-arrow' style={{color: themes.colors.INIT_COLOR_White, fontSize: themes.fonts.INIT_FONT_SIZE_IconSize_M, paddingTop: 0, marginRight: -100}} />
                </Button>
              </Left>
              <Body style={{flex:1,alignSelf:'center',marginLeft:-60}}>
              <Text style={{ color: themes.colors.INIT_COLOR_White, fontSize: themes.fonts.INIT_FONT_SIZE_XL, fontFamily: themes.fonts.INIT_FONT_Family, alignSelf: 'center'}}>
                Speakers & Presenters Only
                 </Text>
              </Body>
              <Right style={{flex:1,alignSelf:'center'}}>
              </Right>
            </Header>
          </LinearGradient>
        </View>
        <FlatList
          style={{ marginBottom: 100 }}
          data={this.state.dataSource}
          keyExtractor={item => item.name}
          renderItem={this.renderItem}
        />
     </View>
    )
  }
}


class Product extends Component {
  constructor(props) {
      super(props);
      this.state = {
          favorite: false
      };
  }
  
  componentWillMount() {
      const { favorite } = this.props;
      this.setState({favorite });
  }

  render(item) {
      const { favorite } = this.state;

      return (
                  <Icon
                      name={favorite ? 'fillheart' : 'heart'}
                      color={favorite ? themes.colors.INIT_COLOR_Yellow : themes.colors.INIT_COLOR_Yellow}
                      size={25}
                      style={{ marginBottom: 10, marginTop: 10 }}
                      onPress={() => _saveItem(item) & this.setState({ favorite: !favorite }) }     
                    />
      );
  }
}

const styles = {
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 40,
    paddingBottom: 20
  },
  itemSeparator: {
    padding: 20
  }
}