import React from 'react'
import { TouchableOpacity } from 'react-native'
import { KembaliIconHitam } from '../../../assets'

const IconOnly = ({pencet, icon}) => {
  const Icon = () => {
    if (icon === 'back-dark'){
      return <KembaliIconHitam/>
    }
    if (icon === 'back-light'){
      return <KembaliIconHitam/>
    }
    return <KembaliIconHitam/>;
  }
  return (
    <TouchableOpacity onPress={pencet}>
      <Icon/>
    </TouchableOpacity>
  )
}

export default IconOnly;
