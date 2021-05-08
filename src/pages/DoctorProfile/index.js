import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Header, Profile, ProfileItem } from '../../components'
import { colors } from '../../utils'

const DoctorProfile = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <Header title="Doctor Profile" onPress={() => navigation.goBack()} />
            <ScrollView>
                <Profile name="Putra Amaluddin" desc="Dokter Anak" />
                <Gap height={10} />
                <ProfileItem label="Alumni" value="Universitas Indonesia, 2000" />
                <ProfileItem label="Praktik" value="RSUD Bandung" />
                <ProfileItem label="No. STR" value="00009889865688" />
                <View style={styles.action}>
                    <Button title="Start Consultation" onPress={() => navigation.navigate("Chatting")} />
                </View>
            </ScrollView>
        </View>
    )
}

export default DoctorProfile

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white,
    },
    action: {
        padding: 40,
        paddingTop: 23
    }
})
