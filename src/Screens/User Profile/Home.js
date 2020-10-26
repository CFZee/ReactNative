/*Home Screen With buttons to navigate to diffrent options*/
import React from 'react';
import { View } from 'react-native';
import Mybutton from './component/Mybutton';
import Mytext from './component/Mytext';
import Realm from 'realm';
let realm;
 
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    realm = new Realm({
      path: 'UserDatabase.realm',
      schema: [
        {
          name: 'user_d',
          properties: {
            user_id: { type: 'int', default: 0 },
            user_name: 'string',
            user_contact: 'string',
            user_email: 'string',
            user_linkedin_profile: 'string',
            user_company_name:'string',
            user_designation:'string',
            user_profile_image:{ type: 'string', default: 0 }
          },
        },
      ],
    });
  }
 
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          flexDirection: 'column',
        }}>
        <Mytext text="RealM Example" />
        <Mybutton onPress={() => this.props.navigation.navigate('Register')}>
          Register
        </Mybutton>
        <Mybutton onPress={() => this.props.navigation.navigate('Update')}>
          Update
        </Mybutton>
        <Mybutton onPress={() => this.props.navigation.navigate('View')}>
          View
        </Mybutton>
        <Mybutton onPress={() => this.props.navigation.navigate('Delete')}>
        Delete
        </Mybutton>
      </View>
    );
  }
}