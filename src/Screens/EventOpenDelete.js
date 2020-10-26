import React, { Component } from "react";
import { Container, Header, Right, Title, Card, Content, Button, Left, Body, Text, CardItem } from "native-base";
import { View, Image, TouchableOpacity, FlatList } from 'react-native';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../src/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);
import Dialog from "react-native-dialog";
import LinearGradient from 'react-native-linear-gradient';
import { Dimensions, PixelRatio } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions, createBottomTabNavigator } from 'react-navigation';
import themes from '../components/themes/Variables.js';
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
const url = "http://ec2-13-233-45-99.ap-south-1.compute.amazonaws.com/index.php/wp-json/wp/v2/events";

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
export default class EventOpenDelete extends Component {
  constructor(props) {
    super();
    this.state = { dataSource: [] };
    this.state = {
      customStyleIndex: 0,
    };
    this.state = {
      show: true,
    };
    this.state = {
      show2: true,
    };
    state = {
      toggle: true,
      toggle2: true,
    }
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    fetch(url)
      .then(response => response.json())
      .then((responseJson) => {
        responseJson.map(item => {
          var o = { name: item.event_name, description: item.event_description, date: item.date_time };
          newList.push(o);
        })
        this.setState({ dataSource: newList });
      })
      .catch(error => console.log(error))
  }

  renderItem = ({ item }) => {
    return (
      <View>
        <Card style={styles.shadow}>
          <View style={{ flexDirection: 'column' }}>
            <View style={{ padding: 10 }}>
              <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_M, textAlign: 'left', color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family }}>
                {item.name}
              </Text>
            </View>
            <View style={{ paddingLeft: 10 }}>
              <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_S, textAlign: 'left', color: themes.colors.INIT_COLOR_Green, fontFamily: themes.fonts.INIT_FONT_Family }}>
                {item.date}
              </Text>
            </View>
            <View style={{ padding: 10 }}>
              <Text style={{ flex: 1, justifyContent: 'space-between', lineHeight: 11, fontSize: themes.fonts.INIT_FONT_SIZE_S, color: '#9B9C9F', fontFamily: themes.fonts.INIT_FONT_Family }}>
                {item.description}
              </Text>
            </View>
          </View>
        </Card>
      </View>
    );
  }
  ShowHideComponent = () => {
    const newState = !this.state.toggle;
    this.setState({ toggle: newState })
    if (this.state.show == false) {
      this.setState({ show: true });
      this.setState({ show2: false });
    } else {
      this.setState({ show: false });
    }
    if (this.state.toggle == false) {
      this.setState({ toggle: true });
      this.setState({ toggle2: false });
    }
    else {
      this.setState({ toggle: false })
    }
  };

  ShowHideComponent2 = () => {
    if (this.state.show2 == false) {
      this.setState({ show2: true });
      this.setState({ show: false });

    } else {
      this.setState({ show2: false });
    }
    const newState = !this.state.toggle2;
    this.setState({ toggle2: newState })
    if (this.state.toggle2 == false) {
      this.setState({ toggle2: true });
      this.setState({ toggle: false });

    }
    else {
      this.setState({ toggle2: false })
    }

  };



  state = {
    dialogVisible: false
  };

  showDialog = () => {
    this.setState({ dialogVisible: true });
  };

  handleCancel = () => {
    this.setState({ dialogVisible: false });
  };

  handleDelete = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    this.setState({ dialogVisible: false });
  };

  render() {
    const { toggle } = this.state;
    const { toggle2 } = this.state;
    const textColor = toggle ? "white" : "#447A47";
    const buttonbg = toggle ? "transparent" : "#EEEEEE";
    const borderbg = toggle ? "transparent" : "transparent";
    const textColor2 = toggle2 ? "white" : "#447A47";
    const buttonbg2 = toggle2 ? "transparent" : "#EEEEEE";
    const borderbg2 = toggle2 ? "transparent" : "transparent";
    return (
      <Container style={styles.container, { backgroundColor: '#EEEEEE' }}>
        <LinearGradient start={{ x: 0, y: 2 }} end={{ x: 1, y: 2 }} colors={['#88BE49', '#447A47']}>
          <Header span transparent androidStatusBarColor='transparent'
            style={{ height: 130 }}>
            <Left style={{ flex: 1 }}>
              <Button transparent onPress={() => {
                this.props.navigation.dispatch(StackActions.reset({
                  index: 0,
                  actions: [
                    NavigationActions.navigate({ routeName: 'Events' })
                  ],
                }))
              }}
                style={{ flex: 1, paddingBottom: 15, alignContent: 'center', justifyContent: 'center' }}>
                <Icon name='back-arrow' style={{ color: themes.colors.INIT_COLOR_White, fontSize: 15 }} />
              </Button>
            </Left>
            <Body style={{ flex: 1 }}>
              <Title style={{ flex: 0, alignContent: 'center', paddingBottom: 25, paddingLeft: 40, fontSize: 14, fontFamily: themes.fonts.INIT_FONT_Family }}>Events</Title>
            </Body>
            <Right style={{ flex: 1 }} />
          </Header>
        </LinearGradient>
        <Content>
          <Image
            style={{ height: heightPercentageToDP('30%'), width: widthPercentageToDP('100%'), flexDirection: 'row', flex: 1 }}
            source={{ uri: 'https://images.pexels.com/photos/1384614/pexels-photo-1384614.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' }} />
          <FlatList style={{ marginTop: 15 }}
            data={this.state.dataSource}
            keyExtractor={item => item.name}
            renderItem={this.renderItem}
          />
          <View style={{ flexDirection: "row", paddingBottom: 20, paddingTop: 20, paddingLeft: 20 }}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#88BE49', '#447A47']} style={{ borderRadius: 100 }}>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('Dashboard') }} style={{ borderRadius: 100, backgroundColor: buttonbg, justifyContent: 'space-between', padding: 15, borderColor: borderbg, borderWidth: 1 }}>
                <Text style={{ color: textColor, textTransform: 'capitalize', fontSize: 12, paddingHorizontal: 5, fontFamily: themes.fonts.INIT_FONT_Family }}>            Open             </Text>
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#88BE49', '#447A47']} style={{ borderRadius: 100, marginLeft: 20 }}>
              <TouchableOpacity onPress={this.ShowHideComponent2, this.showDialog} style={{ borderRadius: 100, backgroundColor: buttonbg2, justifyContent: 'space-between', padding: 15, borderColor: borderbg2, borderWidth: 1 }}>
                <Text style={{ color: textColor2, textTransform: 'capitalize', fontSize: 12, paddingHorizontal: 5, fontFamily: themes.fonts.INIT_FONT_Family }}>            Delete            </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
          <Dialog.Container visible={this.state.dialogVisible} style={{ overlayBackgroundColor: 'black', overlayOpacity: 0.5, blurRadius: 10 }}>
            <LinearGradient start={{ x: 0, y: 2 }} end={{ x: 1, y: 2 }} colors={['#88BE49', '#447A47']} style={{ marginTop: -40, marginLeft: -18, marginRight: -18 }}>
              <Header transparent style={{ height: 100 }} >
                <Dialog.Title style={{ textAlign: 'center', position: 'relative', color: themes.colors.INIT_COLOR_White, fontSize: 12, paddingTop: 20, fontFamily: themes.fonts.INIT_FONT_Family }}>Are You Sure</Dialog.Title>
              </Header>
            </LinearGradient>
            <View style={{ flexDirection: 'column' }}>
              <View style={{ paddingTop: 25 }} >
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#88BE49', '#447A47']} style={{ borderRadius: 70, marginRight: 60, marginLeft: 60 }}>
                  <TouchableOpacity onPress={this.ShowHideComponent} style={{ borderRadius: 100, backgroundColor: 'white', padding: 5, justifyContent: 'space-between', borderColor: borderbg, borderWidth: 1 }}>
                    <Dialog.Button label="Yes" onPress={this.handleCancel} style={{ color: textColor2, textAlign: 'center', textTransform: 'capitalize', fontFamily: themes.fonts.INIT_FONT_Family }} />
                  </TouchableOpacity>
                </LinearGradient>
              </View>
              <View style={{ paddingTop: 20, paddingBottom: 15 }}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#88BE49', '#447A47']} style={{ borderRadius: 70, marginRight: 60, marginLeft: 60 }}>
                  <TouchableOpacity onPress={this.ShowHideComponent2} style={{ borderRadius: 100, backgroundColor: 'white', padding: 5, justifyContent: 'space-between', borderColor: borderbg2, borderWidth: 1 }}>
                    <Dialog.Button label="No" onPress={this.handleCancel} style={{ color: textColor2, textAlign: 'center', textTransform: 'capitalize', fontFamily: themes.fonts.INIT_FONT_Family }} />
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </View>
          </Dialog.Container>
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