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
  // super();
  // this.state = { dataSource: [] };
  // }
  // componentDidMount() {
  // abstractInfo().then((data) => {
  // let PharmaAbstractDetails = data;
  // console.log(PharmaAbstractDetails);
  // this.setState({
  // dataSource: PharmaAbstractDetails
  // });
  // });

  // }

  AbstractInfoScreen1 = () => {
  this.props.navigation.navigate('PharmaAbstractDetail', {
  userName: "Dr. Guy Humphrey ",
  userDesignation:"Distinguished Scientist.",
  userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/08/Dr.-Guy-Humphrey.jpg",
  userOrganization:"Merck, Sharp & Dohme (MSD), USA ",
  PharmaAbstractDetail:"This presentation will provide an overview of the ACS GCIPR, tools developed and ongoing initiatives. An MSD perspective on the value of the partnership to drive green and sustainable chemistry development across pharma and other sectors will be provided. ",
  abstractName:"Introduction to the ACS Green Chemistry Institute Pharmaceutical Round Table (ACS GCIPR): MSD Perspective"
  })
}
AbstractInfoScreen2 = () => {
  this.props.navigation.navigate('PharmaAbstractDetail', {
  userName:"Dr. Chuck Orella  ",
  userDesignation:"Director Chemical Engineering R&D",
  userOrganization:'Merck & Co. Inc., USA',
  userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/08/Dr.-Chuck-Orella.jpg",
  PharmaAbstractDetail:"Industrial scale chemistry has brought huge benefits to the world’s population, including products to improve agriculture, communication and technology, medicine and health and transportation.  Unfortunately, these activities have sometimes been accompanied by  safety  failures that  have brought tragedy  to employees, businesses and local communities and environment. While there has been progress in mitigating such failures, the frequency and impact is still unacceptably high for society.  A look at past disasters highlights that failures involve sophisticated technology and complex human behaviors over long operating time durations. The major process hazards and characterization approaches will be discussed. An example will illustrate the use of calorimetry tools and the data that is generated to understand the risks inherent in a chemical process.  Finally, an overview of inherently safer processes and some of the common methodologies for hazard, risk and consequence analysis will be discussed when processes with significant risks are scaled up.",
  abstractName:"Process Safety Journey - Learn from the Past and Improve the Future "
  })
}
AbstractInfoScreen3 = () => {
  this.props.navigation.navigate('PharmaAbstractDetail', {
    userName:"Dr. Ganesh Sambasivam",
    userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/10/Dr.Ganesh-.png",
    userDesignation:'Co-Founder & CSO',
    userOrganization:'Anthem Biosciences Pvt. Ltd., India',
  PharmaAbstractDetail:"Products from chemical industries play a huge role in our everyday lives. But, use of certain chemicals, reagents and solvents do cause severe damage to our environment. With the advent of Green chemistry, several groups have been and are actively pursuing different approaches to reduce chemical wastes and to make chemical processes safer. Many industries have successfully implemented greener approaches in their processes. Also, renewed interest in new catalyst designs that enhances higher productivity and safer alternatives for hazardous reactions has been a huge incentive to adopt this approach on an industrial scale. At Anthem, we are committed to use greener approaches in our chemical processes to bring down the effluent load and to make it safer. This presentation show cases our approaches towards our committed goal. ",
  abstractName:"Process Safety Journey - Learn from the Past and Improve the Future "
  })
}
AbstractInfoScreen4 = () => {
  this.props.navigation.navigate('PharmaAbstractDetail', {
    userName:"Dr. Ganesh Sambasivam",
    userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/10/Dr.Ganesh-.png",
    userDesignation:'Co-Founder & CSO',
    userOrganization:'Anthem Biosciences Pvt. Ltd., India',
  PharmaAbstractDetail:"The world is changing with unprecedent speed and faces tremendous challenges due to climate change, growing population, dwindling resources and unsatisfactory waste management. New solutions are required that address these global challenges - as a result of a holistic approach towards innovation in the chemical industry which places crucial sustainability aspects at the origin of innovation efforts and balances economic, ecologic and societal demands. Moreover, developing and delivering sustainable innovations to industry and society requires new dimensions of innovation approaches, close collaboration and partnering along the value chain and across industry, academia, and start-up landscape creating new innovation ecosystems. As a leading company, Clariant places strong emphasis on environmental protection and safety in all its activities, and anchored sustainability as a guiding principle in its strategy and innovation culture. Clariant’s innovation journey, novel approaches, and tangible examples for innovative solutions in various customer industries will be presented, ranging from catalysis, treatment of industrial off-gas emissions, new processes to sustainably convert bio-renewable feedstock or agricultural & industrial residues into valuable chemicals, and new approaches towards plastics recycling.",
  abstractName:"Going green in chemistry – the Clariant innovation journey "
  })
}
AbstractInfoScreen5 = () => {
  this.props.navigation.navigate('PharmaAbstractDetail', {
    userName:"Mr. Anil Kumar Jain   ",
    userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/10/AnilJain.png",
    userDesignation: ' CEO - API Business',
    userOrganization:'Sun Pharmaceutical Industries Ltd., India',
  PharmaAbstractDetail:"Continuous flow process provides a potential alternative to batch synthesis because of its inherent advantages such as very efficient heat exchange, high batch to batch reproducibility, fast mixing, high throughput, safety, and the ability to do multistep telescoping synthesis.  Due to these advantages, these processes have been referred to as the most promising “Green Technology”. In fact, continuous flow processes are projected to be the “CHEMICAL FACTORIES” of tomorrow. Continuous flow processes also provide an “On-Demand” synthesis with complete control over reproducibility, size, shape and these parameters can be achieved at various scales (lab synthesis to pilot to bulk production) with excellent reproducibility. This opens up the opportunity for synthetic chemists to prepare materials with precise control over critical molecular design parameters. It also enables one to carry out material synthesis at higher temperatures that were outside the domain of an organic synthetic lab. We have been exploring continuous flow processes for the synthesis of conjugated polymers, nanoparticles and nanofibers, catalysis for heterogeneous processes etc. In this presentation, I will review some of the recent advances in these directions and some results from our laboratory.",
  abstractName:"Continuous Flow Process: A New Paradigm in Green Chemistry  "
  })
}
AbstractInfoScreen6 = () => {
  this.props.navigation.navigate('PharmaAbstractDetail', {
    userName:" Dr. Rakeshwar Bandichhor",
    userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/08/Dr.-Rakeshwar-Bandichhor.jpg",
    userDesignation:'Head',
    userOrganization:'Chemistry-API-PR&D, IPDO, Dr. Reddys Laboratories Ltd., India',
  PharmaAbstractDetail:"Syntheses  of complex pharmaceuticals require multitude of efforts  right from R&D to manufacturing. Batch mode operation to manufacture APIs is becoming unenduring due to various reasons e.g. most of the operations are space intensive, poses safety challenge, poor process control, degradation of starting materials and products, batch to batch variability, difficult chemistries cannot be scaled up etc. Transitioning from batch to flow would require a mind-set change. This is going to be a game changer in the area of pharmaceutical production in a sustainable manner.  Flow technology has   potential   to   accommodate   all   kinds   of   transformations   e.g.   organometallics, organocatalysis, solid supported, couplings, oxidation, reductions etc. This technology has elegant features by virtue of high surface area, excellent process control, safety during operation, less space intensive etc. In essence, flow technology intervention helps in improving reaction mass efficiency of any given transformation. An industry perspective in the context of few API synthesis and manufacturing in flow will be presented. ",
  abstractName:"Chemistry Connect between Flow and Green: An Industrial Perspective  "
  })
}
AbstractInfoScreen7 = () => {
  this.props.navigation.navigate('PharmaAbstractDetail', {
    userName:"Mr. Harish Verma    ",
    userDesignation:"Vice President & Global Head",
    userOrganization:'EHS, Cipla Ltd., India',
    userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/08/Harish-Verma.jpg",
  PharmaAbstractDetail:"Over decades, the chemical and pharmaceutical industry has gained enormous experience in the hazards of working with chemicals, many being unexpected. The history of chemical process industry provides a commentary of incidents, small as well as big, some with catastrophic consequences viz. explosions, runaway reactions, fires, toxic emissions, asphyxiations, spills, and so on. Consequences are seen in the form of injuries and deaths of people and in physical, social, and environmental damage around the world. Chemical Research scientists and engineers from API R&D  and Technology Transfer (who are the bridge between Research and commercial manufacturing) would quickly recognize that they need to gear up to the situations and there is a valid need to embrace and incorporate all manner of inputs, sometimes unforeseen, into their work. It is therefore vital that the work needed to ensure that practical chemical reactions are created for scale-up, that the chemistry is understood, that the theory and mechanics needed to engineer scale-up are addressed, and that EHS requirements of process safety are met. These inputs when   collaboratively   and   appropriately   captured   and   transmitted   to manufacturing would deliver enhanced process safety performance during scale-ups.",
  abstractName:"Role of EHS in Scaling-up API Manufacturing from Lab to Plant"
  })
}
AbstractInfoScreen8 = () => {
  this.props.navigation.navigate('PharmaAbstractDetail', {
      userName: "Dr. Rajesh Kumar",
      userDesignation:"Chair Pfizer",
      userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/08/Dr.-Rajesh-Kumar.png",
      userOrganization:"WRD Green Chemistry Team & Associate Research Fellow, Biocatalysis Group, Pfizer Inc., USA ",
      PharmaAbstractDetail:"An overview of the Pfizer Green Chemistry program and collaboration with ACS- GCIPR to develop innovative tools and practices to promote the implementation of Green Chemistry principles will be presented.  Impact of Green Chemistry in delivering greener and cost-effective processes for the manufacturing of Pfizer drugs using ‘Green Technologies and Tools’ will be discussed with a goal to highlight best practices and resources/network available for chemistry and engineering.",
      abstractName:"Green Chemistry Tools and Technologies for Chemical Synthesis "
  })
}

//   renderItem = ({ item }) => {
//   return (
//   <View>
//  <TouchableWithoutFeedback onPress={() => this.AbstractInfoScreen(item)}>
//   <CardItem style={styles.shadow}>
//     <LinearGradient colors={['#88BE49', '#447A47']} style={{ alignSelf:'stretch' }}>
//     <Left style={{ flex: 1, margin: 25 }}>
//     <Icon active name='heart' style={{ color: 'yellow', fontSize: 20 }} onPress={this.onress} />
//     </Left>
//     </LinearGradient>
//     <Body style={{ flex: 1 }}>
//     <View style={{ flexDirection: 'column', marginLeft: 9, marginRight: -60, paddingTop: 15, marginBottom: 15 }}>
//     <View>
//       <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45 }}>
//       {item.event_name[0].event_name}
//       </Text>
//     </View>
//     <View>
//       <Text style={{
//       fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',
//       lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45
//       }}>
//       {item.abstract_description}
//       </Text>
//     </View>
//     <View>
//       <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_S, paddingTop: 5, color: themes.colors.INIT_COLOR_Green, fontFamily: themes.fonts.INIT_FONT_Family }}>
//       {item.event_start}
//       </Text>
//     </View>
//     </View>
//     </Body>
//     <Right style={{ flex: 1, marginLeft: -25 }} >
//     <Button transparent >
//     <Icon name='forward-arrow' style={{ fontSize: themes.fonts.INIT_FONT_SIZE_IconSize_SM, color: themes.colors.INIT_COLOR_Green }} />
//     </Button>
//     </Right>
//   </CardItem>
//   </TouchableWithoutFeedback>
//   </View>
//   );
//   }

//   isCompleted(rowData) {
//   if (this.state.status != 'new') {
//   this.itemsRef.child(rowData.id).update({
//   status: 'completed'
//   });
//   this.setState({
//   isCompleted: true
//   })
//   }
//   }



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
       This presentation will provide an overview of the ACS GCIPR, tools developed and ongoing initiatives. An MSD perspective...
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
      Process Safety Journey - Learn from the Past and Improve the Future      </Text>
    </View>
    <View>
    <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
    Industrial scale chemistry has brought huge benefits to the world’s population, including products to improve agriculture..
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
      Anthem’s Approach Towards Greener Chemistry
      </Text>
    </View>
    <View>
    <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
    Products from chemical industries play a huge role in our everyday lives. But, use of certain chemicals..
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
      Going green in chemistry – the Clariant innovation journey
      </Text>
    </View>
    <View>
    <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
    The world is changing with unprecedent speed and faces tremendous challenges due to...
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
      Continuous Flow Process: A New Paradigm in Green Chemistry
      </Text>
    </View>
    <View>
    <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
    Continuous flow process provides a potential alternative to batch synthesis because of its inherent advantage...
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
      Chemistry Connect between Flow and Green: An Industrial Perspective
      </Text>
    </View>
    <View>
    <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
    Syntheses  of complex pharmaceuticals require multitude of efforts  right from R&D to manufacturing...
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
      Role of EHS in Scaling-up API Manufacturing from Lab to Plant
      </Text>
    </View>
    <View>
    <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
    Over decades, the chemical and pharmaceutical industry has gained enormous experience in...
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
   <TouchableWithoutFeedback onPress={() => this.AbstractInfoScreen8()}>
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
              An overview of the Pfizer Green Chemistry program and collaboration with ACS- GCIPR to develop innovative tools and...
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
