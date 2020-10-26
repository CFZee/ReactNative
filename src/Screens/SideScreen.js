import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../src/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);
import { Left,Body,Right } from 'native-base';


export default class SideScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={['#88BE49', '#447A47']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.header}>
            <Left style={{flex:1}}>
            <Image style={styles.profileImage} source={{ uri: "https://images.unsplash.com/photo-1551438632-cacd75df629f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9" }} />
            </Left>
          <Body style={{flex:1}}>
            <Text style={styles.headerText}>Sarah Brooke</Text>
            <Text style={styles.headerText}>Founder</Text>
          </Body>
          <Right style={{flex:1}}>
            <Icon name='right-arrow' style={{color:'white',fontSize:15}}/>
          </Right>
        </LinearGradient>
        <View style={styles.main}>
          <View style={{flexDirection:'row'}}>
          <Left>
          <Text style={styles.mainText}>IGCW Events</Text>
          </Left>
          <Right>
          <Icon name='right-arrow' style={{color:'green',fontSize:15}}/>
          </Right>
          </View>
          <View style={{flexDirection:'row'}}>
          <Left>
          <Text style={styles.mainText}>Service Offered By GCF</Text>
          </Left>
          <Right>
          <Icon name='right-arrow' style={{color:'green',fontSize:15}}/>
          </Right>
          </View>
          <View style={{flexDirection:'row'}}>
          <Left>
          <Text style={styles.mainText}>GC&E Resources and Tools</Text>
          </Left>
          <Right>
          <Icon name='right-arrow' style={{color:'green',fontSize:15}}/>
          </Right>
          </View>
          <View style={{flexDirection:'row'}}>
          <Left>
          <Text style={styles.mainText}>News and updates</Text>
          </Left>
          <Right>
          <Icon name='right-arrow' style={{color:'green',fontSize:15}}/>
          </Right>
          </View>
          <View style={{flexDirection:'row'}}>
          <Left style={{marginRight:-70}}>
          <Text style={{fontSize: 12,color: '#555',margin: 10,fontFamily: 'Montserrat-SemiBold'}}>Certificates and Acknowledgements</Text>
          </Left>
          <Right>
          <Icon name='right-arrow' style={{color:'green',fontSize:15}}/>
          </Right>
          </View>
          <View style={{flexDirection:'row'}}>
          <Left>
          <Text style={styles.mainText}>Contact Us</Text>
          </Left>
          <Right>
          <Icon name='right-arrow' style={{color:'green',fontSize:15}}/>
          </Right>
          </View>
          <View style={{flexDirection:'row'}}>
          <Left>
          <Text style={styles.mainText}>GCF Page</Text>
          </Left>
          <Right>
          <Icon name='right-arrow' style={{color:'green',fontSize:15}}/>
          </Right>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'green',
    height: 130,
    flexDirection: "row"
  },
  imageContainer: {
    justifyContent: 'center',
    padding: 15,
    margin: 10
  },
  textContainer: {
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    margin: 4,
    fontFamily: 'Montserrat-Medium'
  },
  profileImage: {
    borderRadius: 1000,
    borderWidth: 2,
    width: 70,
    height: 70,
  },
  main: {
    padding: 20,
  },
  mainText: {
    fontSize: 12,
    color: '#555',
    margin: 10,
    fontFamily: 'Montserrat-SemiBold',
    lineHeight: 20,

  }
})