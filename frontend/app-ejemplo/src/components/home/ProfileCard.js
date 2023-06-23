import React from "react";
import { StyleSheet, View, Image, Text, Linking } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";


const Google = <Icon  name="google" size={30} color="black" />

const Facebook = <Icon  name="facebook" size={30} color="black" />


const ProfileCard = () => {
    const user = {
        avatar :"https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
        coverphoto: "https://wallpapers.com/images/hd/profile-picture-background-10tprnkqwqif4lyv.jpg",
        name:"Samantha Jara"
    }
    return(
        <View style={styles.container}>
            <Image source={{ uri: user.coverphoto }} style={styles.coverPhoto} />
            <View style={styles.avatarContainer}>
                <Image source={{ uri: user.avatar }} style={styles.avatar} />
                <Text style={styles.name}>
                    {user.name}
                </Text>
            </View>
            <View style={styles.buttomContainer}>
                <Text style={{ color: "blue" }} onPress={() => Linking.openURL("https://www.google.com/")}>
                    {Google}
                </Text>
                <Text style={{ color: "blue" }} onPress={() => Linking.openURL("https://www.google.com/")}>
                    {Facebook}
                </Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container : {
        width: "50%",
        alignItems: "center"
    }, coverPhoto: {
        width: "100%",
        height: 200,
        resizeMode: "cover"
    }, avatarContainer: {
        alignItems: "center",
        marginTop: -75
    
    }, avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 5,
        borderColor: "white"
    }, name: {
        marginTop:15,
        fontSize: 20,
        fontWeight:"bold"
    }, buttomContainer: {
        flexDirection: "row",
        marginTop: 20,
        width: "60%",
        justifyContent: "space-between"
    }
}
    
)

export default ProfileCard;