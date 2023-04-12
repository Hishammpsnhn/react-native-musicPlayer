import React from 'react'
import { FlatList, Image, ScrollView, Text, View } from 'react-native'
import { COLORS, SIZES, icons } from '../../constants'
import { TouchableOpacity } from 'react-native-gesture-handler'

const items = [
  { icon: icons.search, text: 'somewhere' },
  { icon: icons.search, text: 'somewhere' },
  { icon: icons.search, text: 'somewhere' },
  { icon: icons.search, text: 'somewhere' },
]

const Menu = () => {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, i) => (
          <View key={i} style={{ alignItems: 'center', marginRight: 30 }}>
            <Image
              source={item.icon}
              style={{
                width: 50,
                height: 40,
                resizeMode: 'contain',
              }}
            />
            <Text style={{ fontSize: 13, fontWeight: '900' }}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default Menu
