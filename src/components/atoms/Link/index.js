import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../utils/colors';
import { fonts } from '../../../utils';

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
    fontFamily:fonts.primary.normal,
    fontSize: size,
    color: colors.text.secondary,
    textDecorationLine: 'underline',
    textAlign: align
  })
})
