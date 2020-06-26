import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {IL_Logo} from '../../assets'

const Splash = () => {
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
    color: '#112340', fontWeight: '600', fontSize: 20, marginTop: '5%'
  }
});
