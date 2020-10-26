import { Header, Left, Body, Right, Button, Text, Container } from 'native-base';
import React, { Component } from 'react';
import { View, Image,Dimensions, PixelRatio,FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createAppContainer, StackActions, createBottomTabNavigator } from 'react-navigation';
import themes from '../components/themes/Variables';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../src/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);
import Search from "./Search";
import Profile from './Profile';
import Speakers from './Speakers';
import Events from './Events';
let floorPlanDetails = [];

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

  
class FloorPlan extends Component {
    static navigationOptions = () => ({
      header: null
    })
    constructor(props) {
      super(props);
      this.state = { dataSource: [] };
    }
    
    componentDidMount() {
      floorPlan().then((data) => {
        data.map(item => {
          var Detail = { floorPlanImage: item.floor_plan};
          floorPlanDetails = Detail;
        })
        this.setState({
          dataSource: floorPlanDetails
        });
        console.log(this.state.dataSource);
        });
    }
  
  
  renderItem = ({ item }) => {
    if (item.name.length > 1) {
      return (
        <View style={styles.item}>
              <View>
                <Image source={{ uri: item.floorPlanImage }} style={{ flex:1,height:null,width:null }} />
              </View>
        </View>
      )
    }
  }
    render() {
      return (
        <Container>
          <View >
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#88BE49', '#447A47']} style={styles.LinearGradient}>
              <Header transparent androidStatusBarColor='transparent'
                style={{ height: 100 }}>
                <Left>
                  <Button transparent onPress={() => this.props.navigation.dispatch(StackActions.popToTop())}>
                    <Icon name='back-arrow' style={{ color: themes.colors.INIT_COLOR_White, fontSize: themes.fonts.INIT_FONT_SIZE_IconSize_M, paddingTop: 0, marginRight: -100 }} />
                  </Button>
                </Left>
                <Body style={{ marginRight: -120 }}>
                  <Text style={{ color: themes.colors.INIT_COLOR_White, fontSize: themes.fonts.INIT_FONT_SIZE_XL, fontFamily: themes.fonts.INIT_FONT_Family, alignSelf: 'center' }}>
                    Floor Plan
                   </Text>
                </Body>
                <Right>
                  <Button transparent onPress={() => { this.props.navigation.navigate('Search') }}>
                    <Icon name='search' style={{ color: themes.colors.INIT_COLOR_White, fontSize: themes.fonts.INIT_FONT_SIZE_IconSize_M, }} />
                  </Button>
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
        </Container>
      )
    }
  }

  const TabNavigator = createBottomTabNavigator(
    {
      Home: {
        screen: FloorPlan,
        navigationOptions: {
          tabBarLabel: 'Home',
          tabBarIcon: ({ tintColor }) => (
            tintColor = themes.colors.INIT_COLOR_Green,
            <Icon name="store" color={tintColor} style={{ paddingTop: 8 }} size={22} />
          )
        }
      },
      Map: {
        screen: Events,
        navigationOptions: {
          tabBarLabel: 'FloorPlan',
          tabBarIcon: ({ tintColor }) => (
            tintColor = themes.colors.INIT_COLOR_Green,
            <Icon name="map" color={tintColor} style={{ paddingTop: 8 }} size={22} />
          )
        }
      },
      Profile: {
        screen: Profile,
        navigationOptions: {
          tabBarLabel: 'Profile',
          tabBarIcon: ({ tintColor }) => (
            tintColor = themes.colors.INIT_COLOR_Green,
            <Icon name="iconfinder_39_2529953" color={tintColor} style={{ paddingTop: 8 }} size={22} />
          )
        }
      },
      Text: {
        screen: Speakers,
        navigationOptions: {
          tabBarLabel: 'Speakers',
          tabBarIcon: ({ tintColor }) => (
            tintColor = themes.colors.INIT_COLOR_Green,
            <Icon name="speech-bubble" color={tintColor} style={{ paddingTop: 8 }} size={22} />
          )
        }
      },
      Search: {
        screen: Search,
        navigationOptions: {
          tabBarLabel: 'Search',
          tabBarIcon: ({ }) => (
            tintColor = themes.colors.INIT_COLOR_Green,
            <Icon name="search" color={tintColor} style={{ opacity: 0.8 }} style={{ paddingTop: 8 }} size={22} />
          )
        }
      },
    },
    {
      initialRouteName: "Home"
    },
  );
  export default createAppContainer(TabNavigator);

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
      padding: 20,
    }
  }