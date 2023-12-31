import React from "react";
import { View, Image } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";

const Task = ({task}) => {
    return (
        <View style={styles.item} >
            <View style={styles.itemLeft}>
                <Image style={styles.image} source={{uri: task.urls.raw}}/>
                <Text style={styles.itemText}>{task.alt_description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom:20
    }, itemLeft: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap"
    }, image:{
        width: 100,
        height: 100, borderRadius: 15,

    }, itemText:{
    maxWidth:"50%",
    marginLeft: "20%"
    }
})

export default Task;