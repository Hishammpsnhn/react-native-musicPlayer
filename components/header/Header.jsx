import React from 'react'
import { Image, TouchableOpacity } from 'react-native'

const Header = ({ iconUrl }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={{ width: '70%', height: '70%',borderRadius:2 }}
      />
    </TouchableOpacity>
  )
}

export default Header
