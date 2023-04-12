import React from 'react'
import { Image, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { COLORS, SIZES, icons } from '../../constants'

const Search = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: SIZES.large,
        height: 50,
        backgroundColor: COLORS.gray2,
        borderRadius: SIZES.medium,
      }}
    >
      <View
        style={{
          flex: 1,
          marginRight: SIZES.small,
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <TextInput
          style={{
            width: '100%',
            height: '100%',
            paddingHorizontal: SIZES.medium,
          }}
          placeholder="search..."
        />
      </View>
      <TouchableOpacity
        style={{
          width: 50,
          height: '100%',
          borderRadius: SIZES.medium,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          source={icons.search}
          style={{ width: '50%', height: '50%', tintColor: COLORS.gray }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  )
}

export default Search
