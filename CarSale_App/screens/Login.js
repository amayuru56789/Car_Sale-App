import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { NativeBaseProvider, Box, Stack, Input, Center, Image } from "native-base";
import { Button } from "native-base";
import SocialIcon from '../component/SocialIcon'
import CustomButton from '../component/CustomButton'
import Inputs from '../component/Inputs';

export default function Login() {
  return (
    <NativeBaseProvider>
      {/* <Box style={style.text}>Login</Box>
      <Text style={style.text}>Login</Text>
      <Stack style={style.container}>
      <Image
          style={style.img} source={require('../assets/undraw_Mobile_login_re_9ntv.png')}  />
      </Stack>
      
      <Stack style={style.txtContainer} space={4} w="75%" maxW="300px" mx="auto">
        <Input variant="outline" placeholder="User name" />
        <Input variant="outline" placeholder="Password" />
        <Button mb="2.5" mt="5" style={style.btn} size="sm">Login</Button>
      </Stack> */}
      <Inputs/>

      {/* <CustomButton /> */}

      {/* <Text style={{textAlign: 'center', color: '#666', marginBottom: 30}}>
          Or, login with ...
      </Text>

      <SocialIcon/> */}

      {/* <View
        style={{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30,
        }}>
        <Text>New to the app?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={{color: '#AD40AF', fontWeight: '700'}}> Register</Text>
        </TouchableOpacity>
      </View>   */}
    </NativeBaseProvider>
  )
}

const style = StyleSheet.create({
    text:{
      color:'white',
      fontSize:50,
      position:'relative',
      left:'30%',
      bottom:0,
      right:0,
      top:40
    },

    container:{
      flex:1,
      justifyContent:'center',
      alignItems: 'center',
      marginTop:80,
    },

    img: {
      width: 200,
      height:150,
    },

    txtContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',      
    },

    btn:{
      width:200,
    }
});
