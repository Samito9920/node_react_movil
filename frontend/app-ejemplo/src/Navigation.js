import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Menu from "./components/home/Menu";
import { StyleSheet } from "react-native";
import ProfileCard from "./components/home/ProfileCard";
import ListComponent from "./components/list/List";


const tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <tab.Navigator>
            <tab.Screen name="Home" component={Menu} options={{
                tabBarLabel: "Home",
                tabBarIcon: ({ color, size }) => {
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                }
            }}>

            </tab.Screen>

            <tab.Screen name="list" component={ListComponent} options={{
                tabBarLabel: "Listado",
                tabBarIcon: ({ color, size }) => {
                    <MaterialCommunityIcons name="clipboard" color={color} size={size} />
                }
            }}>

            </tab.Screen>
            
        </tab.Navigator>

    
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Navigation;