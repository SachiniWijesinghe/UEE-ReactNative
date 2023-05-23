import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image,TouchableOpacity, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButtons/CustomButton';
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
                <Text style={style.TitelText}>Job Information</Text>
            </View>
        </View>
    )
}

const ProductListView = ({ ItemList }) => {

    
  


    return (
        <View style={style.detailBand}>

            

            <View style={style.itemContainer}>

                {
                    ItemList.map((item) => {
                        return (
                           
                                <View style={style.itemWrapper}>
                                    
                                    <View style={style.InfoView}>
                                        <View style={style.InfoView_row_Title}>
                                            
                                            <Text style={style.Title}>{item.title}</Text>
                                        </View>
                                    
                                       
                                       
                                        <View style={style.InfoView_row}>
                                            <Text style={style.infoDetails}>{item.decription1}</Text>
                                        </View>
                                        <View style={style.InfoView_row}>
                                            <Text style={style.infoDetails}>{item.decription2}</Text>
                                        </View>
                                        <View style={style.InfoView_row}>
                                            <Text style={style.infoDetails}>{item.decription3}</Text>
                                        </View>
                                        
                                        
                                       
                                    </View>
                                </View>
                            
                        )
                    })
                }
               
           
            </View>
           
        </View>
        

    )
}




//----------------------------render the app  and data    
const Consultinginfor = () => {


    


    const [productList, setProductList] = useState([
        {
            "id": 1,
             "title":"Become  a Freelancer",
            "decription1": "Find Work at home jobs. Search Here Now! Search For Work at home jobs With Us. Unbeatable Value. Connect Here. We just got better. Newest look. Real-Time Data. Try It Free. Connect on any device. Make Things Easy. Quality tested. More value than ever. Services: Visit us, Search Pages, Related Terms, Related Results.ple ",
            "decription2": "Find Work at home jobs. Search Here Now! Search For Work at home jobs With Us. Unbeatable Value. Connect Here. We just got better. Newest look. Real-Time Data. Try It Free. Connect on any device. Make Things Easy. Quality tested. More value than ever. Services: Visit us, Search Pages, Related Terms, Related Results.ple ",
            "decription3": "sample description sample description sample ",
           

        },
        
    ])

    return (
        <View style={style.main}>
            <TitelBar />
            <ProductListView ItemList={productList} />
        </View>
    )
}

const style = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
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
      



    detailBand: {
        width: wp('100%'),
        height: hp('100%'),
        alignItems: 'center',
        // backgroundColor:'grey',
    },

    searchView: {
        marginTop:wp('1%'),
        width: wp('100%'),
        height: hp('10%'),
        alignItems: 'center',
    //    backgroundColor:'black',
    },
    


    itemContainer: {
        marginTop:10,
        marginBottom:40,
        marginLeft:10,
        marginRight:10,
        width: wp('90%'),
        height: hp('90%'),
        alignItems: 'center',
        // backgroundColor:'orange',
        borderBottomWidth:1,
        borderLeftWidth:1,
        borderRightWidth:1,
        borderTopWidth:1,
        borderBottomColor:'#5c5ae1',
        borderTopColor:'#5c5ae1',borderLeftColor:'#5c5ae1',borderRightColor:'#5c5ae1',
        borderTopLeftRadius:20,borderBottomLeftRadius:20,borderTopRightRadius:20,borderBottomRightRadius:20,


       
        
    },


    
    
    itemWrapper: {

        marginTop:40,
        marginBottom:80,
        marginLeft:10,
        marginRight:10,
        width: wp('87%'),
        height: hp('90%'),
        alignItems: 'center',

       
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        // backgroundColor:'lightblue',
    },
    






    InfoView: {
       
        width: wp('85%'),
        height: hp('70%'),
       
        // justifyContent: 'center',
        
        // backgroundColor:'green',
        
    },
    InfoView_row_Title: {
        marginTop:10,
        width: wp('83%'),
        height: hp('6%'),
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor:'white',
        // justifyContent: 'center',
       
        
    },
    

    Title: {
        width: wp('83%'),
        height: hp('6%'),
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor:'white',
        fontSize:25,
        fontWeight: '800',
        color:'#5c5ae1',
        justifyContent: 'center',
         marginBottom:180,
        
    },
    InfoView_row_company: {
        width: wp('83%'),
        height: hp('4%'),
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor:'white',
       

       
        
    },
    Company: {
        width: wp('83%'),
        height: hp('4%'),
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor:'white',
        fontSize:15,
        fontWeight: '800',
        color:'#5c5ae1'

        
    },
    InfoView_row_mode: {
        width: wp('83%'),
        height: hp('4%'),
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor:'white',
       

       
        
    },
    Mode: {
        width: wp('83%'),
        height: hp('4%'),
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor:'white',
        fontSize:15,
        fontWeight: '800',
        color:'#5c5ae1'

        
    },
    InfoView_row: {
        width: wp('83%'),
        height: hp('20%'),
       
        flexDirection: 'row',
        backgroundColor:'white',
        
    },


    infoDetails: {
    
        paddingVertical:10,
       
        height:wp('50%'),
        fontSize: 13,
        color: '#000',
        fontWeight: '800',
       
    },
   
    


});

export default Consultinginfor;