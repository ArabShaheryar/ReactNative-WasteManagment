import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import AppBar from '../../../components/AppBar';
import {ArrowBack, ArrowDropDown, CalendarIcon} from '../../../Assets';
import InputText from '../../../components/InputText';
import CustomButton from '../../../components/CustomButton';
import {hp} from '../../../utils/responsive';

const RequestPicupScreen = () => {
  return (
    <View style={styles.body}>
      <AppBar text="Request Pickup" leftIcon={<ArrowBack />} />
      <Text style={styles.dateTimeText}>Date & Time</Text>
      <InputText placeholder="Select Date" addRight={<CalendarIcon />} />
      <InputText placeholder="Select Time Slot" addRight={<ArrowDropDown />} />
      <Text style={styles.dateTimeText}>Special instructions</Text>
      <InputText placeholder="e.g; Keep gate open, ring the bell etc." />

      <CustomButton
        text="Request Pickup"
        onPress={() => {
          // navigation.navigate('Signin')
        }}
        extraStyle={{marginTop: hp(40), width: '50%', alignSelf: 'flex-end'}}
      />
    </View>
  );
};

export default RequestPicupScreen;
