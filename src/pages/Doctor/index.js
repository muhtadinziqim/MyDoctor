import React, {useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { DoctorCategory, Gap, HomeProfile, NewsItem, RatedDoctor } from '../../components'
import { colors, fonts, getData } from '../../utils';
import { DummyDoctor6, JSONCategoryDoctor } from '../../assets'

const Doctor = ({navigation}) => {
    
    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.wrapperSection}>
                        <Gap height={30} />
                        <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
                        <Text style={styles.welcome}>Mau Konsultasi dengan siapa hari ini ?</Text>
                    </View>
                    <View style={styles.wrapperScroll}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.category}>
                                <Gap width={32} />
                                {
                                    JSONCategoryDoctor.data.map(item => {
                                        return (
                                            <DoctorCategory
                                                key={item.id}
                                                category={item.category}
                                                onPress={() => navigation.navigate("ChooseDoctor") } />
                                        )
                                    })
                                }
                                <Gap width={22} />
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.wrapperSection}>
                        <Text style={styles.sectionLabel}>Top Rated Doctor</Text>
                        <RatedDoctor name="Bagus Amaluddin" desc="Dokter Anak" avatar={DummyDoctor6} onPress={() => navigation.navigate("DoctorProfile")} />
                        <RatedDoctor name="Bagus Amaluddin" desc="Dokter Anak" avatar={DummyDoctor6} onPress={() => navigation.navigate("DoctorProfile")} />
                        <RatedDoctor name="Bagus Amaluddin" desc="Dokter Anak" avatar={DummyDoctor6} onPress={() => navigation.navigate("DoctorProfile")} />
                        <Text style={styles.sectionLabel}>Good News</Text>
                    </View>
                    <NewsItem />
                    <NewsItem />
                    <NewsItem />
                    <Gap height={30} />
                </ScrollView>
            </View>
        </View>
    )
}

export default Doctor

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.secondary,
        flex: 1,
    },
    content: {
        backgroundColor: colors.white,
        flex: 1,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20
    },
    welcome: {
        marginTop: 30,
        marginBottom: 16,
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        maxWidth: 209
    },
    category: {
        flexDirection: 'row'
    },
    wrapperScroll: {
        marginHorizontal: -16
    },
    wrapperSection: {
        paddingHorizontal: 16,
    },
    sectionLabel: {
        marginTop: 30,
        marginBottom: 16,
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
    }
})
