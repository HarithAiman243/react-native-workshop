

// Note:  Need to Restart a lot ( Press 'R' in Terminal ). Sometimes really need to restart to fix issues, especially in styling.
import React from 'react'
import { Image } from 'expo-image';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Post = (props) => {
  return (
    <View style={styles.container}>
      {/* <View style={{ backgroundColor: 'yellow', flex: 0 }}> */}
      <View style={{ flex: 0 }}>
        <Image
          style={styles.image}
          // source="https://picsum.photos/seed/696/3000/2000"
          source={props.photoURL ?? 'https://learnenglishwithdemi.files.wordpress.com/2015/02/what.png' }
          // ?? means fall back.
          contentFit="cover"
          transition={1000}
        />
      </View>
      {/* SHIFT + ALT + F    to Make Proper Styling */}
      {/* <View style={{ backgroundColor: 'lightgreen', flex: 1 }}> */}
      <View style={{ flex: 1 }}>
        {/* <View style={[styles.topHeader, { backgroundColor: 'pink' }]}> */}
        <View style={[styles.topHeader]}>
          {/* CTRL - Click    to jump */}

          <Text style={[styles.headerText, styles.boldFont]}> {props.name}</Text>
          <Text style={[styles.headerText, styles.grayFont]}> {props.username}</Text>
          <Text style={[styles.headerText, styles.grayFont]}> {props.createdAt}</Text>

          {/* <Text style={[styles.headerText, styles.boldFont]}>Harith Aiman</Text> */}
          {/* <Text style={[styles.headerText, styles.grayFont]}>@harithaiman243</Text> */}
          {/* <Text style={[styles.headerText, styles.grayFont]}>2h</Text> */}
        </View>

        {/* <Text style={{ flex: 1, backgroundColor: '#fb6f92' }}> */}
        <Text style={{ flex: 1 }}>
          {props.children}
          {/* Using Props.  */}
        </Text>

        {/*  For Auto Import, press the Orange one */}

        {/* Bottom Buttons */}

        <View style={styles.postActions}>

          <TouchableOpacity style={styles.button}>
            <FontAwesome name="comment-o" size={14} color="black" />
            <Text style={styles.buttonText}> {props.comments}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <AntDesign name="retweet" size={14} color="black" />
            <Text style={styles.buttonText}> {props.reposts}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <AntDesign name="hearto" size={14} color="black" />
            <Text style={styles.buttonText}> {props.likes} </Text>
          </TouchableOpacity>

        </View>

        {/* CTRL +  V /    Win + V   to show Copied History  */}
      </View>
    </View>
  )
}

// Styling CSS

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 8,
    //marginTop: 12,
    //marginBottom: 12,
    //marginRight: 25,

    height: 200,
    width: 366,
    marginBottom: 12,     // Divide between each boxes
    borderWidth: 2,
    //borderRightWidth: 12,
    //borderLeftWidth: 12,
    borderColor: 'black',       // #4CBD15
    borderRadius: 24,
    //backgroundColor: '#55CEF4',

    justifyContent: 'center',
    //alignItems: 'center',
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 8,
    //margin: 8,
  },

  topHeader: {
    flexDirection: 'row',
    //alignItems: 'baseline',
    //justifyContent: 'space-around',

  },

  headerText: {   // F2 to just change name
    // ALT - Left arrow to Jump back
    color: 'green',
    marginRight: 10,
    //fontWeight: 'bold',
  },

  boldFont: {
    fontWeight: 'bold',
  },

  grayFont: {
    color: '#AAAAAA',
  },

  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',

  },

  button: {
    flexDirection: 'row',
    // for Y-Axis
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 12,
    color: 'grey',
  },


});

export default Post