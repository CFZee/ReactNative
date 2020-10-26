import React from 'react';
import { Text, View, } from 'react-native';
import Card from '../components/Card';
import CardSection from '../../components/CardSection';

const PartnersDetails = ({ album }) => {
  const { Partners_name, about} = album;
  const {
    thumbnailContainerStyle,
    headerTextStyle,
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Text style={headerTextStyle}>{Partners_name}</Text>
          <Text>{about}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
};

export default PartnersDetails;
