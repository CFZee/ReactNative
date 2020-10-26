import { Header, Left, Body, Right, Button, Text } from 'native-base';
import React, { Component } from 'react';
import { View, Image, FlatList, TouchableHighlight ,TouchableWithoutFeedback} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { attendeesInfo } from '../../Services/API';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../../src/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);
import themes from '../../components/themes/Variables.js';
import SectionListContacts from 'react-native-sectionlist-contacts';
import Realm from 'realm'
let realm;

let namedata = [];

const attendeesDetails = [];

let objects = [];

export default class all_attendees extends Component {
  static navigationOptions = () => ({
    header: null
  })

  constructor() {
    super();
    this.state = { dataSource: [] };
    this.state = { iconName: "heart" };
    realm = new Realm({
      path: 'FavDatabase.realm',
      schema: [{
        name: 'favorite', properties: {
          name: 'string',
          avatarUrl: 'string',
          subtitle: 'string',
          group: 'string'
        }
      }]
    })
  }
  componentDidMount() {
    attendeesInfo().then((data) => {
      data.map(item => {
        var attendee = { name: item.attendee_name, avatarUrl: item.profile_image.guid,subtitle: item.attendee_designation, group: item.group, organization:item.attendee_organisation };
        attendeesDetails.push(attendee);
        var a = {name: item.attendee_name}
        namedata.push(a)
        console.log(namedata)
      })
      this.setState({
        dataSource: attendeesDetails
      });
      this.filterData(attendeesDetails);
    });
  }

  filterData(attendeesDetails) {
    for (let i = 65; i <= 90; i++) {
      let o = { name: String.fromCharCode(i) };
      attendeesDetails.push(o);
    }
    attendeesDetails.sort((a, b) => {
      let newNamea = a.name.replace(/^(Dr|Mr|Prof).\s/i, '');
      let newNameb = b.name.replace(/^(Dr|Mr|Prof).\s/i, '');
      if (newNamea > newNameb) {
        return 1
      } else {
        return -1
      }
    });
  }

  attendeesDetailScreen = (item) => {
    this.props.navigation.navigate('AttendeesDetails', {
        userName: item.name,
        userDesignation:item.subtitle,
        userOrganization:item.organization,
    })
}
  _saveItem = async (value) => {
    if (this.state.iconName === 'heart'){
      this.setState({ iconName: "search" }) 
      }
       else {this.setState({ iconName: "heart" })   }
    try {
      realm.write(() => {
        realm.create('favorite', 
        { name: value.name,
           avatarUrl: value.avatarUrl,
            subtitle: value.subtitle,
             group: value.group });
      })
      objects = realm.objects('favorite');
      console.log(JSON.stringify(objects));
      console.log("Saved data successfully");
    } catch (error) {
      console.log(error);
    }
  }
  renderItem = ({ item }) => {
    if (item.name.length > 1) {
      return (
        <View style={styles.item}>
                <Product favorite={item.favorite}  />
            <TouchableWithoutFeedback onPress={() => this.attendeesDetailScreen(item)}>
              <View style={{flexDirection:'row'}}>
                <Text style={{margin:10, fontFamily: themes.fonts.INIT_FONT_Family, fontSize: themes.fonts.INIT_FONT_SIZE_L ,marginTop:10}} >{item.name}</Text>
              </View>
            </TouchableWithoutFeedback>
        </View>
      )
    } else {
      return (
          <View style={styles.itemSeparator}>
            <Text style={{ fontFamily: themes.fonts.INIT_FONT_Family, fontSize: themes.fonts.INIT_FONT_SIZE_XL }} >
            {item.name}
            </Text>
          </View>
      )
    }
  }
  render() {
    return (
      <View >
        <View >
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#88BE49', '#447A47']} style={styles.LinearGradient}>
            <Header transparent androidStatusBarColor='transparent'
              style={{ height: 100 }}>
              <Left>
                <Button transparent onPress={() => this.props.navigation.navigate('Home')}>
                <Icon name='back-arrow' style={{color: themes.colors.INIT_COLOR_White, fontSize: themes.fonts.INIT_FONT_SIZE_IconSize_M, paddingTop: 0, marginRight: -100}} />
                </Button>
              </Left>
              <Body style={{ marginRight: -120 }}>
              <Text style={{ color: themes.colors.INIT_COLOR_White, fontSize: themes.fonts.INIT_FONT_SIZE_XL, fontFamily: themes.fonts.INIT_FONT_Family, alignSelf: 'center'}}>
                  All Attendees
                 </Text>
              </Body>
              <Right>
               
              </Right>
            </Header>
          </LinearGradient>
        </View>
        <FlatList
          style={{ marginBottom: 100 }}
          data={this.state.dataSource}
          keyExtractor={item => item.name}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}

class Product extends Component {
  constructor(props) {
      super(props);
      this.state = {
          favorite: false
      };
  }
  componentDidMount() {
    attendeesInfo().then((data) => {
      data.map(item => {
        var Detail = { name: item.speaker_name,
           avatarUrl: item.profile_image.guid,
            subtitle: item.designation, 
            group: item.group ,
            organization:item.organization,
            email:item.email_id,
            contact:item.phone_no,
            linkedin:item.linkedin,
            // speakerID:item.id
          
          };
        if (Detail.group.toUpperCase() == "speakers") speakersDetailItem.push(Detail);
      })
    });
  }
  

  componentWillMount() {
      const { favorite } = this.props;
      this.setState({favorite });
  }


  render(item) {
      const { favorite } = this.state;

      return (
                  <Icon
                      name={favorite ? 'fillheart' : 'heart'}
                      color={favorite ? themes.colors.INIT_COLOR_Yellow : themes.colors.INIT_COLOR_Yellow}
                      size={25}
                      style={{ marginBottom: 10, marginTop: 10 }}
                      onPress={() => _saveItem(item) & this.setState({ favorite: !favorite }) }     
                    />
      );
  }
}

const styles = {
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 40,
    paddingBottom: 20
  },
  itemSeparator: {
    padding: 20
  }
}