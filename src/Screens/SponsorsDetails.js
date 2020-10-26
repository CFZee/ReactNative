import React from 'react';
import { Text, View, } from 'react-native';
import Card from '../components/Card';
import CardSection from '../components/CardSection';

export default class SponsorsDetails {
  // const { sponsor_name, about } = album;
  // const {
  //   thumbnailContainerStyle,
  //   headerTextStyle,
  // } = styles;

  fetchData = async () => {
    const url = "http://165.22.216.45/wp-json/wp/v2/sponsors?per_page=100";
    fetch(url)
      .then(response => response.json())
      .then((responseJson) => {
        responseJson.map(item => {
          console.log(item);
          // let o = {name: sponsor_name, about: }
        })
      })
      .catch(error => console.log(error))
  }
  render() {
    return (
      <Card>
        <CardSection>
          <View style={thumbnailContainerStyle}>
            <Text style={headerTextStyle}>HELLO{sponsor_name}</Text>
            <Text>{about}HELLO!</Text>
          </View>
        </CardSection>
      </Card>
    );
  };
}
const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18
  },
};

// export default SponsorsDetails;
