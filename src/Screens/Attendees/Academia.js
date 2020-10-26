import { CardItem, Container, Header, Thumbnail, Left, Body, Right, Button, Content, Text } from 'native-base';
import React, { Component } from 'react';
import { View, Image, FlatList, TouchableHighlight } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { AsyncStorage } from "react-native";
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../../src/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);
import themes from '../../components/themes/Variables.js';

let _saveItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log("Saved data successfully");
  } catch (error) {
    console.log("Error saving data");
  }
}
let newList = [];
// const sortedList = list.sort((a, b) => (a.name > b.name) ? 1 : -1)

export default class Academia extends Component {
  constructor(props) {
    super();
    this.state = { dataSource: [] };
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    const url = "http://165.22.216.45/wp-json/wp/v2/attendees";
    fetch(url)
      .then(response => response.json())
      .then((responseJson) => {
        responseJson.map(item => {
          var o = { id: item.id, name: item.attendee_name, avatarUrl: item.profile_image.guid, group: item.group };
          if (o.group.toUpperCase() == "ACADEMIA") newList.push(o);
        })
        this.filterData(newList);
        this.setState({ dataSource: newList });
      })
      .catch(error => console.log(error))
  }
  filterData(newList) {
    for (let i = 65; i <= 90; i++) {
      let o = { name: String.fromCharCode(i) };
      newList.push(o);
    }
    newList.sort((a, b) => {
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
                  Academia
                 </Text>
              </Body>
              <Right>

              </Right>
            </Header>
          </LinearGradient>
        </View>
        <View>
          <FlatList
            style={{ marginBottom: 100 }}
            data={this.state.dataSource}
            keyExtractor={item => item.name}
            renderItem={this.renderItem}
          />
        </View>
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