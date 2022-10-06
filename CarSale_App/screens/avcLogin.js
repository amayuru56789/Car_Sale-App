import { View, Text, Image, StyleSheet, ScrollView  } from 'react-native'
import React from 'react'
// import { ScrollView } from 'native-base'
import { background } from 'native-base/lib/typescript/theme/styled-system'
import Inputs from '../component/Inputs'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function AvcLogin() {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
        <View style={style.container}>
            <Image 
                source={require('../assets/undraw_Mobile_login_re_9ntv.png')}
                resizeMode="center"
                style={style.image} />
            <Text style={style.textTitle}>Welcome back</Text>
            <Text style={style.textBody}>Log in to your existant account</Text>
            <View style={{marginTop:20}} />
            {/* <Inputs name="User name" icon="user"/>     */}
            <MaterialIcons
            name="alternate-email"
            size={20}
            color="#666" />
            <Ionicons
            name="ios-lock-closed-outline"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
        </View>
      {/* <Text>avcLogin</Text> */}
    </ScrollView>
  )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    image:{
        width:400,
        height:250,
        marginVertical:10
    },
    textTitle:{
        fontFamily: 'Foundation',
        fontSize:40,
        marginVertical:10
    },
    textBody:{
        fontFamily:'Foundation',
        fontSize:16
    }
});   