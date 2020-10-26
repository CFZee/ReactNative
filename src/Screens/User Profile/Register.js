/*Screen to register the user*/
import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import Mytextinput from './component/Mytextinput';
import Mybutton from './component/Mybutton';
import ImagePicker from 'react-native-image-picker';
import Realm from 'realm';
let realm;
let URL;

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: null,
    };
    this.state = {
      user_name: '',
      user_contact: '',
      user_email: '',
      user_linkedin_profile: '',
      user_company_name:'',
      user_designation:'',
      user_profile_image:''
    };
    realm = new Realm({ path: 'UserDatabase.realm' });
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

  register_user = () => {
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
            if(user_company_name) {
                if(user_designation){
                    if(user_linkedin_profile){
                            realm.write(() => {
                                var ID = 
                                realm.objects('user_d').sorted('user_id', true).length > 0
                                    ? realm.objects('user_d').sorted('user_id', true)[0]
                                        .user_id + 1
                                    : 1;
                                realm.create('user_d', {
                                user_id: ID,
                                user_name: that.state.user_name,
                                user_email: that.state.user_email,
                                user_contact: that.state.user_contact,
                                user_company_name: that.state.user_company_name,
                                user_designation: that.state.user_designation,
                                user_linkedin_profile: that.state.user_linkedin_profile,
                                user_profile_image: URL,
                                });
                                Alert.alert(
                                'Success',
                                'You are registered successfully',
                                [
                                    {
                                    text: 'Ok',
                                    onPress: () => that.props.navigation.navigate('Home'),
                                    },
                                ],
                                { cancelable: false }
                                );
                            });
                            } 
                
                            else {
                                alert('Please fill linkedinProfile');
                                }
                            }
                            else {
                                alert('Please fill Designation');
                                }
                            }
                            else {
                                alert('Please fill Company name');
                             }
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
 
  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1, justifyContent: 'space-between' }}>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {this.photo && (
          <Image
            source={{ uri: photo.uri }}
            style={{ width: 300, height: 300 }}
          />
        )}
        <Mybutton onPress={this.handleChoosePhoto} >
        Choose Photo
        </Mybutton>
      </View>
            <Mytextinput
              placeholder="Enter Name"
              onChangeText={user_name => this.setState({ user_name })}
            />
            <Mytextinput
              placeholder="Enter Contact No"
              onChangeText={user_contact => this.setState({ user_contact })}
              maxLength={10}
              keyboardType="numeric"
            />
            <Mytextinput
              placeholder="Enter Email Address"
              onChangeText={user_email => this.setState({ user_email })}
              style={{ textAlignVertical: 'top' }}
            />
            <Mytextinput
              placeholder="Enter Company Name"
              onChangeText={user_company_name => this.setState({ user_company_name })}
              style={{ textAlignVertical: 'top' }}
            />
            <Mytextinput
              placeholder="Enter Designation"
              onChangeText={user_designation => this.setState({ user_designation })}
              style={{ textAlignVertical: 'top' }}
            />
            <Mytextinput
              placeholder="Enter Linkedin Profile"
              onChangeText={user_linkedin_profile => this.setState({ user_linkedin_profile })}
              style={{ textAlignVertical: 'top' }}
            />

            <Mybutton onPress={this.register_user.bind(this)}>
              Submit
              </Mybutton>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}