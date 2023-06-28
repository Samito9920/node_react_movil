import React, { useEffect, useState } from "react";
import { Pressable, View, Text , TextInput} from "react-native";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { StyleSheet } from "react-native";

export default function InpTx() {

    const [datos, setDatos] = useState([]);
    const [nombre, setNombre] = useState();
    const [apellido, setApellido] = useState();

    useEffect(() => {
        actualizarDatos()
    }, [])

    const actualizarDatos = () => {
        setDatos('');
        setNombre(''),
        setApellido("")
    }

    const handleChangeNombre = (text) => {
        setNombre(text)
    }

    const handleChangeApellido = (text) => {
        setApellido(text)
    }

    const actualizar = () => {
        setDatos(nombre + "  " + apellido);
        console.log('Nombre:', nombre);
        console.log('Apellido:', apellido);
    }
    return (
        <View style={styles.formulario}>
            <View style={styles.nombre}>
                <Form style={styles.formulario1}>
                    <Form.Group style={styles.componente}>
                        <Form.Label style={styles.titulo} >Ingrese tu Nombre: </Form.Label>
                        <TextInput style={styles.cuadro} value={nombre} onChangeText={handleChangeNombre} placeholder="Nombre"/>
                    </Form.Group>

                </Form>

                <Form style={styles.formulario2}>
                    <Form.Group style={styles.componente}>
                        <Form.Label style={styles.titulo}>Ingrese tu Apellido: </Form.Label>
                        <TextInput style={styles.cuadro} value={apellido} onChangeText={handleChangeApellido} placeholder="Apellido"/>
                    </Form.Group>

                </Form>
                <Pressable style={styles.boton} onPress={() => actualizar()}>
                        Submit
                    </Pressable>
                <Text style={styles.datos}>{datos}</Text>
            </View>

        </View >
    )

}

const styles = StyleSheet.create({
    formulario: {
        paddingTop: 30,
        alignItems: "center",
        justifyContent: 'center'
    }, nombre: {
        width: '70vw',
        height: '20vh',
        alignItems: "center",
        justifyContent: 'center',
        paddingTop : '5%',
        display: 'flex',
        flexDirection: 'column'
    }, formulario1: {
        width: '70vw',
        height: '20vh',
        flex: 1,
        backgroundColor: '#f2f2f2',
        padding: '20px',
        margin: '10px'
    }, formulario2: {
        width: '70vw',
        height: '20vh',
        flex: 1,
        backgroundColor: '#f2f2f2',
        padding: '20px',
        margin: '10px'
    }, componente: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',

    }, titulo: {
        marginRight: '10px',
    }, cuadro: {
        marginLeft: 0,
        backgroundColor: '#FFFF',
        borderColor: '#FFFF'
    }, boton: {
        marginTop : 30,
        width: '20%',
        height: '25%',
        backgroundColor: '#FFFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '20px'
    }, datos:{
        paddingTop: '15px'
    }

})


