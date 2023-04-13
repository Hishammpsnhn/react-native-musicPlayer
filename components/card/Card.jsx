import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { icons, images } from '../../constants'
import { ScrollView } from 'react-native-gesture-handler'

const Cards = () => {
  return (
    <ScrollView>

    <TouchableOpacity
      style={{
        height: 60,
        justifyContent: 'center',    
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        marginVertical:5
      }}
      >
      <View style={{display:'flex',flexDirection:'row',}}>
        <Image
          source={images.profile}
          resizeMode="contain"
          style={{ width: '25%', height: '100%', borderRadius: 2 ,marginHorizontal:10,backgroundColor:"red"}}
          />
        <View style={{ }}>
          <Text>Suhanni sumo</Text>
          <Text>arjith sing</Text>
        </View>
      </View>
      <Image style={{ width: '5%', height: '30%' }} source={icons.heart} />
    </TouchableOpacity>
          </ScrollView>
  )
}

export default Cards
