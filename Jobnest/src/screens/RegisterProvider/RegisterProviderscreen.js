/* eslint-disable prettier/prettier */
/* eslint-disable semi */

/* eslint-disable prettier/prettier */
import { View, Text,Image ,StyleSheet,useWindowDimensions,ImageBackground,ScrollView,TouchableOpacity} from 'react-native'
import Logo from '../../../assets/images/jobprovider.png';
import CustomButton from '../../components/CustomButtons/CustomButton';
import { useNavigation } from '@react-navigation/native';
import React,{useState} from 'react'
import Custuminput from '../../components/CustomeInput/Custuminput';
const RegisterProviderscreen = () => {
  const {Height} = useWindowDimensions();

  const navigation =useNavigation();
 
 const [email,setEmail] =useState('');
 const [Username,setusername] =useState('');
 const [ConfirmPw,setConfirmPassword] =useState('');
 const [password,setPassword] =useState('');

  
  
  return (
    <View style={Styles.root}>
      
    <ScrollView  showsVerticalScrollIndicator={false}>
     <Text style={Styles.baseTextH2}>Hello! </Text>
     <Text style={Styles.baseTextH}> Register to get Started</Text>
    
        <ImageBackground source={Logo} style={[Styles.logo  ,{Height:  Height *0.12}]} resizeMode="contain" >
  
        <Custuminput    placeholder='UserName' value={email} setvalue={setusername} />
        <Custuminput    placeholder='Email' value={email} setvalue={setEmail} />
        <Custuminput    placeholder='Password' value={email} setvalue={setPassword}   secureTextEntry/>
        <Custuminput  placeholder=' Confirm Password' value={password} setvalue={setConfirmPassword} secureTextEntry  />
       
          
        </ImageBackground>
        <CustomButton text="Register"  />

        



<View style={{flexDirection: 'row', alignItems: 'center'}}>
 <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
 <View>
   <Text style={{width: 150, textAlign: 'center'}}>Or Register with </Text>
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
       <Text style={Styles.baseTex1} > Alredy Have a Account </Text>
       <Text  style={Styles.click} >Login Now </Text>
  
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
   baseTextH2:{
    marginLeft:10,
    marginTop:25,
    fontSize: 32,
    color: '#3E4F88',
     fontWeight: 'bold',
    
   },

   click:{

    textAlign:'center',
    fontSize: 14, 
    color: '#3E4F88',

    marginBottom:10,

   },
   baseTextH:{

     fontSize: 32,
     color: '#3E4F88',
      fontWeight: 'bold',

   },
   
   logo: {
   
    justifyContent:'center',
    width:390,
    height:400,
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
    paddingBottom:70,
  },
  input:{
marginTop:70,
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

export default RegisterProviderscreen