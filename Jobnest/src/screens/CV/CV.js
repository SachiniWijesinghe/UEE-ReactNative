import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TextInput,Image, TouchableOpacity, RecyclerViewBackedScrollView, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import CustomButton from '../../components/CustomButtons/CustomButton';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../../assets/images/menu.png';
import CVInputs from '../../components/CVInputs/CVInputs';
import Custuminput from '../../components/CustomeInput/Custuminput';
import Successfull from "../Successfull/Successfull";
const TitelBar = () => {
    const navigation =useNavigation();
    return (
        <View style={style.TitelHolder}>
            <View style={style.iconcontainer}>
            <TouchableOpacity onPress={()=>{
                                 navigation.navigate('JobseekerHome');
                            }} ><Image source={Logo} style={[style.logo  ]}  /></TouchableOpacity>
            </View>
            <View style={style.TitelContainer}>
                <Text style={style.TitelText}>Create CV</Text>
            </View>
        </View>
    )
}

const CV = () => {


   <View style={style.main}>
     
   </View>
    
    const Successfull= ()=>{
        navigation.navigate('Successfull');
      
        
        }
      
    

    const navigation =useNavigation();
    return (
        <View style={style.main}>
           <TitelBar/>
           <ScrollView>
            <View style={style.container}>
         
           <Custuminput    placeholder='Name'  />
           <Custuminput    placeholder='Email'  />
           <Custuminput    placeholder='Phone'  />
           <Custuminput    placeholder='Address'  />
           <Custuminput    placeholder='University'  />
           <CVInputs    placeholder='Job position'  />
           <CVInputs    placeholder='Introduction'  />
           <Custuminput    placeholder='Educational qulifications'  />
           <CVInputs    placeholder='Description1'  />
           <Custuminput    placeholder='Title2'  />
           <CVInputs    placeholder='Description2'  />
           <Custuminput    placeholder='Title 3'  />
           <CVInputs    placeholder='Description 3'  />
          
           <CVInputs    placeholder='References'  />
           <CustomButton text="Apply" onPress={Successfull} />
           </View>
           </ScrollView>
          
        </View>   
    )
}





// const JobApplication = () => {
    
    
//     return (
//         <View style={style.main}>
//             <TitelBar/>
//             <OrderBasic />
            
//         </View>
//     )
// }

const style = StyleSheet.create({
    main: {
        flex: 1,
      alignItems: 'center',
        flexDirection:"column",
        
    },

  text:{
   
    fontSize: 15,
    height:20,


  },
  Tcontainer:{
   
    fontSize: 15,
    height:20,
    alignContent:'flex-start',


  },

    bannerText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000'
    },
    TitelHolder: {
        width: wp('100%'),
        height: hp('8%'),
        alignItems: 'center', // horizatal aling 
        justifyContent: 'center', // vertical alling
        backgroundColor:'#3E4F88',
        flexDirection:"row",
    },

   
    TitelContainer: {
        width: wp('94%'),
        height: hp('12%'),
        alignItems: 'center',
        justifyContent: 'center',
    },
    TitelText: {
        fontSize: 23,
        color: '#000',
        fontWeight: '700',
        color:'white',
    },
    bannerText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000',
        backgroundColor: 'yellow',
    },
    iconcontainer: {
        
        width: wp("10%"),
        height: hp("10%"),
        alignItems: 'center',
       justifyContent:'center',
        backgroundColor: 'Red',
    },
    logo: {
        marginLeft:10,
        marginTop:2,
        alignItems:'center',
        justifyContent:'center',
        width:wp("15%"),
        height:wp("15%"),
    },
      

    
   
    container: {
        marginTop:20,
        marginLeft:10,
        marginRight:10,
        width: wp("80%"),
          
        alignItems: 'center',

        flexDirection:'column',
       

    },

    jobinfor: {
        width: wp("96%"),
        height: hp("20%"),
        alignItems: 'center',
        backgroundColor: 'red',
       
    },
    basicTitel: {
        width: wp("96%"),
        height: hp("5%"),
        alignItems: 'flex-start',
        backgroundColor: 'purple',
    },
    baiscTitelTxt: {
        fontSize: 23,
        color: '#000',
        fontWeight: '700'

    },
    basicInputHolder: {
        width: wp("96%"),
        height: hp("20%"),
        alignItems: 'center',

    },
    basicInputHolderRow: {
        width: wp("94%"),
        height: hp("8%"),
        alignItems: 'center',
        flexDirection: 'row'

    },


    basicInputTitel: {
        width: wp("25%"),
        height: hp("7%"),
        alignItems: 'center',
        justifyContent: 'center'
    },
    basicInputDetail: {
        width: wp("60%"),
        height: hp("7%"),
        alignItems: 'center',
    },
    basicInputDetailCon: {
        width: wp("70%"),
        height: hp("6%"),
        alignItems: 'center',
        borderRadius: 5,
        borderColor: 'orange',
        borderWidth: 1
    },
    infoText: {
        color: '#000',
        fontSize: 18,
        fontWeight: '500'
    },
    infoTextJob: {
        color: '#000',
        fontSize: 20,
        fontWeight: '500',
        marginTop:15,
    },
    orderContainer: {
        width: wp("100%"),
        height: hp("70%"),
        alignItems: 'center',
    },
    orderDetailHolder: {
        width: wp("96%"),
        height: hp("68%"),
        alignItems: 'center',
    },
    buttonHolder: {
        width: wp("30%"),
        height: hp("6%"),
        alignItems: 'center',
        justifyContent: 'center',
        margin: 2,
        borderRadius: 5

    },
    buttontext: {
        color: '#000',
        fontSize: 18,
        fontWeight: '600'
    }


});

export default CV;