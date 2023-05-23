/* eslint-disable prettier/prettier */
//rnfe
import {View, Text,TextInput,StyleSheet} from 'react-native';
import React from 'react';

const CVInputs = ({value,setvalue,placeholder,secureTextEntry}) => {
  return (

    <View style={Styles.Container}>
   <TextInput 
   value={value}
   onChangeText={setvalue}
   placeholder={placeholder}
   placeholderTextColor="#3E4F88"
    
   style={Styles.input}
   secureTextEntry={secureTextEntry} />
    </View>
  );
};

const Styles = StyleSheet.create({
  Container: {
    backgroundColor:'#ffff',
    height:100,
    justifyContent:'center',
 
    width:"100%",
    borderRadius:5,
    borderColor:'#cbd1e7',
    paddingHorizontal:10,
    marginVertical:.9,
    borderWidth:3,
    marginTop:27,
    background:'transparent',
    opacity: .7,


  },
  input:{
    color:'#3E4F88',
    fontWeight:'bold',
    fontSize:15,

 
  
  }


});

export default CVInputs;
