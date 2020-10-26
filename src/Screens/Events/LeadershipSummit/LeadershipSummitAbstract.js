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
  //     let LeadershipSummitAbstractDetails = data;
  //     console.log(LeadershipSummitAbstractDetails);
  //     this.setState({
  //       dataSource: LeadershipSummitAbstractDetails
  //     });
  //   });

  // }

  AbstractInfoScreen1 = () => {
    this.props.navigation.navigate('LeadershipSummitAbstractDetail', {
        userName: "Ms. Bijal Mathkar",
        userDesignation:"Research & Innovation Director",
        userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/10/Ms.-Bijal-Mathkar.png",
        userOrganization:"Solvay Research & Innovation Center, India",
        LeadershipSummitAbstractDetail:"Today’s chemical industry is well aware of the need for Responsible Growth in the coming decades. The business case for sustainable development is strong: it opens up new business opportunities, big efficiency gains and it drives innovation. The Business & Sustainable Development Commission research shows that achieving the Sustainable Development Goals could be worth an estimated 12 trillion USD every year by 2030 in business savings and new revenue, creating millions of jobs in the process. In order to make the right decisions in their business processes, companies need to adopt robust, reliable and practical tools. Solvay believes in this ideology, hence sustainability is one of the essential driving force of Solvay strategy Walking the talk Solvay has indigenous tools. Sustainable Portfolio Management is instrumental at Solvay to take robust decisions by integrating sustainability in its business growth ambition. SPM is a key tool to understand the operational and market-induced risks and opportunities related to the environmental impact of our facilities against the contribution of our products to the planet and society. Another one, The Solvay Way is an exceptional onboarding tool to deliver our ambition and commitments towards our six main stakeholder groups: the employees, customers, suppliers, investors, society and planet. The Group has set ambitious extra-financial objectives by 2025 positioned in three circles: 1. How we contribute to society beyond our responsibility as a chemist (societal actions) 2.  How we bring Sustainable Solutions to the market through innovation 3.  How we act responsibly (with main indicators on safety, people engagement and environmental footprint) All in all - What is unique about Solvay’s sustainable solutions? They make money – we do not need to make a choice between sustainability and profitability. The talk at IGCW 2019 aims to elaborate this concept",
        abstractName:"Responsible Growth: Solvay and Sustainability"
    })
}
AbstractInfoScreen2 = () => {
  this.props.navigation.navigate('LeadershipSummitAbstractDetail', {
      userName: "Dr. Dietmar Hueglin",
      userDesignation:"Director, Innovation Campus Mumbai & Vice President",
      userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/10/Dr.Dietmar.png",
      userOrganization:"'Advanced Materials & Systems Research, BASF Chemicals India Pvt. Ltd., India ",
      LeadershipSummitAbstractDetail:"As the world’s population is growing by 2050 to almost 10 billion people according to UN projections, the way people live must become much more sustainable in future. Hence, more and more people need access to affordable energy, mobility, housing, healthcare and quality food. This goal must be achieved by consuming fewer resources, such as energy, water, land, minerals, and oil. Innovative chemistry over the last 150 years continuously and fundamentally enabled societal progress. The importance of sustainable and “green” processes, products and technologies for humanity’s survival and the fundamental role of innovation in sustainable chemistry will be outlined. The detrimental effects of climate change can only be mitigated by strict control of greenhouse gas emissions. Innovative chemistry and chemical processes will be presented which provide products and technologies that will enable us to consume less input materials, be more efficient, produce better products and create less waste and greenhouse gases. Moreover, BASF’s understanding of Circular Economy (CE) will be briefly explained. Recent examples illustrate the importance of CE as a key enabler for sustainability in the chemical industry. Focus will be on BASF’s product portfolio contributing to CE, e.g. a new generation of superabsorbers for diapers and a new material used for home-compostable fruit & vegetable bags. ",
      abstractName:"Sustainability in the Chemical Industry  "
  })
}
AbstractInfoScreen3 = () => {
  this.props.navigation.navigate('LeadershipSummitAbstractDetail', {
      userName: "Dr. Ashok Menon ",
      userDesignation:"Global Technology Leader.",
      userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/10/Ashok-Menon.png",
      userOrganization:"Life Cycle Assessment, Corporate Sustainability Division, SABIC, India.",
      LeadershipSummitAbstractDetail:"Circular Economy (CE) concept looks beyond the current take-make-dispose extractive industrial model to create value for the economy, society, and businesses by moving towards sustainable consumption. The CE methodology applies system thinking, 4R framework, and waste hierarchy by decoupling economic activities from the consumption of finite resources. The proposed talk will cover the critical global trends around circularity, various initiatives that SABIC is taking in circularity and climate and how Life Cycle Assessment (LCA) and Life Cycle Thinking is complementing SABIC's priorities in sustainability.  The talk will also cover how integrating CE indicators with LCA can help measure the sustainability performance of the product and study the relationship between CE indicator score and LCA impact assessment results.",
      abstractName:"Life Cycle Approach to Circularity. "
  })
}
AbstractInfoScreen4 = () => {
  this.props.navigation.navigate('LeadershipSummitAbstractDetail', {
      userName: "Dr. Claudio Cinquemani ",
      userDesignation:"Director Science & Innovation",
      userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/08/Claudio_Chinquemani_web.jpg",
      userOrganization:"International Sustainable Chemistry Collaborative Center (ISC3), Germany  ",
      LeadershipSummitAbstractDetail:"Sustainable development depends on scaling up innovation in the chemicals sector to develop intelligent, environmentally benign solutions and production processes. While chemicals are needed to achieve the SDGs, chemical pollution remains a threat to human health, ecosystems and wildlife. We therefore need to re-think how chemicals are designed, produced, used and disposed in a way that the goals of sustainable development are met in every dimension. Entrepreneurship can be a strong driver in this transition and can help to close the gap between science, innovation and business. While the IT sector is a prominent example for a thriving start-up scene, the innovation ecosystem in sustainable chemistry is less developed, making it challenging for innovators to access the bridge to commercialization. The specific challenges in sustainable chemistry entrepreneurship are manifold; ranging from the difficult transfer from science to business and missing industry guidance and collaboration, to the lack of access to lab infrastructure and the challenge to find tailored financing and support. The ISC3 seeks to building up a global innovation environment for sustainable chemistry - also by shedding the light on the role of sustainable chemistry as a key solution provider for our common future.",
      abstractName:"SUSTAINABLE CHEMISTRY FROM BENCH TO BUSINESS – WHY INNOVATIONS NEED SUPPORT "
  })
}
AbstractInfoScreen5 = () => {
  this.props.navigation.navigate('LeadershipSummitAbstractDetail', {
      userName: "Mr. Manjit Singh   ",
      userDesignation:"Associate Director.",
      userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/09/Manjit-Singh.png",
      userOrganization:"Corporate Sustainability, Centrient Pharmaceuticals, India",
      LeadershipSummitAbstractDetail:"Sustainability a concept originating from United Nations Conference on Environment and Development in 1987 has gradually walked into the centre of supply chain. A term called sustainable manufacturing and / or supply chain is the buzz word today. Buyers are applying sustainability as a qualifier for approval and validation of suppliers. Consumers has become sensitive towards acquiring the sustainable (environment friendly) products. The transition in mindset & behavior is coercing the corporate to add sustainable product to their basket. In turn, it is triggering innovation to develop technologies for sustainable products. PSCI is a consortium of 45 pharmaceutical companies. PSCI is acting as change agent to improve (green) the pharmaceutical supply chain. PSCI has developed responsible supply chain principles which includes environment, labor rights, ethics, safety & health and management system. Member companies are committed to these principles and implementing into their supply chain. The presentation will focus on environment aspect.",
      abstractName:"Sustainability a global growth driver, Pharmaceutical Supply Chain Initiative (PSCI) contribution & sustainability practices in the pharmaceutical supply chain.     "
  })
}
AbstractInfoScreen6 = () => {
  this.props.navigation.navigate('LeadershipSummitAbstractDetail', {
      userName: "Dr. Guy Humphery    ",
      userDesignation:"Distinguished Scientist.",
      userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/08/Dr.-Guy-Humphrey.jpg",
      userOrganization:" Merck, Sharp & Dohme (MSD), USA",
      LeadershipSummitAbstractDetail:"Our goal at MSD mission is to translate breakthroughs in biomedical research into meaningful new therapeutics and vaccines that improve and extend the lives of people, worldwide. The pharmaceutical industry is expected to meet the needs of patients around the world at a cost they can afford while minimizing our environmental footprint. In this presentation I will provide an overview of MSD’s commitment and strategy towards innovative green and sustainable chemistry development. I will provide personal thoughts on new green technologies, current supply chain challenges/opportunities and the benefits of pre-competitive collaborations with both academia and industry partners, as well as our long-standing membership and support of the ACS Green Chemistry Institute Pharmaceutical Round Table (ACS GCIPR). Could this be used as a model for other industry collaborations to drive the adoption of GC&E more globally?",
      abstractName:"Driving Green, Sustainable and Affordable Chemistry Development: Sponsorship, Innovation and Collaboration"
  })
}
AbstractInfoScreen7 = () => {
  this.props.navigation.navigate('LeadershipSummitAbstractDetail', {
    userName:"Dr. K. V. S. Ram Rao  ",
    userDesignation: 'CEO - CSM Division',
    userProfileImage:'PI Industries, India ',
    userOrganization:"http://165.22.216.45/wp-content/uploads/2019/08/Dr-K.V.S-Ram-Rao.jpg",
      LeadershipSummitAbstractDetail:"Agriculture constitutes an important part in India’s economy. Growth of Agriculture Sector is very closely linked to the availability and affordability of the desired chemical support systems. With increasing focus on environment and safety, it becomes very important and critical to bring high level of innovation and technology in chemical space. Science needs to focus on chemistry and adjacent processes to bring in eco-friendly chemical management. Engineering and Technology should focus on total economic value rather than a local optimum. A combination of these two approaches can lead to a very sustained and growth oriented industry structure for India. Thoughts on the approaches and execution challenges at macro level are discussed.",
      abstractName:"Total Economic Value for Agri-Chemical Industry: Approaches and Challenges"
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
                Responsible Growth: Solvay and Sustainability
                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
                 Today’s chemical industry is well aware of the need for Responsible Growth in the coming decades. The business case for sustainable development is...
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
                Sustainability in the Chemical Industry 
                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>

              As the world’s population is growing by 2050 to almost 10 billion people according to UN projections, the way people live must become...
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
                Life Cycle Approach to Circularity. 
                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>

              Circular Economy (CE) concept looks beyond the current take-make-dispose extractive industrial model to create value for the economy...    
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
                SUSTAINABLE CHEMISTRY FROM BENCH TO BUSINESS – WHY INNOVATIONS NEED SUPPORT 
                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>

             Sustainable development depends on scaling up innovation in the chemicals sector to develop intelligent, environmentally benign solutions...                </Text>
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
                Sustainability a global growth driver, Pharmaceutical Supply Chain Initiative (PSCI) contribution & sustainability practices in the pharmaceutical supply chain.
                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>

             Sustainability a concept originating from United Nations Conference on Environment and Development in 1987 has gradually walked into the centre of supply chain...                </Text>
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
                Driving Green, Sustainable and Affordable Chemistry Development: Sponsorship, Innovation and Collaboration
                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>

             Our goal at MSD mission is to translate breakthroughs in biomedical research into meaningful new therapeutics and...                </Text>
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
                Total Economic Value for Agri-Chemical Industry: Approaches and Challenges                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
              Agriculture constitutes an important part in India’s economy. Growth of Agriculture Sector is very closely linked to the availability... 
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
