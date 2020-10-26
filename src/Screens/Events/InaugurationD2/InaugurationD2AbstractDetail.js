import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container, Card, Header, Content, Button, Left, Body, Right, Thumbnail,CardItem} from 'native-base';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import { StackActions } from 'react-navigation';
import fontelloConfig from '../../../../src/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);
import LinearGradient from 'react-native-linear-gradient';
import themes from '../../../components/themes/Variables';



export default class InaugurationD2AbstractDetail extends Component{
  render () {
    const { navigation } = this.props;
    const user_name = navigation.getParam('userName');
    const user_designation = navigation.getParam('userDesignation');
    const user_ProfileImage = navigation.getParam('userProfileImage');
    console.log(user_ProfileImage);
    const user_organization = navigation.getParam('userOrganization');
    const abstract_description = navigation.getParam('InaugurationAbstractDetail');
    const abstract_name = navigation.getParam('abstractName');

    return(
      <Container style={styles.Container,{backgroundColor:'#EEEEEE'}}>
            <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 1}} colors={['#88BE49','#447A47']}>
      <Header  transparent androidStatusBarColor='transparent'
        style={{height:250}}>
          <Left style={{flex:1}}>
            <Button transparent onPress={() => this.props.navigation.dispatch(StackActions.popToTop())}
             style={{flex:1,paddingBottom:35,alignContent:'center',justifyContent:'center'}}>
            <Icon name='back-arrow' style={{color:'white',fontSize:15,marginBottom:100}}/>
            </Button>
          </Left>
          <Body style={{flex:1,marginBottom:-40}}>
              <Thumbnail source = {{uri:user_ProfileImage}} style={{height:110,width:110, borderRadius:100}}/>
          </Body>
          <Right style={{flex:1}} />
      </Header>
      </LinearGradient>
      <Content>
      <CardItem style={styles.shadow1}>
       <View>
              <View>
            <Text style={{fontSize:12,color:'#3A4759',textAlign:'left',paddingLeft:15,paddingBottom:5,fontFamily:'Montserrat'}}>
             {user_name}
                </Text>
                </View>
                <View>
                  <Text style={{fontSize:10,textAlign:'left',paddingLeft:15,paddingBottom:5,color:'#9B9C9F',fontFamily:'Montserrat'}}>
                  {user_designation}
                </Text>
                </View>
                <View>
                  <Text style={{fontSize:10,textAlign:'left',paddingLeft:15,paddingBottom:5,color:'#9B9C9F',fontFamily:'Montserrat'}}>
                  {user_organization}
                </Text>
                </View>
                </View>
        </CardItem>
        <Card style={styles.shadow2}>
        <View style={{felxDirection:'column'}}>
        <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M,paddingLeft:20,marginTop:10,textAlign:'auto',color: themes.colors.INIT_COLOR_Blue,fontFamily: themes.fonts.INIT_FONT_Family}}> Abstract:- </Text>
        <CardItem >
            <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M,padding:5,marginTop:-10,textAlign:'auto',color: themes.colors.INIT_COLOR_Grey,fontFamily: themes.fonts.INIT_FONT_Family}}>
             {abstract_name}
              </Text>
          </CardItem>
        <CardItem >
            <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_S,padding:5,marginTop:-10,textAlign:'auto',color: themes.colors.INIT_COLOR_Grey,fontFamily: themes.fonts.INIT_FONT_Family}}>
             {abstract_description}
              </Text>
          </CardItem>
        </View>
       </Card>
       </Content>
      </Container>
    );
  }
}

const styles = ({
    container: {
    flex: 1,
    backgroundColor: '#EEEEEE'
    },
    shadow1: {
    marginRight: 15,
    marginLeft: 15,
    marginTop: 40,
    paddingTop: 10,
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
    marginTop: 20,
    marginBottom: 10,
    elevation: 10,
    shadowOffset: { width: 4,height: 4},
    shadowColor: "grey",
    shadowOpacity: 1.0,
    shadowRadius: 5
    },
    shadow2: {
    marginRight: 15,
    marginLeft: 15,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#fff',
    borderColor:'#fff',
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 100,
    elevation: 10,
    shadowOffset: { width:0,height: 8},
    shadowColor: "grey",
    shadowOpacity: 50,
    shadowRadius: 50
    }
});
