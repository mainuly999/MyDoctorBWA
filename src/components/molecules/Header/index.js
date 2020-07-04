import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../utils/colors';
import { Button, Gap } from '../../atoms';

const Header = ({onPress, text}) => {
  return (
    <View style={styles.container}>
      <Button type='icon-only' ikon="back-dark" onPencet={onPress}/>
      <Text style={styles.text}>{text}</Text>
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
