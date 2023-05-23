import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TextInput,Image, TouchableOpacity, RecyclerViewBackedScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import CustomButton from '../../components/CustomButtons/CustomButton';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../../assets/images/menu.png';

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
                <Text style={style.TitelText}>Job Application</Text>
            </View>
        </View>
    )
}

const JobApplication = () => {


    const navigation =useNavigation();
    const ApplyPressed= ()=>{
         navigation.navigate('Successfull');
        
  
        }


    return (
        <View style={style.main}>
           <TitelBar/>
            <View style={style.basicContainer}>
             <View style={style.Container}>
                <View style={style.jobinfor}>
                <Text style={style.infoTextJob}>Senior Software Engineer</Text>
                <Text style={style.infoTextJob}>Creative Software</Text>
                    
                </View>   
                <View style={style.basicInputHolder}>
                    <View style={style.basicInputHolderRow}>
                        <View style={style.basicInputTitel}>
                            <Text style={style.infoText}>Name:</Text>
                        </View>
                        <View style={style.basicInputDetail}>
                            <TextInput  placeholder="Name" style={style.basicInputDetailCon} onChangeText={(val)=>{}} />
                        </View>
                    </View>
                    <View style={style.basicInputHolderRow}>
                        <View style={style.basicInputTitel}>
                            <Text style={style.infoText}>Phone:</Text>
                        </View>
                        <View style={style.basicInputDetail}>
                            <TextInput placeholder="Phone" style={style.basicInputDetailCon} onChangeText={(val)=>{}} />
                        </View>
                    </View>
                    <View style={style.basicInputHolderRow}>
                        <View style={style.basicInputTitel}>
                            <Text style={style.infoText}>Email:</Text>
                        </View>
                        <View style={style.basicInputDetail}>
                            <TextInput placeholder="Email" style={style.basicInputDetailCon} onChangeText={(val)=>{}} />
                        </View>
                    </View>
                    <View style={style.basicInputHolderRow}>
                        <View style={style.basicInputTitel}>
                            <Text style={style.infoText}>CV:</Text>
                        </View>
                        <View style={style.basicInputDetail}>
                            <TextInput placeholder="Upload google drive link" style={style.basicInputDetailCon} onChangeText={(val)=>{}} />
                        </View>
                    </View>

                </View>
                </View>
                <CustomButton text="Apply" onPress={ApplyPressed} />

            
            </View>
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
       
    },
    iconcontainer: {
        
        width: wp("10%"),
        height: hp("10%"),
        alignItems: 'center',
       justifyContent:'center',
       
    },
    logo: {
        marginLeft:10,
        marginTop:2,
        alignItems:'center',
        justifyContent:'center',
        width:wp("15%"),
        height:wp("15%"),
    },
      

    
    basicContainer: {

        width: wp("96%"),
        height: hp("80%"),
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection:'column',
    },
    Container: {
        marginTop:20,
        marginLeft:5,
        marginRight:5,
        width: wp("96%"),
        height: hp("60%"),   
        alignItems: 'center',
        
        flexDirection:'column',
    },

    jobinfor: {
        width: wp("96%"),
        height: hp("20%"),
        alignItems: 'center',
        
       color:'#3E4F88',
       
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
        color:'#3E4F88',
        fontWeight:'800',
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

export default JobApplication;