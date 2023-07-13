import React, {Component} from 'react';
import {View, Text, ImageBackground, TouchableOpacity, StyleSheet} from 'react-native';

export default class Home extends Component{
    handleSearch= ()=>{

    }
  render(){
    return(
        <View>
            <View>
                <TextInput placeholder="vestidos"
                onChangeText={setText}
                value={text}/>

                <TouchableOpacity onPress={this.handleSearch}>
                    <Text>Pesquisar</Text>
                </TouchableOpacity>
               //
            </View>
        </View>
    )
  }  
}
const styles = StyleSheet.create({
    text:{

    }, 
    textInput:{
        borderWidth: 5,
        borderColor: 'gray', 
        borderRadius: 20
    }, 
    buttonSearch:{

    }
})