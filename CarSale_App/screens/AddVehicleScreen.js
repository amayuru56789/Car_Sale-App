// import { View, Text } from 'react-native'
import { View, Text, TouchableOpacity, ImageBackground, TextInput, StyleSheet, } from 'react-native';
import React from 'react'
//import ImagePicker from 'react-native-image-crop-picker';
import ImagePicker from 'react-native-image-picker';
import { NativeBaseProvider, Button, Stack } from 'native-base';
//import { Ionicons } from "@expo/vector-icons";

export default function AddVehicleScreen({navigation}) {

  const options ={
    title: 'Pick an image',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const openPicker = ()=>{
    ImagePicker.showImagePicker(options, (response) =>{
      if(response.didCancel){
        console.log('User cancelled image picker');
      }else if (response.error){
        console.log('ImagePicker Error: ', response.error);
      }else{
        const source = {uri: response.uri};
      }
    })
  }

  return (
    <NativeBaseProvider>
     <Stack direction={{
        base: "column",
        md: "row"
      }} space={4}>
          <Button onPress={()=> {navigation.navigate("Register")}}>
            Upload
          </Button>
      </Stack>    
    </NativeBaseProvider>
  )}