import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Button = ({ type, title }) => {
    return (
        <View style={styles.container(type)}>
            <Text style={styles.text(type)}>{title}</Text>
        </View>
    )
}

export default Button

const styles = StyleSheet.create({
    container: (type) => ({
        paddingVertical: 10,
        backgroundColor: type === "primary" ? '#0BCAD4' : 'white',
        borderRadius: 10
    }),
    text: (type) => ({
        fontSize: 16,
        textAlign: 'center',
        color: type === 'primary' ? 'white' : 'black',
        fontFamily: 'Nunito-SemiBold'
    })
})