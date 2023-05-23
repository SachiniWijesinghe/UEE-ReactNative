/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/rules-of-hooks */
//rnfe
import {View, Button ,Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';


import React from 'react';
import Logo from '../../../assets/images/jobnestLogo.jpg';
import CustomButton from '../../components/CustomButtons/CustomButton';
import { useNavigation } from '@react-navigation/native';
const Startscreen = () => {
const {Height} = useWindowDimensions();

const navigation =useNavigation();

const onsGetStartedPressed= ()=>{


navigation.navigate('LoginType');

}



  return (
   
    <View style={Styles.root}>
      <Image source={Logo} style={[Styles.logo  ,{Height:  Height*0.2}]} resizeMode="contain" />
      <Text style={Styles.baseText}>Join us & Explore Thousend of</Text>
      <Text style={Styles.baseTex2}>  Greate Job</Text>
     

     <CustomButton text="Get Started" onPress={onsGetStartedPressed} />
     
    </View>
   
  );

};
const Styles = StyleSheet.create({
  root: { height:"100%",
    backgroundColor:'white',
    justifyContent:'center',
    alignItems: 'center',
  },

  
  logo: {
    with: '70%',
    maxWidth:350,
    maxHeight:400,

  },
  baseText:{
  
    fontSize: 16,
    color: '#3E4F88',
    
  },
  baseTex2:{
    fontWeight: 'bold',
    color: '#3E4F88',
    marginBottom:20,
  }
  
});
export default Startscreen;
