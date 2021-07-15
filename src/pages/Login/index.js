import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { ILLogo } from '../../assets/illustration';
import { Button, Gap, Input, Link, Loading } from '../../components';
import { colors, fonts, storeData, useForm } from '../../utils';
import {Firebase} from '../../config';
import { showMessage } from 'react-native-flash-message';

const Login = ({ navigation }) => {
    const [form, setForm] = useForm({ email: '', password: '' });
    const [loading, setLoading] = useState(false)

    const login = () => {
        console.log("form : ", form);
        setLoading(true)
        Firebase.auth().signInWithEmailAndPassword(form.email, form.password)
            .then(res => {
                console.log("Login sukses : ", res);
                setLoading(false);
                Firebase.database()
                    .ref(`users/${res.user.uid}/`)
                    .once('value')
                    .then(resDB => {
                        console.log("resDb : ", resDB.val());
                        if (resDB.val()) {
                            storeData('user', resDB.val())
                            navigation.replace('MainApp')
                        }
                    })
            }).catch(err => {
                console.log("Login error : ", err);
                showMessage({
                    message: err.message,
                    type: 'default',
                    backgroundColor: colors.error,
                    color: colors.white,
                    duration: 5000 
                })
                setLoading(false);
            })
            
        
        // 
    }
    return (
        <>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.page}>
                <ILLogo />
                <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
                <Input
                    label="Email Address"
                    value={form.email}
                    onChangeText={value => setForm('email', value)}
                />
                <Gap height={24} />
                <Input
                    label="Password"
                    value={form.password} 
                    onChangeText={value => setForm('password', value)}
                    secureTextEntry
                />
                <Gap height={10} />
                <Link title="Forgot My Password" size={12} />
                <Gap height={40} />
                <Button
                    title="Sign In"
                    type="primary"
                    onPress={login}
                />
                <Gap height={30} />
                <Link
                    title="Create New Account"
                    size={16}
                    align="center"
                    onPress={() => navigation.navigate('Register')}
                />
            </View>
        </ScrollView>
        {loading && <Loading />}
        </>
    );
};

export default Login;

const styles = StyleSheet.create({
    page: {
        padding: 40,
        backgroundColor: colors.white,
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 40,
        marginBottom: 40,
        maxWidth: 153,
    },
});
