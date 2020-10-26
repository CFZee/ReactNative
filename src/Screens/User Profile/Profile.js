
import React, { Component } from 'react';
import { Text, View,FlatList } from 'react-native';
import { Container, Card, Header, Content, Button, Left, Body, Right, List,Thumbnail,CardItem} from 'native-base';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions ,createBottomTabNavigator} from 'react-navigation';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../../src/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);
import LinearGradient from 'react-native-linear-gradient';
import ProfileEditPage from './ProfileEditPage'
import  themes from '../../components/themes/Variables.js';
import Realm from 'realm';
let realm;
import  {handleChoosePhoto } from './Register'


export default class Profile extends Component{
  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: []
    };
    realm = new Realm({ path: 'UserDatabase.realm' });
    var user_details = realm.objects('user_d');
    this.state = {
      FlatListItems: user_details,
    };
  }

  renderItem = ({ item }) => {
    return (
      <View style={{flexDirection:'row'}}>
           <Left>
               <View style={{flexDirection:'column'}}>
              <View>
            <Text style={{fontSize:themes.fonts.INIT_FONT_SIZE_L,textAlign:'left',color: themes.colors.INIT_COLOR_Blue,fontFamily:themes.fonts.INIT_FONT_Family,paddingLeft:10,paddingBottom:5,}}>
            {item.user_name}
                </Text>
                </View>
                <View>
                  <Text style={{fontSize:themes.fonts.INIT_FONT_SIZE_S,textAlign:'left',fontFamily:themes.fonts.INIT_FONT_Family,paddingLeft:10,paddingBottom:5,color: themes.colors.INIT_COLOR_Grey}}>
                  {item.user_designation}
                </Text>
                </View>
                <View>
                  <Text style={{fontSize:themes.fonts.INIT_FONT_SIZE_S,textAlign:'left',fontFamily:themes.fonts.INIT_FONT_Family,paddingLeft:10,paddingBottom:5,color: themes.colors.INIT_COLOR_Grey}}>
                  {item.user_company_name}
                </Text>
                </View>
                </View>
                </Left>
                <Right>
                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#88BE49','#447A47']} style={{borderRadius:70}}>
                <Button rounded transparent onPress={() => {this.props.navigation.navigate('ProfileEditPage')}}
                style={{marginRight: 5,marginLeft: 15,paddingHorizontal:10}}>
                   <Text style={{color:themes.colors.INIT_COLOR_White,fontFamily:themes.fonts.INIT_FONT_Family}}>         Edit            </Text>
                    </Button>
                    </LinearGradient>
                    </Right>
                </View>
    );
  }

  renderItem1 = ({ item }) => {
    return (
      <View style={{felxDirection:'column'}}>
      <CardItem style={{paddingLeft:25}}>
       <View style={{flexDirection:'row',position:'relative'}}>
       <Icon name='envelope' style={{color:themes.colors.INIT_COLOR_Blue,fontSize:themes.fonts.INIT_FONT_SIZE_IconSize_S,paddingTop:-5}}/>
        <Text style={{fontSize:themes.fonts.INIT_FONT_SIZE_M,paddingTop:0,paddingLeft:10,fontFamily:themes.fonts.INIT_FONT_Family,color: themes.colors.INIT_COLOR_Blue}}>
        {item.user_email}
        </Text>
        <Right style={{flex:1}}>
        <Button transparent>
        <Icon name='right-arrow' style={{color:themes.colors.INIT_COLOR_Green,fontSize:themes.fonts.INIT_FONT_SIZE_L,marginTop:-15}}/>
        </Button>
        </Right>
        </View>
        </CardItem>
       <CardItem style={{paddingTop:8,paddingLeft:25}}>
       <View style={{flexDirection:'row',position:'relative',marginTop:-25}}>
       <Icon name='iconfinder_phone_2561369' style={{color:themes.colors.INIT_COLOR_Blue,fontSize:themes.fonts.INIT_FONT_SIZE_IconSize_S,paddingTop:-5}}/>
        <Text style={{fontSize:themes.fonts.INIT_FONT_SIZE_M,paddingTop:0,paddingLeft:12,fontFamily:themes.fonts.INIT_FONT_Family,color: themes.colors.INIT_COLOR_Blue}}>
        {item.user_contact}
        </Text>
        <Right style={{flex:1}}>
        <Button transparent>
        <Icon name='right-arrow' style={{color:themes.colors.INIT_COLOR_Green,fontSize:themes.fonts.INIT_FONT_SIZE_L,marginTop:-15}}/>
        </Button>
        </Right>
        </View>
        </CardItem>
        <CardItem style={{paddingTop:7,paddingLeft:25}}>
       <View style={{flexDirection:'row',position:'relative',marginTop:-30,marginBottom:-25}}>
       <Icon name='iconfinder_social-linkedin-circular_216393' style={{color:themes.colors.INIT_COLOR_Blue,fontSize:20,paddingTop:-5}}/>
        <Text style={{fontSize:themes.fonts.INIT_FONT_SIZE_M,paddingTop:2.5,paddingLeft:8,fontFamily:themes.fonts.INIT_FONT_Family,color: themes.colors.INIT_COLOR_Blue}}>
        {item.user_linkedin_profile}
        </Text>
        <Right style={{flex:1}} />
        </View>
        </CardItem>
        </View>
    );
  }

  renderItem2 = ({ item }) => {
    return (
      <View style={{flexDirection:'row'}}>
      <Thumbnail source = {{uri:item.user_profile_image}} style={{height:110,width:110, borderRadius:100}}/>
                </View>
    );
  }

  
  render () {
    return(
      <Container style={styles.Container,{backgroundColor:'#EEEEEE'}}>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#88BE49','#447A47']} style={{}}>
      <Header transparent androidStatusBarColor='transparent'
        style={{height:250}}>
          <Left style={{flex:1,marginBottom:-40}}>
            <Button transparent style={{flex:1,paddingBottom:35,alignContent:'center',justifyContent:'center'}}onPress={() => this.props.navigation.dispatch(StackActions.popToTop())} >
            <Icon name='back-arrow' style={{color:themes.colors.INIT_COLOR_White,fontSize:themes.fonts.INIT_FONT_SIZE_XL,marginBottom:150}}/>
            </Button>
          </Left>
          <Body style={{flex:1,flexDirection:'row'}}>
          <FlatList
          style={{alignSelf:'center'}}
          data={this.state.FlatListItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderItem2}
        />      
            </Body>
          <Right style={{flex:1}} />
      </Header>
      </LinearGradient>
      <Content>
      <CardItem style={styles.shadow1}>

      <FlatList
          data={this.state.FlatListItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderItem}
        />
    
        </CardItem>
        <Card style={styles.shadow2}>
        <FlatList
          data={this.state.FlatListItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderItem1}
        />
       </Card>
       </Content>
      </Container>
    );
  }
}


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
