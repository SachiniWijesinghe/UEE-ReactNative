/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
import { View, Text ,Image,StyleSheet,useWindowDimensions} from 'react-native';
import Logo from '../../../assets/images/jobType.svg';
import CustomButton from '../../components/CustomButtons/CustomButton';
import { useNavigation } from '@react-navigation/native';
import LogTypeImg from  "../../../assets/images/jobType.png";


import React from 'react';

const LoginTypescreen = () => {
  const {Height} = useWindowDimensions();
  const navigation =useNavigation();


  const onJobseekerPressed= ()=>{
   
  
  navigation.navigate('SeekerRegLOG');
  
  }


  const onJobProviderPressed= ()=>{
   
  
  navigation.navigate('ProviderRegLOG');
  
  }









  return (
    <View style={Styles.root}>
    <Image source={LogTypeImg} style={[Styles.logo  ,{Height:  Height*0.1}]} resizeMode="contain" />
    <CustomButton text="Job Seeker" onPress={onJobseekerPressed} />
    <CustomButton text="Job Provider" onPress={onJobProviderPressed} />
    </View>
  );
};

const Styles = StyleSheet.create({
  root: {
    backgroundColor:'white',
   
    alignItems: 'center',
  },

  
  logo: {
    marginTop:80,
    width: '60%',
    maxWidth:300,
    maxHeight:350,


  },
  })

export default LoginTypescreen;