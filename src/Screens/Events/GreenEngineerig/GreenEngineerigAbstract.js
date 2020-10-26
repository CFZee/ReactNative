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
  //     let GreenEngineerigAbstractDetails = data;
  //     console.log(GreenEngineerigAbstractDetails);
  //     this.setState({
  //       dataSource: GreenEngineerigAbstractDetails
  //     });
  //   });

  // }

  AbstractInfoScreen1 = () => {
    this.props.navigation.navigate('GreenEngineerigAbstractDetail', {
        userName: "Dr. Chuck Orella ",
        userDesignation:"Director Chemical Engineering R&D",
        userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/10/Dr.-Chuck-Orella-1.png",
        userOrganization:"Merck & Co. Inc., USA",
        GreenEngineerigAbstractDetail:"The pharmaceutical industry faces many challenges to bring safe, efficacious and affordable medicines to patients.  For traditional pharmaceutical processes, thermal stability is often limited, and molecular complexity provides for many desired and undesired permutations of chemical interactions between reagents, catalysts, intermediates, and products.  Two examples will be discussed that deal with purifying thermally labile products in semi-continuous operation.  The first deals with intensification of distillation to improve the performance of downstream chemistry, the second deals with multistage countercurrent liquid extraction to enable purification of an antibiotic with fewer operations, reduced PMI and improved yield. ",
        abstractName:"Examples of Intensified Separations for Greener Processes"
    })
}
AbstractInfoScreen2 = () => {
  this.props.navigation.navigate('GreenEngineerigAbstractDetail', {
      userName: "Dr. David Constable",
      userDesignation:"Science Director",
      userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/10/David-Constable.png",
      userOrganization:"ACS-Green Chemistry Institute, USA ",
      GreenEngineerigAbstractDetail:"One of the major goals of green and sustainable chemistry is to promote the design and development of more efficient chemistries and chemical synthetic processes.  Efficient means that processes use less mass and energy per kg of the desired substance produced, create less waste, use inherently less hazardous reaction conditions and chemicals, and in general move the chemical and allied industries towards more sustainable business practices. In order to design more sustainable chemistries and synthetic routes one must apply principles of green and sustainable chemistry and engineering from the very beginning at the design phase, and these must be applied at every subsequent stage of process development.  For many years, especially in the engineering community, green engineering has been described as just “good engineering” and most engineers would say that they are already doing “good engineering.”   This talk will discuss how green and sustainable chemistry and engineering require more than “good engineering” and will show that for chemical processing, chemistry and engineering must be seamlessly integrated to achieve more sustainable processes. ",
      abstractName:"Green and sustainable chemistry and engineering – the two are inseparable  "
  })
}
AbstractInfoScreen3 = () => {
  this.props.navigation.navigate('GreenEngineerigAbstractDetail', {
      userName: "Dr. Deepak Palekar ",
      userDesignation:"Head - Strategy & Technology",
      userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/08/Deepak-sir1.jpg",
      userOrganization:"STEP Pvt. Ltd., India.",
      GreenEngineerigAbstractDetail:"STEP is working with chemical companies on sustainable development for optimizing the resource usage using process intensification & new technologies. We identify the areas of improvements at our client through process & water audits, based on which we work with companies to improve their water footprint and processes. For Process Intensification in chemical processes, we are working on two areas viz reactors for continuous operation and chemical purification using column chromatography with polymeric adsorbents. For water footprint improvement, we are in the process of commercializing a novel reactor Downflow Gas Contactor (DGC) for effluent treatment, which has many advantages over conventional technologies. The presentation will povide data on a) effluent treatment results of various industrial effluents using DGC reactor technology; b) Process Intensification with DGC for biogas upgradation (CO2 & H2S removal to produce high purity methane) and gas-liquid chemical reactions; c) use of fixed bed continuous process instead of batch process for industrial esterification reactions for productivity improvement; and d) results of column chromatography for color removal (instead of activated carbon), product purification (removal of impurities) and recovery of chemicals from wastewater (thereby reducing the load on Effluent Treatment Plant).  ",
      abstractName:"New Developments in Process Intensification - Reactors & Chromatographic Separations. "
  })
}
AbstractInfoScreen4 = () => {
  this.props.navigation.navigate('GreenEngineerigAbstractDetail', {
      userName: "Dr. Prashant Waske ",
      userDesignation:"Sr. Manager - IMSG (AutoChem)",
      userProfileImage:"",
      userOrganization:"Mettler Toledo India Pvt. Ltd., India  ",
      GreenEngineerigAbstractDetail:"In Pharmaceutical/chemical industries the real challenge is to scale up the process safely. These industries need to deliver the optimized process in the minimum time which may lead to the incident. To categorize the criticality of the process, understanding the critical safety parameters such as adiabatic temperature rise and run away scenario are very important factors. Our Mettler Toledo instruments can provide very important information on criticality of the process at an early stage development. These instruments can be used 24/7 with the user defined safety parameters so productivity goes higher and developmental time can be reduced drastically. Our products can be used on smaller volumes ranges so that the chemical waste can be reduced to the minimum level. Using our in situ process analytical tools (PAT tools) process can be optimized to improve the yield, quality and overall duration of the process. ",
      abstractName:"Process optimization and industrial scale-up: Mettler Toledo Solutions "
  })
}
AbstractInfoScreen5 = () => {
  this.props.navigation.navigate('GreenEngineerigAbstractDetail', {
      userName: "Prof. Anil Kumar  ",
      userDesignation:"Chair Professor.",
      userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/08/anil_kumar.jpg",
      userOrganization:" Continuous Flow Chemistry Lab, Chemistry Department, IIT-Bombay, India ",
      GreenEngineerigAbstractDetail:"Continuous flow process provides a potential alternative to batch synthesis because of its inherent advantages such as very efficient heat exchange, high batch to batch reproducibility, fast mixing, high throughput, safety, and the ability to do multistep telescoping synthesis.  Due to these advantages, these processes have been referred to as the most promising “Green Technology”. In fact, continuous flow processes are projected to be the “CHEMICAL FACTORIES” of tomorrow. Continuous flow processes also provide an “On-Demand” synthesis with complete control over reproducibility, size, shape and these parameters can be achieved at various scales (lab synthesis to pilot to bulk production) with excellent reproducibility. This opens up the opportunity for synthetic chemists to prepare materials with precise control over critical molecular design parameters. It also enables one to carry out material synthesis at higher temperatures that were outside the domain of an organic synthetic lab. We have been exploring continuous flow processes for the synthesis of conjugated polymers, nanoparticles and nanofibers, catalysis for heterogeneous processes etc. In this presentation, I will review some of the recent advances in these directions and some results from our laboratory.      ",
      abstractName:"Continuous Flow Process: A New Paradigm in Green Chemistry  "
  })
}
AbstractInfoScreen6 = () => {
  this.props.navigation.navigate('GreenEngineerigAbstractDetail', {
    userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/10/Prof.-R-Gudi.png",
    userName:" Prof. R. D. Gudi   ",    
    userDesignation: 'HOD, Dept. of Chemical Engineering',
    userOrganization:'IIT-Bombay	 ',
      GreenEngineerigAbstractDetail:"Recent thrusts on sustainability and clean development / manufacturing mechanisms have brought into focus the adoption of green engineering approaches. Sustainability and its more important sub-themes of cyclic processes and zero emissions play an important role in redesign and re-evaluation of existing and synthesis of new process manufacturing routes. Green Engineering incorporates development and implementation of products, processes, and systems that meet technical and cost objectives while protecting human health and biosphere. Resource depletion, air water and land pollution are examples of environmental problems which have resulted due to industrial processes. One of the main problems associated with these activities is that they have global impact. For instance, emission of green house gases can occur locally but resulting green house effect will have a global character. Therefore pressures on improving process performance are rising and hence chemical and process industries are constantly under scrutiny of various environmental organizations. This demands more environmentally acceptable processes, products and practices that can be achieved through ideas of ‘waste minimization’, ‘zero emission’. Initially most industries worldwide followed end-of-pipe treatment (i.e. treatment and disposal of waste in non hazardous form) as an approach towards dealing with process waste. But as environmental regulations have become more strict, increase in cost associated with waste treatment have led to shift towards reduction of waste at the source or its reuse as more cost effective waste management methods. Extrapolation of current needs leads to picture of an unsustainable world since there is a steady decline in the natural resources. So design / retrofit of chemical processes to be done through concept of sustainability which is promoted by Green engineering (GE). The talk will focus on some of the above mentioned points and will consider representative applications from chemical engineering & chemistry. ",
      abstractName:"Role of Green Engineering/ Chemistry in promoting sustainability practices "
  })
}
AbstractInfoScreen7 = () => {
  this.props.navigation.navigate('GreenEngineerigAbstractDetail', {
    userName:"Mr. Vijay Kirpalani",
    userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/08/Vijay-Kirpalani.png",
    userDesignation:'CEO.',
    userOrganization:' Pi-Process Intensification Experts LLP, India    ',
      GreenEngineerigAbstractDetail:"Re-engineering of  existing chemical plants ( and “Greengineering” of new projects) using Flow Chemistry  is dramatically changing the way we manufacture chemicals. Flow Chemistry makes the “desired” chemistry possible, safer,  atom efficient and of inherently consistent quality, with even “neat” conditions possible even for fast, highly energetic reactions, with labile/unstable hazardous intermediates.The state-of-control of the reaction results in better quality and reduced downstream processing steps/quantities. Examples of successful commercial implementation of Flow in India using “Plug Flow” Reactors , of Static and Dynamic genres  shall be presented, with nuances of the major types discussed. Flow Reactors have made Green Photochemistry and Electrochemistry commercially applied more economically than conventional processes – shortening pathways with drastically reduced E-factor improving the environmental performance of manufacturing.",
      abstractName:'Flow Chemistry leading to Green Re-Engineering of Chemical Plants Flow Reactors: Recent advances & Scale-up in India Vijay Kirpalani',
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
                Examples of Intensified Separations for Greener Processes
                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>

                 
                The pharmaceutical industry faces many challenges to bring safe, efficacious and affordable medicines to patients.  For traditional pharmaceutical...
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
                Green and sustainable chemistry and engineering – the two are inseparable
                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>

              One of the major goals of green and sustainable chemistry is to promote the design and development of more efficient chemistries...
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
                New Developments in Process Intensification - Reactors & Chromatographic Separations
                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>

              STEP is working with chemical companies on sustainable development for optimizing the resource usage using process intensification...    
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
                Process optimization and industrial scale-up: Mettler Toledo Solutions
                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
             In Pharmaceutical/chemical industries the real challenge is to scale up the process safely. These industries need to deliver the optimized...                </Text>
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
             Continuous flow process provides a potential alternative to batch synthesis because of its inherent advantages such as very efficient ...                </Text>
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
               Role of Green Engineering/ Chemistry in promoting sustainability practices                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
              Recent thrusts on sustainability and clean development / manufacturing mechanisms have brought into focus...       
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
               Flow Chemistry leading to Green Re-Engineering of Chemical Plants Flow Reactors: Recent advances & Scale-up in India Vijay Kirpalani                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
              Re-engineering of  existing chemical plants ( and “Greengineering” of new projects) using Flow Chemistry...                </Text>
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
