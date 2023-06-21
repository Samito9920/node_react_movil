import React, { useEffect, useState } from "react";
import { FlatList, TouchableOpacity, View , Text} from "react-native";
import { getParsedCommandLineOfConfigFile } from "typescript";
import Task from "./Task";
import { StyleSheet } from "react-native";

const ListComponent= (props) => {
    const [taskItems, setTaskItems] = useState([]); 

    useEffect(() => {
        fechData();
    },[])

    const fechData = async() =>{
        try {
            const response  = await fetch("https://api.unsplash.com/photos/?client_id=ZXjOAAdwefwfYGtyhjJmAerkWnGDxNNnEwTlnHkSqk4")
            const jsonData = await response.json();
            console.log(jsonData)
            setTaskItems(jsonData)
        } catch (er){
            console.log(er);
        }
    }

    const Item = ({task, i}) =>{
        return (
          <TouchableOpacity style={styles.peritem} key={i} onPress={()=> {getProfile(task)} }>
            <Task task={task} />
          </TouchableOpacity>  
        )
    }
    return( taskItems && 
        <View style={styles.container}>
            <View style={styles.taskWrapper}>
                <Text style={styles.sectionTitle}> Se listan los perfiñes</Text>
                <View style={styles.items}>
                    <FlatList data={taskItems} renderItem={({item, i}) => 
                    <Item task={item} i={i} />
                    }>
                        
                    </FlatList>
                </View>
            </View>
           
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ListComponent;