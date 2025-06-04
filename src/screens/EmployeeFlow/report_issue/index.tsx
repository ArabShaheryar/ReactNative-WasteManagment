import React from 'react';
import {Text, View} from 'react-native';
import {ArrowBack, PlusIcon} from '../../../Assets';
import AppBar from '../../../components/AppBar';
import styles from './styles';
import {Colors} from '../../../utils/app_colors';
import InputText from '../../../components/InputText';
import CustomButton from '../../../components/CustomButton';
import { hp } from '../../../utils/responsive';

const ReportIssue = () => {
  return (
    <View style={styles.body}>
      <AppBar text="Report Issue" leftIcon={<ArrowBack />} />
      <View style={styles.card}>
        <Text>Pickup Location</Text>
        <Text style={[styles.detail, {color: Colors.DarkGrey}]}>
          Unit Number: <Text style={styles.detail}>A-102</Text>
        </Text>
        <Text style={[styles.detail, {color: Colors.DarkGrey}]}>
          Building Name: <Text style={styles.detail}>Maple Residency</Text>
        </Text>
      </View>
      <Text>Issue Type</Text>

      <InputText placeholder="Select Issue" />
      <InputText placeholder="Description (Optional)" />

      <View style={styles.pictureBox}>
        <PlusIcon />
        <Text style={styles.textUpload}>Upload photos or Videos</Text>
      </View>

       <CustomButton
        text="Submit"
        onPress={() => {
          // navigation.navigate('Signin')
        }}
        extraStyle={{marginTop: hp(25), width: '50%', alignSelf: 'flex-end'}}
      />
    </View>
  );
};

export default ReportIssue;
