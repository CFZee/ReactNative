import React from 'react';
import { Text, View, } from 'react-native';
import Card from '../components/Card';
import CardSection from '../components/CardSection';

const AttendeesD = ({ album }) => {
  const {} = album;
  const {
    thumbnailContainerStyle,
    headerTextStyle,
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Text style={headerTextStyle}>{}</Text>
          <Text>{}</Text>
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

export default AttendeesD;
