import React from "react";
import { View, Image, Text, Linking, Icon } from "react-native";
import Task from "./Task";
import { StyleSheet } from "react-native";

const instagram_username = <Icon name="instagram" size={30} color="blue"/>
const portfolio_url = <Icon name="instagram" size={30} color="blue"/>

const Profile = ({task}) => {

    return (
        <View style={styles.item}>
            <View style={styles.subimagen}>
                <View style={styles.leftSide}>
                    <Image style={styles.image} source={{ uri: task.urls.raw }} />
                </View>
                <View style={styles.rigtSide}>
                    <Text style={{ color: 'blue' }} onPress={() => {
                        Linking.openURL(task.portfolio_url)
                    }}>
                        {task.user.name}
                    </Text>
                    <View style={styles.redes}>
                        <Text style={{color: 'blue'}} onPress={() => {
                        Linking.openURL(task.user.social.instagram_username)
                    }}>
                        {instagram_username}
                        </Text>
                        <Text style={{color: 'blue'}} onPress={() => {
                        Linking.openURL(task.user.portfolio_url)
                    }}>
                        {portfolio_url}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        heigth: "100%",
        width: "100%",
        backgroundColor: "white",
        borderRadius: "20",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }, subimagen: {
        width: "100%",
        height: "100%",
        flexBasis: "70%",
        display: "flex",
        flexDirection:"row"
    }, leftSide :{
        flex: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }, image:{
        width: 100,
        height: 100,
        borderRadius: 50
    }, rigtSide: {
        flexBasis: "50%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-evenly"
    }, redes :{
        width : "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        flexDirection: "row"
    }
})

export default Profile;