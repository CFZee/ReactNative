import React, { Component } from 'react-native';
import { View, Image, FlatList, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';
import AsyncStorage from "@react-native-community/async-storage";

let _saveItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log("Saved data successfully");
  } catch (error) {
    console.log("Error saving data");
  }
}
// const sortedList = list.sort((a, b) => (a.name > b.name) ? 1 : -1)
let newList = [];
class CustomFlatList extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    textStyles: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.number,
      PropTypes.shape({}),
    ]),
    buttonStyles: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.number,
      PropTypes.shape({}),
    ]),
  }

  constructor(props) {
    super();
    this.state = { dataSource: [] };
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    // const url = "http://165.22.216.45/wp-json/wp/v2/presenters?per_page=100";
    const url = this.props.url;
    fetch(url)
      .then(response => response.json())
      .then((responseJson) => {
        responseJson.map(item => {
          var o = { name: item.speaker_name, avatarUrl: item.profile_image.guid, subtitle: item.designation };
          newList.push(o);
          console.log(newList);
        })
        this.filterData(newList);
        this.setState({ dataSource: newList });
      })
      .catch(error => console.log(error))
  }
  filterData(newList) {
    newList.sort((a, b) => {
      let newNamea = a.name.replace(/^(Dr|Mr|Prof).\s/i, '');
      let newNameb = b.name.replace(/^(Dr|Mr|Prof).\s/i, '');
      if (newNamea > newNameb) {
        return 1
      } else {
        return -1
      }
    });
  }
  renderItem = ({ item }) => {
    if (item.name.length > 1) {
      return (<View style={styles.item}>
        <TouchableHighlight onPress={() => _saveItem("name", item.name)}>
          <Icon iconStyle={{ paddingRight: 20, paddingLeft: 10, color: 'gold' }} name="heart" type="font-awesome" />
        </TouchableHighlight>
        <Image source={{ uri: item.avatarUrl }} style={{ width: 40, height: 40, borderRadius: 50, marginRight: 20 }} />
        <Text>{item.name}</Text>
      </View>)
    } else {
      return (
        <View style={styles.itemSeparator}><Text>{item.name}</Text></View>
      )
    }
  }

  render = () => {
    const { textStyles, buttonStyles, content } = this.props;

    return (
      <View>
        <FlatList
          style={{ marginBottom: 100 }}
          data={this.state.dataSource}
          keyExtractor={item => item.name}
          renderItem={this.renderItem}
        />
      </View>
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
// export default CustomFlatList;