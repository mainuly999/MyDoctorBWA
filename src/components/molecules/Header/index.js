import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { KembaliIconHitam } from '../../../assets';
import { Gap } from '../../atoms';
import { colors } from '../../../utils/colors';

const Header = () => {
  return (
    <View style={styles.container}>
      <KembaliIconHitam/>
      <Text style={styles.text}>Daftar Akun</Text>
      {/* berika data dummmy gap sebesar lebar icon */}
      <Gap lebar={24}/>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
  container:{
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text:{
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    color: colors.text.default,
    flex: 1,
    textAlign: 'center',
  }
})
