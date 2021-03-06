import React from 'react'
import { StyleSheet, TextInput, View, Text } from 'react-native'
import { colors } from '../../../utils/colors';
import { fonts } from '../../../utils';

const Input = ({label}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput styles={styles.input}/>
    </View>
  )
}

export default Input;

const styles = StyleSheet.create({
  input:{
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 12,
  },
  label:{
    fontSize: 16,
    color: colors.text.secondary,
    marginBottom: 6,
    fontFamily: fonts.primary.normal
  }
})
