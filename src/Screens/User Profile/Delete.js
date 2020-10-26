import React from 'react';
import { Button, Text, View, Alert } from 'react-native';
import Mytextinput from './component/Mytextinput';
import Mybutton from './component/Mybutton';
import Realm from 'realm';
let realm;
export default class Delete extends React.Component {
  constructor(props) {
    super(props);
    realm = new Realm({ path: 'UserDatabase.realm' });
    this.state = {
      input_user_id: '',
    };
  }
  deleteUser = () => {
    var that = this;
    const { input_user_id } = this.state;
    realm.write(() => {
      var ID = this.state.input_user_id;
      if (
        realm.objects('user_d').filtered('user_id =' + input_user_id)
          .length > 0
      ) {
        realm.delete(
          realm.objects('user_d').filtered('user_id =' + input_user_id)
        );
        var user_details = realm.objects('user_d');
        console.log(user_details);
        Alert.alert(
          'Success',
          'User deleted successfully',
          [
            {
              text: 'Ok',
              onPress: () => that.props.navigation.navigate('HomeScreen'),
            },
          ],
          { cancelable: false }
        );
      } else {
        alert('Please insert a valid User Id');
      }
    });
  };
  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <Mytextinput
          placeholder="Enter User Id"
          onChangeText={input_user_id => this.setState({ input_user_id })}
        />
        <Mybutton onPress={this.deleteUser.bind(this)}>
          Delete User
          </Mybutton> 
        </View>
    );
  }
}