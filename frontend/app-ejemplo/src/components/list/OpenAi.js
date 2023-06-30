import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import { StyleSheet } from "react-native";
import { Pressable, View, Text, TextInput } from "react-native";
import { Configuration, OpenAIApi } from "openai";


export default function OpenAi() {
    const [data, setData] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const apiKey = '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';

    useEffect(() => {

    }, [])

    const configuration = new Configuration({
        apiKey
    })

    const openai = new OpenAIApi(configuration);

    const functionOpenAi = async () => {
        try {
            const response = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: `##Convierte a Binario:  ${busqueda}`,
                temperature: 0.1,
                max_tokens: 150,
                n: 1,
            })
            const data = response.data.choices[0].text;
            setData(data)
            const tokensConsumed = response.headers.get('x-usage-tokens');

            console.log('Tokens Consumed:', tokensConsumed);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };




    const handleChangeBuesqueda = (text) => {
        setBusqueda(text)
    }

    return (
        <View style={styles.formulario}>
            <Form style={styles.formulario1}>
                <Form.Group style={styles.componente}>
                    <Form.Label style={styles.titulo} >
                        <Text>Que deseas preguntar a ChatGpt</Text> </Form.Label>

                </Form.Group>
            </Form>
            <Form style={styles.formulario2}>
                <Form.Group style={styles.componente}>
                    <TextInput multiline={true}
                        numberOfLines={4} style={styles.cuadro} value={busqueda} onChangeText={handleChangeBuesqueda} placeholder="¿Qué le deseas preguntar?" />
                </Form.Group>
            </Form>

            <Form style={styles.formulario1}>
                <Form.Group style={styles.componente}>
                    <Form.Label style={styles.titulo} ><Text>La respuesta es:</Text> </Form.Label>

                </Form.Group>
            </Form>
            <View>
                <Text style={styles.datos}>{data}</Text>

            </View>
            <Pressable style={styles.boton} onPress={() => functionOpenAi()}>
                <Text>
                    Enviar
                </Text>
            </Pressable>
        </View>

    )
}


const styles = StyleSheet.create({
    formulario: {
        paddingTop: 50,
        paddingLeft: 50,
        alignItems: "center",
        justifyContent: 'center'
    }, formulario1: {
        width: '90vw',
        height: '50vh',
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
    }, cuadro: {
        marginLeft: 10,
        width: '80%',
        backgroundColor: '#FFFF',
        borderColor: '#FFFF'
    }, boton: {
        marginTop: 30,
        width: '10%',
        height: '25%',
        backgroundColor: '#FFFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '20px'
    }, pregunta: {
        paddingLeft: '30%'
    }
})