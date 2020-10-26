import React, {Component}from 'react';
import { CardItem,Container, Header, Left, Body, Right, Button, Text,Separator} from 'native-base';
import { View,TouchableOpacity,FlatList,Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createAppContainer, StackActions,createBottomTabNavigator} from 'react-navigation'; 
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../src/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);
import { ScrollView } from 'react-native-gesture-handler';
import { Dimensions, PixelRatio } from 'react-native';
import { partnersInfo, sponsorsInfo, exhibitorsInfo } from '../Services/API';
import themes from '../components/themes/Variables.js';
// import Dashboard from './Dashboard';
import Search from "./Search";
import Profile from './Profile';
import Favorites from './Favorites';
import Speakers from './Speakers';
import FloorPlan3 from './FloorPlan/FloorPlan3.js';


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

class SponsorsPartnerExhibitor extends Component {

  constructor() {
    super();
    this.state = { sponsorsdata: [] },
      this.state = { partnersdata: [] },
      this.state = { exhibitorsdata: [] },


      this.state = {
        customStyleIndex: 0,
      };
    this.state = {
      show: true,
      show2: true,
      show3: true,
    };
    this.state = {
      toggle: true,
      toggle2: false,
      toggle3: false
    }
  }

  componentDidMount() {
    this.setState({show:true})
    sponsorsInfo().then((data) => {
      let sponsorsDetails = data;
      console.log(sponsorsDetails);
      this.setState({
        sponsorsdata: sponsorsDetails
      });
    });
    partnersInfo().then((data) => {
      let partnersDetails = data;
      console.log(partnersDetails);
      this.setState({
        partnersdata: partnersDetails
      });
    });
    exhibitorsInfo().then((data) => {
      let exhibitorsDetails = data;
      console.log(exhibitorsDetails);
      this.setState({
        exhibitorsdata: exhibitorsDetails
      });
    });

  }

  renderSponsorsDetails = ({ item }) => {
    return (
      <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'http://165.22.216.45/wp-content/uploads/2019/09/BASF.jpg' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                  BASF Chemicals India Pvt. Ltd
                </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                Godrej Industries Ltd (Chemicals) is part of Godrej Group having diversified businesses. We are proud to have pioneered the manufacturing of oleochemicals in India, back in 1963. Today, we are one of India’s leading oleochemicals players and manufacture and market over 100 chemicals for use in more than 24 major applications. We are expanding our reach globally and our products are exported to over 80 countries in North and South America, Asia, Europe, Australia and Africa. Our state-of-the-art manufacturing facilities are located in India at Valia in Gujarat and Ambernath in Maharashtra.
                </Text>
              </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
    );
  }

  renderPartnersDetails = ({ item }) => {
    return (
      <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: item.partner_logo.guid }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: 12.5, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family }}>
                  {item.partner_name}
                </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                  {item.partner_description}
                
                </Text>
              </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} />
        </CardItem>
      </View>
    );
  }

  renderExhibitorsDetails = ({ item }) => {
    return (
      <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1 }}>
            <Image source={{ uri: item.exhibitor_logo.guid }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1,marginRight:-50 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: 12.5, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family }}>
                  {item.exhibitor_name}
                </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                  {item.exhibitor_description}
                </Text>
              </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} />
        </CardItem>
      </View>
    );
  }

  ShowHideComponent = () => {
    const newState = !this.state.toggle;
    this.setState({ toggle: newState })
    this.setState({ toggle: newState })
    if (this.state.show == false) {
      this.setState({ show: true });
      this.setState({ show2: false });
      this.setState({ show3: false });
    } else {
      this.setState({ show: false });
    }
    if (this.state.toggle == false) {
      this.setState({ toggle: true });
      this.setState({ toggle2: false });
      this.setState({ toggle3: false });
    }
    else {
      this.setState({ toggle: false })
    }
  };

  ShowHideComponent2 = () => {
    if (this.state.show2 == false) {
      this.setState({ show2: true });
      this.setState({ show: false });
      this.setState({ show3: false });

    } else {
      this.setState({ show2: false });
    }
    const newState = !this.state.toggle2;
    this.setState({ toggle2: newState })
    if (this.state.toggle2 == false) {
      this.setState({ toggle2: true });
      this.setState({ toggle: false });
      this.setState({ toggle3: false });

    }
    else {
      this.setState({ toggle2: false })
    }

  };

  ShowHideComponent3 = () => {
    if (this.state.show3 == false) {
      this.setState({ show3: true });
      this.setState({ show: false });
      this.setState({ show2: false });
    } else {
      this.setState({ show3: false });
    }
    const newState = !this.state.toggle3;
    this.setState({ toggle3: newState })
    if (this.state.toggle3 == false) {
      this.setState({ toggle3: true });
      this.setState({ toggle: false });
      this.setState({ toggle2: false });

    }
    else {
      this.setState({ toggle3: false })
    }
  };


  render() {
    const { toggle } = this.state;
    const { toggle2 } = this.state;
    const { toggle3 } = this.state;
    const textColor = toggle ? "white" : "#447A47";
    const buttonbg = toggle ? "transparent" : "#D9DCDE";
    const borderbg = toggle ? "transparent" : "transparent";
    const textColor2 = toggle2 ? "white" : "#447A47";
    const buttonbg2 = toggle2 ? "transparent" : "#D9DCDE";
    const borderbg2 = toggle2 ? "transparent" : "transparent";
    const textColor3 = toggle3 ? "white" : "#447A47";
    const buttonbg3 = toggle3 ? "transparent" : "#D9DCDE";
    const borderbg3 = toggle3 ? "transparent" : "transparent";
    return (
      <Container style={{backgroundColor:'#D9DCDE',flex: 1}}>
      <ScrollView>
          <LinearGradient start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }} colors={['#88BE49', '#447A47']} style={{ flex: 1 }}>
            <Header transparent androidStatusBarColor='transparent'
              style={{ height: 100 }}>
              <Left style={{ flex: 1, alignSelf: 'center' }}>
                <Button transparent style={{ width: widthPercentageToDP('20%') }} onPress={() => this.props.navigation.dispatch(StackActions.popToTop())}>
                  <Icon name='back-arrow' style={{ color: themes.colors.INIT_COLOR_White, fontSize: themes.fonts.INIT_FONT_SIZE_IconSize_M }} />
                </Button>
              </Left>
              <Body style={{ flex: 1, alignSelf: 'center' ,marginLeft:10}}>
                <Text style={{ marginLeft:20,color: themes.colors.INIT_COLOR_White, fontSize: themes.fonts.INIT_FONT_SIZE_XL, alignSelf: 'center', width:widthPercentageToDP('70%') ,fontFamily: themes.fonts.INIT_FONT_Family}}>                Industry Partners,</Text>
                <Text style={{ marginLeft:20,color: themes.colors.INIT_COLOR_White, fontSize: themes.fonts.INIT_FONT_SIZE_XL, alignSelf: 'center', width:widthPercentageToDP('70%') ,fontFamily: themes.fonts.INIT_FONT_Family}}>Supporters & Collaboratos & Exhibitors </Text>
              </Body>
              <Right style={{ flex: 1, alignSelf: 'center' }}>
              
              </Right>
            </Header>
          </LinearGradient>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <Left style={{ flex: 1, paddingLeft: 10 }}>
              <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#88BE49', '#447A47']} style={{ borderRadius: 100 }}>
                <TouchableOpacity disabled={this.state.show2 && this.state.show3} onPress={this.ShowHideComponent} style={{ borderRadius: 100, backgroundColor: buttonbg, justifyContent: 'space-between', padding: 15, borderColor: borderbg, borderWidth: 1,width:widthPercentageToDP('30%') }}>
                  <Text style={{ color: textColor, textTransform: 'capitalize',marginLeft:10, fontSize: themes.fonts.INIT_FONT_SIZE_L,alignSelf:'center' ,fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('30%')}}>Industry Partners</Text>
                </TouchableOpacity>
              </LinearGradient>
            </Left>
            <Body style={{ flex: 1, alignSelf: 'center' }}>
              <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#88BE49', '#447A47']} style={{ borderRadius: 100 }}>
                <TouchableOpacity disabled={this.state.show && this.state.show3} onPress={this.ShowHideComponent2} style={{ borderRadius: 100,backgroundColor: buttonbg2, justifyContent: 'space-between', padding: 8, borderColor: borderbg2, borderWidth: 1,width:widthPercentageToDP('30%')  }}>
                  <Text style={{ marginLeft:10,color: textColor2, textTransform: 'capitalize', marginLeft:10, fontSize: themes.fonts.INIT_FONT_SIZE_L ,fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('30%')}}>   Supporters</Text>
                  <Text style={{ marginLeft:10,color: textColor2, textTransform: 'capitalize', marginLeft:10, fontSize: themes.fonts.INIT_FONT_SIZE_L,fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('30%')}}>& collaboratos</Text>

                </TouchableOpacity>
              </LinearGradient>
            </Body>
            <Right style={{ flex: 1, paddingRight: 10 }}>
              <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#88BE49', '#447A47']} style={{ borderRadius: 100 }}>
                <TouchableOpacity disabled={this.state.show2 && this.state.show} transparent onPress={this.ShowHideComponent3} style={{ borderRadius: 100, backgroundColor: buttonbg3, justifyContent: 'space-between', padding: 15, borderColor: borderbg3, borderWidth: 1,width:widthPercentageToDP('30%') }}>
                  <Text style={{ color: textColor3, textTransform: 'capitalize', fontSize: themes.fonts.INIT_FONT_SIZE_L, paddingHorizontal: 5, marginLeft: 10, marginRight: 5,fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('20%') }}>Exhibitors</Text>
                </TouchableOpacity>
              </LinearGradient>
            </Right>
          </View>
          {this.state.show ? (
            <View style={{marginTop:10}}>
              <Separator transparent style={styles.container2}>
            <Text style={{fontWeight: 'bold',color: themes.colors.INIT_COLOR_Blue,fontFamily: themes.fonts.INIT_FONT_Family,fontSize: themes.fonts.INIT_FONT_SIZE_XL}}>Sustainability Partners </Text>
          </Separator>
          <View>
          <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'http://165.22.216.45/wp-content/uploads/2019/09/excellogo.png' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                Excel Industries Limited       
                         </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                We are Excel Industries Ltd., one of India’s first domestic chemical manufacturers. We are pioneers in indigenous chemical technology and sustainable waste management. Innovation has always been a key driving force at Excel. Since our inception in 1941, we have achieved hundreds of chemical process breakthroughs, steadily contributing to the enhancement of technology knowhow in the nation
                </Text>
              </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
      <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'http://165.22.216.45/wp-content/uploads/2019/09/godrej_large.jpg' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                Godrej Industries Limited
                </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                Godrej Industries Ltd (Chemicals) is part of Godrej Group having diversified businesses. We are proud to have pioneered the manufacturing of oleochemicals in India, back in 1963. Today, we are one of India’s leading oleochemicals players and manufacture and market over 100 chemicals for use in more than 24 major applications. We are expanding our reach globally and our products are exported to over 80 countries in North and South America, Asia, Europe, Australia and Africa. Our state-of-the-art manufacturing facilities are located in India at Valia in Gujarat and Ambernath in Maharashtra.
                </Text>
              </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
            </View>
            <Separator transparent style={styles.container2}>
            <Text style={{fontWeight: 'bold',color: themes.colors.INIT_COLOR_Blue,fontFamily: themes.fonts.INIT_FONT_Family,fontSize: themes.fonts.INIT_FONT_SIZE_XL}}>Awards Evening Partners </Text>
          </Separator>
          <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'http://165.22.216.45/wp-content/uploads/2019/09/Awards-Evening-Partner.jpg' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                PI Industries Limited                                                         </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                We are the pioneers in the introduction of granular formulations in India and are the largest sellers in this segment. We have scaled new heights by becoming the biggest producer of generic molecules like Profenofos, Ethion, Phorate.
                                </Text>
                 </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
      <Separator transparent style={styles.container2}>
            <Text style={{fontWeight: 'bold',color: themes.colors.INIT_COLOR_Blue,fontFamily: themes.fonts.INIT_FONT_Family,fontSize: themes.fonts.INIT_FONT_SIZE_XL}}>GC & E Tools Resources Workshop Partners </Text>
          </Separator>
          <View>
          <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'http://165.22.216.45/wp-content/uploads/2019/10/acs.png' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                ACS-Chemistry for Life                                                      </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                We’re recognized as a leading publisher of authoritative scientific information. Our 50+ peer-reviewed journals are ranked the “most-trusted, most-cited and most-read.”We empower our members to advance chemistry, elevate their career potential, expand their networks, inspire future generations, collaborate globally and build communities that provide scientific solutions.We provide broader networks that facilitate connections and open doors in a way no other professional organization can match!
                </Text>
                 </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
            </View>
            <Separator transparent style={styles.container2}>
            <Text style={{fontWeight: 'bold',color: themes.colors.INIT_COLOR_Blue,fontFamily: themes.fonts.INIT_FONT_Family,fontSize: themes.fonts.INIT_FONT_SIZE_XL}}>Green Chemistry Partners</Text>
          </Separator>
          <View>
          <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'http://165.22.216.45/wp-content/uploads/2019/09/hohenstein-vector-logo.png' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                Hohenstein Textile Institute GmbH & Co.KG
                                                         </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                We are a family-owned company that has specialised for over 70 years in the testing, certification and research of all kinds of textile products. As an internationally recognised and reliable partner, we support companies along the entire supply chain in successfully bringing their products to the market - through new insights from our research, to the performance of required tests and issuing of independent certificates, through to product launch and marketing at the point of sale.Now run by the third generation, approx. 1,000 employees work at our headquarters in Bönnigheim as well as in our laboratories and offices around the world on tailor-made test and service offerings for your individual requirements.                </Text>
              </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
      <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'https://www.hikal.com/public/front_assets/images/hikal-straight-logo.png' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                Hikal Ltd
                </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                Hikal Limited is engaged in the manufacturing of various chemical intermediates, specialty chemicals, active pharmaceutical ingredients (APIs) and contract research activities. The Company offers pharmaceuticals and agrochemicals. Its segments include Crop Protection and Pharmaceuticals. It offers agrochemicals, including active ingredients, such as Ammonium dithiocarbamate, Amitrole Tech, Diuron Tech, Ethion Tech, Imazalil Tech, Isoproturon Tech, Meta chloro Aniline (MCA), Quinalphos Tech and Temephos Tech, and intermediates and specialty chemicals, such as Phenyl-2-(phenylthio)-phenyl carbamate, 4-(Benzyloxy) Aniline Hydrochloride, N-Benzylpiperidine-4-carboxaldehyde, 3-Chloroaniline and 4 Aminobenzylamine. Its APIs include Gabapentin, Pregabalin, Levetiracetam, Quetiapine Fumarate, Memantine Hydrochloride, Venlafaxine Hydrochloride and Donepezil Hydrochloride. The Company operates in geographical areas, including India, Europe, the United States, Canada and South East Asia.
                  </Text>
              </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
            </View>
            <Separator transparent style={styles.container2}>
            <Text style={{fontWeight: 'bold',color: themes.colors.INIT_COLOR_Blue,fontFamily: themes.fonts.INIT_FONT_Family,fontSize: themes.fonts.INIT_FONT_SIZE_XL}}>Cause Partners</Text>
          </Separator>
            <View>
            <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'http://165.22.216.45/wp-content/uploads/2019/09/BASF.jpg' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                  BASF Chemicals India Pvt. Ltd
                </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                At BASF, we create chemistry for a sustainable future. We combine economic success with environmental protection and social responsibility. BASF has successfully partnered India’s progress for over 127 years. In 2019, BASF India Limited, the flagship company of BASF in India, celebrates 75 years of incorporation in the country. BASF India generated sales of around €1.4 billion.
                </Text>
              </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
            <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'http://165.22.216.45/wp-content/uploads/2019/09/loreal_india_in_black.jpg' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                loreal-india-pvt-ltd
                                         </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                L’Oreal’s Research and Innovation teams apply the principles of sustainable and responsible innovation on a daily basis. Listening to the expectations of consumer, they are committed to the pursuit of ethical beauty that respects diversity. In its research activities, the group is particularly vigilant in five areas: human health (employees, consumers, professionals), environmental protection, ethics, fair trade and consideration of the social and societal impact of Innovation.
                </Text>
              </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
            <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'http://165.22.216.45/wp-content/uploads/2019/10/solvay.jpg' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                Solvay                                                      </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                Solvay is a multi-specialty chemical company committed to developing chemistry that addresses key societal challenges. The Group makes sustainable chemistry a strong focus of innovation and growth. One of its main R&I axis looks at developing sustainable and innovative organic molecules providing competitive bio-based products are used in multiple market applications such as healthcare, agriculture, consumer goods. Solvay is listed on the World Dow Jones Sustainability Index (DJSI) underlining the Group’s commitment to improve its performance in sustainable development as part of its business strategy.
                </Text>
                 </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
            <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'http://165.22.216.45/wp-content/uploads/2019/09/warner-babcock-institute-for-green-chemistry_-_logo.jpg' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                Warner Babcock Institute of Green Chemistry                                                   </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                The Warner Babcock Institute for Green Chemistry combines the expertise of talented and passionate scientists and engineers with the experience of an innovative and dynamic leadership team. We share a commitment to our clients, to society, and to the environment to create technologies and processes that are functional, cost-effective, and environmentally benign.
                </Text>
                 </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
            <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'http://165.22.216.45/wp-content/uploads/2019/09/Newreka.png' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                Newreka Green Synth Technologies Pvt. Ltd.                                                         </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                It all started in 1998, in a hostel room at IIT Mumbai. A conversation that debated the basic idea that the chemicals industry viewed pollution as something that needs to be controlled, while it should be prevented by recycling at source.So it was in 1999, that this team of IIT technocrats came together, to use their expertise in chemistry and make the world a cleaner and greener place…and Newreka was born. The name is a combination of  “Nature’s Enthusiastic World” and “Eureka”, the ancient Greek word to celebrate discovery. And what a revelation it truly was…From its modest beginnings as a consultancy, the company now transformed into an award winning enviropreneur!  Its unmatched knowledge base of over 50,000 experiments conducted by a dedicated team of 50 Green Chemists and Green Chemical Engineers, State-of-the-Art Production facilities and Research and Development centres, contribute to its status as one of the pioneers of this technology in India. .Wherever in the world you may be, our expert care is just a phone call away. Our list of over 50 satisfied customers includes.             
                </Text>
                 </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
      </View>
      </View>
      
                ) : null}
          {this.state.show2 ? (
            <View>
              <Separator transparent style={styles.container2}>
            <Text style={{fontWeight: 'bold',color: themes.colors.INIT_COLOR_Blue,fontFamily: themes.fonts.INIT_FONT_Family,fontSize: themes.fonts.INIT_FONT_SIZE_XL}}>Co - Organisers</Text>
          </Separator>
          <View>
          <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'http://165.22.216.45/wp-content/uploads/2019/09/department-of-chemicals-petrochemicals-india.png' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                Ministry of Chemicals & …ilizers, Govt. of India                                                        </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                Department of Fertilizers comes under the ambit of Ministry of Chemicals & Fertilizers which is headed by a Cabinet Minister who is assisted by two Ministers of State.Secretary to the Government is the administrative head of the Department who is assisted by one Special Secretary and Financial Adviser and 3 Joint Secretaries. An Economic Adviser who is a Joint Secretary level officer advises the department on various economic issues which have economic implications.
               </Text>
                 </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
      <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'http://165.22.216.45/wp-content/uploads/2019/09/gcf-logo.png' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                Green ChemisTree Foundation      
                         </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                Green ChemisTree Foundation is a registered not-for-profit organization, with the vision to bring forth technical know-how regarding green chemistry and engineering applications amongst the chemical community including Industry, Academia, Research Institutes, Govt. bodies, and Students.The Green ChemisTree Foundation has emerged as a focused platform to engage the Industry and Non-Industry groups in exploring the world of Green Chemistry and Engineering practices, as a possible way of doing chemistry and impacting the collective 'green' conciousness across the value chain of the Chemical Industry :- by creating a new DNA of thoughts - for preventing, providing, and partnering- by bringing together and bridging various Chemical communities (industry, academia, research  laboratories & govt. bodies)- by bringing into focus the industrialization and implementation of green chemistry and engineering
                </Text>         
               </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
            </View>
            <Separator transparent style={styles.container2}>
            <Text style={{fontWeight: 'bold',color: themes.colors.INIT_COLOR_Blue,fontFamily: themes.fonts.INIT_FONT_Family,fontSize: themes.fonts.INIT_FONT_SIZE_XL}}>Supporters</Text>
          </Separator>
          <View>
          <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'http://165.22.216.45/wp-content/uploads/2019/09/DMAI-logo.png' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                DMAI- Dyestuff Manufactu…ion of India Directions                                                      </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                The Dyestuffs Manufacturers Association of India (DMAI), established in 1950, is the Apex Body representing Dyestuffs, Pigments, Optical Brighteners and Dyes Intermediates Manufacturers from all over the country, covering all sectors of the Colorants Industry – small scale units to multinationals; a fact well recognized by the Government authorities. DMAI regularly takes up various issues of concern to the Colorant Industry with the respective Government Agencies. Department of Chemicals and Petrochemicals, Ministry of Chemicals and Fertilizers, Government of India seeks DMAI opinion before framing policies concerning Colorants Industry.
                </Text>
                 </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
          <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'http://165.22.216.45/wp-content/uploads/2019/09/MoEFCC-LogoCDRx6.png' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                Ministry of Environment, Forests & Climate Change                                                  </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                The Ministry of Environment, Forest and Climate Change (MoEFCC) is the nodal agency in the administrative structure of the Central Government for the planning, promotion, co-ordination and overseeing the implementation of India’s environmental and forestry policies and programmes.The primary concerns of the Ministry are implementation of policies and programmes relating to conservation of the country’s natural resources including its lakes and rivers, its biodiversity, forests and wildlife, ensuring the welfare of animals, and the prevention and abatement of pollution. While implementing these policies and programmes, the Ministry is guided by the principle of sustainable development and enhancement of human well-being.
                </Text>
                 </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
          <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'http://165.22.216.45/wp-content/uploads/2019/09/midclogonew-120331051441-phpapp02-thumbnail-4.jpg' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                Maharashtra Industrial Development Corporation                                                       </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                Set up industrial areas for planned and systematic industrial development.To function as a special planning authority in development of industrial areas  “Prosperity to all through Industrialization” is the corporate Philosophy of MIDC
                               </Text>
                 </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
            </View>
               <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'http://165.22.216.45/wp-content/uploads/2019/10/maharashtra-pollution-control-board-consultancy-service-500x500.png' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                Maharashtra Pollution Control Board                                                      </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                Maharashtra Pollution Control Board (MPCB) is implementing various environmental legislations in the state of Maharashtra, mainly including Water (Prevention and Control of Pollution) Act, 1974, Air (Prevention and Control of Pollution) Act, 1981, Water (Cess) Act, 1977 and some of the provisions under Environmental (Protection) Act, 1986 and the rules framed there under like, Biomedical Waste (M&H) Rules, 1998, Hazardous Waste (M&H) Rules, 2000, Municipal Solid Waste Rules, 2000 etc. MPCB is functioning under the administrative control of Environment Department of Government of Maharashtra.
                                               </Text>
                 </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
      <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'http://165.22.216.45/wp-content/uploads/2019/09/Biomimicry-Workshop-partner.png' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                Biomimicry 3.8                                                    </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                The world’s leading bio-inspired consultancy offering innovation, education, and inspirationAt Biomimicry 3.8, we’re driven by the fact that Life has an incredible amount to teach us about living well on Earth, in no small part due to the fact that it’s been thriving here for 3.8 billion years. Our founders, staff, and providers work around the globe helping others use biomimicry innovate for a better world.
                </Text>
                 </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
      <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'http://165.22.216.45/wp-content/uploads/2019/09/Enterprenuership-Workshop-partner.jpg' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                ISC3-International Susta…ry Collaborative Centre                                                    </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                ISC3 – the International Sustainable Chemistry Collaborative Centre – promotes and develops Sustainable Chemistry solutions worldwide. Collaboration across sectors and actors is the key principal of this independent institution. ISC3 provides a platform where all players from policy, civil society, industry and academia can come together to exchange and develop new innovative solutions for the most pressing problems of our time. We promote a new system thinking along the life-cycle of products and processes in order to contribute to a circular economy.
                </Text>
                 </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
      <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'http://165.22.216.45/wp-content/uploads/2019/09/DST-logo.png' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                Department of Science & Technologies                                                        </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                Department of Science & Technology (DST) was established in May 1971, with the objective of promoting new areas of Science & Technology and to play the role of a nodal department for organising, coordinating and promoting S&T activities in the country. The Department has major responsibilities for specific projects and programmes as listed below:Formulation of policies relating to Science and Technology.Matters relating to the Scientific Advisory Committee of the Cabinet (SACC).Promotion of new areas of Science and Technology with special emphasis on emerging areas.
                </Text>

                 </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
      <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'http://165.22.216.45/wp-content/uploads/2019/09/Beyond-Benign.png' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                beyond benign-green chemistry education                                                    </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                Beyond Benign develops and disseminates green chemistry and sustainable science educational resources that empower educators, students and the community at large to practice sustainability through chemistry.We work directly with educators and a network of strategic partners focused on science education, sustainability, innovation and initiatives supporting human and environmental health to provide an educational continuum from K-12 to higher education with an important community engagement component.
                </Text>
                 </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
      <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'http://165.22.216.45/wp-content/uploads/2019/09/ACS_Chemistryfor-Life_Logo.jpg' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                ACS Green Chemistry Institute                                                   </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                We’re recognized as a leading publisher of authoritative scientific information. Our 50+ peer-reviewed journals are ranked the “most-trusted, most-cited and most-read.”We empower our members to advance chemistry, elevate their career potential, expand their networks, inspire future generations, collaborate globally and build communities that provide scientific solutions.We provide broader networks that facilitate connections and open doors in a way no other professional organization can match!
                </Text>
                 </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
      <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'http://165.22.216.45/wp-content/uploads/2019/09/PMFAI.jpg' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                PMFAI- Pesticides Manufa…rs Association of India                                                      </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                The Pesticides Manufacturers & Formulators Association of India (PMFAI) represents the over 250 India-based pesticide manufacturers, formulators and traders. PMFAI member companies manufacture, formulate, sell and distribute almost all the crop protection products that has potential in India.PMFAI works with a variety of research and social society partners as well as with a number of pesticide associations through out the world having common interest. Transparency and end user benefit are imbibed to the core of our work.PMFAI has permanent cooperation with the CCPIA, etc
                </Text>
                 </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
      <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'http://165.22.216.45/wp-content/uploads/2019/10/acs.png' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                American Chemical Society                                                      </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                The American Chemical Society (ACS) is a scientific society based in the United States that supports scientific inquiry in the field of chemistry. Founded in 1876 at New York University, the ACS currently has nearly 157,000 members at all degree levels and in all fields of chemistry, chemical engineering, and related fields. It is the world's largest scientific society by membership.
                </Text>
                 </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
  
      <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'http://165.22.216.45/wp-content/uploads/2019/09/ISCMA-logo.gif' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                ISCMA-Indian Speciality …nufacturers Association                                                      </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                ISCMA-Indian Speciality Chemical Manufacturers Association To promote co-operation among Indian firms, companies corporations or persons connected with the speciality chemical industry as the manufacturers with a view to their adopting a common policy and collectively taking such steps as may be considered necessary to safeguard and further the interest of the speciality chemical industry.To promote and preserve the high standard of business integrity and principles amongst those engaged in the industry connected with speciality chemicals in India.To encourage and promote the development of industry connected with speciality chemicals.
                </Text>
                 </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
      <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'http://165.22.216.45/wp-content/uploads/2019/09/ICC-logo.jpg' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                ICC-Indian Chemical Council                                                      </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                The apex national body representing all branches of the Chemical Industry in India such as Organic & Inorganic Chemicals, Plastics & Petrochemicals & Petroleum Refineries, Dyestuffs & Dye-intermediates, Fertilizers & Pesticides, Specialty Chemicals, Paints etc. The Indian Chemical Council is dedicated to the growth of the Indian Chemical Industry. Established in 1938, ICC has over the years grown its functions and offerings to cater to the varying needs of the Indian Chemical Industry.
                </Text>
                 </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
      <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'http://165.22.216.45/wp-content/uploads/2019/09/bdma_logo.jpg' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                BDMA-Bulk Drug Manufacturers Association (India)                                                      </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                To provide a platform for encouraging discussion among the member industries on various subjects concerning the Bulk Drug Industry with a focus on formulating the industries’ views on various matters such as national, technical, economic and commercial policies that concern the growth of the Bulk Drug industry in the country. To assist, cooperate and represent the collective opinion of the association members in formulation and execution of legislative measures by state or Central government authorities/regulators that affect, directly or indirectly, the industry, trade or commerce of the Bulk Drug sector.
                </Text>
                 </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
      <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'http://165.22.216.45/wp-content/uploads/2019/09/Chemical-Weekly.jpg' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                Chemical Weekly                                                      </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                Chemical Weekly has been unfailingly serving the cause of the chemical industry, since 1955, to be now accorded a status few industry publications can claim to have! Sevak Publications, the flagship of the group, was established in 1957 as a partnership firm, and today constitutes the hub of a few other business entities that offer a wide range of products and services for the chemical and allied industries
                </Text>
                 </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
      <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'http://165.22.216.45/wp-content/uploads/2019/09/Chemical_Watch_logo.png' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                Chemical Watch                                                      </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                Since 2007 Chemical Watch has played a pivotal role in supplying companies with our premium news service. Find out more about our service on this page or, for more information,Chemical Watch provides the global business community with the facts and perspectives it needs to achieve safer chemicals in products.We provide a 360 degree view of this agenda, impartially reporting on the actions and opinions of all stakeholders in our community. Our company has a strong shared sense of purpose, fuelled by motivated staff who want to make a difference with their work
                </Text>
                 </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
      <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'http://165.22.216.45/wp-content/uploads/2019/09/PSCI.png' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                PSCI-Pharmaceutical Supply Chain Initiative                                                     </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                The PSCI was formed as a non-profit business membership organization in 2006 and is legally established in the United States.Our vision is to establish and promote responsible practices that will continuously improve social, health, safety and environmental sustainable outcomes for our supply chains. This includes:Fair and safe work conditions and practicesResponsible business practicesEnvironmental sustainability and efficient use of resourcesThe purpose of the initiative is to bring together the pharmaceutical industry to define, implement, and champion responsible supply chain practices.
                </Text>
                 </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>

     
              </View>

          ) : null}
          {this.state.show3 ? (
            <View>
           <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'http://165.22.216.45/wp-content/uploads/2019/09/excellogo.png' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                Excel Industries Limited       
                         </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                We are Excel Industries Ltd., one of India’s first domestic chemical manufacturers. We are pioneers in indigenous chemical technology and sustainable waste management. Innovation has always been a key driving force at Excel. Since our inception in 1941, we have achieved hundreds of chemical process breakthroughs, steadily contributing to the enhancement of technology knowhow in the nation
                </Text>
              </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
      <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'http://165.22.216.45/wp-content/uploads/2019/10/acs.png' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                American Chemical Societ hemistry Institute, USA      
                         </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                The American Chemical Society (ACS) is a scientific society based in the United States that supports scientific inquiry in the field of chemistry. Founded in 1876 at New York University, the ACS currently has nearly 157,000 members at all degree levels and in all fields of chemistry, chemical engineering, and related fields. It is the world's largest scientific society by membership.
                </Text>
              </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
      <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'https://somaiya.com/sites/all/themes/godavari/logo.png' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                Godavari Biorefineries Ltd.
                </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                We are a biorefining company that produces sugar, other foods, biofuels, chemicals, power, compost, waxes, and related products, using sugarcane as the primary feedstock. Our aim is to engage in research and innovate by continuously making new products and entering new markets in order to derive the maximum value from our feedstock. Our research areas include sustainable farming, transformation of biomass (chemical, mechanical and biological), product development, and process optimization. Founded in 1939, we have been pioneers in the growing, processing, and utilization of biomass to make a wide variety of products.
                </Text>
              </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
      <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'data:image/png;base64,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' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                Novozymes South Asia Pvt. Ltd       
                </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                Novozymes started operations in India in 1983 and is the largest supplier of industrial enzymes and microorganisms in the region today. The region’s operations cover India, Sri Lanka, Bangladesh, Nepal and Bhutan. With over 500+ employees, Novozymes India has grown into an organization spread across three sites in Bangalore covering R&T, manufacturing, business functions and a shared service center. Some of the key business areas for Novozymes India are household care, textiles, food & beverages, oils & fats, baking and beverage alcohol. We use science to advance industries. Novozymes invests nearly 14 percent of its global revenue in Research and Technology annually, with one of the key R&T facilities located in Bangalore. Novozymes believes in positively contributing towards the sustainable future of the country. We work in close partnership with our customers and the global community to find biological answers for better lives in a growing world. 
                </Text>
              </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
      <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'http://165.22.216.45/wp-content/uploads/2019/09/Iosynth.png' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                IOSYNTH LABS PVT. LTD.      
                         </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                Iosynth provides a full range of biocatalysis services to pharmaceutical, agro and fine chemical companies. Team Iosynth leverages a strong track record of commercializing technologies along with deep enzyme industry insights to bring easy, accessible biocatalysis to India through partnerships with world leaders. Iosynth operates out of Bangalore, India
                </Text>
              </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
      <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'http://165.22.216.45/wp-content/uploads/2019/09/Advanced-Enzymes.jpg' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                Advanced Enzyme Technologies Ltd       
                         </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                Advanced Enzymes is a research driven company with global leadership in the manufacturing of enzymes. We are committed to providing eco-safe solutions to a wide variety of industries like human health care and nutrition, animal nutrition, baking, fruit & vegetable processing, brewing & malting, grain processing, protein modification, dairy processing, speciality applications, textile processing, leather processing, etc. 
                </Text>
              </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
      <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'http://165.22.216.45/wp-content/uploads/2019/09/excellogo.png' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                Hi Tech BioSciences India Ltd.      
                         </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                Hi Tech BioSciences is a technology company established with a vision of “sustainable development through research and technological interventions for overall wellness of the society and the environment”.The Biocatalysis division focusses on the development of different enzyme platforms for to address various synthetic chemistry problems using biocatalysis.
                </Text>
              </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
      <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'http://165.22.216.45/wp-content/uploads/2019/09/logo.png' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                IIT Bombay       
                         </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                Established in 1958, the second of its kind, IIT Bombay was the first to be set up with foreign assistance. The funds from UNESCO came as Roubles from the then Soviet Union. In 1961 Parliament decreed the  IITs as  ‘Institutes of National Importance'. Since then, IITB has grown from strength to strength to emerge as one of the top technical universities in the world.The institute is recognised worldwide as a leader in the field of engineering education and research. Reputed for the outstanding calibre of students graduating from its undergraduate and postgraduate programmes, the institute attracts the best students from the country for its bachelor's, master's and doctoral programmes. Research and academic programmes at IIT Bombay are driven by an outstanding faculty, many of whom are reputed for their research contributions internationally.
                </Text>
              </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
      <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'http://165.22.216.45/wp-content/uploads/2019/09/SE-Logo.jpg' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                Standard Enginners       
                         </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                Established in 1958, the second of its kind, IIT Bombay was the first to be set up with foreign assistance. The funds from UNESCO came as Roubles from the then Soviet Union. In 1961 Parliament decreed the  IITs as  ‘Institutes of National Importance'. Since then, IITB has grown from strength to strength to emerge as one of the top technical universities in the world.The institute is recognised worldwide as a leader in the field of engineering education and research. Reputed for the outstanding calibre of students graduating from its undergraduate and postgraduate programmes, the institute attracts the best students from the country for its bachelor's, master's and doctoral programmes. Research and academic programmes at IIT Bombay are driven by an outstanding faculty, many of whom are reputed for their research contributions internationally.
                </Text>
              </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
      <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'http://165.22.216.45/wp-content/uploads/2019/09/Metler-Tolledo.png' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                Mettler-Toledo India Pvt. Ltd.      
                         </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                METTLER TOLEDO is a leading global manufacturer of precision instruments and services for use in laboratories and manufacturing.Our offering to the industrial market includes industrial scales and terminals; software such as statistical quality control, formulation and batching; metal detectors, checkweighers, x-ray visioning systems; automatic identification, data capture and dimensioning solutions for transportation and logistics; and vehicle weighing solutions.Our precise instruments are the foundation of research and quality control labs all over the world. High-performance weighing solutions offer a basis for solid R&D results. Thermal analysis instruments help to improve materials and their thermal behavior. Automated chemistry solutions accelerate the development of new chemicals. Our analytical balances, titrators, pH meters, density meters, refractometers, melting point meters and pipettes can be tailored to each customer’s application and provide a fully documented workflow for every quality control lab.METTLER TOLEDO has offices across 10 locations in India, a Factory in Vasai and Nashik, International Market Support Group (IMSG), Product Inspection Competency Centre, Mass Calibration Laboratory and Service Competency Centre in Mumbai.                </Text>
              </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
      <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'https://www.thermofisher.com/content/dam/LifeTech/Images/Header/logo-color.png' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                THERMO FISHER SCIENTIFIC INDIA PRIVATE LIMITED.       
                         </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                Established in 1958, the second of its kind, IIT Bombay was the first to be set up with foreign assistance. The funds from UNESCO came as Roubles from the then Soviet Union. In 1961 Parliament decreed the  IITs as  ‘Institutes of National Importance'. Since then, IITB has grown from strength to strength to emerge as one of the top technical universities in the world.The institute is recognised worldwide as a leader in the field of engineering education and research. Reputed for the outstanding calibre of students graduating from its undergraduate and postgraduate programmes, the institute attracts the best students from the country for its bachelor's, master's and doctoral programmes. Research and academic programmes at IIT Bombay are driven by an outstanding faculty, many of whom are reputed for their research contributions internationally.
                </Text>
              </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
      <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'http://www.ncl-india.org/Images/logo.png' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                National Chemical Laboratory       
                         </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                Established in 1958, the second of its kind, IIT Bombay was the first to be set up with foreign assistance. The funds from UNESCO came as Roubles from the then Soviet Union. In 1961 Parliament decreed the  IITs as  ‘Institutes of National Importance'. Since then, IITB has grown from strength to strength to emerge as one of the top technical universities in the world.The institute is recognised worldwide as a leader in the field of engineering education and research. Reputed for the outstanding calibre of students graduating from its undergraduate and postgraduate programmes, the institute attracts the best students from the country for its bachelor's, master's and doctoral programmes. Research and academic programmes at IIT Bombay are driven by an outstanding faculty, many of whom are reputed for their research contributions internationally.
                </Text>
              </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
      <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'http://165.22.216.45/wp-content/uploads/2019/09/Hohenstin.png' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                Hohenstein India Pvt. Ltd       
                         </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                Hohenstein India Pvt Ltd. is the DAkkS accredited testing laboratory as per ISO 17025. The state-of-the art laboratory is the service partner for its customers and provide Performance Testing, Safety / Regulatory Testing, Restricted Substance List (RSL) Testing. We perceive ourselves as visionary problem solvers for our customers, offering innovative and tailored testing and certification as well as other service. Around 1,000 people are employed at our headquarters in Germany and at our laboratories and international offices in Europe, Asia and America. Benefit from our on-site expert teams who can provide you with our broadly diverse range of services in all major production and purchasing regions for textiles. Our international clients in more than 40 countries include businesses all along the textile production chain and increasingly those from other sectors like the automotive industry, medicine, as well as the investment and consumer goods industriesFor more than 70 years, we have specialized in the testing and certification of textile products of every description. You can therefore profit from tailor-made testing and service offers for your individual needs. Hohenstein also provides Oekotex Testing and Certification to the textiles, leathers and accessories manufacturers.” As a founding member of the OEKO-TEX Association, Hohenstein supports you in the implementation of your product stewardship and in all matters relating to sustainable economic activity. So that you and your customers are on the safe side.                </Text>
              </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
      <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'http://165.22.216.45/wp-content/uploads/2019/09/STEP-Pvt.-Ltd..png' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                STEP Pvt. Ltd.       
                         </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                STEP was established in March 2010 by experienced professionals with the environment and social science background. Apart from sound environmental engineering knowledge, our engineers have knowledge of ISO 15001, ISO 14001, Green Buildings, Carbon footprint assessment, Green Technologies and Sustainability reporting based on GRI guidelines. STEP can, therefore, provide a ‘holistic’ view to assignments. Our work methodology is client-specific. We understand the client’s operations; challenges & issues; analyze them and provide ‘tailor-made’ solutions. Other than designing end-of-pipe waste management solutions, through process audits, we guide our clients to reduce waste generation, recover solvents & chemicals, and recycle water. This helps clients in sustainable development through resource optimization and cost reduction of waste management operations.                </Text>
              </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
      <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'http://165.22.216.45/wp-content/uploads/2019/09/Cleanchem-Logo-new.jpg' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                Cleanchem Laboratories LLP       
                         </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                Cleanchem Laboratories LLP is registered under Ministry of Corporate Affairs, Govt. of India and its registration no. is AAD-8995 on 11th May 2015 having registered office and R&D (CRAMS) facility is at MIDC, Rabale, Navi Mumbai, India. It is an independent reliable R&D based custom manufacturing company (CRAMS). It is one of the fastest-growing pharmaceutical company delivering various products and R&D based services to pharmaceutical, chemical, clinical research, specialty chemical, academic, and government research institutions and healthcare industry. Our motto is ‘’To develop all the chemical products and processes environmental benign, high quality and cost-effective‘’. Our manufacturing processes are majorly based on catalysis, which is ‘CLEAN’ and ‘GREEN’ taking an account on environment concern, economic benefit, and global warming.Products & Services offered by Cleanchem:Ø  Custom Synthesis:Impurities / working standard as per EP / USP / BP / IP and other process-related impuritiesDevelopment of Pharmaceutical & Agrochemical intermediatesSpecialty chemicalsMetabolitesIsolation, characterization, and Identification of unknown impurities, Process related impurities Ø  Purification Techniques:Short Part Distillation/Thin Film EvaporatorSilica and Resin-Based Chromatographic purificationFlash ChromatographicPreparative HPLC     
                </Text>
                </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
      <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'http://165.22.216.45/wp-content/uploads/2019/09/Chemsec.jpg' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                Chemse       
                         </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                STEP was established in March 2010 by experienced professionals with the environment and social science background. Apart from sound environmental engineering knowledge, our engineers have knowledge of ISO 15001, ISO 14001, Green Buildings, Carbon footprint assessment, Green Technologies and Sustainability reporting based on GRI guidelines. STEP can, therefore, provide a ‘holistic’ view to assignments. Our work methodology is client-specific. We understand the client’s operations; challenges & issues; analyze them and provide ‘tailor-made’ solutions. Other than designing end-of-pipe waste management solutions, through process audits, we guide our clients to reduce waste generation, recover solvents & chemicals, and recycle water. This helps clients in sustainable development through resource optimization and cost reduction of waste management operations.                </Text>
              </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
      <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'http://165.22.216.45/wp-content/uploads/2019/09/NEERI.jpg' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                CSIR-NEERI      
                         </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                The CSIR-National Environmental Engineering Research Institute (CSIR-NEERI) is a research institute created and funded by Government of India. It was established in Nagpur in 1958 with focus on water supply, sewage disposal, communicable diseases and to some extent on industrial pollution and occupational diseases found common in post-independent India. NEERI is a pioneer laboratory in the field of environmental science and engineering and part of Council of Scientific and Industrial Research (CSIR).
                  </Text>
              </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
      <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'http://165.22.216.45/wp-content/uploads/2019/09/geist.jpg' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                Geist Research Pvt. Ltd.       
                         </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                Geist offers guaranteed Profit from Zero Liquid Discharge using innovative technology platforms. Geist’s expertise in recovering pure chemicals from a variety of industrial wastewaters manifests as the concept of “Wealth Out of Waste – WOOW Technologies” that enable conversion of industrial wastewaters to resource streams. These resource streams generate profits by the sale of recovered pure chemicals, saving on wastewater treatment costs and reduced purchase of freshwater. Intangible benefits include zero liquid discharge resulting in the elimination of secondary and tertiary pollution.Geist has taken up the challenge to make industrial wastewater recycling a profitable activity and changed the paradigm. By offering globally competitive solutions for worldwide problems of various chemical processing and related industries, Geist promises to harmonize environment with economic activity in a way that leads to win-win-win situation for the customer, the environment and for us.
                </Text>
                </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
      <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'http://165.22.216.45/wp-content/uploads/2019/09/Newreka.jpg' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                Newreka Green Synth Technologies Pvt. Ltd.   
                         </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                It all started in 1998, in a hostel room at IIT Mumbai. A conversation that debated the basic idea that the chemicals industry viewed pollution as something that needs to be controlled, while it should be prevented by recycling at source.So it was in 1999, that this team of IIT technocrats came together, to use their expertise in chemistry and make the world a cleaner and greener place…and Newreka was born. The name is a combination of  “Nature’s Enthusiastic World” and “Eureka”, the ancient Greek word to celebrate discovery. And what a revelation it truly was…From its modest beginnings as a consultancy, the company now transformed into an award winning enviropreneur!
                </Text>
              </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
      <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'http://165.22.216.45/wp-content/uploads/2019/09/DST.png' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,width:widthPercentageToDP('60%') }}>
                Department of Science & Technology      
                         </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                STEP was established in March 2010 by experienced professionals with the environment and social science background. Apart from sound environmental engineering knowledge, our engineers have knowledge of ISO 15001, ISO 14001, Green Buildings, Carbon footprint assessment, Green Technologies and Sustainability reporting based on GRI guidelines. STEP can, therefore, provide a ‘holistic’ view to assignments. Our work methodology is client-specific. We understand the client’s operations; challenges & issues; analyze them and provide ‘tailor-made’ solutions. Other than designing end-of-pipe waste management solutions, through process audits, we guide our clients to reduce waste generation, recover solvents & chemicals, and recycle water. This helps clients in sustainable development through resource optimization and cost reduction of waste management operations.                </Text>
              </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
      <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'http://165.22.216.45/wp-content/uploads/2019/09/Equinox-Onscreen.png' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family }}>
                Equinox Software And Services Pvt. Ltd.    
                         </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                Equinox delivers real-time decision support systems, integrating Engineering, MES, LIMS, SCM and ERP applications from diverse vendors.…❞ Passion for process applicationsEquinox designs and delivers efficient decision support systems to enable apt decision making from enterprise-wide raw data.Equinox brings in-depth technical know-how, industry knowledge, rich experience and successful track record across a dozen countries, where it has delivered projects.Equinox prides itself in its “Balanced Perspective”, which is its Hallmark, embodied in its Name and Logo.
                </Text>         
             </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
      <View>
        <CardItem style={styles.shadowMain}>
          <Left style={{ flex: 1, alignContent: 'space-between' }}>
            <Image source={{ uri: 'data:image/jpeg;base64,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' }} style={{ height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%'),resizeMode: "contain", margin: 10, marginRight: -10,alignSelf:'stretch' }} />
          </Left>
          <Body style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', marginLeft: -25, marginRight: -60, paddingTop: 15, marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: themes.fonts.INIT_FONT_SIZE_L, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family }}>
                HEAVY WATER BOARD, MUMBAI      
                         </Text>
              </View>
              <View>
                <Text style={{ width:widthPercentageToDP('60%'),fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 3, color: themes.colors.INIT_COLOR_Grey, fontFamily: themes.fonts.INIT_FONT_Family }}>
                Heavy Water Board is a constituent unit of the Department of Atomic Energy. It is world’s largest producer of Nuclear Grade Heavy Water, used as moderator and coolant in Pressurized Heavy Water Reactors (PFBR), based on multiple processes like H2S-H2O isotope Exchange Process and NH3-H2 isotopic Exchange Process, HWB not only makes country self-reliant and self–sufficient in Heavy Water but also a credible globle supplier to advanced countries including USA, France and Republic of Korea.HWB has also entered into diversified activities and producing diverse products with an enlarge mandate for nuclear and societal application including NMR solvents, Boron isotopes, solvents for Hydrometallurgy, Sodium etc
                </Text>     
                         </View>
            </View>
          </Body>
          <Right style={{ flex: 1, marginLeft: -25 }} / >
        </CardItem>
      </View>
          </View>
          ) : null}
        </ScrollView>
      </Container>
    );
  }
}

const TabNavigator = createBottomTabNavigator(  
  {  
    
    Home:{  
      screen:SponsorsPartnerExhibitor,  
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
   container2 : {
    backgroundColor: '#D9DCDE',
    paddingLeft:15,
    fontFamily: themes.fonts.INIT_FONT_Family,
    color: themes.colors.INIT_COLOR_Blue,
    fontSize: themes.fonts.INIT_FONT_SIZE_XL,
    fontWeight: 'bold',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  shadowMain: {
    marginRight: 15,
    marginLeft: 15,
    marginTop: 15,
    paddingLeft: -20,
    paddingTop: -20,
    paddingBottom: -20,
    borderWidth: 1,
    borderColor: '#fff',
    marginBottom: 15,
    elevation: 10,
    shadowOffset: { width: 0, height: 8 },
    shadowColor: "black",
    shadowOpacity: 100,
    shadowRadius: 10
  },
  shadow: {
    marginRight: 15,
    marginLeft: 15,
    marginTop: 25,
    paddingLeft: -20,
    paddingTop: -20,
    paddingBottom: -20,
    borderWidth: 1,
    borderColor: '#fff',
    marginBottom: 25,
    elevation: 15,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "black",
    shadowOpacity: 100,
    shadowRadius: 50
  },
  shadow2: {
    marginRight: 15,
    marginLeft: 15,
    paddingTop: 5,
    marginTop: 0,
    paddingLeft: -20,
    paddingTop: -20,
    paddingBottom: 20,
    borderWidth: 1,
    borderColor: '#fff',
    marginBottom: 25,
    elevation: 15,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "black",
    shadowOpacity: 100,
    shadowRadius: 50
  }
};