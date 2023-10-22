
import React from 'react'
import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native'

const Post = () => {
  return (
    <View style={styles.container}>
        <View>
          <Image
            style={styles.image}
            source="https://picsum.photos/seed/696/3000/2000"
            contentFit="cover"
            transition={1000}
          />
        </View>
        <View>
          <Text>Hello 2 AAA </Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 200,
        width: 366,
        borderWidth: 2,
        borderColor: '#CCC',
        borderRadius: 24,
        //backgroundColor: 'red',
    },

    image: {
      width: 50,
      height: 50,

    },
});

export default Post