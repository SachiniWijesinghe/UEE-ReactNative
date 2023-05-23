/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/loginScreen';
import StartScreen from '../screens/startScreen';
import LoginType from '../screens/LoginType';
import LogregSeekerscreen from '../screens/LogregSeeker/LogregSeekerscreen';
import LogregProviderscreen from '../screens/LogregProvider/LogregProviderscreen';
import LoginProviderscreen from '../screens/LoginProvider/LoginProviderscreen';
import LoginSeekerScreen from '../screens/LoginSeeker/LoginSeekerScreen';
import RegisterSeekerscreen from '../screens/RegisterSeeker/RegisterSeekerscreen';
import RegisteProviderScreen from '../screens/RegisterProvider/RegisterProviderscreen';
import JobAll from '../screens/JobAll/JobAll';
import JobInforScreen from '../screens/JobInforScreen/JobInforScreen';
import JobApplication from '../screens/JobApplication/JobApplication';
import JobseekerHome from '../screens/JobSeekerHome/JobseekerHome';
import Successfull from '../screens/Successfull/Successfull';
import MyApplications from '../screens/My Applications/MyApplication';
import CV from '../screens/CV/CV';
import Consulting from '../screens/Consulting/Consulting';
import Consultinginfor from '../screens/Consultinginfor/Consultinginfor';
//import JobList from '../screens/RegisterProvider/RegisterProviderscreen';



const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>

    <Stack.Navigator >
        <Stack.Screen name="StartScreen" options={{headerShown: false}} component={StartScreen} ></Stack.Screen>
        <Stack.Screen name="LoginScreen"  component={LoginScreen} ></Stack.Screen>
        <Stack.Screen name="LoginType"options={{headerShown: false}} component={LoginType} ></Stack.Screen>
        <Stack.Screen name="SeekerRegLOG"options={{headerShown: false}} component={LogregSeekerscreen} ></Stack.Screen>
        <Stack.Screen name="ProviderRegLOG"options={{headerShown: false}} component={LogregProviderscreen} ></Stack.Screen>
        <Stack.Screen name="seekerLOG"options={{headerShown: false}} component={LoginSeekerScreen} ></Stack.Screen>
        <Stack.Screen name="SeekerReg"options={{headerShown: false}} component={RegisterSeekerscreen} ></Stack.Screen>
        <Stack.Screen name="ProviderReg"options={{headerShown: false}} component={RegisteProviderScreen} ></Stack.Screen>
        <Stack.Screen name="ProviderLOG"options={{headerShown: false}} component={LoginProviderscreen} ></Stack.Screen> 
        <Stack.Screen name="JobAll"options={{headerShown: false}} component={JobAll} ></Stack.Screen>  
        <Stack.Screen name="JobInforScreen"options={{headerShown: false}} component={JobInforScreen} ></Stack.Screen>  
        <Stack.Screen name="JobApplication"options={{headerShown: false}} component={JobApplication} ></Stack.Screen>  
        <Stack.Screen name="JobseekerHome"options={{headerShown: false}} component={JobseekerHome} ></Stack.Screen>  
        <Stack.Screen name="Successfull"options={{headerShown: false}} component={Successfull} ></Stack.Screen> 
        <Stack.Screen name="MyApplications"options={{headerShown: false}} component={MyApplications} ></Stack.Screen>  
        <Stack.Screen name="CV"options={{headerShown: false}} component={CV} ></Stack.Screen>  
        <Stack.Screen name="Consulting"options={{headerShown: false}} component={Consulting} ></Stack.Screen>  
        <Stack.Screen name="Consultinginfor"options={{headerShown: false}} component={Consultinginfor} ></Stack.Screen>  



    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
