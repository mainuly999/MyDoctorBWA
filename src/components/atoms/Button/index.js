import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../../utils/colors';
import IconOnly from './IconOnly';

const Button = ({type, tulisan, onPencet, ikon}) => {
  if(type === 'icon-only'){
    return <IconOnly icon={ikon} pencet={onPencet}/>
  }
  return (
    <TouchableOpacity style={styles.apakah(type)} onPress={onPencet}>
      <Text style={styles.Text(type)}>{tulisan}</Text>
    </TouchableOpacity>
   )
}

export default Button;

const styles = StyleSheet.create({
  apakah: type => ({
    backgroundColor: type === 'secondary' ? colors.button.secondary.background : colors.button.primary.background,
    paddingVertical: '2.5%',
    borderRadius:10,
  }),
  Text: type => ({
    fontSize:18,
    fontFamily: 'Nunito-SemiBold',
    textAlign: 'center',
    color: type === 'secondary' ? colors.button.secondary.text : colors.button.primary.text,
  }),
})
