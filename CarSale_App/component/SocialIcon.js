// import React from 'react';
// import {View, Text, TouchableOpacity, TextInput} from 'react-native';

// export default function InputField({
//   label,
//   icon,
//   inputType,
//   keyboardType,
//   fieldButtonLabel,
//   fieldButtonFunction,
// }) {
//   return (
//     <View
//       style={{
//         flexDirection: 'row',
//         borderBottomColor: '#ccc',
//         borderBottomWidth: 1,
//         paddingBottom: 8,
//         marginBottom: 25,
//       }}>
//       {icon}
//       {inputType == 'password' ? (
//         <TextInput
//           placeholder={label}
//           keyboardType={keyboardType}
//           style={{flex: 1, paddingVertical: 0}}
//           secureTextEntry={true}
//         />
//       ) : (
//         <TextInput
//           placeholder={label}
//           keyboardType={keyboardType}
//           style={{flex: 1, paddingVertical: 0}}
//         />
//       )}
//       <TouchableOpacity onPress={fieldButtonFunction}>
//         <Text style={{color: '#AD40AF', fontWeight: '700'}}>{fieldButtonLabel}</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

import { View, Text, SafeAreaView, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { transform } from '@babel/core'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { NativeBaseProvider } from 'native-base';

export default function InputField() {
  return (
    // <SafeAreaView style={{flex: 1, justifyContent:'center'}}>
    //   <View style={{paddingHorizontal: 25}}>
    //   <View style={{alignItems:'center', backgroundColor:'white'}}>
    //   <Image
    //      style={{height:300, width:300, transform:[{rotate:'-5deg'}]}} source={require('../assets/undraw_Mobile_login_re_9ntv.png')}  />
    //   </View>
      
    //   <Text style={{fontFamily:'Roboto-Medium',fontSize: 28,
    //         fontWeight: '500',
    //         color: '#dfe6e9',
    //         marginBottom: 30,}}>Login
    //   </Text>
    //   <View></View>
    //   <MaterialIcons
    //         name="alternate-email"
    //         size={20}
    //         color="#dfe6e9"
    //         style={{marginRight: 5}}
    //       />
    //   </View>
    //   <InputField
    //       label={'Password'}
    //       // icon={
    //       //   <Ionicons
    //       //   name="ios-lock-closed-outline"
    //       //   size={20}
    //       //   color="#666"
    //       //   style={{marginRight: 5}}
    //       // />
    //       // }
    //       inputType="password"
          
    //       fieldButtonFunction={() => {}}
    //     />
    // </SafeAreaView>

    <NativeBaseProvider>
      <View style={style.social_container}>
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
          
      </View>
    </NativeBaseProvider>
  )
}

const style = StyleSheet.create({
  social_container:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  // social_icon:{
  //   borderColor: '#ddd',
  //   borderWidth: 2,
  //   borderRadius: 10,
  //   paddingHorizontal: 30,
  //   paddingVertical: 10,
  // }
  image:{
    backgroundColor: '#ddd',
    borderWidth: 2,
    borderRadius: 10,
    width:30,
    height:30
  }
});