/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import { View, Text,Image ,StyleSheet,useWindowDimensions,ImageBackground,ScrollView,TouchableOpacity} from 'react-native'
import Logo from '../../../assets/images/jobprovider.png';
import CustomButton from '../../components/CustomButtons/CustomButton';
import { useNavigation } from '@react-navigation/native';
import React,{useState} from 'react'
import Custuminput from '../../components/CustomeInput/Custuminput';

const LoginProviderscreen = () => {

  const {Height} = useWindowDimensions();

  const navigation =useNavigation();
 
 const [email,setEmail] =useState('');
 const [password,setPassword] =useState('');

 
 

  return (
    <View style={Styles.root}>
      
    <ScrollView  showsVerticalScrollIndicator={false}>
     <Text style={Styles.baseText}>Welcome Back</Text>
     <Text style={Styles.baseTex2}>  Welcome Back To Jobnest. Have A Good Time</Text>
    
        <ImageBackground source={Logo} style={[Styles.logo  ,{Height:  Height *0.2}]} resizeMode="contain" >
  
        <Custuminput    placeholder='Email' value={email} setvalue={setEmail} />

        <Custuminput  placeholder='Password' value={password} setvalue={setPassword} secureTextEntry  />
       
          
        </ImageBackground>
        <CustomButton text="Login"  />

        

<CustomButton 
text="Forgot Password"
type='TERTIARY'
/>


<View style={{flexDirection: 'row', alignItems: 'center'}}>
 <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
 <View>
   <Text style={{width: 150, textAlign: 'center'}}>Or Login with </Text>
 </View>
 <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
</View>

<View style={{flexDirection: 'row', alignItems: 'center'}}>
 <View  />
 <View style={{flex: 1,}} >

 <View style={ Styles.container}>
 <TouchableOpacity style={Styles.button}  onPress={()=>{alert("you clicked me")}}>
         <Image source={require("../../../assets/images/facebook.png")}  style={{ margin:20,marginBottom:10,width:40,height:40,borderRadius:1000}}/>
       </TouchableOpacity>

       
</View>
 </View>
 <TouchableOpacity style={Styles.button} onPress={()=>{alert("you clicked me")}}>
         <Image source={require("../../../assets/images/google.png")}  style={{ margin:10,paddingLeft:62,width:60,height:60,borderRadius:1000}}/>
       </TouchableOpacity>
   
</View>






 <View style={{marginTop:60,}}>
   
 <TouchableOpacity  style={Styles.touchbl} onPress={()=>{alert("you clicked me")}}>
       <Text style={Styles.baseTex1} >Dont have a Account </Text>
       <Text  style={Styles.click} >Register </Text>
  
       </TouchableOpacity>
   


</View>
       
</ScrollView>
       


       
   </View>
 )
}
const Styles = StyleSheet.create({
 root: {
    backgroundColor:'white',
    height:"100%",
    justifyContent:'center',
    alignItems: 'center',
  },
  touchbl:{
   flexDirection: 'row',
   justifyContent:'center',
 // marginLeft:32,
 // marginRight:10,
   marginTop:20,

  },
  baseTex1:{
  


  },
  click:{

   textAlign:'center',
   fontSize: 14, 
   color: '#3E4F88',
fontWeight:'bold',
   marginBottom:10,

  },
  
  logo: {
  
   justifyContent:'center',
   width:390,
   height:390,
 maxWidth:'100%',
 maxHeight:'100%',
  },
  baseText:{  
   marginTop:60,
   textAlign:'center',
   justifyContent:'center',
    fontSize: 32,
    color: '#3E4F88',
     fontWeight: 'bold',
  
 },

 baseTex2:{ 

 
  textAlign:'center',
   fontSize: 14, 
   color: '#3E4F88',

 },
 input:{
marginTop:60,
 },
 container: {
flex:1,
 backgroundColor: '#fff',
 alignItems: 'center',
 justifyContent: 'center',
},
button: {
 
 flex:1,
 borderRadius: 1000,
 padding: 10,
marginLeft:10,
 height:10,
 width:10,
 shadowColor: '#303838',
 // shadowOffset: { width: 0, height: 1 },
 shadowRadius: 10,
 shadowOpacity: 0.35,
},


   
});
export default LoginProviderscreen