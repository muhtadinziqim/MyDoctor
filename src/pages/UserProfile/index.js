import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Gap } from '../../components/atoms';
import { Header, List, Profile } from '../../components/molecules';
import { colors } from '../../utils';

const UserProfile = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title="Profile" onPress={() => navigation.goBack() }/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Gap height={10} />
                <Profile  name="Ziqi Maulana" desc="Project Manager" />
                <Gap height={14} />
                <List
                    name="Edit Profile"
                    desc="Last Update Yesterday"
                    type="next"
                    icon="edit-profile"
                    onPress={() => navigation.navigate('UpdateProfile') }
                />
                <List
                    name="Laguage"
                    desc="Last Update Yesterday"
                    type="next"
                    icon="language"
                />
                <List
                    name="Rate"
                    desc="Last Update Yesterday"
                    type="next"
                    icon="rate"
                />
                <List
                    name="Help"
                    desc="Last Update Yesterday"
                    type="next"
                    icon="help"
                />
            </ScrollView>
        </View>
    );
};

export default UserProfile;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white
    }
});
