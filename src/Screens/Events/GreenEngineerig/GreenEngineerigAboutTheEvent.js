
import React, { Component } from 'react';
import { Text, View,Image,FlatList } from 'react-native';
import { Container, Header,Fab, Content, Button,Left, Body, Right, CardItem } from 'native-base';
import { Card } from 'react-native-elements';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions ,createBottomTabNavigator} from 'react-navigation';
import fontelloConfig from '../../../../src/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);
import BottomNavigation, {
  FullTab
} from 'react-native-material-bottom-navigation';
import {Dimensions, PixelRatio} from 'react-native';
import  themes from '../../../components/themes/Variables.js';
import { getDefaultEvent, getEventInfo } from '../../../Services/API';


let eventsDetails=[];


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

export default class GreenEngineerigAboutTheEvent extends Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   dataSource: []
    // }
    this.state = {
      active: 'true'
    };
  }


//   componentDidMount() {
//     getEventInfo().then((data) => {
//       data.map(item => {
//         if (item.id == "320")
//         eventsDetails.push(item);
//       console.log(eventsDetails);
//       })
//       this.setState({
//         dataSource: eventsDetails
//       });
//       console.log(this.state.dataSource);
//     });
//   }

//   renderItem = ({ item }) => {
//     return (
//       <View>
//                <Card style={styles.shadow}>
//               <CardItem style={{paddingLeft:5,paddingTop:5}}>
//       <Text style={{fontSize:themes.fonts.INIT_FONT_SIZE_M,fontFamily:themes.fonts.INIT_FONT_Family}}>
//       {item['event_name']}
//         </Text>
//       </CardItem>
//       <CardItem style={{paddingLeft:5,paddingTop:2,paddingTop:5}}>
//       <Left >
//         <Icon name ='calendar' style={{fontSize:20,color:themes.colors.INIT_COLOR_Green}}/>
//         <Text style={{fontSize:themes.fonts.INIT_FONT_SIZE_S,color:themes.colors.INIT_COLOR_Grey,fontFamily:themes.fonts.INIT_FONT_Family,marginLeft:10}}>
//         {item['date']}
//            </Text>
//         </Left></CardItem>
//         <CardItem style={{paddingLeft:8,paddingTop:-5}}>
//           <Left>
//         <Icon name ='placeholder' style={{fontSize:themes.fonts.INIT_FONT_SIZE_IconSize_M,color:themes.colors.INIT_COLOR_Green}}/>
//         <Text style={{marginLeft:10,fontSize:themes.fonts.INIT_FONT_SIZE_S,color:themes.colors.INIT_COLOR_Grey,fontFamily:themes.fonts.INIT_FONT_Family}}>
//         {item['location']}
//         </Text>
//           </Left>
//           </CardItem>
//           <CardItem style={{paddingLeft:5,paddingTop:5}}>
//             <Text style={{fontFamily:themes.fonts.INIT_FONT_Family,fontSize:themes.fonts.INIT_FONT_SIZE_M}}>
//               About the Meeting
//               </Text>
//             </CardItem>
//           <CardItem style={{paddingLeft:5,paddingTop:-2,paddingBottom:5,marginRight:-15}}>
//             <Text style={{fontSize:themes.fonts.INIT_FONT_SIZE_S,textAlign:'auto',color:themes.colors.INIT_COLOR_Grey,fontFamily:themes.fonts.INIT_FONT_Family}}>
//             {item['event_body']}
//               </Text>
//           </CardItem>

//           <Body/>
//       </Card>
//       </View>
//     );
// }

//   tabs = [
//     {
//       key: 'home',
//       icon: 'store',

//     },
//     {
//       key: 'map',
//       icon: 'map',

//     },
//     {
//       key: 'user',
//       icon: 'iconfinder_39_2529953',

//     },
//     {
//       key: 'text',
//       icon: 'speech-bubble',
//     },
//     {
//       key: 'search',
//       icon: 'search',
//     }
//   ];

//   renderIcon = icon => ({ isActive }) => (
//     <Icon size={22} color='#447A47'  style={{paddingTop:10}} name={icon} />
//   );

//   renderTab = ({ tab, isActive }) => (
//     <FullTab
//       isActive={isActive}
//       key={tab.key}
//       renderIcon={this.renderIcon(tab.icon)}
//     />
//   );

  render() {
    return (
      <Container style={styles.container}>
                <Header transparent androidStatusBarColor='black'
          style={{height:200,width:widthPercentageToDP('100%')} }>
            <View style={{flexDirection:'column'}}>
              <View>
          <Image
          style={{width:widthPercentageToDP('100%'), height: heightPercentageToDP('32%'),alignSelf:'center'}}
          source={{uri: 'https://images.pexels.com/photos/1384614/pexels-photo-1384614.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940/'}}/>
          </View>
            <View style={{flexDirection: 'row',position:'absolute',paddingTop:25}} >
              <View>
                    <Button transparent style={{width:widthPercentageToDP('20%')}} onPress={() => this.props.navigation.dispatch(StackActions.popToTop())}>
                         <Icon name='back-arrow' style={{color:themes.colors.INIT_COLOR_White,fontSize:15}}/>
                        </Button>
                      </View>
                      <View style={{alignSelf:'center'}}>
              <Text style={{color:themes.colors.INIT_COLOR_White,fontFamily:themes.fonts.INIT_FONT_Family,marginLeft:50}}>
                                About the Event
                </Text>
                </View>
            </View>
            </View>
            </Header>
          <Fab small
            active={this.state.active}
            position="topRight"
            style={{margin:5, backgroundColor: '#fff',fontSize:20,marginBottom:-170}}
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="heart" style={{fontSize:25,color:'#E9D306'}}/>
            </Fab>
          <Content style={styles.shadow,{paddingTop:45}}>
            <Card style={styles.shadow}>
              <CardItem style={{paddingLeft:5,paddingTop:5}}>
      <Text style={{fontSize:themes.fonts.INIT_FONT_SIZE_M,fontFamily:themes.fonts.INIT_FONT_Family}}>
      Workshop on Green Engineering			
</Text>
      </CardItem>
      <CardItem style={{paddingLeft:5,paddingTop:2,paddingTop:5}}>
      <Left >
        <Icon name ='calendar' style={{fontSize:20,color:themes.colors.INIT_COLOR_Green}}/>
        <Text style={{paddingLeft:10,fontSize:themes.fonts.INIT_FONT_SIZE_S,color:themes.colors.INIT_COLOR_Grey,fontFamily:themes.fonts.INIT_FONT_Family}}>
          Day 1, 16th October</Text>
        </Left></CardItem>
        <CardItem style={{paddingLeft:8,paddingTop:-5}}>
          <Left>
        <Icon name ='placeholder' style={{fontSize:themes.fonts.INIT_FONT_SIZE_IconSize_M,color:themes.colors.INIT_COLOR_Green}}/><Text style={{paddingLeft:10,fontSize:themes.fonts.INIT_FONT_SIZE_S,color:themes.colors.INIT_COLOR_Grey,fontFamily:themes.fonts.INIT_FONT_Family}}>Seminar Hall 04</Text>
          </Left>
          </CardItem>
          <CardItem style={{paddingLeft:5,paddingTop:5}}>
            <Text style={{fontFamily:themes.fonts.INIT_FONT_Family,fontSize:themes.fonts.INIT_FONT_SIZE_M}}>
              About the Meeting
              </Text>
            </CardItem>
          <CardItem style={{paddingLeft:5,paddingTop:-2,paddingBottom:5,marginRight:-15}}>
            <Text style={{fontSize:themes.fonts.INIT_FONT_SIZE_S,textAlign:'auto',color:themes.colors.INIT_COLOR_Grey,fontFamily:themes.fonts.INIT_FONT_Family}}>
            To introduce the basic concept & Principles of Green Engineering.	To introduce various Green Engineering tools e.g. process intensification, flow reactors, etc.	To share importance of process safety & Green Engineering as a tool to achieve inherent safety.	 To share successful case studies & introduce new innovative solution providers in the domain of Green Engineering.		
              </Text>
          </CardItem>

          <Body/>
      </Card>
      </Content>
     
      </Container>
    );
  }
}


const styles = ({
  container: {
      flex: 1,
      backgroundColor: '#D5D6D6',
    },
  shadow: {
    marginRight:15,
    marginLeft:15,
    padding:15,
    backgroundColor:'#fff',
    padding:20 ,
    paddingBottom:50,
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: 50,
    marginBottom: 10,
    elevation:70,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "grey",
    shadowOpacity: 1.0,
    shadowRadius: 10
  }
});
