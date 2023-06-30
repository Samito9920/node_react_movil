import React from "react";
import { StyleSheet, View, Image, Text, Linking } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import dog from '../assets/dogs.png';
import iA from'../assets/IA.jpeg';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";


const Google = <Icon  name="google" size={30} color="black" />

const Facebook = <Icon  name="facebook" size={30} color="black" />
const Instagram = <Icon  name="instagram" size={30} color="black" />
const Twitter = <Icon  name="twitter" size={30} color="black" />
const TikTok = <Icon name="tikTok" size={30} color="black"/>


const ProfileCard = () => {
    const user = {
        avatar :"https://grupoinmotion.com/10-formas-de-aprovechar-la-inteligencia-artificial-ia-y-brindar-experiencias-del-cliente-excepcionales/",
        coverphoto: "https://wallpapers.com/images/hd/profile-picture-background-10tprnkqwqif4lyv.jpg",
        name:"Samantha Jara"
    }
    return(
        <View style={styles.container}>
            <Image source={dog} style={styles.coverPhoto} />
            <View style={styles.avatarContainer}>
                <Image source={iA} style={styles.avatar} />
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
                <Text style={{ color: "blue" }} onPress={() => Linking.openURL("https://www.google.com/")}>
                    {Instagram}
                </Text>
                <Text style={{ color: "blue" }} onPress={() => Linking.openURL("https://www.google.com/")}>
                    {Twitter}
                </Text>
                <Text style={{ color: "blue" }} onPress={() => Linking.openURL("https://www.google.com/")}>
                    {TikTok}
                </Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container : {
        width: "100%",
        alignItems: "center"
    }, coverPhoto: {
        width: "80vw",
        height: "50vh",
        resizeMode: "cover",
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