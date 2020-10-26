import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container, Card, Header, Content, Button, Left, Body, Right, List,Thumbnail,CardItem} from 'native-base';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions ,createBottomTabNavigator} from 'react-navigation';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../src/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);
import LinearGradient from 'react-native-linear-gradient';
import ProfileEditPage from './ProfileEditPage'
import  themes from '../components/themes/Variables.js';


export default class Profile extends Component {
  render(){
    return (< AppContainer >
    <Profile1 />
    </ AppContainer>);
  }
}

class Profile1 extends Component{
  render () {
    return(
      <Container style={styles.Container,{backgroundColor:'#EEEEEE'}}>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#88BE49','#447A47']} style={{}}>
      <Header transparent androidStatusBarColor='transparent'
        style={{height:250}}>
          <Left style={{flex:1,marginBottom:-40}}>
            <Button transparent style={{flex:1,paddingBottom:35,alignContent:'center',justifyContent:'center'}}
            onPress={() => {
              this.props.navigation.dispatch(StackActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({ routeName: 'Home' })
                ],
              }))
            }}>
            <Icon name='back-arrow' style={{color:themes.colors.INIT_COLOR_White,fontSize:themes.fonts.INIT_FONT_SIZE_XL,marginBottom:150}}/>
            </Button>
          </Left>
          <Body style={{flex:1,marginBottom:-40}}>
              <Thumbnail source = {{uri:'https://image.shutterstock.com/image-vector/user-icon-trendy-flat-style-260nw-418179865.jpg'}} style={{height:110,width:110, borderRadius:100}}/>
          </Body>
          <Right style={{flex:1}} />
      </Header>
      </LinearGradient>
      <Content>
      <CardItem style={styles.shadow1}>
       <View style={{flexDirection:'row'}}>
           <Left>
               <View style={{flexDirection:'column'}}>
              <View>
            <Text style={{fontSize:themes.fonts.INIT_FONT_SIZE_L,textAlign:'left',color: themes.colors.INIT_COLOR_Blue,fontFamily:themes.fonts.INIT_FONT_Family,paddingLeft:10,paddingBottom:5,}}>
                Green Chemistry Foundation
                </Text>
                </View>
                <View>
                  <Text style={{fontSize:themes.fonts.INIT_FONT_SIZE_S,textAlign:'left',fontFamily:themes.fonts.INIT_FONT_Family,paddingLeft:10,paddingBottom:5,color: themes.colors.INIT_COLOR_Grey}}>
                IGCW
                </Text>
                </View>
                <View>
                  <Text style={{fontSize:themes.fonts.INIT_FONT_SIZE_S,textAlign:'left',fontFamily:themes.fonts.INIT_FONT_Family,paddingLeft:10,paddingBottom:5,color: themes.colors.INIT_COLOR_Grey}}>
                Green chemistry Founder
                </Text>
                </View>
                </View>
                </Left>
                <Right>
                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#88BE49','#447A47']} style={{borderRadius:70}}>
                <Button rounded transparent onPress={() => {
  this.props.navigation.dispatch(StackActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: 'ProfileEditPage' })
    ],
  }))
}}
                style={{marginRight: 5,marginLeft: 15,paddingHorizontal:10}}>
                   <Text style={{color:themes.colors.INIT_COLOR_White,fontFamily:themes.fonts.INIT_FONT_Family}}>         Edit            </Text>
                    </Button>
                    </LinearGradient>
                    </Right>
                </View>
        </CardItem>
        <Card style={styles.shadow2}>
        <View style={{felxDirection:'column'}}>
      <CardItem style={{paddingLeft:25}}>
       <View style={{flexDirection:'row',position:'relative'}}>
       <Icon name='envelope' style={{color:themes.colors.INIT_COLOR_Blue,fontSize:themes.fonts.INIT_FONT_SIZE_IconSize_S,paddingTop:-5}}/>
        <Text style={{fontSize:themes.fonts.INIT_FONT_SIZE_M,paddingTop:0,paddingLeft:10,fontFamily:themes.fonts.INIT_FONT_Family,color: themes.colors.INIT_COLOR_Blue}}>
        connect@greenchemistree.co.in
        </Text>
        <Right style={{flex:1}}>
        </Right>
        </View>
        </CardItem>
       <CardItem style={{paddingTop:8,paddingLeft:25}}>
       <View style={{flexDirection:'row',position:'relative',marginTop:-10}}>
       <Icon name='iconfinder_phone_2561369' style={{color:themes.colors.INIT_COLOR_Blue,fontSize:themes.fonts.INIT_FONT_SIZE_IconSize_S,paddingTop:-5}}/>
        <Text style={{fontSize:themes.fonts.INIT_FONT_SIZE_M,paddingTop:0,paddingLeft:12,fontFamily:themes.fonts.INIT_FONT_Family,color: themes.colors.INIT_COLOR_Blue}}>
        +91-22-2879-1835 / 1275
        </Text>
        <Right style={{flex:1}}>
        </Right>
        </View>
        </CardItem>
        <CardItem style={{paddingTop:7,paddingLeft:25}}>
       <View style={{flexDirection:'row',position:'relative',marginTop:-30,marginBottom:-25}}>
       <Icon name='iconfinder_social-linkedin-circular_216393' style={{color:themes.colors.INIT_COLOR_Blue,fontSize:20,paddingTop:-5}}/>
        <Text style={{fontSize:themes.fonts.INIT_FONT_SIZE_M,paddingTop:2.5,paddingLeft:8,fontFamily:themes.fonts.INIT_FONT_Family,color: themes.colors.INIT_COLOR_Blue}}>
        https://www.linkedin.com/in/abcd
        </Text>
        <Right style={{flex:1}}>
        </Right>
        </View>
        </CardItem>
        </View>
       </Card>
       </Content>
      </Container>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Profile1,
    },
    ProfileEditPage:{
      screen:ProfileEditPage
    }

  },
  {
    initialRouteName: 'Home',
          headerMode: 'none'

  },

);

const AppContainer = createAppContainer(RootStack);

const styles = ({
    container: {
    flex: 1,
    backgroundColor: '#13A57E'
    },
    shadow1: {
    marginRight: 15,
    marginLeft: 15,
    marginTop: 40,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft:10,
    paddingRight:10,
    backgroundColor: '#fff',
    borderColor:'#fff',
    borderWidth: 1,
    flex: 1,
    padding: 19,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    marginBottom: 10,
    elevation: 20,
    shadowOffset: { width: 4,height: 4},
    shadowColor: "grey",
    shadowOpacity: 1.0,
    shadowRadius: 50
    },
    shadow2: {
    marginRight: 15,
    marginLeft: 15,
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft:0,
    paddingRight:0,
    backgroundColor: '#fff',
    borderColor:'#fff',
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 100,
    elevation: 20,
    shadowOffset: { width:4,height: 4},
    shadowColor: "grey",
    shadowOpacity: 50,
    shadowRadius: 50
    }
});