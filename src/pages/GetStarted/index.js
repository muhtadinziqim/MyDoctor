import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { ILGetStarted, ILLogo } from '../../assets/illustration'
import { Button, Gap } from '../../components'

export default function GetStarted() {
    return (
        <ImageBackground source={ILGetStarted} style={styles.page}>
            <View>
                <ILLogo />
                <Text style={styles.text}>Konsultasi dengan dokter jadi lebih mudah & fleksibel</Text>
            </View>
            <View>
                <Button title="Get Started" type="primary"/>
                <Gap height={16}/>
                <Button title="Sign In" type="secondary"/>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    page: {
        padding: 40,
        justifyContent: 'space-between',
        backgroundColor: 'white',
        flex: 1
    },
    text: {
        marginTop: 90,
        color: 'white',
        fontSize: 28,
        fontFamily: 'Nunito-SemiBold',
    }
})
