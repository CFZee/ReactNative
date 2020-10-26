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
import Speakers from '../../Speakers';
import FloorPlan3 from '../../FloorPlan/FloorPlan3.js';


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

  constructor(props) {
    super();
    this.state = { dataSource: [] };
  }
  componentDidMount() {
    abstractInfo().then((data) => {
      let AgroChemicalsAbstractDetails = data;
      console.log(AgroChemicalsAbstractDetails);
      this.setState({
        dataSource: AgroChemicalsAbstractDetails
      });
    });

  }

  AbstractInfoScreen1 = () => {
    this.props.navigation.navigate('AgroChemicalsAbstractDetail', {
        userName: "Dr. Johannes Benkhoff ",
        userDesignation:"Sr. Vice President",
        userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/10/Dr.-Johannes-Benkhoff.png",
        userOrganization:"Group Chemical Research, Clariant Produkte (Deutschland) GmbH, Germany ",
        AgroChemicalsAbstractDetail:"The world is changing with unprecedent speed and faces tremendous challenges due to climate change, growing population, dwindling resources and unsatisfactory waste management. New solutions are required that address these global challenges - as a result of a holistic approach towards innovation in the chemical industry which places crucial sustainability aspects at the origin of innovation efforts and balances economic, ecologic and societal demands. Moreover, developing and delivering sustainable innovations to industry and society requires new dimensions of innovation approaches, close collaboration and partnering along the value chain and across industry, academia, and start-up landscape creating new innovation ecosystems. As a leading company, Clariant places strong emphasis on environmental protection and safety in all its activities, and anchored sustainability as a guiding principle in its strategy and innovation culture. Clariant’s innovation journey, novel approaches, and tangible examples for innovative solutions in various customer industries will be presented, ranging from catalysis, treatment of industrial off-gas emissions, new processes to sustainably convert bio-renewable feedstock or agricultural & industrial residues into valuable chemicals, and new approaches towards plastics recycling.",
        abstractName:"Going green in chemistry – the Clariant innovation journey"
    })
}
AbstractInfoScreen2 = () => {
  this.props.navigation.navigate('AgroChemicalsAbstractDetail', {
      userName: "Dr. Bhanu Manjunath",
      userDesignation:"Director - Research & Technology Centre",
      userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/08/BHANU-MANJUNATH-NARAYAN.png",
      userOrganization:"Syngenta Biosciences Pvt. Ltd., India",
      AgroChemicalsAbstractDetail:"Agrochemical Innovation and  discovery Research is a starting point for a chemical to be used as a pesticide. Proper design and product profile is essential for long term sustainable use of these pesticides in Agriculture, with no adverse impact on humans and environment. The talk will highlight the importance of implementing the 5S and LEAN principles in our Chemical R & D centre which has helped drive long term sustainability initiatives leading to high productivity with major impact on driving and delivering overall sustainability Goals",
      abstractName:"Sustainability trends in Agrochemical Chemical Research and Development   "
  })
}
AbstractInfoScreen3 = () => {
  this.props.navigation.navigate('AgroChemicalsAbstractDetail', {
      userName: "Dr. Mritunjan Chaubey ",
      userDesignation:"Global Vice President - Environment & Sustainability.",
      userProfileImage:"",
      userOrganization:"UPL Ltd., India",
      AgroChemicalsAbstractDetail:"Estimated size of the global agrochemicals market is USD 250 billion. To make agrochemical indus-tries sustainable, environmental sustainability will be  playing very important role in coming days. Par-is agreement on Climate Change clearly expect from agrochemical industries to play an important role in reducing environmental footprint to create sustainable environment on the Earth. For the agro-chemical industries, sustainability is the best opportunity to drive smarter innovation and profitable growth. Sustainability ensure a fair society, living within environmental limits and creating a sustaina-ble profitable business. In the 6th Industrial Green Chemistry World (IGCW) Conventions & Ecosystem at IIT Bombay, we will discuss the case study to ensure environmental sustainability in agrochemical industries. During this session we will discuss some of case study in agrochemical industry related to environmental policy management system, operational eco-efficiency, product stewardship, wastewater management sys-tems & environmental load reduction at source.",
      abstractName:"Case Study on Ensuring Environmental Sustainability in Agrochemical Industries       "
  })
}
AbstractInfoScreen4 = () => {
  this.props.navigation.navigate('AgroChemicalsAbstractDetail', {
      userName: "Mr. Mahesh Chandak ",
      userDesignation:"Head of HSE – South Asia & HSE Business Partner for Crop Science Division-APAC",
      userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/09/Mr-.-mahesh-Chandak.jpg",
      userOrganization:"Bayer Cropscience, India ",
      AgroChemicalsAbstractDetail:"The presentation will focus on Indian environmental regulations. It will explain legislation relating to general environmental requirements and those applicable to various environmental media including air emissions, ambient air and noise; water use and wastewater generation, hazardous chemicals use and storage and classified waste categories. It will explain the evolution of legislation from focussing on pollution control in the past to presently facilitating resource conservation. It highlights the evolving risk based approach taken by regulators. It will discuss overall legal requirements, challenges in implementation and also opportunities for ensuring compliance and improving environmental sustainability.",
      abstractName:"India environmental regulations – From compliance to excellence"
  })
}
AbstractInfoScreen5 = () => {
  this.props.navigation.navigate('AgroChemicalsAbstractDetail', {
      userName: "Dr. Sudhir Nambiar",
      userDesignation:"President - Research & Technology",
      userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/08/Dr.Sudhir-Nambiar.jpg",
      userOrganization:"Hikal Ltd., India",
      AgroChemicalsAbstractDetail:"Crop Chemistry has been often characterized by large volume business products often built around the use of hazardous reagents, toxic effluent, low PMI etc. At Hikal R&T we believe that we need to achieve the best PMI for developed processes and through self- regulation rather than only to meet compliance targets. We have through successive generations of improved processes sought to improve waste volume and characteristics. Overall this has been achieved through proper route selection, telescoping of steps, recovery of solvents etc. We have used green metrics to measure progress.  In addition to the prevention of waste generation, we have additionally tried to approach effluent treatability in a logical way.  In this talk we propose to provide some case studies indicating how process development using green chemistry principles has made good business sense even while making our world a better place, ie with the better shade of green! ",
      abstractName:"The Kaleidoscopic Green shades of Crop Chemistry"
  })
}
AbstractInfoScreen6 = () => {
  this.props.navigation.navigate('AgroChemicalsAbstractDetail', {
      userName: "Prof Yogendra Shastri ",
      userDesignation:"Assistant Professor,Dept. of Chemical Engineering",
      userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/10/Shastri-YN.jpg",
      userOrganization:"IIT-Bombay, India",
      AgroChemicalsAbstractDetail:"In this work, catalytic reactive flash volatilization (RFV) of microalgae (Scenedesmus sp.) was performed using steam as a gasifying agent to produce hydrogen-rich syngas. Scenedesmus sp. was selected due to its high CO2 tolerance. A downdraft, fixed bed quartz reactor was used to perform the RFV of microalgae. The effect of temperature and steam content on the gasification efficiency and syngas composition was studied in presence of a novel catalyst which showed that at 650 C and carbon-to-steam ratio (CSR) of 0.12, H2 rich (65% (v/v)) syngas was generated. Moreover, the molar ratio of H2-to-CO in case of H2-rich syngas was 10.9. The experimental results were used to develop a detailed ASPEN Plus® flowsheet model to perform techno-economic assessment of hydrogen and methane production. A plant located in India, processing 12790 kg/h of microalgae to produce 1350 kg/h of H2 was considered. Process scale-up and heat integration principles were used to generate relevant data. Simultaneously, the experimental and simulation data were used to perform life cycle assessment (LCA). The results indicated that the payback period for hydrogen production was 6.5 years with 9.04% of IRR. Moreover, the life cycle climate change impact was 9.41 kg CO2 eq./ kg H2, which was 21% lower than the alternate processes.",
      abstractName:"Renewable bio-hydrogen production using tar-free microalgae gasification"
  })
}
AbstractInfoScreen8 = () => {
  this.props.navigation.navigate('AgroChemicalsAbstractDetail', {
    userName:"Mr. Vijay Kirpalani, CEO  ",
    userDesignation:'CEO.',
    userOrganization:'Pi-Process Intensification Experts LLP, India',  
    userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/08/Vijay-Kirpalani.png",
      AgroChemicalsAbstractDetail:"The principles of green chemistry were propounded by Anastas and Warner in 1998. Organic chemistry is a serious pursuit in academia and a major component of the chemical industry, particularly in manufacture  of speciality chemicals of which pharmaceuticals and and crop protection  chemicals are important constituents. Very often they share the same, increasing complexity in all its  benevolent and ugly facets, offering enormous opportunities for using green chemistry - benign solvents, nonhazardous reagents and conditions, minimization of waste etc. Crop protection chemistry can  take greater advantage of  catalysis, esp biocatalysis and continuous flow reactions. Single isomers would play more important roles in the industry. Integrated pest management often uses pheromones to assess extent of crop infestation and sometimes diminish or overcome it by biological mechanisms. Natural products have a limited usefulness but are liked for to their sustained  availability. Biopesticides like Bacillus thuringiensis have growing applications as nontoxic alternatives for crop protection. Empirical genetic modification of the plant genome invests plants with built in resistance for pests. Surpassing earlier approaches for GM seeds, we have now CRISR CAS 9 for targeted genetic changes in plants. Synthetic organic chemists will be still needed for more conventional pesticides but must be prepared to become molecular biologists!.",
      abstractName:"Flow Chemistry leading to Green Re-Engineering of Chemical Plants Flow Reactors: Recent advances & Scale-up in India Vijay Kirpalani "  })
}
AbstractInfoScreen9 = () => {
  this.props.navigation.navigate('AgroChemicalsAbstractDetail', {
    userName:"Dr. K. Nagarajan  ",
    userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/08/DR.K.NAGARAJAN.jpg",
    userDesignation: 'Corporate Advisor',
    userOrganization:'Hikal Ltd., India ',
      AgroChemicalsAbstractDetail:"The principles of green chemistry were propounded by Anastas and Warner in 1998. Organic chemistry is a serious pursuit in academia and a major component of the chemical industry, particularly in manufacture  of speciality chemicals of which pharmaceuticals and and crop protection  chemicals are important constituents. Very often they share the same, increasing complexity in all its  benevolent and ugly facets, offering enormous opportunities for using green chemistry - benign solvents, nonhazardous reagents and conditions, minimization of waste etc. Crop protection chemistry can  take greater advantage of  catalysis, esp biocatalysis and continuous flow reactions. Single isomers would play more important roles in the industry. Integrated pest management often uses pheromones to assess extent of crop infestation and sometimes diminish or overcome it by biological mechanisms. Natural products have a limited usefulness but are liked for to their sustained  availability. Biopesticides like Bacillus thuringiensis have growing applications as nontoxic alternatives for crop protection. Empirical genetic modification of the plant genome invests plants with built in resistance for pests. Surpassing earlier approaches for GM seeds, we have now CRISR CAS 9 for targeted genetic changes in plants. Synthetic organic chemists will be still needed for more conventional pesticides but must be prepared to become molecular biologists!.",
      abstractName:"Crop protection chemicals – Green Chemistry and beyond"
  })
}

  renderItem = ({ item }) => {
    return (
      <View>
       <TouchableWithoutFeedback onPress={() => this.AbstractInfoScreen(item)}>
        <CardItem style={styles.shadow}>
          <LinearGradient colors={['#88BE49', '#447A47']} style={{ alignSelf:'stretch' }}>
            <Left style={{ flex: 1, margin: 25 }}>
              <Icon active name='heart' style={{ color: 'yellow', fontSize: 20 }} onPress={this.onress} />
            </Left>
          </LinearGradient>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: 9, marginRight: -60, paddingTop: 15, marginBottom: 15 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family }}>
                  {item.event_name[0].event_name}
                </Text>
              </View>
              <View>
                <Text style={{
                  fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',
                  lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45
                }}>
                  {item.abstract_description}
                </Text>
              </View>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_S, paddingTop: 5, color: themes.colors.INIT_COLOR_Green, fontFamily: themes.fonts.INIT_FONT_Family }}>
                  {item.event_start}
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
    );
  }

  isCompleted(rowData) {
    if (this.state.status != 'new') {
      this.itemsRef.child(rowData.id).update({
        status: 'completed'
      });
      this.setState({
        isCompleted: true
      })
    }
  }



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
                Going green in chemistry – the Clariant innovation journey
                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
                  The world is changing with unprecedent speed and faces tremendous challenges due to climate change, growing population...
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
                Sustainability trends in Agrochemical Chemical Research and Development 
                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
              Agrochemical Innovation and  discovery Research is a starting point for a chemical to be used as a pesticide. Proper design and product ...                </Text>
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
                Case Study on Ensuring Environmental Sustainability in Agrochemical Industries
                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
            Estimated size of the global agrochemicals market is USD 250 billion. To make agrochemical indus-tries sustainable, environmental sustainability ...                </Text>
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
                India environmental regulations – From compliance to excellence
                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
              The presentation will focus on Indian environmental regulations. It will explain legislation relating to general environmental requirements  and...                </Text>
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
                The Kaleidoscopic Green shades of Crop Chemistry
                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
              Crop Chemistry has been often characterized by large volume business products often built around the use of hazardous reagents,...         
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
                Renewable bio-hydrogen production using tar-free microalgae gasification
                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
                  In this work, catalytic reactive flash volatilization (RFV) of microalgae (Scenedesmus sp.) was performed using steam as a gasifying...
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
                Flow Chemistry leading to Green Re-Engineering of Chemical Plants Flow Reactors: Recent advances & Scale-up in India Vijay Kirpalani                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
              Flow Chemistry leading to Green Re-Engineering of Chemical Plants....
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
       <TouchableWithoutFeedback onPress={() => this.AbstractInfoScreen9()}>
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
                Crop protection chemicals – Green Chemistry and beyond
                </Text>
                </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
              The principles of green chemistry were propounded by Anastas and Warner in 1998. Organic chemistry is a serious pursuit in....
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
        screen:FloorPlan3,
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
    shadowColor: "grey",
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
  shadowColor: "grey",
  shadowOpacity: 10,
  shadowRadius: 5
},

};
