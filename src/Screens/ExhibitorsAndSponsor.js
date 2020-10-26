import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Content, ListItem, List, Title, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import themes from '../components/themes/Variables.js';


let _saveItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log("Saved data successfully");
  } catch (error) {
    console.log("Error saving data");
  }
}
const newList = [];

export default class ExhibitorsAndSponsor extends Component {

  constructor(props) {
    super();
    this.state = { dataSource: [] };
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    const url = "http://165.22.216.45/wp-json/wp/v2/sponsors";
    fetch(url)
      .then(response => response.json())
      .then((responseJson) => {
        responseJson.map(item => {
          var o = { name: item.sponsors_name };
          newList.push(o);
        })
        // filterData(newList);
        this.setState({ dataSource: newList });
      })
      .catch(error => console.log(error))
  }
  filterData(newList) {
    newList.map(item => {
      item.name
    })
  }
  renderItem = ({ item }) => {
    if (item.name.length > 1) {
      return (<View style={styles.item}>
        <TouchableHighlight onPress={() => _saveItem("name", item.name)}>
          <Icon iconStyle={{ paddingRight: 20, paddingLeft: 10, color: 'gold' }} name="heart" type="font-awesome" />
        </TouchableHighlight>
        <Image source={{ uri: item.avatarUrl }} style={{ width: 40, height: 40, borderRadius: 50, marginRight: 20 }} />
        <Text>{item.name}</Text>
      </View>)
    } else {
      return (
        <View style={styles.itemSeparator}><Text>{item.name}</Text></View>
      )
    }
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
      icon: 'user',

    },
    {
      key: 'text',
      icon: 'comment',
    },
    {
      key: 'search',
      icon: 'search',
    }
  ];

  renderIcon = icon => ({ isActive }) => (
    <Icon name={icon} style={{ fontSize: 20, color: '#378E56', alignSelf: 'center', padding: 25, paddingTop: 8 }} />
  );

  renderTab = ({ tab, isActive }) => (
    <FullTab
      isActive={isActive}
      key={tab.key}
      renderIcon={this.renderIcon(tab.icon)}
    />
  );

  render() {
    return (
      <Container style={styles.container}>
        <Header transparent androidStatusBarColor='transparent'
          style={{ backgroundColor: '#0A7B4A', height: 100 }}>
          <Left style={{ flex: 1 }}>
            <Button transparent>
              <Icon name='arrow-left' style={{ color: 'white', fontSize: 15 }} />
            </Button>
          </Left>
          <Body style={{ flex: 1 }}>
            <Title style={styles.title}>Exhibitors & Sponsors </Title>
          </Body>
          <Right style={{ flex: 1 }}>
            <Button transparent>
              <Icon name='search' style={{ color: 'white', fontSize: 15 }} />
            </Button>
          </Right>

        </Header>
        <Content>
          <List style={{ paddingLeft: 10, paddingRight: 10, }}>
            <ListItem style={{

              marginRight: 5,
              marginLeft: 5,
              paddingTop: 5,
              paddingBottom: 5,
              backgroundColor: '#fff',
              borderRadius: 70,
              borderWidth: 1,
              padding: 19,
              justifyContent: 'space-between',
              marginTop: 25,
              marginBottom: 10,
              elevation: 15,
              textShadowOffset: { width: 1, height: 4 },
              textShadowRadius: 5,
              shadowColor: "light-grey",
              shadowOpacity: 0.1,
              shadowRadius: 2

            }}>
              <Body style={{ flex: 1, paddingTop: 5, paddingBottom: 5 }}>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: '#000', marginLeft: 58 }}>See All Exhibitors & Sponsors</Text>
              </Body>

              <Right >
                <Icon name='arrow-right' style={{ color: '#13A57E', fontSize: 15, opacity: 0.8 }} />
              </Right>
            </ListItem>
            <ListItem selected style={{

              marginRight: 5,
              marginLeft: 5,
              paddingTop: 5,
              paddingBottom: 5,
              backgroundColor: '#fff',
              flex: 2,
              padding: 10,
              borderWidth: 1,
              borderColor: '#fff',
              marginTop: 15,
              marginBottom: 10,
              elevation: 15,
              shadowOffset: { width: 2, height: 2 },
              shadowColor: "grey",
              shadowOpacity: 0.15,
              shadowRadius: 10
            }}>
              <Left>
                <Text style={styles.element}>Exhibitors</Text>
              </Left>
              <Right>
                <Icon name='arrow-right' style={{ color: '#13A57E', fontSize: 15, opacity: 0.8 }} />
              </Right>
            </ListItem>

            <ListItem style={{
              marginRight: 5,
              marginLeft: 5,
              paddingTop: 5,
              paddingBottom: 5,
              backgroundColor: '#fff',
              padding: 10,
              borderWidth: 1,
              borderColor: '#fff',
              marginTop: 15,
              marginBottom: 10,
              elevation: 7.5,
              shadowOffset: { width: 0, height: 3 },
              shadowColor: "grey",
              shadowOpacity: 1.0
            }}>
              <Left>
                <Text style={{
                  flex: 1,
                  paddingTop: 5,
                  paddingBottom: 5,
                  paddingLeft: 5,
                  fontSize: 13,
                  color: '#000'
                }}>Sponsors</Text>
              </Left>
              <Right>
                <Icon name='arrow-right' style={{ color: '#13A57E', fontSize: 15, opacity: 0.8 }} />
              </Right>
            </ListItem>
          </List>
        </Content>
        <BottomNavigation style={{ paddingLeft: 20, paddingRight: 20 }}
          onTabPress={newTab => this.setState({ activeTab: newTab.key })}
          renderTab={this.renderTab}
          tabs={this.tabs} />
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D5D6D6',
  },
  contentContainer: {
    paddingVertical: 20
  },

  title: {
    fontSize: 14,
    marginLeft: -15,
    marginRight: -15,
    color: '#fff',
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center'
  },
  element: {
    flex: 1,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    fontSize: 13,
    color: '#000',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.15,
  }
});
