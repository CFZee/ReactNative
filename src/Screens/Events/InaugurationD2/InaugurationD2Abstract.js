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

  constructor(props) {
    super();
    this.state = { dataSource: [] };
  }
  componentDidMount() {
    abstractInfo().then((data) => {
      let InaugurationAbstractDetails = data;
      console.log(InaugurationAbstractDetails);
      this.setState({
        dataSource: InaugurationAbstractDetails
      });
    });

  }

  AbstractInfoScreen1 = () => {
    this.props.navigation.navigate('InaugurationAbstractDetail', {
        userName: "Mr. Siddalingesha",
        userDesignation:"Director.",
        userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/10/Siddalingesha.png",
        userOrganization:"Indian Process Safety Centre, India ",
        InaugurationAbstractDetail:"Almost all the organization dedicated to excellence strives for continuous improvement, and nowhere are the stakes higher than when it comes to safety. The chemical industry has developed Process Safety Management (PSM) and invest considerable resources to prevent incidents. The challenge has been to design and implement universally effective process safety management systems. As long as incidents continue to occur, it is clear that industry has not fully achieved its safety goals. /n Within Process safety; “Basis of safety” is an approach that encourages the designer to attempt to eliminate or minimize hazards identified at each stage in the process life cycle, and at every level of process and plant design, rather than accepting the existence of the hazards and designing safety systems to control those hazards. It may not always be feasible to eliminate or reduce hazards, but the “Basis of safety” philosophy requires that this be attempted before moving on to specification of risk management equipment and procedures. Note that describing a process as “inherently safer” can only be done in the context of specific hazard or subset of hazards and that management of all hazards must be	considered in order to design a safer process. Few examples are discussed where this philosophy is employed.",
        abstractName:"Basis of Safety"
    })
}
AbstractInfoScreen2 = () => {
  this.props.navigation.navigate('InaugurationAbstractDetail', {
      userName: "Dr. Chuck Orella",
      userDesignation:"Director Chemical Engineering R&D",
      userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/10/Dr.-Chuck-Orella.png",
      userOrganization:"Merck & Co. Inc., USA ",
      InaugurationAbstractDetail:"The effort to improve containment and protect employees handling pharmaceutically active materials changed course in the 1990’s.  This review of changes made in our pilot plants as expectations grew for reduced risk and improved protection of workers will include an overview, highlights, examples and lessons.  The examples and lessons will illustrate the challenges of applying innovative containment technologies to a wide variety of process applications, along with the interplay of procedures and human behaviors.  And of course, understanding the past is helpful in preparing for the future that has yet to unfold.",
      abstractName:"Improved Containment Journey for Powder Handling in a Pharmaceutical Pilot Plant  "
  })
}
AbstractInfoScreen4 = () => {
  this.props.navigation.navigate('InaugurationAbstractDetail', {
      userName: "Mr. D. K. Rana  ",
      userDesignation:"Director",
      userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/08/Mr-D-K-Rana.png",
      userOrganization:"Indian Process Safety Centre, India ",
      InaugurationAbstractDetail:" Heubach Colour Pvt. Ltd. is 600 years old Germany based multinational company engaged in the manufacturing of organic Pigments. We have three manufacturing locations in GIDC, Ankleshwar, Gujarat.'/n' In CPC Pigments synthesis major challenge is  Ammonical Nitrogen & refractory COD in waste water. We have characterized and segregated different wastewater streams viz. Spent Aluminium Chloride stream generated from Green pigment manufacturing, Ammonium Carbonate solution generated from CPC Blue  manufacturing process, Acidic Mother Liquor generated from purification step of CPC Blue.'/n' INTEGRATED WASTE MANAGEMENT '/n' Integrated waste Management is excellent example of treating one waste with other & make useful product. Ammonium Carbonate solution gets generated from CPC Blue synthesis.  Ammonium Carbonate solution is  converted  to Ammonia Liquor (24%), which is a useful by-product & soda ash solution is generated in this process.  Soda Ash  is used to treat  Aluminium Chloride solution which is generated during synthesis of CPC Green and yields  Aluminium Hydroxide. '/n' GAC - GRANULAR ACTIVATED CARBON:  In addition to the above the installation of Granular Activated Carbon columns allowed us to bring down the refractory COD. Adsorption on GAC is an important option in wastewater treatment processes for the removal of organic pollutants. GAC adsorption is a state of the art technology for a broad spectrum of waste-water. GAC is reliable, cost effective & environment friendly solution.  Thermal Reactivation of GAC reduces operating cost.",
      abstractName:"ENVIRONMENT  MANAGEMENT & SUSTAINABILITY - HEUBACH CASE STUDY"
  })
}
AbstractInfoScreen3 = () => {
  this.props.navigation.navigate('InaugurationAbstractDetail', {
      userName: "Dr. David Constable  ",
      userDesignation:"Science Director",
      userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/10/David-Constable.jpg",
      userOrganization:"ACS-Green Chemistry Institute, USA ",
      InaugurationAbstractDetail:"Inaugurationcatalysis over past few years has matured as an essential, competitive and cost-effective alternative for chemical synthesis, in diverse applications, across industries. With unparallel selectivity and Inaugurationdegradable nature, they can furnish the Sustainable Processes. Hydrolases, although most explored class of enzymes at academic level, are becoming now, Industrially proven candidates. Moreover, successful to set excellent examples for other Classes of Inaugurationcatalyst, to evolve expedite way. Irrespective of whether its Pharmaceutical or Speciality chemical industry, the knowledge is available now, to take a Inaugurationcatalytic process from Concept to Commercialization including downstream regulatory requirements.  ",
      abstractName:"Inaugurationcatalysis – Sustainable Solution Across Industries "
  })
}
AbstractInfoScreen5 = () => {
  this.props.navigation.navigate('InaugurationAbstractDetail', {
      userName: "Mr. Sushil Kharkwal",
      userDesignation:"Sr. Vice President - Inauguration",
      userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/08/Sushil-Kharkwal.jpg",
      userOrganization:"PI Industries Ltd., India",
      InaugurationAbstractDetail:"Sustainability for a chemical industry is a very vast subject, which includes issues spanning from industry level to the global environment levels. It deals with practices related to social welfare, financial performance, labour practices, supply chain management, governance mechanisms along with Inauguration performance. While all the aspects of sustainability are important in long run, for ensuring operational sustainability of any chemical industry, major issues of paramount concerns revolve around: '/n'a)	Compliance to environmental norms so that no legal action is initiated against the industry leading to temporary or long term discontinuation of operation '/n'b)	No major case of process safety incident, involving gas leak, fire, explosion etc. takes place, leading to off-site implication '/n'c)	No issue of social unrest takes place against industry '/n'To meet these three objective, a robust compliance monitoring system, process safety management system, emergency preparedness system and a targeted CSR program is needed. The paper illustrates experiences of PI Industries in taking care of these critical issues of operational sustainability.",
      abstractName:"Best Inauguration practices for sustainable operations in a chemical industry "
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
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45 }}>
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
        {/* <View>
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
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-50 }}>
                Basis of Safety
                </Text>
              </View>
              <View>
                <Text style={{
                  fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',
                  lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45
                }}>
                  Almost all the organization dedicated to excellence strives for continuous improvement, and nowhere are the stakes higher than when it comes to safety...
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
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-50 }}>
                Improved Containment Journey for Powder Handling in a Pharmaceutical Pilot Plant
                </Text>
              </View>
              <View>
                <Text style={{
                  fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',
                  lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45
                }}>
              The effort to improve containment and protect employees handling pharmaceutically active materials changed course in the 1990’s...
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
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-50 }}>
                Sustainable Chemistry is Safer Chemistry – Linking Inherent Safety and Green Chemistry for more Sustainable Chemistry Outcomes
                </Text>
              </View>
              <View>
                <Text style={{
                  fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',
                  lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45
                }}>
            The practice of chemistry in industrial settings has been plagued by a series of major failures in environmental, health and safety and...                </Text>
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
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-50 }}>
                ENVIRONMENT  MANAGEMENT & SUSTAINABILITY - HEUBACH CASE STUDY
                </Text>
              </View>
              <View>
                <Text style={{
                  fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',
                  lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45
                }}>
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
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-50 }}>
                Best Inauguration practices for sustainable operations in a chemical industry
                </Text>
              </View>
              <View>
                <Text style={{
                  fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',
                  lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45
                }}>
             Sustainability for a chemical industry is a very vast subject, which includes issues spanning from industry level to the global environment levels...                </Text>
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
      </View> */}

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

};
