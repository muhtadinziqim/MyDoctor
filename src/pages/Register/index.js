import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Button, Gap, Header, Input } from '../../components';
import { colors } from '../../utils';

const Register = ({navigation}) => {
    return (
        <View style={styles.page} >
            <Header onPress={() => navigation.goBack() } title="Daftar Akun" />
            <ScrollView style={styles.content} >
                <Input label="Full Name" />
                <Gap height={24} />
                <Input label="Pekerjaan" />
                <Gap height={24} />
                <Input label="Email" />
                <Gap height={24} />
                <Input label="Password" />
                <Gap height={40} />
                <Button title="Continue" type="primary" onPress={() => navigation.navigate("UploadPhoto") } />
                <Gap height={40} />
            </ScrollView>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    },
    content: {
        padding: 40,
        paddingTop: 0,
    }
})
