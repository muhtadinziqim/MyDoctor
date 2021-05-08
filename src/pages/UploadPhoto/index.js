import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { IconAddPhoto, ILNullPhoto } from '../../assets'
import { Button, Gap, Header, Link } from '../../components'
import { colors, fonts } from '../../utils'

const UploadPhoto = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title="Upload Photo" />
            <View style={styles.content}>
                <View style={styles.profile} >
                    <View style={styles.avatarWrapper} >
                        <Image source={ILNullPhoto} style={styles.avatar} />
                        <IconAddPhoto style={styles.addPhoto} />
                    </View>
                    <Text style={styles.name} >Ziqi Maulana</Text>
                    <Text style={styles.profession} >Senior Programmer</Text>
                </View>
                <View>
                    <Button title="Upload and Continue" onPress={() => navigation.replace("MainApp")} />
                    <Gap height={30} />
                    <Link title="Skip for this" align="center" size={16} onPress={() => navigation.replace("MainApp")} />
                </View>
            </View>
        </View>
    )
}

export default UploadPhoto

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white,
    },
    content: {
        paddingHorizontal: 40,
        paddingBottom: 40,
        flex: 1,
        justifyContent: 'space-between',
    },
    profile: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },  
    avatarWrapper: {
        width: 130,
        height: 130,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 130 / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width: 110,
        height: 110,
    },
    addPhoto: {
        position: 'absolute',
        bottom: 8,
        right: 6
    },
    name: {
        fontSize: 24,
        color: colors.text.primary,
        fontFamily: fonts.primary[600],
        textAlign: 'center',
    },
    profession: {
        fontSize: 18,
        fontFamily: fonts.primary.normal,
        textAlign: 'center',
        color: colors.text.secondary
    }
})
