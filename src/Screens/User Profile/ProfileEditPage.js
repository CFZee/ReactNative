import React, {Component}from 'react';
import { Container, Header,Thumbnail, Left, Body, Right, Button,Content,Item,Input, Text, Form } from 'native-base';
import { View,ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../../src/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);
import  themes from '../../components/themes/Variables.js';
import { YellowBox,KeyboardAvoidingView, Alert,} from 'react-native';
import Realm from 'realm';
import ImagePicker from 'react-native-image-picker';
import Mytextinput from './component/Mytextinput'
let realm;
let URL;



export default class ProfileEditPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          photo: null,
        };
        realm = new Realm({ path: 'UserDatabase.realm' });
        this.state = {
          input_user_id: '',
          user_name: '',
          user_contact: '',
          user_email: '',
          user_company_name: '',
          user_designation: '',
          user_linkedin_profile: '',
          user_profile_image:''

        };
      }
      
      handleChoosePhoto = () => {
        const options = {
          noData: true,
        };
        ImagePicker.showImagePicker(options, (response) => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            console.log(response.uri)
            const source = { uri: response.uri };
            URL = response.uri;
            console.log(URL);
            this.setState({ photo: source });
            // console.log(this.state.photo);
    
          }
        });
      };


      searchUser = () => {
        const { input_user_id } = 1;
        console.log(this.state.input_user_id);
        var user_d = realm
          .objects('user_d')
          .filtered('user_id =' + input_user_id);
        console.log(user_detai);
        if (user_d.length > 0) {
          this.setState({
            user_name: user_d[0].user_name,
          });
          this.setState({
            user_contact: user_d[0].user_contact,
          });
          this.setState({
            user_email: user_d[0].user_email,
          });
          this.setState({
            user_company_name: user_d[0].user_company_name,
          });
          this.setState({
            user_designation: user_d[0].user_designation,
          });
          this.setState({
            user_linkedin_profile: user_d[0].user_linkedin_profile,
          });
          this.setState({
            user_profile_image: user_d[0].user_profile_image,
          })
        } else {
          alert('No user found');
          this.setState({
            user_name: '',
          });
          this.setState({
            user_contact: '',
          });
          this.setState({
            user_email: '',
          });
          this.setState({
            user_company_name: '',
          });
          this.setState({
            user_designation: '',
          });
          this.setState({
            user_linkedin_profile: '',
          });
          this.setState({
            user_profile_image:''
          })
        }
      };


      updateUser = () => {
        var that = this;
        const { user_name } = this.state;
        const { user_contact } = this.state;
        const { user_email } = this.state;
        const { user_company_name } = this.state;
        const { user_designation } = this.state;
        const { user_linkedin_profile } = this.state;
          if (user_name) {
            if (user_contact) {
              if (user_email) {
                if(user_company_name){
                  if(user_designation){
                    if(user_linkedin_profile){
                realm.write(() => {
                  var ID = 1;
                  console.log('ID', ID);
                  var obj = realm
                    .objects('user_d')
                    .filtered('user_id =' + 1);
                  console.log('obj', obj);
                  if (obj.length > 0) {
                    obj[0].user_name = this.state.user_name;
                    obj[0].user_contact = this.state.user_contact;
                    obj[0].user_email = this.state.user_email;
                    obj[0].user_designation = this.state.user_designation;
                    obj[0].user_company_name = this.state.user_company_name;
                    obj[0].user_linkedin_profile = this.state.user_linkedin_profile;
                    obj[0].user_profile_image = URL;
                    Alert.alert(
                      'Success',
                      'User updated successfully',
                      [
                        {
                          text: 'Ok',
                          onPress: () =>
                            that.props.navigation.navigate('HomeScreen'),
                        },
                      ],
                      { cancelable: false }
                    );
                  } else {
                    alert('User Updation Failed');
                  }
                });
              }
              else {
                alert('Please fill Linkedin Profile');
              }
            }else {
              alert('Please fill Designation');}
            }
            else {
              alert('Please fill Company Name');}
            } 
              else {
                alert('Please fill Email');
              }
            } else {
              alert('Please fill Contact Number');
            }
          } else {
            alert('Please fill Name');
          }
  
      };


    render () {
        return (
            <Container style={styles.container,{backgroundColor:'#EEEEEE'}}>
                <ScrollView>
                <LinearGradient start={{x: 0, y: 2}} end={{x: 1, y: 2}} colors={['#88BE49','#447A47']}>
                <Header  transparent androidStatusBarColor='transparent'
                style={{ height: 220 } }> 
                <Left style={{flex:1}}>
                    <Button transparent onPress={() => {this.props.navigation.navigate('Home')}}>
                    <Icon name='back-arrow' style={{color:themes.colors.INIT_COLOR_White,fontSize:15,marginBottom:120}}/>
                        </Button>
                    </Left>
                <Body style={{flex:1,paddingLeft:15,elevation: 100}}>   
                <View style={{flexDirection:'row',marginBottom:-20}}>
                { this.state.photo === null ? <Thumbnail source={{ uri:'https://images.pexels.com/photos/785667/pexels-photo-785667.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}} style={{position:'relative',height:110,width:110,borderRadius:100,}}/>:
                <Thumbnail style={{position:'relative',height:110,width:110,borderRadius:100,}} source={this.state.photo} />}
                <Button onPress={this.handleChoosePhoto} style={{position:'relative',marginLeft:-30,marginTop:60,height:30,width:30,borderRadius:20,backgroundColor:'#fff'}} >
                    <Icon name='photo-camera' style={{paddingLeft:8,fontSize:15,color:'green'}}/>
                    </Button>
                    </View>
                </Body>
                <Right style={{flex:1}}>
                    </Right>
                </Header>
                </LinearGradient>
               <Content  style={styles.shadow}>
               <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1, justifyContent: 'space-between' }}>
                        <View style={{flexDirection:'column',padding:10}}>
                    <Text style={{paddingBottom:10,fontSize:themes.fonts.INIT_FONT_SIZE_L,color:themes.colors.INIT_COLOR_Blue,fontFamily:themes.fonts.INIT_FONT_Family}}> Full Name </Text>
                    <Mytextinput
              placeholder="Sarah Brook"
              style={{fontSize:themes.fonts.INIT_FONT_SIZE_M,marginLeft:10,color:themes.colors.INIT_COLOR_Blue,fontFamily:themes.fonts.INIT_FONT_Family}}
              onChangeText={user_name => this.setState({ user_name })}/>
           </View> 
           <View style={{flexDirection:'column',padding:10,marginTop:-10}}>
                    <Text style={{paddingBottom:10,fontSize:themes.fonts.INIT_FONT_SIZE_L,color:themes.colors.INIT_COLOR_Blue,fontFamily:themes.fonts.INIT_FONT_Family}}> Email </Text>
                    <Mytextinput
              placeholder="sarahbrook@gmail.com"
              style={{fontSize:themes.fonts.INIT_FONT_SIZE_M,marginLeft:10,color:themes.colors.INIT_COLOR_Blue,fontFamily:themes.fonts.INIT_FONT_Family}}
              onChangeText={user_email => this.setState({ user_email })}/>
           </View> 
           <View style={{flexDirection:'column',padding:10,marginTop:-10}}>
                    <Text style={{paddingBottom:10,fontSize:themes.fonts.INIT_FONT_SIZE_L,color:themes.colors.INIT_COLOR_Blue,fontFamily:themes.fonts.INIT_FONT_Family}}> Designation </Text>
                    <Mytextinput
              placeholder="Founder"
              style={{fontSize:themes.fonts.INIT_FONT_SIZE_M,marginLeft:10,color:themes.colors.INIT_COLOR_Blue,fontFamily:themes.fonts.INIT_FONT_Family}}
              onChangeText={user_designation => this.setState({ user_designation })}/>
           </View> 
           <View style={{flexDirection:'column',padding:10,marginTop:-10}}>
                    <Text style={{paddingBottom:10,fontSize:themes.fonts.INIT_FONT_SIZE_L,color:themes.colors.INIT_COLOR_Blue,fontFamily:themes.fonts.INIT_FONT_Family}}> Company Name </Text>
                    <Mytextinput
              placeholder="Green Chemistry Foundation"
              style={{fontSize:themes.fonts.INIT_FONT_SIZE_M,marginLeft:10,color:themes.colors.INIT_COLOR_Blue,fontFamily:themes.fonts.INIT_FONT_Family}}
              onChangeText={user_company_name => this.setState({ user_company_name })}/>
           </View> 
           <View style={{flexDirection:'column',padding:10,marginTop:-10}}>
                    <Text style={{paddingBottom:10,fontSize:themes.fonts.INIT_FONT_SIZE_L,color:themes.colors.INIT_COLOR_Blue,fontFamily:themes.fonts.INIT_FONT_Family}}> Phone Number </Text>
                    <Mytextinput
              placeholder="0222-222-222"
              style={{fontSize:themes.fonts.INIT_FONT_SIZE_M,marginLeft:10,color:themes.colors.INIT_COLOR_Blue,fontFamily:themes.fonts.INIT_FONT_Family}}
              keyboardType = 'numeric'
              value={'' + this.state.user_contact}
              onChangeText={user_contact => this.setState({ user_contact })}
              maxLength={10}              
              />
           </View> 
           <View style={{flexDirection:'column',padding:10,paddingBottom:20,marginTop:-10}}>
                    <Text style={{paddingBottom:10,fontSize:themes.fonts.INIT_FONT_SIZE_L,color:themes.colors.INIT_COLOR_Blue,fontFamily:themes.fonts.INIT_FONT_Family}}> Linkedin </Text>
                    <Mytextinput
              placeholder="https://www.linkedin.com/in/abcd"
              style={{fontSize:themes.fonts.INIT_FONT_SIZE_M,marginLeft:10,color:themes.colors.INIT_COLOR_Blue,fontFamily:themes.fonts.INIT_FONT_Family}}
              onChangeText={user_linkedin_profile => this.setState({ user_linkedin_profile })}/>
           </View> 
            </KeyboardAvoidingView>
        </ScrollView>
            </Content>

            <View style={{paddingBottom:20,paddingTop:8}}>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#88BE49','#447A47']} style={{borderRadius:70,marginRight:20,marginLeft:20}}>
                <Button transparent rounded style={{alignSelf:"center"}} onPress={this.updateUser.bind(this)} >
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