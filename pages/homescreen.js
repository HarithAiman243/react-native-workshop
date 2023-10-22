import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Post from '../components/Post';          // ../ means back 2 times, into root folder
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from '../config/firebase';

const Homescreen = () => {
    // Gettind data from Internet
    const [posts, setPosts] = useState([])

    // React Lifecycle, Mounting
    useEffect(() => {

        const postsCollection = collection(db, "Posts")

        const unsubscribe = onSnapshot(postsCollection, (querySnapshot) => {
            const _posts = [];
            querySnapshot.forEach((doc) => {
                _posts.push(doc.data().name);
            });
            console.log("Current cities in CA: ", _posts.join(", "));
        });

        return unsubscribe

        // fetch('https://workshop.elyasasmad.com/posts')
        //     .then((response) => response.json())
        //     .then((data) => {
        //         //console.log(data)       // Check the array
        //         setPosts(data)
        //     })

    }, [])

    // [{"name":"Elon Ma",
    //"username":"@yelon.ma",
    //"photoURL":"https://i1.sndcdn.com/avatars-XpzN0ujJa3iI96PS-hKizHQ-t500x500.jpg",

    //"content":"Just had a blast at the Full-Stack Fusion mobile app workshop in IIUM! 🚀💻 It's incredible to see so much talent and innovation in one room. Keep pushing the boundaries of what's possible! 🔥 #FullStackFusion #Innovation #MobileApps",

    //"createdAt":"19 mins",

    //"data":{
    //  "likes":8012,
    //  "reposts":5001,
    //  "comments":600}
    //  },

    return (
        <View style={styles.container}>
            <FlatList
                data={posts}
                renderItem={({ item }) => (
                    <Post
                        likes={item.data.likes}
                        comments={item.data.comments}
                        reposts={item.data.reposts}

                        name={item.name}
                        username={item.username}
                        photoURL={item.photoURL}
                        createdAt={item.createdAt}
                    >
                        {item.content}
                    </Post>
                )}
                keyExtractor={item => item.id}
            />

            <StatusBar style="auto" />
        </View>
    );
}

export default Homescreen

const styles = StyleSheet.create({})