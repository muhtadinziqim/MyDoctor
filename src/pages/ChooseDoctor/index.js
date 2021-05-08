import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DummyDoctor1} from '../../assets';
import {Header, List} from '../../components';
import {colors} from '../../utils';

const ChooseDoctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Pilih Dokter Anak" type="dark" onPress={() => navigation.goBack()} />
      <List
        type="next"
        profile={DummyDoctor1}
        name="Harriet Koepp III"
        desc="Pria"
        onPress={() => navigation.navigate("Chatting")}
      />
      <List
        type="next"
        profile={DummyDoctor1}
        name="Nathan Klein"
        desc="Pria"
      />
      <List
        type="next"
        profile={DummyDoctor1}
        name="Roman Strosin"
        desc="Pria"
      />
      <List
        type="next"
        profile={DummyDoctor1}
        name="Suzanne Wiegand"
        desc="Pria"
      />
      <List
        type="next"
        profile={DummyDoctor1}
        name="Mamie Swaniawski"
        desc="Pria"
      />
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
