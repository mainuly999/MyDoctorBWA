import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Splash, GetStarted, Register, Login} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return(
    <Stack.Navigator >
      {/* dalam stack navigator kita bisa menyimpan banyak screen */}
      <Stack.Screen 
        name="Splash" 
        component={Splash}
        options={{headerShown: false}}
      />
      {/* dalam component kita akan memanggil file yang diinginkan dari folder page */}
      {/* urutan dalam stack navigator memnentukan halaman mana yang akan pertama muncul tapi bisa diakali dengan menambahkan di container Stack.Naavigator === initialRouteName = "nameRoute dalam kontainer"*/}
      <Stack.Screen 
        name="GetStarted" 
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register" 
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login" 
        component={Login}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
}

export default Router;