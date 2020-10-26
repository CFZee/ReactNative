import React, { Component } from "react";
import { View, Text, StyleSheet ,Linking,WebView} from "react-native";
import {
  createDrawerNavigator,
  createAppContainer,
  DrawerItems
} from "react-navigation";
import GCFDashboard from "./Screens/GCFDashboard";
import {
  Container,
  Content,
  Header,
  Body,
  Left,
  Right,
  Thumbnail
} from "native-base";
import LinearGradient from "react-native-linear-gradient";
import { createIconSetFromFontello } from "react-native-vector-icons";
import fontelloConfig from "../src/config.json";
const Icon = createIconSetFromFontello(fontelloConfig);
import { Dimensions, PixelRatio } from "react-native";
import  themes from './components/themes/Variables';


const widthPercentageToDP = widthPercent => {
  const screenWidth = Dimensions.get("window").width;
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};
const heightPercentageToDP = heightPercent => {
  const screenHeight = Dimensions.get("window").height;
  const elemHeight = parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};
export { widthPercentageToDP, heightPercentageToDP };

export default class App extends Component {
  render() {
    return <MyAppdrawer />;
  }
}

const CustomDrawerContentComponent = props => (
  <Container>
    <LinearGradient
      colors={["#88BE49", "#447A47"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <Header
        span
        transparent
        androidStatusBarColor="transparent"
        style={{ height: 95, position: "relative" }}
      >
        <Left style={{ flex: 1 }}>
          <View style={{ paddingLeft: 10, paddingBottom: 10 }}>
            <Thumbnail
              source={{
                uri:
                  "https://image.shutterstock.com/image-vector/user-icon-trendy-flat-style-260nw-418179865.jpg"
              }}
              style={{
                height: 45,
                width: 45,
                borderRadius: 50,
                paddingLeft: 20
              }}
            />
          </View>
        </Left>
        <Body style={{ flex: 1 }}>
          <View style={{ marginBottom: 4 }}>
            <Text style={styles.headerText}>Green Chemistry Foundation</Text>
            <Text style={styles.headerText2}>IGCW</Text>
          </View>
        </Body>
        <Right style={{ flex: 1 }}>
          <Icon
            name="right-arrow"
            style={{ color: "white", fontSize: 15, marginTop: 15 }}
          />
        </Right>
      </Header>
    </LinearGradient>
    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>
);




class Services extends Component {
  render() {
    return (
      Linking.openURL('https://www.greenchemistree.co.in/')

    );
  }
}

class Resources extends Component {
  render() {
    return (
      Linking.openURL('https://www.greenchemistree.co.in/Resource.html')

    );
  }
}


class NewsAndUpdate extends Component {
  render() {
    return (
      Linking.openURL('https://www.greenchemistree.co.in/igcw%20copy.html')

    );
  }
}

class Certificates extends Component {
  render() {
    return (
      Linking.openURL('https://www.greenchemistree.co.in/index.html')

    );
  }
}

class Contact extends Component {
  render() {
    return (
      Linking.openURL('https://www.greenchemistree.co.in/contact.html')

    );
  }
}


class IGCWEvents extends Component {
  render() {
    return (
      Linking.openURL('https://www.greenchemistree.co.in/igcw%20copy.html')

    );
  }
}

const MyDrawerNavigator = createDrawerNavigator(
  {
    Dashboard: {
      screen: GCFDashboard
    },
    IGCWEvents: {
      screen: IGCWEvents
    },
    Services: {
      screen: Services
    },
    Resources: {
      screen: Resources
    },
    NewsAndUpdate: {
      screen: NewsAndUpdate
    },
    certificates: {
      screen: Certificates
    },
    Contact: {
      screen: Contact
    }
  },
  {
    contentOptions: {
      labelStyle: {
        fontFamily: themes.fonts.INIT_FONT_Family,
        color: themes.colors.INIT_COLOR_Blue,
        fontWeight: '200',
      },
    },
    drawerPosition: "left",
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "DrawerToggle",
    drawerWidth: widthPercentageToDP("80%")
  }
);

const MyAppdrawer = createAppContainer(MyDrawerNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  drawerHeader: {
    height: 200,
    backgroundColor: "white"
  },
  drawerImage: {
    height: 150,
    width: 150,
    borderRadius: 75
  },
  headerText: {
    color: "white",
    marginLeft: -20,
    fontSize: 12,
    marginRight:-40
  },
  headerText2: {
    color: "white",
    marginLeft: -20,
    fontSize: 10,
    paddingTop: 5
  },
  profileImage: {
    borderRadius: 1000,
    borderWidth: 2,
    width: 70,
    height: 70,
    paddingLeft: 20
  }
});