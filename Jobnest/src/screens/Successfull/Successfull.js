import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TextInput,Image, TouchableOpacity, RecyclerViewBackedScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

import Logo from '../../../assets/images/jobprovider.png';

const Successfull = () => {
    return (
        <View style={style.main}>
        
          <Image source={Logo} style={[style.logo  ]} resizeMode="contain" />
        </View>    
    )
}

const style = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        flexDirection:"column",
    },
    logo: {
        width: wp('90%'),
        height: hp('90%'),
        alignItems: 'center',
        justifyContent:'center', 
      
    },
})

export default Successfull;