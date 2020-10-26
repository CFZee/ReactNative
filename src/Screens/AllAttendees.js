import React, { Component } from 'react';
import { CardItem, Container, Header, Thumbnail, Left, Body, Right, Button, Content, Text } from 'native-base';
import { View, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';
import Icon from 'react-native-ionicons';
import { ScrollView } from 'react-native-gesture-handler';
import SectionListContacts from 'react-native-sectionlist-contacts';



export default class AllAttendees extends Component {
  constructor(props) {
    super(props)

    let nameData = [
      { name: 'Abhisaarikaa', id: 'amani', params: '123' },
      { name: 'Bavataraani' },
      { name: 'Chitrangada' },
      { name: 'Dhairyabala' },
      { name: 'Ekananga' },
      { name: 'faisal' },
      { name: 'gaitonde' },
      { name: 'iqbal' },
      { name: 'jockey' },
      { name: 'kabira' },
      { name: 'lalit' },
      { name: 'nobita' },
      { name: 'olive' },
      { name: 'pickachu' },
      { name: 'trivedi' },
      { name: 'yuvraj' },
      { name: 'woofy' },
      { name: 'Rakshadashri' },
      { name: 'Utsa' },
      { name: 'Quina' },
      { name: 'Mehzabeen' },
      { name: 'Vineeta' },
      { name: 'Xagar' },
      { name: 'Zagir' },
      { name: 'Sajira' },
      { name: 'Haneeta' },
    ]

    this.state = {
      dataArray: nameData,
    }
  }

  tabs = [
    {
      key: 'home',
      icon: 'home',

    },
    {
      key: 'map',
      icon: 'map',

    },
    {
      key: 'user',
      icon: 'person',

    },
    {
      key: 'text',
      icon: 'chatboxes',
    },
    {
      key: 'search',
      icon: 'search',
    }
  ];


  renderIcon = icon => ({ isActive }) => (
    <Icon size={25} color='#13A57E' style={{ paddingTop: 10, marginLeft: 30, paddingRight: 30 }} name={icon} />
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
      <Container style={styles.Container}>
        <ScrollView>
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#159957', '#155799']} style={styles.LinearGradient}>
            <Header transparent androidStatusBarColor='transparent'
              style={{ height: 100 }}>
              <Left>
                <Button transparent>
                  <Icon name='arrow-back' style={{ color: 'white', fontSize: 20, paddingTop: 0, marginRight: -100, opacity: 0.8 }} />
                </Button>
              </Left>
              <Body style={{ marginRight: -120 }}>
                <Text style={{ color: 'white', fontSize: 13, paddingBottom: 0 }}>
                  Sponsors, Partners & Exhibitors
                 </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name='search' style={{ color: 'white', fontSize: 20, paddingTop: 0, opacity: 0.8 }} />
                </Button>
              </Right>
            </Header>
          </LinearGradient>
          <Content>
            <View style={styles.sideView}>
              <SectionListContacts
                ref={s => this.sectionList = s}
                sectionListData={this.state.dataArray}
                sectionHeight={50}
                sectionWidth={50}
                style={{ height: 100, white: 200 }}
                showsVerticalScrollIndicator={true}
                SectionListClickCallback={(item, index) => {
                }}
                otherAlphabet="#"
              />
            </View>
          </Content>
        </ScrollView>
        <BottomNavigation style={{ color: 'green' }}
          onTabPress={newTab => this.setState({ activeTab: newTab.key })}
          renderTab={this.renderTab}
          tabs={this.tabs} />
      </Container>
    );
  }
}
const styles = {
  container: {
    flex: 1,
    backgroundColor: '#C7CACC',
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C7CACC',
    padding: 10,
  },
  sideView: {
    flex: 1,
    backgroundColor: '#C7CACC',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  shadow: {
    marginRight: 15,
    marginLeft: 15,
    marginTop: 25,
    paddingLeft: -20,
    paddingTop: -20,
    paddingBottom: -20,
    borderWidth: 1,
    borderColor: '#fff',
    marginBottom: 25,
    elevation: 15,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "black",
    shadowOpacity: 100,
    shadowRadius: 50
  },
  shadow2: {
    marginRight: 15,
    marginLeft: 15,
    paddingTop: 5,
    marginTop: 0,
    paddingLeft: -20,
    paddingTop: -20,
    paddingBottom: -20,
    borderWidth: 1,
    borderColor: '#fff',
    marginBottom: 25,
    elevation: 15,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "black",
    shadowOpacity: 100,
    shadowRadius: 50
  }
};