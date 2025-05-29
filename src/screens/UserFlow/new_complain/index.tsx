import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import AppBar from '../../../components/AppBar';
import {ArrowBack, PlusIcon} from '../../../Assets';
import InputText from '../../../components/InputText';
import CustomButton from '../../../components/CustomButton';
import { hp } from '../../../utils/responsive';
import { useNavigation } from '@react-navigation/native';

const NewComplain = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.body}>
      <AppBar text="New Compaint" leftIcon={<ArrowBack />} />
      <View style={styles.pictureBox}>
        <PlusIcon />
        <Text style={styles.textUpload}>Upload photos or Videos</Text>
      </View>

       <InputText placeholder='Subject' />
       <InputText placeholder='Description' />

       <CustomButton
        text="Submit"
        onPress={() => {
          navigation.navigate('UserProfile')
        }}
        extraStyle={{marginTop: hp(45), width: '50%', alignSelf: 'flex-end'}}
      />
    </View>
  );
};

export default NewComplain;
