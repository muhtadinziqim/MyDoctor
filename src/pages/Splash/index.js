import React, {useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets/illustration'
import { Firebase } from '../../config'
import { colors, fonts } from '../../utils'

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            Firebase.auth().onAuthStateChanged(user => {
                if(user){
                    navigation.replace("MainApp")
                }else{
                    navigation.replace('GetStarted')
                }
            })
        }, 3000);
    }, [])
    return (
        <View
            style={styles.page}>
            <ILLogo />
            <Text
                style={styles.title}
            >My Doctor</Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        color: colors.text.primary,
        marginTop: 20,
        fontFamily: fonts.primary[600]
    }
})
