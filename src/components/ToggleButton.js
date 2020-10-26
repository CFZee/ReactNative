import React, { Component } from "react";
import {AppRegistry,StyleSheet,View,TouchableOpacity,Text,Button} from 'react-native';

export default class ToggleButton extends Component {
    state={
        toggle:false,
        toggle2:false
    }

    _onPress(){
        const newState = !this.state.toggle;
        this.setState({toggle:newState})
        if(this.state.toggle == false){
            this.setState({toggle:true});
            this.setState({toggle2:false});
        }
        else{
            this.setState({toggle: false})
        }
    }
    _onPress2(){
        const newState = !this.state.toggle2;
            this.setState({toggle2:newState})
        if(this.state.toggle2 == false){
            this.setState({toggle2:true});
            this.setState({toggle:false});
            }
            else{
                this.setState({toggle2: false})
            }
    }

    render(){
        const {toggle} = this.state;
        const {toggle2} = this.state;
        const textColor = toggle?"white":"green";
        const buttonbg = toggle?"green":"white";
        const textColor2 = toggle2?"white":"green";
        const buttonbg2 = toggle2?"green":"white";
        return(
            <View>
                <View styles={{flexDirection:'row'}}>
                    <TouchableOpacity
                    onPress ={()=>this._onPress()}
                    style={{backgroundColor:buttonbg,justifuContent:'center',alignItems:'center',borderRadius:100,margin:40,borderColor:'green',borderWidth:1}}>
                    <Text style={{color:textColor}}>Hola!!</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress ={()=>this._onPress2()}
                    style={{backgroundColor:buttonbg2,justifuContent:'center',alignItems:'center',borderRadius:100,margin:40,borderColor:'green',borderWidth:1}}>
                    <Text style={{color:textColor2}}>Hola123!!</Text>
                    </TouchableOpacity>
                    </View>
                </View>
        );
    }
}
