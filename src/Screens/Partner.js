import React, {Component}from 'react';
import { CardItem,Container, Header,Thumbnail, Left, Body, Right, Button,Content, Text} from 'native-base';
import { View, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';
import Icon from 'react-native-ionicons';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { ScrollView } from 'react-native-gesture-handler';
import { createStackNavigator } from 'react-navigation';

export default class Partner extends Component {
    constructor() {
        super();
        this.state = {
         customStyleIndex: 0,
        };
      }

    handleCustomIndexSelect = (index: number) => {
    this.setState(prevState => ({ ...prevState, customStyleIndex: index }));
      };

    tabs = [
        {
          key: 'home',
          icon: 'home',
      
        },
        {
          key: 'map',
          icon: 'map',
          
        },
        {
          key: 'user',
          icon: 'person',
          
        },
        {
          key: 'text',
          icon: 'chatboxes',
        },
        {
          key: 'search',
          icon: 'search',
        }
      ];
   
    
      renderIcon = icon => ({ isActive }) => (
        <Icon size={25} color='#13A57E' style={{paddingTop:10,marginLeft:30,paddingRight:30}} name={icon} />
      );
     
      renderTab = ({ tab, isActive }) => (
        <FullTab
          isActive={isActive}
          key={tab.key}
          label={tab.label}
          renderIcon={this.renderIcon(tab.icon)}
        />
      );
    

    render() {
        const { customStyleIndex } = this.state;
        return(
            <Container style={styles.Container,{backgroundColor:'#D9DCDE'}}>
                <ScrollView>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#159957','#155799']} style={styles.LinearGradient}>
                <Header transparent androidStatusBarColor='transparent'
                style={{ height: 100 } }> 
                <Left>
                    <Button transparent>
                    <Icon name='arrow-back' style={{color:'white',fontSize:20,paddingTop:0,marginRight:-100,opacity:0.8}}/>
                        </Button>
                </Left>
                <Body style={{marginRight:-120}}>   
                 <Text style={{color:'white',fontSize:13,paddingBottom:0}}> 
                  Sponsors, Partners & Exhibitors
                 </Text>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='search' style={{color:'white',fontSize:20,paddingTop:0,opacity:0.8}} />
                    </Button>
                </Right>
                </Header>
                </LinearGradient>
                <View style={styles.container}>
      
      <SegmentedControlTab
           values={['Sponsers','Partners','Exhibitors']}
           selectedIndex={customStyleIndex}
           onTabPress={this.handleCustomIndexSelect}
           borderRadius={70}
           tabsContainerStyle={{height:50,width:360,marginTop:20,justifyContent:'space-between',backgroundColor: '#C7CACC' }}
           tabStyle={{
             backgroundColor: '#C7CACC',
             borderWidth: 1,
             borderColor: 'green',
           }}
           activeTabStyle={{ backgroundColor: 'green', marginTop: 2 }}
           tabTextStyle={{ color: 'green', fontWeight: 'bold' }}
           activeTabTextStyle={{ color: 'white' }}
         />
         {customStyleIndex === 0 && (
             <View style={{flexDirection:'column'}}>
              <CardItem style={styles.shadow}>
                    <Left style={{flex:1}}>
                        <Text style={{color:'green',fontSize:13,textAlign:'center',paddingLeft:15}}> Logo </Text>
                    </Left>
                    <Body style={{flex:1}}>
                        <View style={{flexDirection:'column',marginLeft:-25,marginRight:-60,paddingTop:15,marginBottom:15}}>
                            <View>
                <Text style={{fontSize:12.5,color:'#1E2D39'}}>
                    Sponsers Name
                </Text>
                </View>
                <View>
                    <Text style={{fontSize:10.5,paddingTop:3,color:'#929394'}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </Text>
                </View>
                </View>
                </Body>
                <Right style={{flex:1,marginLeft:-25}} >
                    <Button transparent>
                    <Icon name='arrow-right' style={{fontSize:15,color:'green',opacity:0.6}} />
                    </Button>
                    </Right>
                </CardItem>
                <CardItem style={styles.shadow2}>
                <Left style={{flex:1}}>
                    <Text style={{color:'green',fontSize:13,textAlign:'center',paddingLeft:15}}> Logo </Text>
                </Left>
                <Body style={{flex:1}}>
                    <View style={{flexDirection:'column',marginLeft:-25,marginRight:-60,paddingTop:15,marginBottom:15}}>
                        <View>
            <Text style={{fontSize:12.5,color:'#1E2D39'}}>
                Sponsers Name
            </Text>
            </View>
            <View>
                <Text style={{fontSize:10.5,paddingTop:3,color:'#929394'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
            </View>
            </View>
            </Body>
            <Right style={{flex:1,marginLeft:-25}} >
                <Button transparent>
                <Icon name='arrow-right' style={{fontSize:15,color:'green',opacity:0.6}} />
                </Button>
                </Right>
            </CardItem>
            <CardItem style={styles.shadow2}>
                <Left style={{flex:1}}>
                    <Text style={{color:'green',fontSize:13,textAlign:'center',paddingLeft:15}}> Logo </Text>
                </Left>
                <Body style={{flex:1}}>
                    <View style={{flexDirection:'column',marginLeft:-25,marginRight:-60,paddingTop:15,marginBottom:15}}>
                        <View>
            <Text style={{fontSize:12.5,color:'#1E2D39'}}>
                Sponsers Name
            </Text>
            </View>
            <View>
                <Text style={{fontSize:10.5,paddingTop:3,color:'#929394'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
            </View>
            </View>
            </Body>
            <Right style={{flex:1,marginLeft:-25}} >
                <Button transparent>
                <Icon name='arrow-right' style={{fontSize:15,color:'green',opacity:0.6}} />
                </Button>
                </Right>
            </CardItem>
            </View>
         )}
























         
         {customStyleIndex === 1 && (
            <View style={{flexDirection:'column'}}>
              <CardItem style={styles.shadow}>
                    <Left style={{flex:1}}>
                        <Text style={{color:'green',fontSize:13,textAlign:'center',paddingLeft:15}}> Logo </Text>
                    </Left>
                    <Body style={{flex:1}}>
                        <View style={{flexDirection:'column',marginLeft:-25,marginRight:-60,paddingTop:15,marginBottom:15}}>
                            <View>
                <Text style={{fontSize:12.5,color:'#1E2D39'}}>
                    ChemicalWeekly.com
                </Text>
                </View>
                <View>
                    <Text style={{fontSize:10.5,paddingTop:3,color:'#929394'}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </Text>
                </View>
                </View>
                </Body>
                <Right style={{flex:1,marginLeft:-25}} >
                    <Button transparent>
                    <Icon name='arrow-right' style={{fontSize:15,color:'green',opacity:0.6}} />
                    </Button>
                    </Right>
                </CardItem>
                <CardItem style={styles.shadow2}>
                <Left style={{flex:1}}>
                    <Text style={{color:'green',fontSize:13,textAlign:'center',paddingLeft:15}}> Logo </Text>
                </Left>
                <Body style={{flex:1}}>
                    <View style={{flexDirection:'column',marginLeft:-25,marginRight:-60,paddingTop:15,marginBottom:15}}>
                        <View>
            <Text style={{fontSize:12.5,color:'#1E2D39'}}>
                Loreal India
            </Text>
            </View>
            <View>
                <Text style={{fontSize:10.5,paddingTop:3,color:'#929394'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
            </View>
            </View>
            </Body>
            <Right style={{flex:1,marginLeft:-25}} >
                <Button transparent>
                <Icon name='arrow-right' style={{fontSize:15,color:'green',opacity:0.6}} />
                </Button>
                </Right>
            </CardItem>
            <CardItem style={styles.shadow2}>
                <Left style={{flex:1}}>
                    <Text style={{color:'green',fontSize:13,textAlign:'center',paddingLeft:15}}> Logo </Text>
                </Left>
                <Body style={{flex:1}}>
                    <View style={{flexDirection:'column',marginLeft:-25,marginRight:-60,paddingTop:15,marginBottom:15}}>
                        <View>
            <Text style={{fontSize:12.5,color:'#1E2D39'}}>
                ACS Green Chemistry Institute
            </Text>
            </View>
            <View>
                <Text style={{fontSize:10.5,paddingTop:3,color:'#929394'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
            </View>
            </View>
            </Body>
            <Right style={{flex:1,marginLeft:-25}} >
                <Button transparent>
                <Icon name='arrow-right' style={{fontSize:15,color:'green',opacity:0.6}} />
                </Button>
                </Right>
            </CardItem>
            </View>         )}
         {customStyleIndex === 2 && (
            <View style={{flexDirection:'column'}}>
              <CardItem style={styles.shadow}>
                    <Left style={{flex:1}}>
                        <Text style={{color:'green',fontSize:13,textAlign:'center',paddingLeft:15}}> Logo </Text>
                    </Left>
                    <Body style={{flex:1}}>
                        <View style={{flexDirection:'column',marginLeft:-25,marginRight:-60,paddingTop:15,marginBottom:15}}>
                            <View>
                <Text style={{fontSize:12.5,color:'#1E2D39'}}>
                    Sponsers Name
                </Text>
                </View>
                <View>
                    <Text style={{fontSize:10.5,paddingTop:3,color:'#929394'}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </Text>
                </View>
                </View>
                </Body>
                <Right style={{flex:1,marginLeft:-25}} >
                    <Button transparent>
                    <Icon name='arrow-right' style={{fontSize:15,color:'green',opacity:0.6}} />
                    </Button>
                    </Right>
                </CardItem>
                <CardItem style={styles.shadow2}>
                <Left style={{flex:1}}>
                    <Text style={{color:'green',fontSize:13,textAlign:'center',paddingLeft:15}}> Logo </Text>
                </Left>
                <Body style={{flex:1}}>
                    <View style={{flexDirection:'column',marginLeft:-25,marginRight:-60,paddingTop:15,marginBottom:15}}>
                        <View>
            <Text style={{fontSize:12.5,color:'#1E2D39'}}>
                Sponsers Name
            </Text>
            </View>
            <View>
                <Text style={{fontSize:10.5,paddingTop:3,color:'#929394'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
            </View>
            </View>
            </Body>
            <Right style={{flex:1,marginLeft:-25}} >
                <Button transparent>
                <Icon name='arrow-right' style={{fontSize:15,color:'green',opacity:0.6}} />
                </Button>
                </Right>
            </CardItem>
            <CardItem style={styles.shadow2}>
                <Left style={{flex:1}}>
                    <Text style={{color:'green',fontSize:13,textAlign:'center',paddingLeft:15}}> Logo </Text>
                </Left>
                <Body style={{flex:1}}>
                    <View style={{flexDirection:'column',marginLeft:-25,marginRight:-60,paddingTop:15,marginBottom:15}}>
                        <View>
            <Text style={{fontSize:12.5,color:'#1E2D39'}}>
                Sponsers Name
            </Text>
            </View>
            <View>
                <Text style={{fontSize:10.5,paddingTop:3,color:'#929394'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
            </View>
            </View>
            </Body>
            <Right style={{flex:1,marginLeft:-25}} >
                <Button transparent>
                <Icon name='arrow-right' style={{fontSize:15,color:'green',opacity:0.6}} />
                </Button>
                </Right>
            </CardItem>
            </View>         )}
       </View>
       </ScrollView>
       <BottomNavigation style={{color:'green'}}
      onTabPress={newTab => this.setState({ activeTab: newTab.key })}
      renderTab={this.renderTab}
      tabs={this.tabs} />
            </Container>
        );
    }
}


const styles = {
    container: {
      flex: 1,
      backgroundColor: '#C7CACC',
    },
    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding:10,
      },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
      },
      shadow: {
        marginRight:15,
        marginLeft:15,
        marginTop:25,
        paddingLeft:-20,
        paddingTop:-20,
        paddingBottom:-20,
        borderWidth: 1,
        borderColor: '#fff',
        marginBottom: 25,
        elevation:15,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: "black",
        shadowOpacity: 100,
        shadowRadius: 50
    },
    shadow2: {
        marginRight:15,
        marginLeft:15,
        paddingTop:5,
        marginTop:0,
        paddingLeft:-20,
        paddingTop:-20,
        paddingBottom:-20,
        borderWidth: 1,
        borderColor: '#fff',
        marginBottom: 25,
        elevation:15,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: "black",
        shadowOpacity: 100,
        shadowRadius: 50
    }
};