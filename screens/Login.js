import React, {Component} from 'react';
import {View, Text, ImageBackground, TouchableOpacity, StyleSheet} from 'react-native';

export default class Login extends Component{
   
    handleUserDatabase = async ()=>{

    }
    
  render(){
    return(
        <View>
            <ImageBackground>
                //view container caixa de texto
            <View>
               <Text>Pomodoro</Text>
                <TextInput placeholder={"e-mail ou nome do usuário"}
                 onChangeText={setText}
                 value={text}>
                </TextInput>

                <TextInput placeholder={"senha"}
                onChangeText={setText}
                value={value}></TextInput>

                <TouchableOpacity onPress={this.handleUserDatabase}>
                    <Text>LOGIN</Text>
                </TouchableOpacity>

            </View>
            </ImageBackground>
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