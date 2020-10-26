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
import FloorPlan4 from '../../FloorPlan/FloorPlan4';


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
  //     let PollutionAbstractDetails = data;
  //     console.log(PollutionAbstractDetails);
  //     this.setState({
  //       dataSource: PollutionAbstractDetails
  //     });
  //   });

  // }

  AbstractInfoScreen1 = () => {
    this.props.navigation.navigate('PollutionAbstractDetail', {
        userName: "Dr. David Constable ",
        userDesignation:"Science Director.",
        userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/10/David-Constable.png",
        userOrganization:"ACS-Green Chemistry Institute, USA ",
        PollutionAbstractDetail:"Over the past 25 years there has been a steady push towards implementing sustainable and green chemistry and engineering.  What started out as a small, poorly funded movement to change how chemistry was practiced, and which was promoted by a relatively few people, is now a very crowded, scientifically diverse, and robust community of chemistry and engineering researchers, product developers, and lines of business.  There is a rich history, especially at the State level, of a variety of collaborative initiatives aimed at Industry that are promoting and facilitating pollution prevention through true source reduction at the chemical and process level.  This talk will discuss initiatives in the United States that have promoted sustainable and green chemistry and engineering in government at the State and Federal Level.  ",
        abstractName:"Yes, there is a role Central, State, and Local pollution control organizations can play in promoting green and sustainable chemistry and engineering!"
    })
}
AbstractInfoScreen2 = () => {
  this.props.navigation.navigate('PollutionAbstractDetail', {
      userName: "Dr Rene Van Berkel",
      userDesignation:"UNIDO Representative",
      userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/10/Rene-Van-Berkel.jpg",
      userOrganization:"UNIDO Regional Office in India, New Delhi",
      PollutionAbstractDetail:"In 2015, the international community unanimously adopted the 2030 Agenda for Sustainable Development with its 17 Sustainable Development Goals (SDGs). Chemistry and chemical products are delivering tremendous contributions towards the SDGs in areas as diverse as health, food and nutrition, water and sanitation, mobility, infrastructure and cities, and energy. However, the release of chemicals into the environment during their production, use and at end of life also poses risks to humans and environment. Whilst praiseworthy initiatives have been taken to improve the contribution of chemicals to sustainable development, the 2019 global chemicals outlook concluded that the interim 2020 goal for environmentally sound management of chemicals is no longer within reach, calling for urgent policy and industry action. The United Nations Industrial Development Organization (UNIDO) supports its member states to achieve inclusive and sustainable industrial development, which is part of SDG9 that brings industry together with infrastructure and innovation. Innovations in chemical products, processes, technologies and their management and business models are necessary to reduce chemical risks to humans and environment, conserve energy, materials and water, and reduce generation of waste, effluents and emissions. UNIDO’s work in India and elsewhere shows that this is already doable and can deliver good value to business, through such approaches as industrial resource efficiency, industrial symbiosis and cleantech innovation and entrepreneurship. ",
      abstractName:"Making Chemistry work for Inclusive and Sustainable Industrial Development "
  })
}
AbstractInfoScreen3 = () => {
  this.props.navigation.navigate('PollutionAbstractDetail', {
      userName: "Dr. Sukumar Devotta  ",
      userDesignation:"Former Director",
      userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/10/Sukumar-Devotta.png",
      userOrganization:"CSIR-National Environmental Engineering Research Institute (NEERI), India",
      PollutionAbstractDetail:" Persistent Organic Chemicals (POPs) are charaterised as chemicals which are environmentally persistent, semi-volatile, lipophilic i.e. soluble in fatty tissues and toxic.  Stockholm Convention (SC) on POPs is an international environmental treaty, signed in 2001 and effective from May 2004, that aims to eliminate or restrict the production and use of POPs. There are 12 well known POPs and are about 20 additionally emerging ones under consideration.  India is a party to SC since 2006. India has developed its National Implementation Plan (NIP) in 2011, which gives information on the inventories of twelve legacy POPs.  The Ministry of Environment, Forest and Climate Change (MoEFCC), notified on March 5, 2018 a new Regulation of Persistent Organic Pollutants (POP) Rules, 2018 that ban the manufacture, trade, use, import and export of the seven toxic chemicals listed under the Stockholm Convention. CSIR-NEERI is endorsed as Stockholm Convention Regional Centre (SCRC) on POPs for Asia Region and is serving ten countries of Asia to assist them in their capacity building and transfer of technologies related to POPs and new POPs.  SCRC provides technical assistance for building capacities of the parties of the Asia region in relation to monitoring and assessment of POPs in the environment, transfer of technologies, raise awareness and promote identification and environmentally sound management (ESM) of POPs and POPs contaminated sites in the region. This lecture will introduce legacy POPs and emerging POPs, Stockholm Convention and its provisions and obligations for its parties, Indian action plan for SC and current Indian and international scenarios.",
      abstractName:"Persistent Organic Chemicals – Current Status and Future Challenges"
  })
}
AbstractInfoScreen4 = () => {
  this.props.navigation.navigate('PollutionAbstractDetail', {
      userName: "Prof. Paul Anastas   ",
      userDesignation:"Director",
      userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/08/Paul-Anastas.jpg",
      userOrganization:"Centre for Green Chemistry & Green Engineering at Yale, USA ",
      PollutionAbstractDetail:"The field of green chemistry has been a source of great improvements to products and profits while reducing or eliminating pollution. With all of the demonstrated success across the wide range of business sectors that use materials and chemicals, this is simply the beginning. The true and genuine innovations and positive impacts of green chemistry will be emerging in the future will be because of new ways of thinking, new ways of inventing and new ways of designing. Instead of thinking that strong covalent bonds that last forever are the goal, there will be a shift to non-covalent weak forces that impart properties only for as long as it is needed. Instead of thinking the purity is the only way to achieve control and performance, complex mixtures will be mastered. Instead of thinking that the dominant feedstock needs to be finite fossil based, more elegant bio-feedstocks will be employed. Rather than caustic reactive reagents, transformations will be carried out by photons and electrons. The future is bright and green chemistry is just beginning.",
      abstractName:"Green Chemistry and The Future"
  })
}
AbstractInfoScreen5 = () => {
  this.props.navigation.navigate('PollutionAbstractDetail', {
    userName:"Mr. Philip Krook    ",
    userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/10/Mr.-krook.jpg",
    userDesignation:'Communications Officer',
    userOrganization:'Chemsec, Sweden',
      PollutionAbstractDetail:"Today man-made hazardous chemicals are normal ingredients found in many of our everyday products. The use of these chemicals represents one of the biggest threats to human health and the environment. This is why environmental non-profit organisation ChemSec has advocated for substitution of hazardous chemicals to safer alternatives the last seventeen years. Apart from working with European chemicals policy, ChemSec also develops online tools to facilitate the transition to green chemistry and safer alternatives. The latest of these tools is called Marketplace. Marketplace gathers safer alternatives available on the market in one single place and connects supply with demand without any fuzz. The aim of Marketplace is to show the world that safer alternatives are available for products and processes no matter industry.",
      abstractName:"Finding safer alternatives to hazardous chemicals on ChemSec’s Marketplace"
  })
}
AbstractInfoScreen6 = () => {
  this.props.navigation.navigate('PollutionAbstractDetail', {
    userName:"Dr. Chetan Chavan    ",
    userDesignation:'Sr. Product Manager -ICSP Products',
    userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/10/Chetan-D.-Chavan.png",
    userOrganization:'Thermo Fisher Scientific India Pvt. Ltd., India',
      PollutionAbstractDetail:"Accurate, precise , sensitive and very reproducible determination of Anions and Organic acids, Cations and Amines by using  Reagent Free Ion Chromatography. RFIC systems have redefined ion chromatography by making it simpler, more powerful, and more reliable. Just add water, and the RFIC system delivers superior results while saving your time and labor. The entire process only requires deionized water for online electrolytic eluent generation ( EG), eliminating the need to handle any acids or bases and ropes to green chemistry as well. In addition to saving time, labor, and operating costs, RFIC-EG systems eliminate errors associated with manual eluent preparation. This effectively improves method reproducibility, day to day, week to week, lab to lab which allow environmental scientist to work unattended with reliable technique.",
      abstractName:""
  })
}
AbstractInfoScreen7 = () => {
  this.props.navigation.navigate('PollutionAbstractDetail', {
    userName:"Mrs. Ashwini Gunnal",
    userProfileImage:"",
    userDesignation:'R&D Incharge',
    userOrganization:' Newreka Green-Synth Technologies Pvt. Ltd., India',
      PollutionAbstractDetail:"Chemistry Intensive Chemical Industries like pharmaceuticals, dyes, pigments, agrochemcials, flavors & fragrance, specialty & fine chemicals, etc convert basic building blocks (like benzene, naphtalene, solvents, etc which are provided by the petro-chemicals industry) in to products which ultimately are used in manufacture of various products to address human needs. Over the past three decades, increase in population has led to increase in demand for all products & this in turn has led to expansion in manufacturing capacity of chemistry intensive industries globally. This has led to proportional increase in the waste generated from these industries.These industries have multi-step processes (involving chemistries like sulphonaiton, nitration, reduction, diazotization, hydrolysis, condensation, acylation, etc) and each step generates a different kind of effluent. The presentation summarizes the present approach & common practice of “End-of-the-pipe-treatment” in the industry to treat effluent streams generated and the impact of that on economics & environment. In recent times, with environmental discharge norms getting more & more stringent leading to increase in treatment costs, increase in pressure from various environmental regulatory bodies on the indsutry to meet these norms, decreasing in profitability (due to reducing products prices & increasing raw material prices & increasing overheads), it has become very relevant for the industry to think differently and look for solutions that together addresses both environmental and economical concerns of the industry. The presentation emphasizes the need for “new tools” in the Green Chemistry tool box (new green chemistry based platform technlogies & solutions) which would offer both economical & environmental competitiveness The concept of Recycle@SourceTM Solution is one such solution. Its a profit-centric approach to deal with environmental challenges associated with aqueous effluent streams. The solution enables industry to recycle their aqueous effluent streams back in the same process step as a reaction or extraction medium. Newreka has being investing its reosurces since last 5 years to develop Recycle@SourceTM Solution for some large volume dye intermediates & pharmaceutical intemediates, where E-Factor (kgs waste generated per kg of product) is very high. Two successful case studies of Nevirapine intermediate & H-Acid are shared in the presentation.",
      abstractName:"Recycle @ SourceTM Solution: An effective alternative to reduce end of pipe treatment"
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
                Yes, there is a role Central, State, and Local pollution control organizations can play in promoting green and sustainable chemistry and engineering!
                </Text>
              </View>
              <View>
                <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
            Over the past 25 years there has been a steady push towards implementing sustainable and green chemistry and engineering.  What started out as a small,...  
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
                Making Chemistry work for Inclusive and Sustainable Industrial Development
                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
              In 2015, the international community unanimously adopted the 2030 Agenda for Sustainable Development with its 17 Sustainable...
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
                Persistent Organic Chemicals – Current Status and Future Challenges                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
Persistent Organic Chemicals (POPs) are charaterised as chemicals which are environmentally persistent, semi-volatile, lipophilic i.e...          
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
                Green Chemistry and The Future
                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
The field of green chemistry has been a source of great improvements to products and profits while reducing or eliminating pollution...    
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
              Finding safer alternatives to hazardous chemicals on ChemSec’s Marketplace                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
              Today man-made hazardous chemicals are normal ingredients found in many of our everyday products...    
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
              </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
              Accurate, precise , sensitive and very reproducible determination of Anions and Organic acids, Cations and...    
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
              Recycle @ SourceTM Solution: An effective alternative to reduce end of pipe treatment
              </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
              Chemistry Intensive Chemical Industries like pharmaceuticals, dyes, pigments, agrochemcials, flavors & fragrance...    
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
    shadowOpacity: 10,
    shadowRadius: 10
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
  shadowRadius: 10
},

};
