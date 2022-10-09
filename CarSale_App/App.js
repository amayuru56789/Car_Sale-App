/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { View, Text } from 'react-native'
import React from 'react'
import Login from './screens/Login'
import AvcLogin from './screens/avcLogin'
import LoginScreen from './screens/Lo'
import CustomButton from './component/CustomButton'
import SocialIcon from './component/SocialIcon'
import Register from './screens/RegisterScreen'
import AddVehicleScreen from './screens/AddVehicleScreen'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inputs from './component/Inputs'

const Stack = createStackNavigator();

export default function App() {
  return (
    // <View>
    //   <Text>App</Text>
    //   <CustomButton/>
    //   <InputField/>
    
    // </View>
    // <Login/>
    // <AvcLogin/>
    // <LoginScreen/>
    //<SocialIcon/>
    //<Register/>
    //<AddVehicleScreen/>
    <NavigationContainer>
      <Stack.Navigator>
      {/* <Stack.Screen name="Home" component={Home} /> */}
      <Stack.Screen name="Inputs" component={Inputs} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="AddVehicleScreen" component={AddVehicleScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}
