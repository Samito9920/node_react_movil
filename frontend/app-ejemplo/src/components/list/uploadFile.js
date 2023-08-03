import React, { useState } from "react";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import * as ExpoDocumentPicker from "expo-document-picker";
import Form from 'react-bootstrap/Form';

const uploadFile = () => {
    const [pdfDoc, setPdfDoc] = useState()
    const [pregunta, setPregunta] = useState('')
    const [result, setResult] = useState('')


    const handleFilePicker = async () => {
        let result = await ExpoDocumentPicker.getDocumentAsync({ copyToCacheDirectory: true });
        setPdfDoc(result.file)
    }
    const handleUpload = async () => {
        try {
            const data = new FormData()
            data.append('question', pregunta)
            data.append('file', pdfDoc)
            console.log(data.get('file'))
            const response = await fetch('http://localhost:9006/upload', {
                method: 'POST',
                body: data
            })
            if (response.ok) {
                setQuestion('')
                const responseJSON = await response.json()
                setResult(responseJSON.text)
            }


        } catch (error) {
            console.log(error)
        }

    }

    return (
        <View>
            <Form style={styles.formulario2}>
                <Button style={styles.boton} onPress={handleFilePicker} />
                <TextInput title={'Sube el archivo'} style={styles.componente} value={question} onChangeText={setPregunta}
                    placeholder={'Ingresa tu pregunta'} />
           
            <Button style={styles.boton} title={'Enviar archivo'} onPress={handleUpload} />
            </Form>
        </View>
    )
}
const styles = StyleSheet.create({
    formulario2: {
        width: '70vw',
        height: '20vh',
        flex: 1,
        backgroundColor: '#f2f2f2',
        padding: '20px',
        margin: '10px'
    },
    pregunta: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        margin: 10
    }, boton: {
        marginTop: 30,
        width: '10%',
        height: '25%',
        backgroundColor: '#FFFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '20px'
    }, componente: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }
})
export default uploadFile;