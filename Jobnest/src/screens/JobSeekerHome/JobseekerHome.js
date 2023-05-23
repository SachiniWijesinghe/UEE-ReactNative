/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import { View, Text,Image ,StyleSheet,useWindowDimensions,TouchableOpacity} from 'react-native'
import Logo from '../../../assets/images/jobeseeker.png';
import CustomButton from '../../components/CustomButtons/CustomButton';
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import Consulting from '../Consulting';

const JobseekerHome = () => {
  const {Height} = useWindowDimensions();

  const navigation =useNavigation();

  const MyAccountpressed= ()=>{
  navigation.navigate('seekerLOG');
  
  }

  
  const Jobspressed= ()=>{
  navigation.navigate('JobAll');

  
  }

  const CreateCVpressed= ()=>{
    navigation.navigate('CV'); 
 }

 const MyApplicationpressed= ()=>{
    navigation.navigate('MyApplications'); 
 }

 const JobInfor=()=>{
    navigation.navigate('JobInforScreen');
}
const Consulting=()=>{
  navigation.navigate('Consulting');
}
   


  

  return (
    <View style={Styles.root}>
   <Image source={Logo} style={[Styles.logo  ,{Height:  Height *0.1}]} resizeMode="cover" />

   <CustomButton text="Find Jobs" onPress={Jobspressed} />
   <CustomButton text="My Account" onPress={MyAccountpressed} />
   <CustomButton text="My Applications" onPress={MyApplicationpressed} />
   <CustomButton text="Creacte CV" onPress={CreateCVpressed} />
   <CustomButton text="JobInformation" onPress={JobInfor} />
   <CustomButton text="Consultation" onPress={Consulting} />

   

   

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
  width:320,
  height:320,
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
export default JobseekerHome;