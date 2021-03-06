import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button, Gap, Header, Input, Loading } from '../../components';
import { Firebase } from '../../config';
import { colors, getData, storeData, useForm } from '../../utils';
import { showMessage, hideMessage } from "react-native-flash-message";

const Register = ({ navigation }) => {
    // const [fullName, setFullName] = useState('');
    // const [profession, setProfession] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const [form, setForm] = useForm({
        fullName: '',
        profession: '',
        email: '',
        password: ''
    })

    const [loading, setLoading] = useState(false)

    const onContinue = () => {
        console.log(form);
        setLoading(true)
        Firebase.auth().createUserWithEmailAndPassword(form.email, form.password)
            .then((success) => {
                // Signed in
                setForm('reset');
                setLoading(false);

                const data = {
                    fullName: form.fullName,
                    profession: form.profession,
                    email: form.email,
                    uid: success.user.uid
                }

                Firebase.database()
                    .ref('users/' + success.user.uid + '/')
                    .set(data)

                storeData('user', data); 

                console.log("Register Success", success);

                navigation.navigate("UploadPhoto", data);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                setLoading(false)
                showMessage({
                    message: errorMessage,
                    type: 'default',
                    backgroundColor: colors.error,
                    color: colors.white,
                    duration: 5000
                })
                console.log("Error Register", errorMessage);
            });

    };
    return (
        <>
            <View style={styles.page}>
                <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
                <ScrollView style={styles.content}>
                    <Input
                        label="Full Name"
                        value={form.fullName}
                        onChangeText={value => setForm("fullName", value)}
                    />
                    <Gap height={24} />
                    <Input
                        label="Pekerjaan"
                        value={form.profession}
                        onChangeText={value => setForm("profession", value)}
                    />
                    <Gap height={24} />
                    <Input
                        label="Email"
                        value={form.email}
                        onChangeText={value => setForm("email", value)}
                    />
                    <Gap height={24} />
                    <Input
                        label="Password"
                        value={form.password}
                        onChangeText={value => setForm("password", value)}
                        secureTextEntry
                    />
                    <Gap height={40} />
                    <Button title="Continue" type="primary" onPress={onContinue} />
                    <Gap height={40} />
                </ScrollView>
            </View>
            {loading && <Loading />}
        </>
    );
};

export default Register;

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1,
    },
    content: {
        padding: 40,
        paddingTop: 0,
    },
});
