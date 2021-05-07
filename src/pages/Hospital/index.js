import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {
	DummyHospital1,
	DummyHospital2,
	DummyHospital3,
	ILHospitalBG,
} from '../../assets';
import { ListHospital } from '../../components';
import { colors, fonts } from '../../utils';

const Hospital = () => {
	return (
		<View style={styles.page}>
			<ImageBackground source={ILHospitalBG} style={styles.background}>
				<Text style={styles.title}>Nearby Hospitals</Text>
				<Text style={styles.desc}>3 Tersedia</Text>
			</ImageBackground>
			<View style={styles.content}>
				<ScrollView showsVerticalScrollIndicator={false}>
					<ListHospital
						type="Rumah Sakit"
						name="Bunga Citra Medika"
						address="Jl. Merdeka No.33 "
						pic={DummyHospital1}
					/>
					<ListHospital
						type="Rumah Sakit Anak"
						name="Kasih Bunda Spam"
						address="Jl. Pemuda No. 1"
						pic={DummyHospital2}
					/>
					<ListHospital
						type="Rumah Sakit Jiwa"
						name="Makasih Pak BOs"
						address="Jl. Veteran No. 12"
						pic={DummyHospital3}
					/>
				</ScrollView>
			</View>
		</View>
	);
};

export default Hospital;

const styles = StyleSheet.create({
	page: {
		backgroundColor: colors.secondary,
		flex: 1,
	},
	content: {
		backgroundColor: colors.white,
		borderRadius: 20,
		marginTop: -30,
		flex: 1,
		paddingTop: 14,
	},
	background: {
		height: 240,
		paddingTop: 30,
	},
	title: {
		fontSize: 20,
		fontFamily: fonts.primary[600],
		color: colors.white,
		textAlign: 'center',
	},
	desc: {
		fontSize: 14,
		fontFamily: fonts.primary[300],
		color: colors.white,
		marginTop: 6,
		textAlign: 'center',
	},
});
