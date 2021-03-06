import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {IL_Logo} from '../../assets'
import { colors } from '../../utils/colors';
import { fonts } from '../../utils';

const Splash = ({navigation}) => {
  useEffect(()=>{
    console.log("jalan diawal Splash")
    setTimeout(()=>{
      navigation.replace('GetStarted');
      // pada navigation ada opsi yakni replace dan navigate. kalau pakae replace maka fungsi back button tidak aakn berfungsi karena dia tidak menympan history sebelumnya
    }, 3000);
    return()=>{
      console.log("update")
    }
  }, []);
  return (
    <View style={styles.page}>
      <IL_Logo/>
      <Text style={styles.title}>My Doctor</Text>
    </View>
  )
}

export default Splash;

const styles = StyleSheet.create({
  page:{
    flex:1, alignItems: 'center', justifyContent: 'center'
  },
  title:{
    color: colors.text.default, fontFamily: fonts.primary[600], fontSize: 20, marginTop: '5%'
  }
});
