import React, { Component } from "react";
import { Container, Header, Right, Title, Card, Content, Button, Left, Body, Text, CardItem } from "native-base";
import { latList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../../src/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);
import { Dimensions, PixelRatio } from 'react-native';
import themes from '../../components/themes/Variables.js';
import AsyncStorage from "@react-native-community/async-storage";


let _saveItem = async (key, value) => {
  try {
    ;
    console.log("Saved data successfully");
  } catch (error) {
    console.log(error + " Error saving data");
  }
}
const newList = [];
const sponsorsurl = "http://165.22.216.45/wp-json/wp/v2/sponsors";

const widthPercentageToDP = widthPercent => {
  const screenWidth = Dimensions.get('window').width;
  // Convert string input to decimal number
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100);
};
const heightPercentageToDP = heightPercent => {
  const screenHeight = Dimensions.get('window').height;
  // Convert string input to decimal number
  const elemHeight = parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
};
export {
  widthPercentageToDP,
  heightPercentageToDP
};


export default class SponsorsDetail extends Component {
  constructor(props) {
    super();
    this.state = { dataSource: [] };
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    fetch(sponsorsurl)
      .then(response => response.json())
      .then((responseJson) => {
        responseJson.map(item => {
          var o = { name: item.partner_name, Logo: item.partner_logo.guid, about: item.partner_description };
          newList.push(o);
        })
        this.setState({ dataSource: newList });
      })
      .catch(error => console.log(error))
  }

  renderItem = ({ item }) => {
    renderSponsorsDetails = ({ item }) => {
      return (
        <View>
          <CardItem style={styles.shadowMain}>
            <Left style={{ flex: 1, alignContent: 'space-between' }}>
              <Image source={{ uri: item.Logo }} style={{ width: 50, height: 50, alignSelf: 'center', margin: 10, marginRight: -10 }} />
            </Left>
            <Body style={{ flex: 1 }}>
              <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
                <View>
                  <Text style={{ fontSize: 12.5, color: '#3A4759', fontFamily: 'Montserrat' }}>
                    {item.name}
                  </Text>
                </View>
                <View>
                  <Text style={{ fontSize: 10.5, paddingTop: 3, color: '#9B9C9F', fontFamily: 'Montserrat' }}>
                    {item.about}
                  </Text>
                </View>
              </View>
            </Body>
            <Right style={{ flex: 1, marginLeft: -25 }} >
              <Button transparent>
                <Icon name='forward-arrow' style={{ fontSize: 15, color: 'green', opacity: 0.6 }} />
              </Button>
            </Right>
          </CardItem>
        </View>
      );
    }
  }
  render() {
    // return();
  }
}
