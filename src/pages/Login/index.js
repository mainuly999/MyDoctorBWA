import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IL_Logo } from '../../assets';
import { Gap, Input, Link, Button } from '../../components';
import { colors } from '../../utils/colors';
import { fonts } from '../../utils';

const Login = ({navigation}) => {
  return (
    <View style={styles.page}>
      <IL_Logo/>
      <Gap tinggi={40}/>
      <Text style={styles.title}>Masuk dan Mulai berkonsultasi</Text>
      <Input label="Email Adress"/>
      <Gap tinggi={24}/>
      <Input label="Password"/>
      <Gap tinggi={10}/>
      <Link title="Forgot My Password" size={12}/>
      <Gap tinggi={40}/>
      <Button tulisan="Sign in" onPencet={() => navigation.replace("MainApp")}/>
      <Gap tinggi={30}/>
      <Link title="Create New Account" size={16} align="center"/>
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
  page:{padding:'10%', flex: 1,},
  title:{
    color: colors.text.default, 
    fontFamily: fonts.primary[600], 
    fontSize: 20, 
    marginTop: '10%',
    marginBottom: '10%', 
    maxWidth: 153,
  }
})
