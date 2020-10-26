import React ,{Component} from 'react'
import {View,Text,StyleSheet, StatusBar,Image,TouchableOpacity} from 'react-native'
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../../src/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);

export default class Services extends Component{
    static navigationOptions = ({ navigation }) => ({
        title: 'Services offered by GCF     ',
        tabBarIcon: ({ tintColor }) => (
            <Icon
                name="search"
                size={10}
                color={tintColor} />
        )
      })

    menuClick(){
        this.props.navigation.openDrawer()
    }

    render(){
        return(

            <View style={styles.container}>
               <StatusBar backgroundColor='transparent'></StatusBar>
                <View style={styles.topBar}>
                    <View style={styles.headerLeft}>
                        <TouchableOpacity  style={styles.imgClick} onPress={this.menuClick.bind(this)}>
                            <Image source={{uri:'https://www.stickpng.com/assets/images/588a6507d06f6719692a2d15.png'}}  style={styles.imgMenu}></Image>
                        </TouchableOpacity>
                    </View>


                   <Text style={styles.topTxt}>Setting Screen</Text>
                   <View style={styles.headerRight}></View>
                </View>

                <View style={styles.contentBar}>
                    <Image source={{uri:'https://png.pngtree.com/element_our/sm/20180414/sm_5ad1c8b8b4c41.jpg'}} style={styles.imgSetting}></Image>
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({

    container:{
        flex:1
    },

    topBar:{
        height: 40,
        backgroundColor:'#FF5722',
        flexDirection:'row',
        alignItems:'center',
    },

    headerLeft:{
        flex:1,
        marginLeft:10,
        justifyContent:'flex-start',
    },

    headerRight:{
        flex:1,
        justifyContent:'flex-end'
    },

    topTxt:{
        color: '#FFFFFF',
    },

    contentBar:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },

    imgMenu:{
        height:20,
        width:20,
    },

    imgClick:{
        width:40,
        height:40,
        justifyContent:'center'
    },

    imgSetting:{
        width: 200,
        height: 200
    },
    icon: {
        width: 24,
        height: 24,
        textAlign:'right'
      },
})

