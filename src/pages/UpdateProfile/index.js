import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { launchImageLibrary } from 'react-native-image-picker';
import { ILNullPhoto } from '../../assets';
import { Button, Gap, Header, Input, Profile } from '../../components';
import { Firebase } from '../../config';
import { colors, getData, storeData } from '../../utils';

const UpdateProfile = ({ navigation }) => {
    const [profile, setProfile] = useState({
        fullName: '',
        profession: '',
        email: '',
    });
    const [password, setPassword] = useState('');

    const [photo, setPhoto] = useState(ILNullPhoto);
    const [photoForDB, setPhotoForDB] = useState('');

    useEffect(() => {
        getData('user').then(res => {
            const data = res;
            // data.photo = { uri: res.photo };
            setPhoto({ uri: res.photo });
            setProfile(data);
        });
    }, []);

    const update = () => {
        // navigation.goBack("UserProfile")

        if (password.length > 0) {
            if (password.length < 6) {
                showMessage({
                    message: "Password harus lebih dari 6 karakter",
                    type: 'default',
                    backgroundColor: colors.error,
                    color: colors.white,
                    duration: 5000
                })
            } else {
                // Ubah password
                updateProfilePassword()
                updateProfileData()
            }
        } else {
            updateProfileData()
        }

    };

    const updateProfilePassword = () => {
        Firebase.auth().onAuthStateChanged(user => {
            if (user) {
                user.updatePassword(password).catch(err => {
                    showMessage({
                        message: err.message,
                        type: 'default',
                        backgroundColor: colors.error,
                        color: colors.white,
                        duration: 5000
                    })
                })
            }
        })
    }

    const updateProfileData = () => {
        const data = profile;
        console.log("Photo : ", photo);
        if (photoForDB.length > 0) {
            data.photo = photoForDB;
        }else{
            // data.photo = {photo}
        }
        Firebase.database()
            .ref(`users/${profile.uid}/`)
            .update(data)
            .then(res => {
                console.log('Sukses update : ', data);
                storeData('user', data);
                navigation.replace("MainApp");
            })
            .catch(err => {
                showMessage({
                    message: err.message,
                    type: 'default',
                    backgroundColor: colors.error,
                    color: colors.white,
                    duration: 5000,
                });
            });
    }

    const changeText = (key, value) => {
        setProfile({
            ...profile,
            [key]: value,
        });
    };

    const getPhoto = () => {
        launchImageLibrary(
            { includeBase64: true, quality: 0.5, maxHeight: 200, maxWidth: 200 },
            response => {
                // console.log("response", response.assets[0].uri);
                if (response.didCancel) {
                    showMessage({
                        message: 'Opps Sepertinya terjadi error',
                        type: 'default',
                        backgroundColor: colors.error,
                        color: colors.white,
                        duration: 5000,
                    });
                } else if (response.errorMessage) {
                    showMessage({
                        message: response.errorMessage,
                        type: 'default',
                        backgroundColor: colors.error,
                        color: colors.white,
                        duration: 5000,
                    });
                } else {
                    console.log('Data Photo', response);
                    const photoDB = `data:${response.assets[0].type};base64, ${response.assets[0].base64}`;
                    setPhotoForDB(photoDB);
                    const source = { uri: response.assets[0].uri };
                    setPhoto(source);
                }
            },
        );
    };

    return (
        <View style={styles.page}>
            <Header title="Edit Profile" onPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <Profile isRemove photo={photo} onPress={getPhoto} />
                    <Gap height={26} />
                    <Input
                        label="Full Name"
                        value={profile.fullName}
                        onChangeText={value => changeText('fullName', value)}
                    />
                    <Gap height={24} />
                    <Input
                        label="Pekerjaan"
                        value={profile.profession}
                        onChangeText={value => changeText('profession', value)}
                    />
                    <Gap height={24} />
                    <Input label="Email" value={profile.email} disable />
                    <Gap height={24} />
                    <Input
                        label="Password"
                        value={password}
                        secureTextEntry
                        onChangeText={value => setPassword(value)}
                    />
                    <Gap height={40} />
                    <Button title="Save Profile" onPress={update} />
                </View>
            </ScrollView>
        </View>
    );
};

export default UpdateProfile;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white,
    },
    content: {
        padding: 40,
        paddingTop: 0,
    },
});
