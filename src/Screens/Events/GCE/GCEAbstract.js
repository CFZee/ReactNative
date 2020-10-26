import React, { Component } from 'react';
import { CardItem, Container, Header, Left, Body, Right, Button, Content, Text } from 'native-base';
import { View, FlatList,TouchableWithoutFeedback } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createAppContainer, StackActions ,createBottomTabNavigator} from 'react-navigation';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../../../src/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);
import { Dimensions, PixelRatio } from 'react-native';
import { abstractInfo } from '../../../Services/API';
import themes from '../../../components/themes/Variables';
import Search from "../../Search";
import Profile from '../../Profile';
import Favorites from '../../Favorites';
import Speakers from '../../Speakers';
import FloorPlan4 from '../../FloorPlan/FloorPlan4.js';


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


class Abstract extends Component {

  // constructor(props) {
  //   super();
  //   this.state = { dataSource: [] };
  // }
  // componentDidMount() {
  //   abstractInfo().then((data) => {
  //     let GCEAbstractDetails = data;
  //     console.log(GCEAbstractDetails);
  //     this.setState({
  //       dataSource: GCEAbstractDetails
  //     });
  //   });

  // }

  AbstractInfoScreen1 = () => {
    this.props.navigation.navigate('GCEAbstractDetail', {
        userName: "Dr Guy R. Humphrey",
        userDesignation:"Distinguished Scientist.",
        userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/08/Dr.-Guy-Humphrey.jpg",
        userOrganization:"MSD, Rahway, USA ",
        GCEAbstractDetail:"Almost all the organization dedicated to excellence strives for continuous improvement, and nowhere are the stakes higher than when it comes to safety. The chemical industry has developed Process Safety Management (PSM) and invest considerable resources to prevent incidents. The challenge has been to design and implement universally effective process safety management systems. As long as incidents continue to occur, it is clear that industry has not fully achieved its safety goals. /n Within Process safety; “Basis of safety” is an approach that encourages the designer to attempt to eliminate or minimize hazards identified at each stage in the process life cycle, and at every level of process and plant design, rather than accepting the existence of the hazards and designing safety systems to control those hazards. It may not always be feasible to eliminate or reduce hazards, but the “Basis of safety” philosophy requires that this be attempted before moving on to specification of risk management equipment and procedures. Note that describing a process as “inherently safer” can only be done in the context of specific hazard or subset of hazards and that management of all hazards must be	considered in order to design a safer process. Few examples are discussed where this philosophy is employed.",
        abstractName:"As a founding member of the ACS Green Chemistry Institute Pharmaceutical Round Table in 2005, MSD has been actively involved in all aspects of the program over the last 14 years The ACS GCIPR has 4 main objectives Inform and influence research agenda Define and deliver tools for innovation Promote education and training Enable global collaboration This presentation will provide an overview of the ACS GCIPR, tools developed and ongoing initiatives. An MSD perspective on the value of the partnership to drive green and sustainable chemistry development across pharma and other sectors will be provided. "
    })
}
AbstractInfoScreen2 = () => {
  this.props.navigation.navigate('GCEAbstractDetail', {
    userName: "Dr. David Constable  ",
    userDesignation:"Science Director",
    userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/10/David-Constable.jpg",
    userOrganization:"ACS-Green Chemistry Institute, USA ",
      GCEAbstractDetail:"One of the major goals of green and sustainable chemistry is to promote the design and development of more efficient chemistries and chemical synthetic processes.  Efficient means that processes use less mass and energy per kg of the desired substance produced, create less waste, use inherently less hazardous reaction conditions and chemicals, and in general move the chemical and allied industries towards more sustainable business practices. In order to design more sustainable chemistries and synthetic routes, systematic, multivariate, and regular assessments of green chemistry performance should be established throughout the development cycle of a new chemical or product.  To do this, key green chemistry measures must be agreed and tools to facilitate chemical, chemistry and process assessment must be developed.  A set of agreed targets with benchmarks for each development phase, accompanied by guidance and interpretation should be communicated directly to the development scientists responsible for optimizing chemistries and processes.  Life cycle environmental impacts should also be included as part of a continuing assessment of synthetic routes under development. This presentation intends to outline an approach to systematically measuring, comparing and evaluating synthetic chemistry routes using key ‘green chemistry’ metrics.  It will also demonstrate the use of a process mass intensity calculator developed by the ACS GCI Pharmaceutical Roundtable. Tools Solvents and Reagents – Making more Sustainable Choices Solvents are widely used in the fine chemicals and pharmaceutical industries where they serve to facilitate reaction-based processes by, for example, dissolving reactants and/or bringing them together in concentrations that ensure optimal reaction conditions.  However, the excessive consumption of solvents leads to the treatment, storage and disposal of millions of tons of solvents every year.  While there are many tools available to assess environmental, safety and health impacts of chemicals, solvents, reagents,and other process chemicals, there is not widespread knowledge amongst chemists about these tools,how to use them, or how to integrate them into their research practices.  The ACS GCI Pharmaceutical Roundtable has over a 10-year history of developing bench-level tools for chemists and engineers that help them make better decisions about which solvents and reagents are the best for their processes. This presentation will walk participants through solvent and reagent selection and how to use guides to help optimize chemical processes and make them more sustainable.",
      abstractName:"IGCW 2019 Tools, Techniques, and Metrics. Metrics Measures of Green Chemistry Performance "
  })
}
AbstractInfoScreen3 = () => {
  this.props.navigation.navigate('GCEAbstractDetail', {
      userName: "Dr. Vidyanathan ",
      userDesignation:"",
      userProfileImage:"",
      userOrganization:"ACS-Green Chemistry Institute, USA ",
      GCEAbstractDetail:"The motto “green by design” encapsulates the spirit of green chemistry and its 12 guiding principles. This presentation will focus on the application of green chemistry principles to drive process development activities. Case studies showcasing innovative synthetic and process development strategies will be discussed. ",
      abstractName:" Applications of Green Chemistry Principles in Chemical Development"
  })
}
AbstractInfoScreen4 = () => {
  this.props.navigation.navigate('GCEAbstractDetail', {
    userName:"Dr. Rajesh Kumar",
    userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/09/rajesh-kumar-pifizer.jpg",
    userDesignation:'Chair Pfizer',
    userOrganization:'WRD Green Chemistry Team & Associate Research Fellow, Biocatalysis Group, Pfizer Inc., USA',
      GCEAbstractDetail:"An overview of the Pfizer Green Chemistry program and collaboration with ACS- GCIPR to develop innovative tools and practices to promote the implementation of Green Chemistry principles will be presented.  Impact of Green Chemistry in delivering greener and cost-effective processes for the manufacturing of Pfizer drugs using ‘Green Technologies and Tools’ will be discussed with a goal to highlight best practices and resources/network available for chemistry and engineering. ",
      abstractName:"Green Chemistry Tools and Technologies for Chemical Synthesis"
  })
}

  // renderItem = ({ item }) => {
  //   return (
  //     <View>
  //      <TouchableWithoutFeedback onPress={() => this.AbstractInfoScreen(item)}>
  //       <CardItem style={styles.shadow}>
  //         <LinearGradient colors={['#88BE49', '#447A47']} style={{ alignSelf:'stretch' }}>
  //           <Left style={{ flex: 1, margin: 25 }}>
  //             <Icon active name='heart' style={{ color: 'yellow', fontSize: 20 }} onPress={this.onress} />
  //           </Left>
  //         </LinearGradient>
  //         <Body style={{ flex: 1 }}>
  //           <View style={{ flexDirection: 'column', marginLeft: 9, marginRight: -60, paddingTop: 15, marginBottom: 15 }}>
  //             <View>
  //               <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45 }}>
  //                 {item.event_name[0].event_name}
  //               </Text>
  //             </View>
  //             <View>
  //               <Text style={{
  //                 fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',
  //                 lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45
  //               }}>
  //                 {item.abstract_description}
  //               </Text>
  //             </View>
  //             <View>
  //               <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_S, paddingTop: 5, color: themes.colors.INIT_COLOR_Green, fontFamily: themes.fonts.INIT_FONT_Family }}>
  //                 {item.event_start}
  //               </Text>
  //             </View>
  //           </View>
  //         </Body>
  //         <Right style={{ flex: 1, marginLeft: -25 }} >
  //           <Button transparent >
  //             <Icon name='forward-arrow' style={{ fontSize: themes.fonts.INIT_FONT_SIZE_IconSize_SM, color: themes.colors.INIT_COLOR_Green }} />
  //           </Button>
  //         </Right>
  //       </CardItem>
  //       </TouchableWithoutFeedback>
  //     </View>
  //   );
  // }

  // isCompleted(rowData) {
  //   if (this.state.status != 'new') {
  //     this.itemsRef.child(rowData.id).update({
  //       status: 'completed'
  //     });
  //     this.setState({
  //       isCompleted: true
  //     })
  //   }
  // }



  render() {
    return (
      <Container style={{
        flex: 1,
        backgroundColor: '#EEEEEE'
      }}>
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#88BE49', '#447A47']}>
          <Header span transparent androidStatusBarColor='transparent'
            style={{ height: 100 }}>
            <Left style={{ flex: 1, alignSelf: 'center' }}>
              <Button transparent style={{ width: widthPercentageToDP('20%') }} onPress={() => this.props.navigation.dispatch(StackActions.popToTop())}>
                <Icon name='back-arrow' style={{ color: themes.colors.INIT_COLOR_White, fontSize: themes.fonts.INIT_FONT_SIZE_IconSize_SM }} />
              </Button>
            </Left>
            <Body style={{ flex: 1, alignSelf: 'center', paddingTop: 20 }}>
              <Text style={{fontFamily: themes.fonts.INIT_FONT_Family,color: themes.colors.INIT_COLOR_White, fontSize: themes.fonts.INIT_FONT_SIZE_XL, paddingLeft: 20 }}>
                Abstract
                 </Text>
            </Body>
            <Right style={{ flex: 1, alignSelf: 'center' }}>
             
            </Right>
          </Header>
        </LinearGradient>
        <Content>
        <View>
       <TouchableWithoutFeedback onPress={() => this.AbstractInfoScreen1()}>
        <CardItem style={styles.shadow}>
          <LinearGradient colors={['#88BE49', '#447A47']} style={{ alignSelf:'stretch' }}>
            <Left style={{ flex: 1, margin: 25 }}>
              <Icon active name='heart' style={{ color: 'yellow', fontSize: 20 }} onPress={this.onress} />
            </Left>
          </LinearGradient>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: 9, marginRight: -60, paddingTop: 15, marginBottom: 15 }}>
              <View>
              <Text style={{ fontWeight:'bold',fontSize: themes.fonts.INIT_FONT_SIZE_XL, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-50 }}>
              Introduction to the ACS Green Chemistry Institute Pharmaceutical Round Table (ACS GCIPR): MSD Perspective
                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
              As a founding member of the ACS Green Chemistry Institute Pharmaceutical Round Table in 2005..                </Text>
              </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} >
            <Button transparent >
              <Icon name='forward-arrow' style={{ fontSize: themes.fonts.INIT_FONT_SIZE_IconSize_SM, color: themes.colors.INIT_COLOR_Green }} />
            </Button>
          </Right>
        </CardItem>
        </TouchableWithoutFeedback>
      </View>
      <View>
       <TouchableWithoutFeedback onPress={() => this.AbstractInfoScreen2()}>
        <CardItem style={styles.shadow}>
          <LinearGradient colors={['#88BE49', '#447A47']} style={{ alignSelf:'stretch' }}>
            <Left style={{ flex: 1, margin: 25 }}>
              <Icon active name='heart' style={{ color: 'yellow', fontSize: 20 }} onPress={this.onress} />
            </Left>
          </LinearGradient>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: 9, marginRight: -60, paddingTop: 15, marginBottom: 15 }}>
              <View>
              <Text style={{ fontWeight:'bold',fontSize: themes.fonts.INIT_FONT_SIZE_XL, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-50 }}>
              IGCW 2019 Tools, Techniques, and Metrics. Metrics Measures of Green Chemistry Performance                 </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
              One of the major goals of green and sustainable chemistry is to promote...
              </Text>
              </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} >
            <Button transparent >
              <Icon name='forward-arrow' style={{ fontSize: themes.fonts.INIT_FONT_SIZE_IconSize_SM, color: themes.colors.INIT_COLOR_Green }} />
            </Button>
          </Right>
        </CardItem>
        </TouchableWithoutFeedback>
      </View>
      <View>
       <TouchableWithoutFeedback onPress={() => this.AbstractInfoScreen3()}>
        <CardItem style={styles.shadow}>
          <LinearGradient colors={['#88BE49', '#447A47']} style={{ alignSelf:'stretch' }}>
            <Left style={{ flex: 1, margin: 25 }}>
              <Icon active name='heart' style={{ color: 'yellow', fontSize: 20 }} onPress={this.onress} />
            </Left>
          </LinearGradient>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: 9, marginRight: -60, paddingTop: 15, marginBottom: 15 }}>
              <View>
              <Text style={{ fontWeight:'bold',fontSize: themes.fonts.INIT_FONT_SIZE_XL, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-50 }}>
              Applications of Green Chemistry Principles in Chemical Development                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
              The motto “green by design” encapsulates the spirit of green chemistry and its 12...        
              </Text>
              </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} >
            <Button transparent >
              <Icon name='forward-arrow' style={{ fontSize: themes.fonts.INIT_FONT_SIZE_IconSize_SM, color: themes.colors.INIT_COLOR_Green }} />
            </Button>
          </Right>
        </CardItem>
        </TouchableWithoutFeedback>
      </View>
      <View>
       <TouchableWithoutFeedback onPress={() => this.AbstractInfoScreen4()}>
        <CardItem style={styles.shadow2}>
          <LinearGradient colors={['#88BE49', '#447A47']} style={{ alignSelf:'stretch' }}>
            <Left style={{ flex: 1, margin: 25 }}>
              <Icon active name='heart' style={{ color: 'yellow', fontSize: 20 }} onPress={this.onress} />
            </Left>
          </LinearGradient>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: 9, marginRight: -60, paddingTop: 15, marginBottom: 15 }}>
              <View>
              <Text style={{ fontWeight:'bold',fontSize: themes.fonts.INIT_FONT_SIZE_XL, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-50 }}>
              Green Chemistry Tools and Technologies for Chemical Synthesis
              </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
              An overview of the Pfizer Green Chemistry program and collaboration with ACS- GCIPR to develop innovative ...        
              </Text>
              </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} >
            <Button transparent >
              <Icon name='forward-arrow' style={{ fontSize: themes.fonts.INIT_FONT_SIZE_IconSize_SM, color: themes.colors.INIT_COLOR_Green }} />
            </Button>
          </Right>
        </CardItem>
        </TouchableWithoutFeedback>
      </View>
      
          {/* <FlatList style={{ marginTop: 15 }}
            data={this.state.dataSource}
            keyExtractor={item => item.name}
            renderItem={this.renderItem}
          /> */}
        </Content>
      </Container>
    );
  }
}

const TabNavigator = createBottomTabNavigator(
  {

    Home:{
      screen:Abstract,
      navigationOptions:{
        tabBarLabel:'Home',
        tabBarIcon:({tintColor})=>(
            tintColor=themes.colors.INIT_COLOR_Green,
            <Icon name="store" color={tintColor} style={{paddingTop:8}}  size={22}/>
        )
      }
    },
    Map:{
        screen:FloorPlan4,
        navigationOptions:{
            tabBarLabel:'FloorPlan',
          tabBarIcon:({tintColor})=>(
            tintColor=themes.colors.INIT_COLOR_Green,
              <Icon name="map" color={tintColor} style={{paddingTop:8}} size={22}/>
          )
        }
      },
    Profile: {
      screen:Profile,
      navigationOptions:{
        tabBarLabel:'Profile',
        tabBarIcon:({tintColor})=>(
          tintColor=themes.colors.INIT_COLOR_Green,
          <Icon name="iconfinder_39_2529953" color={tintColor} style={{paddingTop:8}} size={22}/>
        )
      }
    },
    Text:{
        screen:Speakers,
        navigationOptions:{
            tabBarLabel:'Speakers',
          tabBarIcon:({tintColor})=>(
            tintColor=themes.colors.INIT_COLOR_Green,
              <Icon name="speech-bubble" color={tintColor} style={{paddingTop:8}} size={22}/>
          )
        }
      },
    Search:{
        screen:Search,
        navigationOptions:{
        tabBarLabel:'Search',
          tabBarIcon:({})=>(
            tintColor=themes.colors.INIT_COLOR_Green,
              <Icon name="search" color={tintColor} style={{opacity:0.8}} style={{paddingTop:8}} size={22}/>
          )
        }
      },
  },
  {
    initialRouteName: "Home"
  },

);

export default createAppContainer(TabNavigator);

const styles = {
  shadow: {
    marginRight: 15,
    marginLeft: 15,
    marginTop: 15,
    paddingLeft: -20,
    paddingTop: -20,
    paddingBottom: -20,
    marginBottom: 15,
    elevation: 10,
    shadowOffset: { width: 0, height: 8 },
    shadowColor: "black",
    shadowOpacity: 100,
    shadowRadius: 10
  },
  shadow: {
    marginRight:15,
    marginLeft:15,
    marginTop:20,
    paddingLeft:-20,
    paddingTop:-20,
    paddingBottom:-20,
    elevation:10,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "black",
    shadowOpacity: 10,
    shadowRadius: 5
},
shadow2: {
  marginRight:15,
  marginLeft:15,
  marginTop:20,
  paddingLeft:-20,
  paddingTop:-20,
  paddingBottom:-20,
  marginBottom:20,
  elevation:10,
  shadowOffset: { width: 1, height: 1 },
  shadowColor: "black",
  shadowOpacity: 10,
  shadowRadius: 5
},

};
