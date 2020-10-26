import React, {Component}from 'react';
import { Container, Header,Thumbnail, Left, Body, Right, Button,Content,Item,Input, Text, Form } from 'native-base';
import { View,ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../src/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);
import  themes from '../components/themes/Variables.js';


export default class ProfileEditPage extends Component {
    render () {
        return (
            <Container style={styles.container,{backgroundColor:'#EEEEEE'}}>
                <ScrollView>
                <LinearGradient start={{x: 0, y: 2}} end={{x: 1, y: 2}} colors={['#88BE49','#447A47']}>
                <Header  transparent androidStatusBarColor='transparent'
                style={{ height: 220 } }> 
                <Left style={{flex:1}}>
                    <Button transparent onPress={() => {this.props.navigation.navigate('Profile')}}>
                    <Icon name='back-arrow' style={{color:themes.colors.INIT_COLOR_White,fontSize:15,marginBottom:120}}/>
                        </Button>
                    </Left>
                <Body style={{flex:1,paddingLeft:15,elevation: 100}}>   
                <View style={{flexDirection:'row',marginBottom:-20}}>
                <Thumbnail source={{ uri:'https://images.pexels.com/photos/785667/pexels-photo-785667.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}} style={{position:'relative',height:110,width:110,borderRadius:100,}}/>
                <Button style={{position:'relative',marginLeft:-30,marginTop:60,height:30,width:30,borderRadius:20,backgroundColor:'#fff'}} >
                    <Icon name='photo-camera' style={{paddingLeft:8,fontSize:15,color:'green'}}/>
                    </Button>
                    </View>
                </Body>
                <Right style={{flex:1}}>
                    </Right>
                </Header>
                </LinearGradient>
               <Content  style={styles.shadow}>
                    <Form>
                        <View style={{flexDirection:'column',padding:10}}>
                    <Text style={{paddingBottom:10,fontSize:themes.fonts.INIT_FONT_SIZE_M,color:themes.colors.INIT_COLOR_Blue,fontFamily:themes.fonts.INIT_FONT_Family}}> Full Name </Text>
                    <Item rounded style={styles.borderStyle}>
              <Input required='true' placeholder='Sarah Brooke'style={{paddingLeft:30,fontFamily:themes.fonts.INIT_FONT_Family,fontSize:themes.fonts.INIT_FONT_SIZE_S,margin:-5}}/>
              </Item>
           </View> 
           <View style={{flexDirection:'column',padding:10,marginTop:-10}}>
                    <Text style={{paddingBottom:10,fontSize:themes.fonts.INIT_FONT_SIZE_M,color:themes.colors.INIT_COLOR_Blue,fontFamily:themes.fonts.INIT_FONT_Family}}> Email </Text>
                    <Item rounded style={styles.borderStyle}>
              <Input placeholder='SarahBrooke@gmail.com'style={{paddingLeft:30,fontFamily:themes.fonts.INIT_FONT_Family,fontSize:themes.fonts.INIT_FONT_SIZE_S,margin:-5}}/>
              </Item>
           </View> 
           <View style={{flexDirection:'column',padding:10,marginTop:-10}}>
                    <Text style={{paddingBottom:10,fontSize:themes.fonts.INIT_FONT_SIZE_M,color:themes.colors.INIT_COLOR_Blue,fontFamily:themes.fonts.INIT_FONT_Family}}> Designation </Text>
                    <Item rounded style={styles.borderStyle}>
              <Input placeholder='Founder'style={{paddingLeft:30,fontFamily:themes.fonts.INIT_FONT_Family,fontSize:themes.fonts.INIT_FONT_SIZE_S,margin:-5}}/>
              </Item>
           </View> 
           <View style={{flexDirection:'column',padding:10,marginTop:-10}}>
                    <Text style={{paddingBottom:10,fontSize:themes.fonts.INIT_FONT_SIZE_M,color:themes.colors.INIT_COLOR_Blue,fontFamily:themes.fonts.INIT_FONT_Family}}> Company Name </Text>
                    <Item rounded style={styles.borderStyle}>
              <Input placeholder='Green Chemistry Foundation'style={{paddingLeft:30,fontSize:themes.fonts.INIT_FONT_SIZE_S,margin:-5,fontFamily:themes.fonts.INIT_FONT_Family}}/>
              </Item>
           </View> 
           <View style={{flexDirection:'column',padding:10,marginTop:-10}}>
                    <Text style={{paddingBottom:10,fontSize:themes.fonts.INIT_FONT_SIZE_M,color:themes.colors.INIT_COLOR_Blue,fontFamily:themes.fonts.INIT_FONT_Family}}> Phone Number </Text>
                    <Item rounded style={styles.borderStyle}>
              <Input placeholder='022-222-222' keyboardType = 'numeric' style={{paddingLeft:30,fontSize:themes.fonts.INIT_FONT_SIZE_S,margin:-5,fontFamily:themes.fonts.INIT_FONT_Family}}/>
              </Item>
           </View> 
           <View style={{flexDirection:'column',padding:10,paddingBottom:20,marginTop:-10}}>
                    <Text style={{paddingBottom:10,fontSize:themes.fonts.INIT_FONT_SIZE_M,color:themes.colors.INIT_COLOR_Blue,fontFamily:themes.fonts.INIT_FONT_Family}}> Linkedin </Text>
                    <Item rounded style={styles.borderStyle}>
              <Input placeholder='https://www.Linkedin.cim/in/abcd'style={{paddingLeft:30,fontSize:themes.fonts.INIT_FONT_SIZE_S,margin:-5,fontFamily:themes.fonts.INIT_FONT_Family}}/>
              </Item>
           </View> 
            </Form>
            </Content>

            <View style={{paddingBottom:20,paddingTop:8}}>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#88BE49','#447A47']} style={{borderRadius:70,marginRight:20,marginLeft:20}}>
                <Button transparent rounded style={{alignSelf:"center"}}>
                   <Text style={{color:themes.colors.INIT_COLOR_White,fontSize:themes.fonts.INIT_FONT_SIZE_L,fontFamily:themes.fonts.INIT_FONT_Family,textTransform: 'capitalize'}}> Save </Text>
                     </Button>
                     </LinearGradient>
            </View>
           </ScrollView>
            </Container>
        );
        }
}

const styles = {
    container: {
      flex: 1,
      backgroundColor: '#D5D6D6',
    },

    shadow: {
        marginRight:15,
        marginLeft:15,
        paddingTop:20,
        paddingBottom:5,
        backgroundColor:'#fff',
        flex:2,
        padding:10 ,
        borderWidth: 1,
        borderColor: '#fff',
        marginTop: 20,
        marginBottom: 15,
        elevation:70,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "grey",
        shadowOpacity: 1.0,
        shadowRadius: 10
    },
    borderStyle: {
        borderColor: 'green',
        borderRadius: 70, 
        borderBottomWidth: 1.5,
        borderTopWidth: 1.5, 
        borderRightWidth: 1.5, 
        borderLeftWidth: 1.5
    }
};