import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Button = ({type, tulisan}) => {
  return (
    <View style={styles.apakah(type)}>
      <Text style={styles.Text(type)}>{tulisan}</Text>
    </View>
  )
}

export default Button;

const styles = StyleSheet.create({
  apakah: type => ({
    backgroundColor: type === 'secondary' ? 'white' : '#0BCAD4',
    paddingVertical: '2.5%',
    borderRadius:10,
  }),
  Text: type => ({
    fontSize:18,
    fontFamily: 'Nunito-SemiBold',
    textAlign: 'center',
    color: type === 'secondary' ? '#112340' : 'white',
  }),
})
