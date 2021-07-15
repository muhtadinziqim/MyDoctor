import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { IconAddPhoto, IconRemovePhoto, ILNullPhoto } from '../../assets'
import { Button, Gap, Header, Link } from '../../components'
import { colors, fonts, storeData } from '../../utils'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
// import ImagePicker from 'react-native-image-picker';
import { showMessage } from 'react-native-flash-message'
import { Firebase } from '../../config'

const UploadPhoto = ({ navigation, route }) => {

    const { fullName, profession, uid } = route.params;

    const [hasPhoto, setHasPhoto] = useState(false)
    const [photo, setPhoto] = useState(ILNullPhoto)

    const [photoForDB, setPhotoForDb] = useState('')

    const getImage = () => {
        launchImageLibrary({ includeBase64: true, quality: 0.5, maxHeight: 200, maxWidth: 200 }, (response) => {
            // console.log("response", response.assets[0].uri);

            if (response.didCancel) {
                showMessage({
                    message: 'Opps Sepertinya terjadi error',
                    type: 'default',
                    backgroundColor: colors.error,
                    color: colors.white,
                    duration: 5000
                })
            } else if (response.errorMessage) {
                showMessage({
                    message: response.errorMessage,
                    type: 'default',
                    backgroundColor: colors.error,
                    color: colors.white,
                    duration: 5000
                })
            } else {
                console.log("Data Photo", response);
                const photoDB = `data:${response.assets[0].type};base64, ${response.assets[0].base64}`
                setPhotoForDb(photoDB); 
                const source = { uri: response.assets[0].uri };
                setPhoto(source);
                setHasPhoto(true);
            }
        });
    }

    const uploadAndContinue = () => {
        Firebase.database()
            .ref('users/' + uid + '/')
            .update({ photo: photoForDB })

            const data = route.params;
            data.photo = photoForDB;

            storeData('user', data);

            navigation.replace("MainApp")
    }

    return (
        <View style={styles.page}>
            <Header title="Upload Photo" />
            <View style={styles.content}>
                <View style={styles.profile} >
                    <TouchableOpacity style={styles.avatarWrapper} onPress={getImage} >
                        <Image source={photo} style={styles.avatar} />
                        {hasPhoto && <IconRemovePhoto style={styles.addPhoto} />}
                        {!hasPhoto && <IconAddPhoto style={styles.addPhoto} />}
                    </TouchableOpacity>
                    <Text style={styles.name} >{fullName}</Text>
                    <Text style={styles.profession} >{profession}</Text>
                </View>
                <View>
                    <Button disable={!hasPhoto} title="Upload and Continue" onPress={uploadAndContinue} />
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
        borderRadius: 110 / 2,
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
