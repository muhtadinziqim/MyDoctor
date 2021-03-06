import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { DummyUser, ILNullPhoto } from '../../../assets'
import { colors, fonts, getData } from '../../../utils'

const HomeProfile = ({onPress}) => {
    const [profile, setProfile] = useState({
        photo: ILNullPhoto,
        fullName: '',
        profession: ''
    })

    useEffect(() => {
        getData('user').then(res => {
            console.log("datalocal : ", res);

            const data = res;
            data.photo = {uri: res.photo}

            setProfile(data);
        }); 
    }, [])
    return (
        <TouchableOpacity onPress={onPress} style={styles.page}>
            <Image source={profile.photo} style={styles.avatar}/>
            <View>
                <Text style={styles.name}>{profile.fullName}</Text>
                <Text style={styles.profession}>{profile.profession}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default HomeProfile

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row'
    },
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 46/2,
        marginRight: 12,
    },
    name: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        textTransform: 'capitalize',
    },
    profession: {
        fontSize: 12,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
        textTransform: 'capitalize',
    }
})
