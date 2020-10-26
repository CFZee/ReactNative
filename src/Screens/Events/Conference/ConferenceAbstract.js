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
  //     let ConferenceAbstractDetails = data;
  //     console.log(ConferenceAbstractDetails);
  //     this.setState({
  //       dataSource: ConferenceAbstractDetails
  //     });
  //   });

  // }

  AbstractInfoScreen1 = () => {
    this.props.navigation.navigate('ConferenceAbstractDetail', {
        userName: "Dr. Biswajayee Airaraj Patra    ",
        userDesignation:"Senior Product Manager.",
        userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/10/Dr.-Biswajaee-patra..jpg",
        userOrganization:"Thermo Fisher Scientific India Pvt. Ltd., India",
        ConferenceAbstractDetail:"Elemental detection has always been an integral part in analytical sciences. Since the discovery of spectroscopy, various milestones have been achieved by going for more accurate and precise techniques. Gradually, better resolution has become indispensable for every analysis where lower concentration values are measured. There are different terminologies used in different fields of science for these same elements/metals/non-metals. For centuries, they have been scrutinized in variety of names such as metals, elements, major elements, minor elements, major nutrients, trace impurities, toxic elements and so on. It excites your little grey cells more when you discuss the same terminology and get different perspectives from different quarters. For example, you talk of Heavy Metals and experts from different industries spell out different metals/elements. A man of metal industry will think about Fe (Iron), whereas an expert on Ayurveda will conclude on As, Pb, Hg, Cd. Pioneers from Pharma field will have a different set of elements in his mind. They differ from each other by the basic definition in terms of Atomic weight, Specific gravity, potential harm to humans, product deteriorating agent etc. Isn't it intriguing that, the same science has so many facets when looked from variety of eyes or thought processes!!  In one way, we can say that, starting from the ages of Flame Photometry (still it is being used for a few metals) coming to the Multi-collector ICPMS, elemental analysis has come a long way. But advancements make greater impact when the outcome forms an impact in a socio-economic environment besides its academic contributions.",
        abstractName:"Innovative Analytical Technologies for analysis of metals"
    })
}
AbstractInfoScreen2 = () => {
  this.props.navigation.navigate('ConferenceAbstractDetail', {
      userName: "Dr. Pankaj Desai ",
      userDesignation:"R&D Head",
      userProfileImage:"",
      userOrganization:"Colortex Industries Pvt. Ltd., India",
      ConferenceAbstractDetail:"Today, ‘Sustainability’, ‘being Eco-Friendly’, ‘Green Products’ AND ‘Green Chemistry’ are very commonly used words and terminology in industries as well as electronics media. Environmental issues are getting more coverage in media and as a result common citizens are becoming more aware and concerned about environment and their health due to industrial pollution. With such increasing awareness manufacturing industries are facing more and more challenges. To cope of with such challenges one need to adopt concept of Green Chemistry. In India small and medium scale manufacturing industries are practicing Green Chemistry principles to bring sustainability to their business and also wellbeing of environment and human health. This presentation is intended to highlight, some of the successful implementation of Green Chemistry principles in manufacturing of Dyes and Intermediates.  ",
      abstractName:"PRACTICING GREEN CHEMISTRY PRINCIPLES IN MANUFACTURING OF DYES AND INTERMEDIATE"
  })
}
AbstractInfoScreen3 = () => {
  this.props.navigation.navigate('ConferenceAbstractDetail', {
      userName: "Dr. Rajiv Banavali  ",
      userDesignation:" Global Vice President - Research & Technology",
      userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/10/Rajiv_Bhanivali.png",
      userOrganization:"Huntsman Corporation, Singapore ",
      ConferenceAbstractDetail:" Textile industry is considered the 2nd largest polluting industry. This talk will focus on issues and innovative solutions in the use of textile chemicals.",
      abstractName:"Sustainability and Innovation in Textile Dyes & Chemicals"
  })
}
AbstractInfoScreen4 = () => {
  this.props.navigation.navigate('ConferenceAbstractDetail', {
      userName: "Prof. (Dr.) G. S. Shakarling    ",
      userDesignation:"Head, Dept. of Dyestuff Technology & Co-ordinator.",
      userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/10/gsshankarling.png",
      userOrganization:"Perfumery & Flavor Technology, Institute of Chemical Technology (ICT), India",
      ConferenceAbstractDetail:"India started manufacturing Dyes and Dye Intermediates more than fifty years ago. Over six hundred types of dyes and organic pigments are now being manufactured in the country (both by the organized and the unorganized sector). Today, our country is manufacturing world-class Dyes and Dye Intermediates and many small-scale manufacturers are supplying their products to Multinationals around the world. However most of the technology we use is outdated  and doesn’t utilize the latest technology and chemistry. During the last two decades, environmental issues associated with dyestuff production and application have grown significantly and are indisputably among the major concern to the dye industry today.  The objective of our industry should be to  i) Develop new products  & processes for better economy and ecology ii) Stop relying on end of pipeline solution for process improvement, to minimize   waste and improve yield iii) Must work for better conversion, their by aim for zero emission This presentation mainly focuses on the new processes with better efficiency for some of the azo, anthraquinone dyes and intermediates Presentation will also cover novel reactive dyes, fluorescent and functional colours. ",
      abstractName:"Value addition Opportunities for Indian Dyestuff Industries"
  })
}
AbstractInfoScreen5 = () => {
  this.props.navigation.navigate('ConferenceAbstractDetail', {
      userName: "Prasad Pant",
      userDesignation:"Director- South Asia.",
      userProfileImage:"",
      userOrganization:"ZDHC Foundation",
      ConferenceAbstractDetail:"India started manufacturing Dyes and Dye Intermediates more than fifty years ago. Over six hundred types of dyes and organic pigments are now being manufactured in the country (both by the organized and the unorganized sector). Today, our country is manufacturing world-class Dyes and Dye Intermediates and many small-scale manufacturers are supplying their products to Multinationals around the world. However most of the technology we use is outdated  and doesn’t utilize the latest technology and chemistry. During the last two decades, environmental issues associated with dyestuff production and application have grown significantly and are indisputably among the major concern to the dye industry today.  The objective of our industry should be to  i) Develop new products  & processes for better economy and ecology ii) Stop relying on end of pipeline solution for process improvement, to minimize   waste and improve yield iii) Must work for better conversion, their by aim for zero emission This presentation mainly focuses on the new processes with better efficiency for some of the azo, anthraquinone dyes and intermediates Presentation will also cover novel reactive dyes, fluorescent and functional colours. ",
      abstractName:"RESPONSIBLE TEXTILE MANUFACTURING THROUGH SUSTAINABLE CHEMICALS MANAGEMENT"
  })
}
AbstractInfoScreen6 = () => {
  this.props.navigation.navigate('ConferenceAbstractDetail', {
    userName:" Dr. Amol Kulkarni",
    userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/10/Dr_Amol_Kulkarni.png",
    userDesignation:'Dept. of Chem. Engg. & Process Dev.',
    userOrganization:'CSIR-National Chemical Laboratories, India',
      ConferenceAbstractDetail:"Continuous flow synthesis of azo dyes and compounds involving diazonium salts is known for last few years. However, most of these reports are based on very low concentrations and only useful as proof of the concept. This presentation will bring out a few interesting aspects of scale-up of such processes and the need to transform dye manufacturing in flow through process intensification. Process intensification is a design philosophy that can lead to substantial benefits in the areas of energy, capital investment, reduced process wastes and safety through radical changes in the processes. Though there are several ways of achieving it, advent of microreactors and continuous flow synthesis in miniaturized systems has revolutionized the concept of process intensification. Continuous flow synthesis will reduce the foot print of plant, reduce inventory in operation and help develop consistency in production quality. Synthesis of diazonium salts is exothermic and the salts are unstable (depending upon the aniline used) which need to be reacted immediately. For such a complex series-parallel combination of reactions, flow synthesis is an ideal approach. Conventionally available flow reactors in the market may or may not be suitable for such manufacturing as nature of salt and its possible adhesion to any surface can lead to unexpected operational issues. In this presentation a realistic overview of the variety of elements of this technology will be presented which practicing chemical engineers would find useful. While discussing many successful examples at lab scale and pilot scale important issues that one should monitor carefully will also be presented. While the technology is matured in certain application domains, it is necessary to evaluate the existing chemistries for enhancing the process performance in light of new technologies. In the end a few examples from the research at CSIR-NCL (Pune) will be highlighted including the Diazo Forum that has been started with a task to transform dyestuff industry in continuous mode, wherever necessary.",
      abstractName:"Continuous Manufacturing of Azo Dyes and APIs involving Diazonium Salts"
  })
}
AbstractInfoScreen7 = () => {
  this.props.navigation.navigate('ConferenceAbstractDetail', {
    userName:" Mr. John Frazier",
    userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/10/csm_Frazier_John_e3369f7ca2.png",
    userDesignation:'Senior Technical Director',
    userOrganization:'Hohenstein Institute America, USA',
      ConferenceAbstractDetail:"Chemistry is at the heart of many industries including apparel, footwear, and textiles. That has meant much more global regulation, NGO activities, and consumer awareness. Companies that ignore chemistry are doing so at their own peril. Companies embracing and deploying Green Chemistry are reducing and eliminating hazardous chemicals. These companies are also enabling innovation and product performance. Today, more than ever, this resonates with consumers.  ",
      abstractName:"Green Chemistry Drivers - from regulations to innovations"
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
                Innovative Analytical Technologies for analysis of metals
                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
                  Elemental detection has always been an integral part in analytical sciences. Since the discovery of spectroscopy, various milestones have been achieved by...
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
                PRACTICING GREEN CHEMISTRY PRINCIPLES IN MANUFACTURING OF DYES AND INTERMEDIATE
                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>

              Today, ‘Sustainability’, ‘being Eco-Friendly’, ‘Green Products’ AND ‘Green Chemistry’ are very commonly used words and terminology in...
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
                Sustainability and Innovation in Textile Dyes & Chemicals
                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>

            Textile industry is considered the 2nd largest polluting industry. This talk will focus on issues and innovative solutions in the use of textile chemicals.                </Text>
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
                Value addition Opportunities for Indian Dyestuff Industries
                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>

              India started manufacturing Dyes and Dye Intermediates more than fifty years ago. Over six hundred types of dyes and organic pigments are now being manufactured in the country ...    
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
       <TouchableWithoutFeedback onPress={() => this.AbstractInfoScreen5()}>
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
                RESPONSIBLE TEXTILE MANUFACTURING THROUGH SUSTAINABLE CHEMICALS MANAGEMENT
                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>

              Responsible manufacturing is gaining importance in our business practices with every passing day. Traditionally, the emphasis...    
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
       <TouchableWithoutFeedback onPress={() => this.AbstractInfoScreen6()}>
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
              Continuous Manufacturing of Azo Dyes and APIs involving Diazonium Salts                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
              Continuous flow synthesis of azo dyes and compounds involving diazonium salts is known for last few years...    
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
       <TouchableWithoutFeedback onPress={() => this.AbstractInfoScreen7()}>
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
              Green Chemistry Drivers - from regulations to innovations
              </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
              Chemistry is at the heart of many industries including apparel, footwear, and textiles. That has meant much more...    
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
