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
  //     let EHSAbstractDetails = data;
  //     console.log(EHSAbstractDetails);
  //     this.setState({
  //       dataSource: EHSAbstractDetails
  //     });
  //   });

  // }

  AbstractInfoScreen1 = () => {
    this.props.navigation.navigate('EHSAbstractDetail', {
        userName: "Mr. Siddalingesha",
        userDesignation:"Director.",
        userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/10/Siddalingesha.png",
        userOrganization:"Indian Process Safety Centre, India ",
        EHSAbstractDetail:"Almost all the organization dedicated to excellence strives for continuous improvement, and nowhere are the stakes higher than when it comes to safety. The chemical industry has developed Process Safety Management (PSM) and invest considerable resources to prevent incidents. The challenge has been to design and implement universally effective process safety management systems. As long as incidents continue to occur, it is clear that industry has not fully achieved its safety goals. /n Within Process safety; “Basis of safety” is an approach that encourages the designer to attempt to eliminate or minimize hazards identified at each stage in the process life cycle, and at every level of process and plant design, rather than accepting the existence of the hazards and designing safety systems to control those hazards. It may not always be feasible to eliminate or reduce hazards, but the “Basis of safety” philosophy requires that this be attempted before moving on to specification of risk management equipment and procedures. Note that describing a process as “inherently safer” can only be done in the context of specific hazard or subset of hazards and that management of all hazards must be	considered in order to design a safer process. Few examples are discussed where this philosophy is employed.",
        abstractName:"Basis of Safety"
    })
}
AbstractInfoScreen2 = () => {
  this.props.navigation.navigate('EHSAbstractDetail', {
      userName: "Dr. Chuck Orella",
      userDesignation:"Director Chemical Engineering R&D",
      userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/10/Dr.-Chuck-Orella.png",
      userOrganization:"Merck & Co. Inc., USA ",
      EHSAbstractDetail:"The effort to improve containment and protect employees handling pharmaceutically active materials changed course in the 1990’s.  This review of changes made in our pilot plants as expectations grew for reduced risk and improved protection of workers will include an overview, highlights, examples and lessons.  The examples and lessons will illustrate the challenges of applying innovative containment technologies to a wide variety of process applications, along with the interplay of procedures and human behaviors.  And of course, understanding the past is helpful in preparing for the future that has yet to unfold.",
      abstractName:"Improved Containment Journey for Powder Handling in a Pharmaceutical Pilot Plant  "
  })
}

AbstractInfoScreen3 = () => {
  this.props.navigation.navigate('EHSAbstractDetail', {
      userName: "Dr. David Constable  ",
      userDesignation:"Science Director",
      userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/10/David-Constable.jpg",
      userOrganization:"ACS-Green Chemistry Institute, USA ",
      EHSAbstractDetail:"The practice of chemistry in industrial settings has been plagued by a series of major failures in environmental, health and safety and these failures have resulted in the loss of life, the degradation of the environment, and the destruction of considerable capital investment.  The perception by some is that “good science” in chemistry and engineering should not be constrained by either safer or greener practices, as if “good science” and safety and green chemistry are somehow mutually exclusive.  This talk will discuss that the best science and engineering is that which incorporates safety and green chemistry into the design and practice of chemistry and is consequently the best investment for long-term value creation.   ",
      abstractName:"Sustainable Chemistry is Safer Chemistry – Linking Inherent Safety and Green Chemistry for more Sustainable Chemistry Outcomes "
  })
}
AbstractInfoScreen5 = () => {
  this.props.navigation.navigate('EHSAbstractDetail', {
      userName: "Mr. Sushil Kharkwal",
      userDesignation:"Sr. Vice President - EHS",
      userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/08/Sushil-Kharkwal.jpg",
      userOrganization:"PI Industries Ltd., India",
      EHSAbstractDetail:"Sustainability for a chemical industry is a very vast subject, which includes issues spanning from industry level to the global environment levels. It deals with practices related to social welfare, financial performance, labour practices, supply chain management, governance mechanisms along with EHS performance. While all the aspects of sustainability are important in long run, for ensuring operational sustainability of any chemical industry, major issues of paramount concerns revolve around: '/n'a)	Compliance to environmental norms so that no legal action is initiated against the industry leading to temporary or long term discontinuation of operation '/n'b)	No major case of process safety incident, involving gas leak, fire, explosion etc. takes place, leading to off-site implication '/n'c)	No issue of social unrest takes place against industry '/n'To meet these three objective, a robust compliance monitoring system, process safety management system, emergency preparedness system and a targeted CSR program is needed. The paper illustrates experiences of PI Industries in taking care of these critical issues of operational sustainability.",
      abstractName:"Best EHS practices for sustainable operations in a chemical industry "
  })
}

AbstractInfoScreen7 = () => {
  this.props.navigation.navigate('EHSAbstractDetail', {
    userName:"Mr. Harish Verma   ",
    userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/10/Harish-Verma-1.png",
    userDesignation: 'Vice President & Global Head - EHS',
    userOrganization:'Cipla Ltd., India ',
      EHSAbstractDetail:"Cipla’s EHS Management System (EHSMS) has adopted a continual improvement approach for all EHS aspects. Beginning with Corporate EHS Policy at the apex level, the cornerstones of the foundation of EHSMS includes Corporate EHS Standards and Corporate EHS Guidelines that are applicable to the entire organization. These are followed by site specific Local EHS Procedures that get implemented, beginning with training to employees and contractors. The Local EHS Procedures addressing important aspects such as risk assessment, Permit to work system, fire safety, electrical safety, management of change, personal protective equipment, management of wastes etc. envelop all local legislative and divisional requirements. EHS Performance of each site is measured through Operational and Management audits that comprise of an audit report. Additionally, as need arises, Specialist audits are organized through external experts. Audits follow a review including that of the EHS Policy, thus completing the cycle. At Cipla, EHS management is a line function responsibility. The line management seeks all opportunities of continual improvement to sustain excellence in the quality of all EHS efforts that are displayed through actions, decisions and communications.",
      abstractName:"EHS Management System through Best Practices at Cipla Limited "
  })
}
AbstractInfoScreen8 = () => {
  this.props.navigation.navigate('EHSAbstractDetail', {
    userName:" Mr. Philip Krook    ",
    userDesignation:'Communications Officer',
    userOrganization:' Chemsec, Sweden',
    userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/10/Mr.-krook.jpg", 
      EHSAbstractDetail:"Abstract: Today man-made hazardous chemicals are normal ingredients found in many of our everyday products. The use of these chemicals represents one of the biggest threats to human health and the environment. This is why environmental non-profit organisation ChemSec has advocated for substitution of hazardous chemicals to safer alternatives the last seventeen years. Apart from working with European chemicals policy, ChemSec also develops online tools to facilitate the transition to green chemistry and safer alternatives. The latest of these tools is called Marketplace. Marketplace gathers safer alternatives available on the market in one single place and connects supply with demand without any fuzz. The aim of Marketplace is to show the world that safer alternatives are available for products and processes no matter industry.",
      abstractName:"Finding safer alternatives to hazardous chemicals on ChemSec’s Marketplace "
  })
}
AbstractInfoScreen9 = () => {
  this.props.navigation.navigate('EHSAbstractDetail', {
    userName:" Prof. Sandip Roy    ",
    userDesignation:'Professor',
    userOrganization:' Dept. of Chemical Engineering, IIT-B, India',  
    userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/10/Sandip-Roy.jpg", 
      EHSAbstractDetail:"As reflected in decreasing loss metrics, increasingly stringent safety regulations and improved Process Safety Management (PSM) programs appear to be having a positive effect on safety performance of the global process industry. However, even as losses decrease, human and organizational factors have emerged as one of the key contributors to safety performance, with some studies attributing up to 90% of all accidents to them. An organization’s culture can exert a significant influence on safety outcomes. “Safety culture” is a subset of the overall company culture, and can be seen as “the product of individual and group values, attitudes, perceptions, competencies, and patterns of behaviour that determine the commitment to, and the style and proficiency of, an organization’s health and safety management”. An organization’s safety culture and the consequent safety climate can be one of the most critical underpinnings of the success of safety management efforts by an organization. The present talk will dwell upon the basic idea of organizational safety culture, its patterns and determinants, the possibility of assessing and enhancing it so as to improve safety performance and, hence, reduce organizational losses.",
      abstractName:"Process Safety Management: The Question of Culture "
  })
}
AbstractInfoScreen10 = () => {
  this.props.navigation.navigate('EHSAbstractDetail', {
    userName:"  Mr. Vikram Dhumal    ",
    userDesignation:'Chief Technologist',
    userOrganization:' Geist Research Pvt. Ltd., India',    
    userProfileImage:"http://165.22.216.45/wp-content/uploads/2019/10/Vikram_Dhumal.png",
      EHSAbstractDetail:"Today’s waste management is concerned about treatment of waste in a manner by which it is compliant with the statutory requirements. Adoption of Modern waste management technologies results only in significant cost burden on the manufacturing. A new paradigm shift is proposed – Wealth Out Of Waste (WOOW). This concept changes the perceptions toward the waste management. WOOW Concept ask to look closely at the waste generated by way of its analysis & identification. This results in understanding the value associated with the waste. Once the value is identified, suitable technologies can be used for recovering the value. Industrial wastewater contains many chemicals which are in dissolved state. Conventional treatment technologies only focus on degradation of these chemicals. Wealth Out Of Waste Technologies helps in finding out solution by which these chemicals can be recovered in pure form.Few Case studies of Wealth Out Of Waste Concept will be discussed.",
      abstractName:"Wealth Out Of Waste – A Sustainable Solution for waste management "
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
                Basis of Safety
                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>

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
              <Text style={{ fontWeight:'bold',fontSize: themes.fonts.INIT_FONT_SIZE_XL, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-50 }}>
                Improved Containment Journey for Powder Handling in a Pharmaceutical Pilot Plant
                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>

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
              <Text style={{ fontWeight:'bold',fontSize: themes.fonts.INIT_FONT_SIZE_XL, color: themes.colors.INIT_COLOR_Blue, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-50 }}>
                Sustainable Chemistry is Safer Chemistry – Linking Inherent Safety and Green Chemistry for more Sustainable Chemistry Outcomes
                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>

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
                Best EHS practices for sustainable operations in a chemical industry
                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>

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
              EHS Management System through Best Practices at Cipla Limited
                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
              Cipla’s EHS Management System (EHSMS) has adopted a continual improvement approach...
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
              Finding safer alternatives to hazardous chemicals on ChemSec’s Marketplace
              </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
              Abstract: Today man-made hazardous chemicals are normal ingredients found in many of our everyday products...                
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
              Process Safety Management: The Question of Culture                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
              As reflected in decreasing loss metrics, increasingly stringent safety regulations and improved Process Safety Management...                
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
       <TouchableWithoutFeedback onPress={() => this.AbstractInfoScreen10()}>
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
              Wealth Out Of Waste – A Sustainable Solution for waste management                </Text>
              </View>
              <View>
              <Text style={{fontSize: themes.fonts.INIT_FONT_SIZE_M, paddingTop: 5, color: themes.colors.INIT_COLOR_Grey, textAlign: 'justify',lineHeight: 12, fontFamily: themes.fonts.INIT_FONT_Family,marginRight:-45}}>
              Today’s waste management is concerned about treatment of waste in a manner by which it is compliant with the statutory...
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
