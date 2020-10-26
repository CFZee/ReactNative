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
  //     let SPCIAbstractDetails = data;
  //     console.log(SPCIAbstractDetails);
  //     this.setState({
  //       dataSource: SPCIAbstractDetails
  //     });
  //   });

  // }

  AbstractInfoScreen1 = () => {
    this.props.navigation.navigate('SPCIAbstractDetail', {
        userName: "Mr. Alok Pandit",
        userDesignation:"CEO.",
        userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/10/Alok-Pandit.png",
        userOrganization:"Equinox Software & Services Pvt. Ltd., India ",
        SPCIAbstractDetail:"Equinox Software and Services Private Limited (Equinox, in short) was founded on the basic premise, 12 years back, that more and more process manufacturers will be adopting Information Technology as a key enabler in all their business processes, be it design or R&D or Manufacturing or Supply chain management. This belief of Equinox stands vindicated, though the scale of change has been slow. This paper intends to share the recent advances in the IT enabled process engineering arena, including a discussion of some of the new software tools that have been launched by various global technology providers. Equinox has been at the forefront of leading this paradigm shift in the Indian and Global process industry. The paper will share some case studies of how the new approach is emerging and how the leading process companies have started attempting different, new, novel approach to the same old problems. For example, take the case of distillation columns. Most manufacturers used to directly go to the fabricators and order a standard column size, say, 600 mm diameter and 18 M packed height, without worrying too much about its impact on operability, operating costs and other aspects of the design. Any investment in formal design study of the columns was considered a luxury or unnecessary expenditure. However, with the recent success of simulation enabled design process, clients have reaped significant benefits, forcing them to change their mind-set towards design being either a luxury or unnecessary expenditure.",
        abstractName:"Recent Trends in IT enabled Process Engineering"
    })
}

AbstractInfoScreen3 = () => {
  this.props.navigation.navigate('SPCIAbstractDetail', {
      userName: "Dr. Achala Danait  ",
      userDesignation:"Vice President, Regional Innovation Centre",
      userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/10/Dr.-Achala-.png",
      userOrganization:"IClariant Chemicals (India) Ltd., India . ",
      SPCIAbstractDetail:" Steadily rising demand and simultaneous decline of resources are creating global challenges in areas such as energy supply, resource efficiency, waste prevention, nutrition, consumer care and mobility. The specialty chemical industry offers products and solutions, most of which, touch our daily lives in some form or the other. Increasing awareness of their effects, raises concerns and questions in the minds of people, in particular,  educated and well-informed generation of today. The industry is seeing a shift towards environmentally friendly processes and use of bio-based chemicals, which is expected to grow strongly through to 2030. In this changing world, sustainability allows us to stay in the driver seat and gives us a competitive advantage.  Clariant’s corporate strategy and the triple bottom line of Performance – People – Planet, places a great degree of importance on sustainability and in turn, forms the basis of Clariant’s innovation culture. Several successful examples will be presented ranging from new feedstock options, e.g. agricultural residues, innovative approaches at design stage and novel, sustainable solutions, which provide unique performance benefits. This sustainability driven innovation journey, overcoming a myriad of challenges, would eventually lead us to a better tomorrow.",
      abstractName:"Green Chemistry for fine & specialty sector ”Innovating for a sustainable future” - Dr. Achala Danait"
  })
}
AbstractInfoScreen4 = () => {
  this.props.navigation.navigate('SPCIAbstractDetail', {
      userName: "Dr. Dhananjay Deulgaonkar   ",
      userDesignation:"EHS Manager-Innovation Campus Mumbai and Sub Regional Environment Safety Manager",
      userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/10/Dr.-Dhananjay-Deulgaonkar.png",
      userOrganization:"South Asia, BASF India Ltd., India",
      SPCIAbstractDetail:"",
      abstractName:"Sustainability and Responsible Care Excellence at BASF "
  })
}
AbstractInfoScreen5 = () => {
  this.props.navigation.navigate('SPCIAbstractDetail', {
      userName: "Dr. Johannes Benkhoff  ",
      userDesignation:"Sr. Vice President",
      userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/08/Dr.-Johannes-Benkhoff.png",
      userOrganization:"Group Chemical Research, Clariant Produkte (Deutschland) GmbH, Germany",
      SPCIAbstractDetail:"The world is changing with unprecedent speed and faces tremendous challenges due to climate change, growing population, dwindling resources and unsatisfactory waste management. New solutions are required that address these global challenges - as a result of a holistic approach towards innovation in the chemical industry which places crucial sustainability aspects at the origin of innovation efforts and balances economic, ecologic and societal demands. Moreover, developing and delivering sustainable innovations to industry and society requires new dimensions of innovation approaches, close collaboration and partnering along the value chain and across industry, academia, and start-up landscape creating new innovation ecosystems.  As a leading company, Clariant places strong emphasis on environmental protection and safety in all its activities, and anchored sustainability as a guiding principle in its strategy and innovation culture. Clariant’s innovation journey, novel approaches, and tangible examples for innovative solutions in various customer industries will be presented, ranging from catalysis, treatment of industrial off-gas emissions, new processes to sustainably convert bio-renewable feedstock or agricultural & industrial residues into valuable chemicals, and new approaches towards plastics recycling.",
      abstractName:"Going green in chemistry – the Clariant innovation journey"
  })
}
AbstractInfoScreen6 = () => {
  this.props.navigation.navigate('SPCIAbstractDetail', {
      userName: "Dr. Laxmikant Patil",
      userDesignation:"Chief Manager - R&D",
      userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/09/Dr-Patil..jpg",
      userOrganization:"Excel Industries Ltd., India",
      SPCIAbstractDetail:"Excel Industries Limited is a chemical manufacturing company, catering to the B2B segment. Our tagline is “When the Chemistry is right everything else follows”. The company was founded in 1941 and has two units at Roha and Lote, in Maharashtra. We have our own R&D team and all our products are developed inhouse. Since inception, we have firmly believed in the principles of Green Chemistry and all our production processes, waste water management, water and energy conservation are aligned to reduce-reuse and recycle. In the case studies shared by us, we will focus on catalysis, atom economy, waste prevention, safer solvents and auxiliaries in our agrochemical, specialty and polymer inputs. We will also share our pilot studies towards use of renewable feedstock for energy and use of solid sludge to replace non renewable rock phosphate. Being a Responsible Care company, we have installed MEE by segregating our waste water streams by their chemical characterization to reuse water in our processes and sooner we will move towards ZLD as a step towards sustainability..",
      abstractName:"Green Chemistry initiatives in Process developments at Excel Industries Limited. "
  })
}
AbstractInfoScreen7 = () => {
  this.props.navigation.navigate('SPCIAbstractDetail', {
    userName: "Dr. Paresh Dhepe",
    userDesignation:"Principal Senior Scientist, Catalysis & Inorganic Chemistry Division",
    userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/09/pl.dhepe_46_big.jpg",
    userOrganization:"PI Industries Ltd., India",
    SPCIAbstractDetail:"Sustainability for a chemical industry is a very vast subject, which includes issues spanning from industry level to the global environment levels. It deals with practices related to social welfare, financial performance, labour practices, supply chain management, governance mechanisms along with SPCI performance. While all the aspects of sustainability are important in long run, for ensuring operational sustainability of any chemical industry, major issues of paramount concerns revolve around: '/n'a)	Compliance to environmental norms so that no legal action is initiated against the industry leading to temporary or long term discontinuation of operation '/n'b)	No major case of process safety incident, involving gas leak, fire, explosion etc. takes place, leading to off-site implication '/n'c)	No issue of social unrest takes place against industry '/n'To meet these three objective, a robust compliance monitoring system, process safety management system, emergency preparedness system and a targeted CSR program is needed. The paper illustrates experiences of PI Industries in taking care of these critical issues of operational sustainability.",
    abstractName:"Best SPCI practices for sustainable operations in a chemical industry "
})
}
AbstractInfoScreen8 = () => {
  this.props.navigation.navigate('SPCIAbstractDetail', {
      userName: "Dr. Steve Thomas Pannakal",
      userDesignation:"Principal Scientist & Head (Bio-technology),Center of Excellence for Natural Extracts",
      userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/08/Dr.-Steve-thomas-Pannakal.png",
      userOrganization:"Asia, Research & Innovation, LOreal India Pvt. Ltd India",
      SPCIAbstractDetail:"Green Chemistry and Sustainable processes for bio-based ingredients is a multidisciplinary field and covers areas such as sustainable sourcing of raw materials, sustainable transformation of raw materials, limiting the downstream impact on eco-systems through implementation of more efficient processes. A lifecycle foot-print approach has been successfully developed and employed in Loreal using the knowledge of innovation through sustainable means and also a complete life cycle analysis has played a crucial role in creating and developing more efficient ways of producing, particularly bio-based ingredients (composed predominantly of carbon and hydrogen atoms). Bio-based (botanical) ingredients are extensively used in several industry sectors, such as cosmetics, phytomedicines, nutraceuticals, spice and food industry to support primary health care, but also for innovation and discovery. New consumer aspirations and demands have led to renewed interest in bio-based botanical ingredients further supported by key investment & expansions being made in the TCM & TIM medicinal plant/botanical extract industry, among others. More increasingly, there is a pressing and ever increasing need to produce high value bio-based ingredients more sustainably through the implementation of green chemistry principles and sustainable sourcing. Today, we have developed several environmentally benign proprietary processes to innovate & generate known bio actives of high cosmetic interest. We use process based innovation as a means of creating new captive molecular family clusters to develop bio-based ingredients. Promoting green chemistry is a long-term ambition of the L’OREAL group, requiring many challenging scientific and technological issues to be resolved related to chemistry, raw material sourcing, waste management, preservation of bio-diversity, and Green Industrialization. In today’s talk, you will hear about some of the initiatives of L’Oréal Research & Innovation on raw material levers to improve Eco-design, sustainable production through circular technologies, designing Green Chemistry based extraction strategies bio-mass waste transformation to a fully Industrial process implementation in line with our sustainability commitment ",
      abstractName:"GREEN SUSTAINABLE PROCESSES TO GENERATE BIO-BASED INGREDIENTS "
  })
}
AbstractInfoScreen9 = () => {
  this.props.navigation.navigate('SPCIAbstractDetail', {
      userName: "Mr. R. N. Mohanty",
      userDesignation:"President",
      userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/10/Mr.-Mohanti.png",
      userOrganization:"Technology, Pidilite Industries Ltd., India.",
      SPCIAbstractDetail:"We present nature based biological systems as model, measure, and mentor to improves the sustainability due to Strict Regulations, Shortages of oil &Petroleum price volatility. It brings forward water-based adhesives, high solid adhesives, natural material such polysaccharides and proteins, circular economy, biodegradability, alternative to harmful substance like formaldehyde, lower carbon footprint, easily recycling & low in hazardous substance. Biopolymers like proteins, natural rubber, polysaccharides (starch), natural gums and cellulose all have been historically used as adhesive but have been replaced because of cheaper production &superior characteristics of synthetic polymers, which needs reversal to promote environment friendliness and sustainability. Faster cross linking with high density will improve underwater resistance, Chemical resistance, metal adhesion, shear strength, tensile strength etc. Hydrophobicity also induced by vegetable oils. Bio-based adhesives will be advantageous with regards to human and environment toxicity due to their improved Biodegradability &biocompatibility, no use of toxic phenol, lower formaldehyde emission, easy recycling and having better resistance to thermal &hydrolytic degradation. There are still concerns about susceptibility of protein &polysaccharides to hydrolytic degradation, low reactivity of lignin &non-food source for vegetable oils.",
      abstractName:"Title of presentation: Biopolymer based Green Adhesives  "
  })
}
AbstractInfoScreen10 = () => {
  this.props.navigation.navigate('SPCIAbstractDetail', {
      userName: "Mr. Prashant S. Dravid ",
      userDesignation:"Director",
      userProfileImage:"",
      userOrganization:"Systems Sales, SPXFlow Technology (India) Pvt. Ltd., India",
      SPCIAbstractDetail:"Pharmaceutical industry is currently undergoing a rapid transformation and innovative pharmaceutical technologies, such as spray dryers, are helping to set the pace For example, new sophisticated drug delivery technologies have been developed to address the changing demands of the industry. These new technologies require greater performance from product particles than they once did. Particles, which were once simply carriers for the drug, are now integral parts of complex delivery systems and need to exhibit advanced functional properties. Spray drying has the ability to create particles with the advanced characteristics required by new pharmaceutical technologies. Spray drying allows particle engineering to develop the particle’s functional characteristics. During spray drying, the feed is atomized forming liquid droplets in the drying chamber. A droplet can only dry from its surface; therefore as the droplet dries, the particle surface becomes enriched with the more soluble ingredient and the less soluble ingredient is left inside the particle. This is how microencapsulation occurs.",
      abstractName:"Close Circuit Spray Dryers for Pharmaceutical & Chemical Industry, highlighting energy efficiency & modern  Safety features. "
  })
}
AbstractInfoScreen11 = () => {
  this.props.navigation.navigate('SPCIAbstractDetail', {
      userName: "Dr. Rahul Nabar",
      userDesignation:"Dept. of Chemical Engineering,",
      userProfileImage:"",
      userOrganization:"IIT-Bombay, India",
      SPCIAbstractDetail:"A large body of academic-research is produced every year pertinent to the Green Chemistry area. However, are we able to translate this effectively to industrial practice in the Indian context? Does the adoption of green chemistry come with different challenges as we move towards the smaller manufacturers? Furthermore, are we producing students with the right skillsets and sensitization to tackle the challenges in this area? What should be the role of Universities in the green chemistry domain? This talk tries to summarize some of the challenges and opportunities at the interface of industry and academia collaborations and provoke discussion on what we can be doing better to achieve greater penetration of green-chemistry into the Indian Fine & Specialty Chemicals industries. We also present anecdotal feedback we have gathered via a survey from colleagues in industry and academia of their perceptions on these issues.  Finally, we will highlight some of the recent initiatives at IIT Bombay to address these issues in terms of research and teaching domains. ",
      abstractName:"Green Chemistry through effective Industry-Academia Collaborations: Challenges and Opportunities"
  })
}
AbstractInfoScreen12 = () => {
  this.props.navigation.navigate('SPCIAbstractDetail', {
      userName: "Mr. Shirish Paranjpe",
      userDesignation:"Marketing Manager",
      userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/09/Shirish-Paranjpe.jpg",
      userOrganization:"Godavari Biorefineries Ltd., India",
      SPCIAbstractDetail:"As the world is progressing towards better, chemistry plays a crucial role in creating the materials for technology of tomorrow.  The increasing use of non-renewable resources such as crude oil based products isexhausting the global natural resources.In addition, the over usage of these products have raised serious environmental concerns including air pollution, land toxicity and have disrupted the aquatic ecosystem. It’s becoming increasingly important to develop and implement sustainable solutions for producing industrial chemicals.The applications of bio-based chemicals have reached into niche specialities &have made rapid incursions into a variety of end-use segments such as paints, coatings, inks, adhesives & Pharmaceutics etc. Bio-based chemicals allow consumers an immediate switch from petrochemical feedstock to renewable feedstock without compromising application properties or performance. Godavari Biorefineries Ltd. (GBL) through its journey of 80 years has created a well-integrated sugarcane processing complex & has become a leading manufacturer of Sugar,Ethanol, Ethanol based bio chemicals, Power& Bio-Fertilizers. GBL is actively pursuing the goal of creating unique Biorefinery using green & renewable sugarcane as a feedstock. We at GBLare innovating to create economic value to by-products as well as putting waste to use. GBLproduces various green chemicals such as Acetic Acid, Ethyl Acetate, Acetaldehyde,Ethyl Lactate, Acetals, and 1,3 butylene glycol which find application in various industries.",
      abstractName:"Bio-based chemicals: Future of the Chemical Industry"
  })
}
AbstractInfoScreen13 = () => {
  this.props.navigation.navigate('EHSAbstractDetail', {
      userName: "Mr. D. K. Rana  ",
      userDesignation:"Director",
      userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/08/Mr-D-K-Rana.png",
      userOrganization:"Indian Process Safety Centre, India ",
      EHSAbstractDetail:" Heubach Colour Pvt. Ltd. is 600 years old Germany based multinational company engaged in the manufacturing of organic Pigments. We have three manufacturing locations in GIDC, Ankleshwar, Gujarat.'/n' In CPC Pigments synthesis major challenge is  Ammonical Nitrogen & refractory COD in waste water. We have characterized and segregated different wastewater streams viz. Spent Aluminium Chloride stream generated from Green pigment manufacturing, Ammonium Carbonate solution generated from CPC Blue  manufacturing process, Acidic Mother Liquor generated from purification step of CPC Blue.'/n' INTEGRATED WASTE MANAGEMENT '/n' Integrated waste Management is excellent example of treating one waste with other & make useful product. Ammonium Carbonate solution gets generated from CPC Blue synthesis.  Ammonium Carbonate solution is  converted  to Ammonia Liquor (24%), which is a useful by-product & soda ash solution is generated in this process.  Soda Ash  is used to treat  Aluminium Chloride solution which is generated during synthesis of CPC Green and yields  Aluminium Hydroxide. '/n' GAC - GRANULAR ACTIVATED CARBON:  In addition to the above the installation of Granular Activated Carbon columns allowed us to bring down the refractory COD. Adsorption on GAC is an important option in wastewater treatment processes for the removal of organic pollutants. GAC adsorption is a state of the art technology for a broad spectrum of waste-water. GAC is reliable, cost effective & environment friendly solution.  Thermal Reactivation of GAC reduces operating cost.",
      abstractName:"ENVIRONMENT  MANAGEMENT & SUSTAINABILITY - HEUBACH CASE STUDY"
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
                Recent Trends in IT enabled Process Engineering
                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
                  Equinox Software and Services Private Limited (Equinox, in short) was founded on the basic premise, 12 years back, that more and more process manufacturers will be adopting Information Technology as a key enabler in all their business processes,...
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
                Green Chemistry for fine & specialty sector ”Innovating for a sustainable future” - Dr. Achala Danait
                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
            Steadily rising demand and simultaneous decline of resources are creating global challenges in areas...                </Text>
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
                Sustainability and Responsible Care Excellence at BASF                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
              Sustainability and Responsible Care Excellence at BASF...    
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
                Going green in chemistry – the Clariant innovation journey                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
             The world is changing with unprecedent speed and faces tremendous challenges due to climate change, growing population, dwindling ...                </Text>
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
                Green Chemistry initiatives in Process developments at Excel Industries Limited.            </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
             Excel Industries Limited is a chemical manufacturing company, catering to the B2B segment. Our tagline is “When the Chemistry is right everything...                </Text>
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
                Contributions from NCL in Green Catalysis
                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
             Development of greener and atom efficient solutions to industrial processes is a need of an hour due to strict environmental laws and...                </Text>
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
                GREEN SUSTAINABLE PROCESSES TO GENERATE BIO-BASED INGREDIENTS 
                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
             Green Chemistry and Sustainable processes for bio-based ingredients is a multidisciplinary field and covers areas such as sustainable...                </Text>
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
                Title of presentation: Biopolymer based Green Adhesives                 </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
             We present nature based biological systems as model, measure, and mentor to improves the sustainability due to Strict Regulations, Shortages of oil...                </Text>
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
       <TouchableWithoutFeedback onPress={() => this.AbstractInfoScreen10()}>
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
                Close Circuit Spray Dryers for Pharmaceutical & Chemical Industry, highlighting energy efficiency & modern  Safety features.
                </Text>
                </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
             Pharmaceutical industry is currently undergoing a rapid transformation and innovative pharmaceutical technologies, such as...                </Text>
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
       <TouchableWithoutFeedback onPress={() => this.AbstractInfoScreen11()}>
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
                Green Chemistry through effective Industry-Academia Collaborations: Challenges and Opportunities
                </Text>
                </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
            A large body of academic-research is produced every year pertinent to the Green Chemistry area. However, are we able to translate this effectively...                </Text>
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
       <TouchableWithoutFeedback onPress={() => this.AbstractInfoScreen12()}>
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
                Bio-based chemicals: Future of the Chemical Industry                </Text>
                </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
            As the world is progressing towards better, chemistry plays a crucial role in creating the materials for technology of tomorrow.  The increasing use of non-renewable...                </Text>
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
       <TouchableWithoutFeedback onPress={() => this.AbstractInfoScreen13()}>
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
                ENVIRONMENT  MANAGEMENT & SUSTAINABILITY - HEUBACH CASE STUDY
                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>

              Heubach Colour Pvt. Ltd. is 600 years old Germany based multinational company engaged in the manufacturing of organic Pigments...    
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

};
