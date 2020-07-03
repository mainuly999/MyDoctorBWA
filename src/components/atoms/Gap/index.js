import React from 'react';
import { View } from 'react-native';

const Gap = ({tinggi, lebar}) => {
  return (
    <View style={{height: tinggi, width: lebar}}></View>
  )
}

export default Gap;
