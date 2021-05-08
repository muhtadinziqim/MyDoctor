import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DummyDoctor4, DummyDoctor5, DummyDoctor6 } from '../../assets'
import { List } from '../../components'
import { colors, fonts } from '../../utils'

const Messages = ({navigation}) => {
    const [doctors, setDoctors] = useState([
        {
            id: 1,
            profile: DummyDoctor4,
            name: "Christopher Will",
            desc: "harum excepturi tenetur"
        },
        {
            id: 2,
            profile: DummyDoctor5,
            name: "Karla Little",
            desc: "corporis labore et"
        },
        {
            id: 3,
            profile: DummyDoctor6,
            name: "Jaime Cummings",
            desc: "Ullam incidunt consequatur numquam."
        },
    ])

    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <Text style={styles.title}>Messages</Text>
                {
                    doctors.map(doctor => {
                        return (
                            <List
                                key={doctor.id}
                                profile={doctor.profile}
                                name={doctor.name}
                                desc={doctor.desc}
                                onPress={() => navigation.navigate("Chatting")} />
                        )
                    })
                }
            </View>
        </View>
    )
}

export default Messages

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.secondary,
        flex: 1,
    },
    content: {
        backgroundColor: colors.white,
        flex: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    title: {
        fontFamily: fonts.primary[600],
        fontSize: 20,
        color: colors.text.primary,
        marginTop: 30,
        marginLeft: 16,
        marginBottom: 16
    }
})
