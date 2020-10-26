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

  // constructor(props) {
  //   super();
  //   this.state = { dataSource: [] };
  // }
  // componentDidMount() {
  //   abstractInfo().then((data) => {
  //     let BioCatalysisAbstractDetails = data;
  //     console.log(BioCatalysisAbstractDetails);
  //     this.setState({
  //       dataSource: BioCatalysisAbstractDetails
  //     });
  //   });

  // }

  AbstractInfoScreen1 = () => {
    this.props.navigation.navigate('BioCatalysisAbstractDetail', {
        userName: "Dr Rajesh Kumar",
        userDesignation:"Chair Pfizer WRD Green Chemistry Team & Associate Research Fellow",
        userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/08/Dr.-Rajesh-Kumar.png",
        userOrganization:"Pfizer WRD CT, USA ",
        BioCatalysisAbstractDetail:"Biocatalysis has started to transform the way pharmaceuticals are made over the past decade. Higher selectivity, mild reaction conditions, enhanced control strategies and ability to engineer enzymes for process intensification capabilities have made biocatalysis an integral part of pharmaceutical manufacturing at Pfizer. In addition, biocatalysis is a green technology that offers an environmentally sustainable and safe process for the synthesis of complex pharmaceutical intermediates and active pharmaceutical ingredients (API’s).   In the last decade several new enzyme activities have been identified and applied for the commercial scale applications via successful enzyme and process engineering. In this presentation an overview of Pfizer Biocatalysis program and its application to Pfizer portfolio will be presented with several case studies.",
        abstractName:"Biocatalysis Application to Pfizer Portfolio"
    })
}
AbstractInfoScreen2 = () => {
  this.props.navigation.navigate('BioCatalysisAbstractDetail', {
      userName: "Dr. Alessandra Basso",
      userDesignation:" Life Tech Manager.",
      userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/08/Basso.jpg",
      userOrganization:"Purolite Lifesciences, UK ",
      BioCatalysisAbstractDetail:"The use of immobilized enzymes in industry is now a routine process for the manufacture of many industrial products in the pharmaceutical, chemical and food industry. Some enzymes like lipases are naturally robust and efficient, can be used for the production of many different molecules and have found broad industrial applications also thanks to their broad selectivity. As an example, lipase from Candida antarctica (CalB) has been used by BASF to produce chiral compounds as the herbicide Dimethenamide-P, that before was made chemically. The use of the immobilized enzyme has provided significant advantages over a chemical process such as the possibility to use equimolar concentration of substrates, obtain an enantiomeric excess > 99%, use relatively low temperatures (< 60°C) in organic solvent, obtain a single enantiomer instead of the racemate as in the chemical process and use a column configuration that allows to increase dramatically the productivity. This process would not have been possible without the use of an immobilized enzyme, since it runs in organic solvent. Some more specific enzymes, like transaminases, have required protein engineering to become suitable for applications in production of APIs (Active Pharmaceutical Ingredients) in conditions which are extreme for a wild type enzyme. The process developed by Merck for sitagliptin manufacture is a nice example of challenging enzyme engineering applied to manufacture of APIs. The previous process of sitagliptin involved hydrogenation of enamine at high pressure using a rhodium-based chiral catalyst. By developing an engineered transaminase, the enzymatic process was able to convert 200g/l of prositagliptin in the final product, with e.e. > 99.5% and using an immobilized enzyme in the presence of DMSO as a cosolvent. For all enzymes, the possibility to be immobilized and used in a heterogeneous form brings important industrial and environmental advantages such as simplified downstream processing or continuous process operations. Here, we present a series of large-scale applications of immobilized enzymes with benefits for the food, chemical, pharmaceutical, cosmetics and medical devices industries, some of them hardly reported before. In general, all enzymatic reactions can benefit from the immobilization, however, the final choice to use them in immobilized form depends on the economic evaluation of costs associated to the use of immobilized enzymes versus benefits obtained in the process. It can be concluded that the benefits are rather significant, since the use of immobilized enzymes in industry is increasing. Here we report on some key examples in the industry (1).",
      abstractName:"Use of immobilized enzymes in industry: overview of pharmaceutical, chemical and food applications  "
  })
}
AbstractInfoScreen3 = () => {
  this.props.navigation.navigate('BioCatalysisAbstractDetail', {
      userName: "Dr. Pravin Kumar ",
      userDesignation:" MChief Scientific Officer",
      userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/10/Pravin_Kumar_Kcat.png",
      userOrganization:"KCat Enymatic Pvt. Ltd., India ",
      BioCatalysisAbstractDetail:"Computational chemists/biologists play a key role in enzyme/protein engineering to optimize enzymes for different applications. We work at microscale simulation system that mimics a bioreactor and denovo protein design is executed inside these systems by embedded 7- dimensional grid and convolution neural networks. This way our technology supersedes in providing solution for engineering an enzyme that works at mg scale conversation to kilogram/ ton scale substrate conversation. 20 different algorithms are designed to improve enzymes   which enable them to work efficiently in industrial conditions, such as extreme/varying pH and temperature, solvent concentrations or increased substrate concentrations. Our technology design enzymes to synthesize semi-synthetic compounds and discover new biocatalytic routes for challenging chemical reactions. Furthermore, we focus on improving the activity of immobilized enzymes to increase reusability.",
      abstractName:"From Laboratory to Industrial Scale: A Scaleup Frame Work for Biocatalysis  "
  })
}
AbstractInfoScreen4 = () => {
  this.props.navigation.navigate('BioCatalysisAbstractDetail', {
      userName: "Dr. Swapnil Mohile ",
      userDesignation:" Business Development Manager",
      userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/10/Swapnil-Mohile.png",
      userOrganization:"Biocatalysis & Chemicals, Novozymes South East Asia Pvt. Ltd., India ",
      BioCatalysisAbstractDetail:"Biocatalysis over past few years has matured as an essential, competitive and cost-effective alternative for chemical synthesis, in diverse applications, across industries. With unparallel selectivity and biodegradable nature, they can furnish the Sustainable Processes. Hydrolases, although most explored class of enzymes at academic level, are becoming now, Industrially proven candidates. Moreover, successful to set excellent examples for other Classes of Biocatalyst, to evolve expedite way. Irrespective of whether its Pharmaceutical or Speciality chemical industry, the knowledge is available now, to take a biocatalytic process from Concept to Commercialization including downstream regulatory requirements.  ",
      abstractName:"Biocatalysis – Sustainable Solution Across Industries "
  })
}
AbstractInfoScreen5 = () => {
  this.props.navigation.navigate('BioCatalysisAbstractDetail', {
      userName: "Dr. Young Sung Yun",
      userDesignation:" Head of Biotech Lab",
      userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/10/Dr.-Youngsun.png",
      userOrganization:"Amicogen Inc., South Korea",
      BioCatalysisAbstractDetail:"β-lactam antibiotics are the most important class of antibacterial compounds in clinical applications, which have been industrially produced by conventional chemical methods. The chemical synthesis of β-lactam antibiotics is carried out under stringent conditions which results in high downstream process costs and the environmentally-damaging processes. For those reasons, the efforts have been made to replace traditional chemical processes with enzymatic conversion processes for more sustainable production of β-lactam antibiotics. Penicillin G acylase (PenG acylase) is useful in the synthesis of β-lactam antibiotics. To adopt a process advantageous to industrial and economic angles, it is preferred that the enzyme activity, synthesis/hydrolysis ratio, and operational stability are sufficiently high. Using directed evolution in combination with high-throughput screening system, PenG acylase was engineered and then immobilized in epoxy or amide-type acrylate resin where the engineered enzymes could be recycled over 200 cycles without any inactivation, ensuring the repetitive use for the industrial application. Here we show that the engineered PenG acylase can be used to direct the synthesis of various β-lactam antibiotics by the combination of β-lactam nuclei with various acyl groups, replacing chemical synthetic methods.  ",
      abstractName:"Engineering of penicillin G acylases for the production of β-lactam antibiotics on an industrial scale "
  })
}
AbstractInfoScreen6 = () => {
  this.props.navigation.navigate('BioCatalysisAbstractDetail', {
      userName: "Mr. Suresh Kumar K",
      userDesignation:"Project Leader - Biocatalysis",
      userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/10/Suresh_Kumar.png",
      userOrganization:"'Advanced Enzymes Technologies Ltd., India",
      BioCatalysisAbstractDetail:"Enzyme Catalyzed chemistry (Biocatalysis) plays an important role in the chemical industry and pharmaceutical industry for several reasons it became a critical tool especially in the past two decades due to its wide spread utility in large scale industrial processes. Enzyme-based catalysis demands for highly selective, environmentally friendly, cost-effective and sustainable industrial process these reactions can be carried out under mild conditions in water and biphasic solvents with high rates and selectivity. Biocatalysis offers both economic and environmental advantages over the chemocatalytic methods. Enzymes are produced from inexpensive renewable resources and are themselves biodegradable, fulfilling the central tenants of green chemistry and sustainable development. This simple overview demonstrates that biocatalytic transformations can potentially satisfy eight out of the twelve principles of green chemistry. They often results in a shorter, less wasteful, environmentally and economically appealing processes when compared to conventional chemical syntheses.  ",
      abstractName:"Importance of Biocatalysis in Chemical and Pharmaceutical industry "
  })
}
AbstractInfoScreen7 = () => {
  this.props.navigation.navigate('BioCatalysisAbstractDetail', {
    userName:"Dr. Dinesh Nair    ",
    userDesignation:'Director',
    userOrganization:'Iosynth Labs Pvt. Ltd., India', 
    userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/08/Dinesh-Nair.jpg",
      BioCatalysisAbstractDetail:"Biocatalysis has evolved very fast over the past few years as a key technology capable of disrupting & changing the way chemical processes are run across specialty, fine & pharma industry. One of the main areas  limiting biocatalysis being adopted widely across industries is availability of  right kind of enzymes or technologies  commercially. Currently applications based on lipases, keto-reductases & transaminases have been established as these enzymes are readily available commercially and address key improvements in existing chemical technologies. Technologies based on immobilized penicillin acylases have already been established for antibiotics intermediates & production. Next generation enzymes like amidases, aldolases, nucleoside phosphorylases, nucleoside deoxyribosyltransferases, ene reductases are also slowly evolving & becoming mainstream. Continuous improvements in bioinformatics, molecular biology, fermentation, immobilization & application technologies will lead to discovery, availability of new enzymatic technologies which can provide solutions for the chemical industry & provide a pathway for sustainable manufacturing in the near future.",
      abstractName:":Practical commercial implementation of biocatalysis- current toolbox of available enzymes & technologies"
  })
}
AbstractInfoScreen8 = () => {
  this.props.navigation.navigate('BioCatalysisAbstractDetail', {
    userName:"Prof. John Woodley   ",
    userProfileImage:'http://165.22.216.45/wp-content/uploads/2019/10/JOHN-WOODLEY.png',
    userDesignation: 'Dept. of Chemical & Biochemical Engg.,',
    userOrganization:'Denmark Technical University, Denmark ',
      BioCatalysisAbstractDetail:"Biocatalysis is one of the most powerful tools to enable green and sustainable production of chemicals1. Such reactions operate under mild conditions and are very selective. Nevertheless it is often necessary to engineer the enzyme, or the process, or both in order to attain an economically effective process suitable for industrial implementation. The primary driver for such engineering is the fact that enzymes in Nature have been evolved to achieve very different objectives to those needed for the implementation of economically-viable industrial processes. For example, in Nature enzymatic reactions most usually catalyze reactions under the conditions inside their host cell, crowded with many proteins, but at dilute substrate concentrations and consequently low product concentrations. Industrial processes demand far higher concentrations of product to be produced in order that the downstream product recovery can be operated in an effective, cost-efficient way. Other important metrics include productivity, as well as yield of substrate on product. For enzymatic reactions the amount of product that can be made from a given quantity of enzyme is also important, dependent upon enzyme cost. In recent years, several methodologies have been developed to measure such metrics2,3. This provides a necessary start to the development of an intensified bioprocess4. In this lecture methods for evaluation and improvement of biocatalytic processes will be described, aimed at rapid and simple industrial implementation. Examples from the DTU lab as well as industrial cases will be discussed.",
      abstractName:":Methods for Evaluation and Improvement of Biocatalytic Processes to Enable Industrial Implementation "
  })
}
AbstractInfoScreen9 = () => {
  this.props.navigation.navigate('BioCatalysisAbstractDetail', {
    userName:"Dr. Santosh Noronha ",
    userProfileImage:'http://165.22.216.45/wp-content/uploads/2019/10/Prof.-Noronha.png',
    userDesignation: 'Asst. Professor, Dept. of Chemical Engineering,',
    userOrganization:'IIT-Bombay, India	',
      BioCatalysisAbstractDetail:"We describe the development of a GMO process for the yeast-mediated synthesis of R-PAC, a chiral intermediate in the synthesis of ephedrine and pseudoephedrine. The roles of Academia, Industry, and the Government, in achieving successful translation of such a process will be highlighted.",
      abstractName:":Production of a chiral drug intermediate"
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
  //               <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family }}>
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
                Biocatalysis Application to Pfizer Portfolio
                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
                  Biocatalysis has started to transform the way pharmaceuticals are made over the past decade. Higher selectivity, mild reaction conditions,...
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
                Use of immobilized enzymes in industry: overview of pharmaceutical, chemical and food applications  
                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>

              The use of immobilized enzymes in industry is now a routine process for the manufacture of many industrial products in the pharmaceutical, chemical and food industry...                </Text>
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
                From Laboratory to Industrial Scale: A Scaleup Frame Work for Biocatalysis
                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>

            Computational chemists/biologists play a key role in enzyme/protein engineering to optimize enzymes for different applications...                </Text>
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
                Biocatalysis – Sustainable Solution Across Industries
                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>

              Biocatalysis over past few years has matured as an essential, competitive and cost-effective alternative for chemical synthesis, in diverse applications,...                </Text>
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
                Engineering of penicillin G acylases for the production of β-lactam antibiotics on an industrial scale
                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>

              β-lactam antibiotics are the most important class of antibacterial compounds in clinical applications, which have been industrially produced by...                </Text>
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
              Importance of Biocatalysis in Chemical and Pharmaceutical industry                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
              Enzyme Catalyzed chemistry (Biocatalysis) plays an important role...
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
              Practical commercial implementation of biocatalysis- current toolbox of available enzymes & technologies                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
              Biocatalysis has evolved very fast over the past few years as a key technology capable of disrupting & changing the...
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
              Methods for Evaluation and Improvement of Biocatalytic Processes to Enable Industrial Implementation
              </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
              Biocatalysis is one of the most powerful tools to enable green and sustainable production of chemicals...
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
              Production of a chiral drug intermediate
              </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
              We describe the development of a GMO process for the yeast-mediated synthesis of R-PAC, a chiral intermediate...
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
