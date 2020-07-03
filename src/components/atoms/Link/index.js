import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Link = ({size, title, align}) => {
    return (
        <View>
            <Text style={styles.text(size, align)}>{title}</Text>
        </View>
    )
}

export default Link;

const styles = StyleSheet.create({
  text:(size, align) => ({
    fontFamily:'Nunito-Regular',
    fontSize: size == true ? size : 12,
    color: '#7D8797',
    textDecorationLine: 'underline',
    textAlign: align
  })
})
