import React from 'react';
import { Text, View, } from 'react-native';
import Card from '../components/Card';
import CardSection from '../../components/CardSection';

const EventsD = ({ album }) => {
  const { Event_name, about} = album;
  const {
    thumbnailContainerStyle,
    headerTextStyle,
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Text style={headerTextStyle}>{Event_name}</Text>
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

export default EventsD;
