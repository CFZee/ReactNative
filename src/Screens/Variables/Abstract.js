import React, {Component}from 'react';
import { CardItem,Container, Header, Left, Body, Right, Button,Content, Text} from 'native-base';
import { View,FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../src/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);
import {Dimensions, PixelRatio} from 'react-native';

const widthPercentageToDP = widthPercent => {
  const screenWidth = Dimensions.get('window').width;
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100);
};
const heightPercentageToDP = heightPercent => {
  const screenHeight = Dimensions.get('window').height;
  const elemHeight = parseFloat(heightPercent);
return PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
};
export {
  widthPercentageToDP,
  heightPercentageToDP
};




const AbstractDetails = ({  }) => {
return (
  <View>
    <CardItem style={styles.shadow}>
<LinearGradient colors={['#88BE49','#447A47']} style={{height:heightPercentageToDP('10%'),width:75,marginTop:-30,marginBottom:-30,marginLeft:-2,marginRight:10}}>
    <Left style={{flex:1,margin:25}}>
        <Icon active name='heart' style={{color:'yellow',fontSize:20}} onPress={this.onress}/>
    </Left>
</LinearGradient>
    <Body style={{flex:1}}>
        <View style={{flexDirection:'column',marginLeft:9,marginRight:-60,paddingTop:15,marginBottom:15}}>
              <View>
   <Text style={{fontSize:12,color:'#3A4759',fontFamily:'Montserrat'}}>
   {item.name}
   </Text>
   </View>
    <View>
    <Text style={{fontSize:10,paddingTop:5,color:'#9B9C9F',textAlign: 'justify',
lineHeight: 12,fontFamily:'Montserrat'}}>
    {item.description}
    </Text>
  </View>
  <View>
    <Text style={{fontSize:8,paddingTop:5,color:'#447A47',fontFamily:'Montserrat'}}>
    {item.date}
        </Text>
    </View>
  </View>
    </Body>
      <Right style={{flex:1,marginLeft:-25}} >
      <Button transparent onPress={() => {this.props.navigation.navigate('AboutTheEvent')}}>
    <Icon name='forward-arrow' style={{fontSize:15,color:'#447A47'}} />
    </Button>
    </Right>
</CardItem>
</View>
);
}

const styles = {
    shadow: {
      marginRight:15,
      marginLeft:15,
      marginTop:15,
      paddingLeft:-20,
      paddingTop:-20,
      paddingBottom:-20,
      borderWidth: 1,
      borderColor: '#fff',
      marginBottom: 15,
      elevation:10,
      shadowOffset: { width: 0, height: 8 },
      shadowColor: "black",
      shadowOpacity: 100,
      shadowRadius: 10
  },
  
};

export default AbstractDetails;
