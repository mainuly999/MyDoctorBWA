import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Button = ({type, tulisan, onPencet}) => {
  return (
    <TouchableOpacity style={styles.apakah(type)} onPress={onPencet}>
      <Text style={styles.Text(type)}>{tulisan}</Text>
    </TouchableOpacity>
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
