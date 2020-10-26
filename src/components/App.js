import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Dashboard from 'react-native-dashboard';
import { Container, Header, List, ListItem, Text, Left, Right, Body, Button, Icon, Title } from 'native-base';

 
const items = [
  {  icon: 'calendar-o'},
  {  icon: 'user' },
  {  icon: 'handshake-alt' },
  {  icon: 'home' },
  {  icon: 'comment' },
  {  icon: 'bar-chart' },
  {  icon: 'map' },
  {  icon: 'map-marker' },
  {  icon: 'users' },
  {  icon: 'heart-o' },
  {  icon: 'note' },
  {  icon: 'map' },
  { icon: 'shield' },
  {  icon: 'rss' },
  {icon: 'clock-o' }

];
 
export default class App extends Component {
  _card = el => {
    console.log('Card: ' + el.name)
  };
  render() {
    return (
        <ScrollView Style={styles.contentContainer}>
        <Container style ={styles.container}>
        <Header transparent style={{height: 60, justifyContent: 'center' }}>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title style={{alignSelf: 'center', textAlign: 'center', justifyContent: 'center',fontSize:12}}> Dashboard</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='settings' />
            </Button>
          </Right>
        </Header>
        <List>
            <ListItem style={{ backgroundColor: "#fff",borderRadius:50,height:30,paddingLeft:5,paddingRight:15,marginRight:15}}>
              <Body>
                <Text style={{textAlign:"center",fontSize:10,fontFamily:"aerial",flex:0}}>See All Events</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            </List>
            {/* <Button rounded style={{backgroundColor:'#fff',flex:1,width:360,height:30}}>
                <Text style={{fontSize:14, color:'#000'}}>About The Event</Text>
                </Button> */}
        <Dashboard style={{backgroundColor: 'transparent'}}
         items={items} 
         card={this._card} 
         column={3} >
         </Dashboard>
         {/* <Button rounded style={{backgroundColor:'#fff',flex:1,width:360,height:30}}>
                <Text style={{fontSize:14, color:'#000'}}>Main Event Page</Text>
                </Button> */}
      </Container>
      </ScrollView>

    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A7B4A',
  },
  contentContainer: {
    paddingVertical: 20
  }
});