import React, { Component  } from 'react';
import { CardItem,Container, Header,Thumbnail, Left, Body, Right, Button,Content,Separator, Text } from 'native-base';
import { View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions, PixelRatio,ScrollView} from 'react-native';
import {StyleSheet, StatusBar,TouchableOpacity} from 'react-native'
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../../src/config.json';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions ,createDrawerNavigator} from 'react-navigation'; 


const Icon = createIconSetFromFontello(fontelloConfig);

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

export default class Contact extends Component{
    
    static navigationOptions = ({ navigation }) => ({
        title: 'IGCW Events',
      })

    menuClick(){
        this.props.navigation.openDrawer()
    }

    render(){
      const {goBack} = this.props.navigation;
        return(

          <Container style={styles.Container,{backgroundColor:'#EEEEEE'}}>
          <ScrollView>
          <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 1}} colors={['#88BE49','#447A47']} style={{flex:1}}>
              <Header span transparent androidStatusBarColor='transparent'
              style={{ height: 120 } }> 
              <Left style={{flex:1,alignSelf:'center'}}>
                  <Button transparent style={{width:widthPercentageToDP('20%')}} onPress={this.menuClick.bind(this)}>               
                       <Icon name='hamburger' style={{color:'white',fontSize:20,paddingBottom:5}}/>
                      </Button>
              </Left>
              <Body style={{flex:1,alignSelf:'center',paddingTop:20}}>   
               <Text style={{color:'white',fontSize:14,paddingLeft:15}}> 
                   IGCW Events
               </Text>
              </Body>
              <Right style={{flex:1,alignSelf:'center'}}>
              <Button transparent style={{width:widthPercentageToDP('12.5%')}}>               
                      <Icon name='search' style={{color:'white',fontSize:20}} />
                  </Button>
              </Right>
              </Header>
          </LinearGradient>           
          <Content>
          <Separator  style={{borderColor:'transparent',marginTop:10,marginLeft:2,marginBottom:10}}>
          <Text style={{fontSize:15,color:'#3A4759'}}>Installed Events</Text>
        </Separator>
          <View>
              <CardItem style={styles.shadow}>
                  <Left style={{flex:1}}>
                      <Thumbnail square source={{uri:'https://images.pexels.com/photos/1046348/pexels-photo-1046348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}} style={{alignItems:'center'}}/>
                  </Left>
                  <Body style={{flex:1}}>
                  <View style={{flexDirection:'column',marginLeft:-35,marginRight:-60,paddingTop:15,marginBottom:15}}>
                          <View>
              <Text style={{fontSize:12,color:'#3A4759',fontFamily:'Montserrat',alignSelf:'flex-start'}}>
                  Event Name
              </Text>
              </View>
              <View>
                  <Text style={{fontSize:10,paddingTop:5,color:'#9B9C9F',fontFamily:'Montserrat'}}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </Text>
              </View>
              <View>
                  <Text style={{fontSize:8,paddingTop:5 ,color:'#447A47',fontFamily:'Montserrat'}}>
                      May 01, 2019 May 03, 2019
                      </Text>
                  </View>
              </View>
              </Body>
              <Right style={{flex:1,marginLeft:-25}} >
                  <Button transparent onPress={() => {
                              this.props.navigation.dispatch(StackActions.reset({
                                index: 0,
                                actions: [
                                  NavigationActions.navigate({ routeName: 'Events' })
                                ],
                              }))
                            }}>
                  <Icon name='forward-arrow' style={{fontSize:12,color:'#447A47'}} />
                  </Button>
                  </Right>
              </CardItem>
              <CardItem style={styles.shadow}>
                  <Left style={{flex:1}}>
                      <Thumbnail square source={{uri:'https://images.pexels.com/photos/1046348/pexels-photo-1046348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}} style={{alignSelf:'center'}}/>
                  </Left>
                  <Body style={{flex:1}}>
                      <View style={{flexDirection:'column',marginLeft:-35,marginRight:-60,paddingTop:15,marginBottom:15}}>
                          <View>
              <Text style={{fontSize:12,color:'#3A4759',fontFamily:'Montserrat',alignSelf:'flex-start'}}>
                  Event Name
              </Text>
              </View>
              <View>
                  <Text style={{fontSize:10,paddingTop:5,color:'#9B9C9F',fontFamily:'Montserrat'}}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </Text>
              </View>
              <View>
                  <Text style={{fontSize:8,paddingTop:5 ,color:'#447A47',fontFamily:'Montserrat'}}>
                      May 01, 2019 May 03, 2019
                      </Text>
                  </View>
              </View>
              </Body>
              <Right style={{flex:1,marginLeft:-25}} >
                  <Button transparent>
                  <Icon name='forward-arrow' style={{fontSize:12,color:'#447A47'}} />
                  </Button>
                  </Right>
              </CardItem>
          </View>
          <Separator  style={{backgroundColor:'#EEEEEE',marginTop:-18.5,marginLeft:2,marginBottom:10}}>
          <Text style={{fontSize:15,color:'#3A4759'}}>Upcoming Events</Text>
        </Separator>
          <View>
          <CardItem style={styles.shadow}>
                  <Left style={{flex:1}}>
                      <Thumbnail square source={{uri:'https://images.pexels.com/photos/1046348/pexels-photo-1046348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}} style={{alignItems:'center'}}/>
                  </Left>
                  <Body style={{flex:1}}>
                      <View style={{flexDirection:'column',marginLeft:-35,marginRight:-60,paddingTop:15,marginBottom:15}}>
                          <View>
              <Text style={{fontSize:12,color:'#3A4759',fontFamily:'Montserrat',alignSelf:'flex-start'}}>
                  Event Name
              </Text>
              </View>
              <View>
                  <Text style={{fontSize:10,paddingTop:5,color:'#9B9C9F',fontFamily:'Montserrat'}}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </Text>
              </View>
              <View>
                  <Text style={{fontSize:8,paddingTop:5 ,color:'#447A47',fontFamily:'Montserrat'}}>
                      May 01, 2019 May 03, 2019
                      </Text>
                  </View>
              </View>
              </Body>
              <Right style={{flex:1,marginLeft:-25}} >
                  <Button transparent onPress={() => {
                              this.props.navigation.dispatch(StackActions.reset({
                                index: 0,
                                actions: [
                                  NavigationActions.navigate({ routeName: 'Events' })
                                ],
                              }))
                            }}>
                  <Icon name='forward-arrow' style={{fontSize:12,color:'#447A47'}} />
                  </Button>
                  </Right>
              </CardItem>
              <CardItem style={styles.shadow}>
                  <Left style={{flex:1}}>
                      <Thumbnail square source={{uri:'https://images.pexels.com/photos/1046348/pexels-photo-1046348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}} style={{alignSelf:'center'}}/>
                  </Left>
                  <Body style={{flex:1}}>
                      <View style={{flexDirection:'column',marginLeft:-35,marginRight:-60,paddingTop:15,marginBottom:15}}>
                          <View>
              <Text style={{fontSize:12,color:'#3A4759',fontFamily:'Montserrat',alignSelf:'flex-start'}}>
                  Event Name
              </Text>
              </View>
              <View>
                  <Text style={{fontSize:10,paddingTop:5,color:'#9B9C9F',fontFamily:'Montserrat'}}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </Text>
              </View>
              <View>
                  <Text style={{fontSize:8,paddingTop:5 ,color:'#447A47',fontFamily:'Montserrat'}}>
                      May 01, 2019 May 03, 2019
                      </Text>
                  </View>
              </View>
              </Body>
              <Right style={{flex:1,marginLeft:-25}} >
                  <Button transparent>
                  <Icon name='forward-arrow' style={{fontSize:12,color:'#447A47'}} />
                  </Button>
                  </Right>
              </CardItem>
          </View>
          <Separator  style={{backgroundColor:'transparent',marginTop:-18.5,marginLeft:2,marginBottom:10}}>
          <Text style={{fontSize:15,color:'#3A4759'}}>Registered Events</Text>
          </Separator>
          <View>
          <CardItem style={styles.shadow}>
                  <Left style={{flex:1}}>
                      <Thumbnail square source={{uri:'https://images.pexels.com/photos/1046348/pexels-photo-1046348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}} style={{alignItems:'center'}}/>
                  </Left>
                  <Body style={{flex:1}}>
                      <View style={{flexDirection:'column',marginLeft:-35,marginRight:-60,paddingTop:15,marginBottom:15}}>
                          <View>
              <Text style={{fontSize:12,color:'#3A4759',fontFamily:'Montserrat',alignSelf:'flex-start'}}>
                  Event Name
              </Text>
              </View>
              <View>
                  <Text style={{fontSize:10,paddingTop:5,color:'#9B9C9F',fontFamily:'Montserrat'}}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </Text>
              </View>
              <View>
                  <Text style={{fontSize:8,paddingTop:5 ,color:'#447A47',fontFamily:'Montserrat'}}>
                      May 01, 2019 May 03, 2019
                      </Text>
                  </View>
              </View>
              </Body>
              <Right style={{flex:1,marginLeft:-25}} >
                  <Button transparent onPress={() => {
                              this.props.navigation.dispatch(StackActions.reset({
                                index: 0,
                                actions: [
                                  NavigationActions.navigate({ routeName: 'Events' })
                                ],
                              }))
                            }}>
                  <Icon name='forward-arrow' style={{fontSize:12,color:'#447A47'}} />
                  </Button>
                  </Right>
              </CardItem>
              <CardItem style={styles.shadow}>
                  <Left style={{flex:1}}>
                      <Thumbnail square source={{uri:'https://images.pexels.com/photos/1046348/pexels-photo-1046348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}} style={{alignSelf:'center'}}/>
                  </Left>
                  <Body style={{flex:1}}>
                      <View style={{flexDirection:'column',marginLeft:-35,marginRight:-60,paddingTop:15,marginBottom:15}}>
                          <View>
              <Text style={{fontSize:12,color:'#3A4759',fontFamily:'Montserrat',alignSelf:'flex-start'}}>
                  Event Name
              </Text>
              </View>
              <View>
                  <Text style={{fontSize:10,paddingTop:5,color:'#9B9C9F',fontFamily:'Montserrat'}}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </Text>
              </View>
              <View>
                  <Text style={{fontSize:8,paddingTop:5 ,color:'#447A47',fontFamily:'Montserrat'}}>
                      May 01, 2019 May 03, 2019
                      </Text>
                  </View>
              </View>
              </Body>
              <Right style={{flex:1,marginLeft:-25}} >
                  <Button transparent>
                  <Icon name='forward-arrow' style={{fontSize:12,color:'#447A47'}} />
                  </Button>
                  </Right>
              </CardItem>
          </View>
          </Content>
          </ScrollView>
          </Container>
    
        )
    }
}

const styles=StyleSheet.create({

  container: {
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
      marginRight:15,
      marginLeft:10,
      paddingTop:5,
      paddingBottom:5,
      flex:2,
      padding:10 ,
      borderWidth: 1,
      borderColor: '#fff',
      marginBottom: 25,
      elevation:15,
      shadowOffset: { width: 1, height: 1 },
      shadowColor: "black",
      shadowOpacity: 100,
      shadowRadius: 50
  }
})

