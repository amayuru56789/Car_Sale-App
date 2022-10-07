import InputField from '../component/InputField';
import { View, Text, StyleSheet, Input, SafeAreaView, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import CustomButton from '../component/CustomButton';
import SocialIcon from '../component/SocialIcon'
//import { ScrollView } from 'native-base';
// import InputField from '../component/InputField';

export default function Register() {
  return (

    <SafeAreaView style={{flex: 1, justifyContent:'center'}}>
      <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal: 25}}>
      <View style={{alignItems:'center', backgroundColor:'white'}}>
      <Image
         style={{height:300, width:300}} source={require('../assets/undraw_By_my_car_re_j3jt.png')}  />
      </View>
      
      <Text style={{fontFamily:'Roboto-Medium',fontSize: 28,
            fontWeight: '500',
            color: '#dfe6e9',
            marginBottom: 30,}}>Register
      </Text>

      <SocialIcon/>

      <Text style={{textAlign: 'center', color: '#666', marginBottom: 30}}>
        Or, register with email ...
      </Text>

      <View
        style={{
          flexDirection: 'row',
          borderBottomColor: '#ccc',
          borderBottomWidth: 1,
          paddingBottom: 8,
          marginBottom: 25,
        }}
      >
          <TextInput placeholder='Full Name' style={{flex: 1, paddingVertical: 0}}/>
      </View>

        <InputField
            // label={'Full Name'}
        />

      <View
        style={{
          flexDirection: 'row',
          borderBottomColor: '#ccc',
          borderBottomWidth: 1,
          paddingBottom: 8,
          marginBottom: 25,
        }}
      >
          <TextInput placeholder='Password' style={{flex: 1, paddingVertical: 0}} secureTextEntry={true} />
          {/* <TouchableOpacity onPress={()=> {}}>
            <Text style={{color:'#AD40AF', fontWeight:'700'}}>Forgot?</Text>
          </TouchableOpacity> */}
      </View>

      <View
        style={{
          flexDirection: 'row',
          borderBottomColor: '#ccc',
          borderBottomWidth: 1,
          paddingBottom: 8,
          marginBottom: 25,
        }}
      >
          <TextInput placeholder='Confirm Password' style={{flex: 1, paddingVertical: 0}} secureTextEntry={true} />
      </View>
      
      {/* <TouchableOpacity onPress={()=> {}} 
      style={{
        backgroundColor: '#AD40AF',
        padding: 20,
        borderRadius: 10,
        marginBottom: 30,
      }}>
        <Text style={{ textAlign: 'center', fontWeight: '700', fontSize: 16, color: '#fff', }}>
          Login
        </Text>
      </TouchableOpacity> */}
      <CustomButton/>

      {/* <View style={style.social_container}>
      <TouchableOpacity
           onPress={() => {}}
           style={{
             borderColor: '#ddd',
             borderWidth: 2,
             borderRadius: 10,
             paddingHorizontal: 30,
             paddingVertical: 10,
           }}>
          <Image 
                source={require('../assets/images.png')} style={style.image} />
        </TouchableOpacity>

        <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <Image 
                source={require('../assets/social-media-twitter-logo-blue-isolated-free-vector.jpg')} style={style.image} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <Image 
                source={require('../assets/Facebook-logo.png')} style={style.image} />
          </TouchableOpacity>
          </View> */}

          <View
        style={{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30,
        }}>
        <Text>Already registered?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={{color: '#AD40AF', fontWeight: '700'}}> Login</Text>
        </TouchableOpacity>
      </View>  
      </ScrollView>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
    container:{
        width:'90%',
        height:50,
        borderRadius:100,
        marginVertical:10,
        borderWidth:3.5
    },
    inputContainer:{
        borderBottomWidth:0
    },
    inputText:{
        color:'#0779e4',
        fontWeight:'bold',
        marginLeft:5
    },
    social_container:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 30,
    },
    image:{
      backgroundColor: '#ddd',
      borderWidth: 2,
      borderRadius: 10,
      width:30,
      height:30
    }
});