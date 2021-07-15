import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ILNullPhoto } from '../../assets';
import { Gap } from '../../components/atoms';
import { Header, List, Profile } from '../../components/molecules';
import { colors, getData } from '../../utils';

const UserProfile = ({ navigation }) => {
    const [profile, setProfile] = useState({
        fullName: '',
        profession: '',
        photo: ILNullPhoto
    })

    useEffect(() => {
        getData('user').then(res => {
            console.log("data profil : ", res);
            const data  = res;
            data.photo = {uri: res.photo}
            setProfile(data);
        })
    }, [])
    return (
        <View style={styles.page}>
            <Header title="Profile" onPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Gap height={10} />
                {profile.fullName.length > 0 && (
                    <Profile name={profile.fullName} desc={profile.profession} photo={profile.photo} />
                )}
                <Gap height={14} />
                <List
                    name="Edit Profile"
                    desc="Last Update Yesterday"
                    type="next"
                    icon="edit-profile"
                    onPress={() => navigation.navigate('UpdateProfile')}
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
