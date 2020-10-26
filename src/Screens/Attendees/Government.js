import { CardItem, Container, Header, Thumbnail, Left, Body, Right, Button, Content, Text } from 'native-base';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions, createDrawerNavigator } from 'react-navigation';
import React, { Component } from 'react';
import { View, ScrollView, Image, FlatList, TouchableHighlight } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { attendeesInfo } from '../../Services/API';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../../src/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);
import themes from '../../components/themes/Variables.js';


let _saveItem = async (key, value) => {
  try {
    ;
    console.log("Saved data successfully");
  } catch (error) {
    console.log(error + " Error saving data");
  }
}
const attendeesDetails = [];

export default class Government extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  })

  constructor(props) {
    super();
    this.state = { dataSource: [] };
  }
  componentDidMount() {
    attendeesInfo().then((data) => {
      data.map(item => {
        var attendee = { name: item.attendee_name, avatarUrl: item.profile_image.guid, group: item.group };
        if (attendee.group.toUpperCase() == "GOVERNMENT") attendeesDetails.push(attendee);
      })
      this.setState({
        dataSource: attendeesDetails
      });
      this.filterData(attendeesDetails);
    });
  }

  filterData(attendeesDetails) {
    for (let i = 65; i <= 90; i++) {
      let o = { name: String.fromCharCode(i) };
      attendeesDetails.push(o);
    }
    attendeesDetails.sort((a, b) => {
      let newNamea = a.name.replace(/^(Dr|Mr|Prof).\s/i, '');
      let newNameb = b.name.replace(/^(Dr|Mr|Prof).\s/i, '');
      if (newNamea > newNameb) {
        return 1
      } else {
        return -1
      }
    });
  }
  renderItem = ({ item }) => {
    if (item.name.length > 1) {
      return (<View style={styles.item}>
        <TouchableHighlight onPress={() => _saveItem("name", item.name)}>
        <Icon style={{ paddingRight: 20, paddingLeft: 10, color: themes.colors.INIT_COLOR_Yellow ,fontSize: themes.fonts.INIT_FONT_SIZE_IconSize_M}} name="heart"  />
        </TouchableHighlight>
        
        <Text style={{fontFamily: themes.fonts.INIT_FONT_Family,fontSize: themes.fonts.INIT_FONT_SIZE_L}} >{item.name}</Text>
      </View>)
    } else {
      return (
        <View style={styles.itemSeparator}>
          <Text style={{fontFamily: themes.fonts.INIT_FONT_Family,fontSize: themes.fonts.INIT_FONT_SIZE_XL}} >{item.name}</Text></View>
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
              <Left>
                <Button transparent onPress={() => this.props.navigation.navigate('Home')}>
                <Icon name='back-arrow' style={{color: themes.colors.INIT_COLOR_White, fontSize: themes.fonts.INIT_FONT_SIZE_IconSize_M, paddingTop: 0, marginRight: -100}} />
                </Button>
              </Left>
              <Body style={{ marginRight: -120 }}>
              <Text style={{ color: themes.colors.INIT_COLOR_White, fontSize: themes.fonts.INIT_FONT_SIZE_XL, fontFamily: themes.fonts.INIT_FONT_Family, alignSelf: 'center'}}>
                  Government
                 </Text>
              </Body>
              <Right>
                
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