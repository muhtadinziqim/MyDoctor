import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { ILGetStarted, ILLogo } from '../../assets/illustration'
import { Button, Gap } from '../../components'
import { colors, fonts } from '../../utils'

const GetStarted = ({navigation}) => {
    return (
        <ImageBackground source={ILGetStarted} style={styles.page}>
            <View>
                <ILLogo />
                <Text style={styles.text}>Konsultasi dengan dokter jadi lebih mudah & fleksibel</Text>
            </View>
            <View>
                <Button title="Get Started" type="primary" onPress={() => navigation.navigate('Register')} />
                <Gap height={16}/>
                <Button title="Sign In" type="secondary" onPress={() => navigation.navigate('Login')} />
            </View>
        </ImageBackground>
    )
}

export default GetStarted

const styles = StyleSheet.create({
    page: {
        padding: 40,
        justifyContent: 'space-between',
        backgroundColor: colors.white,
        flex: 1
    },
    text: {
        marginTop: 90,
        color: colors.white,
        fontSize: 28,
        fontFamily: fonts.primary[600],
    }
})


