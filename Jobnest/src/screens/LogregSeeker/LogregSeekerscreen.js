/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import { View, Text,Image ,StyleSheet,useWindowDimensions,TouchableOpacity} from 'react-native'
import Logo from '../../../assets/images/jobeseeker.png';
import CustomButton from '../../components/CustomButtons/CustomButton';
import { useNavigation } from '@react-navigation/native';
import React from 'react'

const LogregSeekerscreen = () => {
  const {Height} = useWindowDimensions();

  const navigation =useNavigation();

  const onLOGINPressed= ()=>{

  
  navigation.navigate('seekerLOG');
  
  }

  
  const onsGetReGdPressed= ()=>{
  
  
  navigation.navigate('SeekerReg');

  
  }




  

  return (
    <View style={Styles.root}>
    <Text style={Styles.baseText}>Job Seeker</Text>
   <Image source={Logo} style={[Styles.logo  ,{Height:  Height *0.1}]} resizeMode="cover" />

   <CustomButton text="LOGIN" onPress={onLOGINPressed} />
   <CustomButton text="REGISTER" onPress={onsGetReGdPressed} />

   

</View>
)
}
const Styles = StyleSheet.create({
root: {
   backgroundColor:'white',
   height:"100%",
   alignItems: 'center',
   
 },

 
 logo: {
  marginTop:40,
  justifyContent:'center',
  width:390,
  height:390,
maxWidth:'100%',
maxHeight:'100%',



 },
 baseText:{  
   marginTop:40,
   fontSize: 24,
   color: 'black',
    fontWeight: 'bold',
 
},
container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
},
button: {

  borderRadius: 10000,
  padding: 10,

  height:10,
  width:10,
  shadowColor: '#303838',
  // shadowOffset: { width: 0, height: 1 },
  shadowRadius: 10,
  shadowOpacity: 0.35,
},


  

});
export default LogregSeekerscreen;