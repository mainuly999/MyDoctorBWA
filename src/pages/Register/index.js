import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Gap, Header, Input } from '../../components';
import { colors } from '../../utils/colors';

const Register = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header onPress={()=> navigation.goBack()} text="Daftar Akun"/>
      <View style={styles.content}>
        <Input label="Full Name"/>
        <Gap tinggi={24}/>
        <Input label="Pekerjaan"/>
        <Gap tinggi={24}/>
        <Input label="Email Address"/>
        <Gap tinggi={24}/>
        <Input label="Password"/>
        <Gap tinggi={40}/>
        <Button tulisan="Continue"/>
      </View>
    </View>
  )
}

export default Register;

const styles = StyleSheet.create({
  page:{
    backgroundColor: colors.white,
    flex: 1,
  },
  content:{
    padding:'10%',
    paddingTop: 0,
  },
})
