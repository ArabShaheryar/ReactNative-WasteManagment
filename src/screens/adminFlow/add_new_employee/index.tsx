import React from 'react';
import {Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ArrowBack, ArrowDropDown, CalendarIcon, GenerateIcon} from '../../../Assets';
import AppBar from '../../../components/AppBar';
import CustomButton from '../../../components/CustomButton';
import InputText from '../../../components/InputText';
import {hp} from '../../../utils/responsive';
import styles from './styles';

const AddNewEmployee = () => {
  return (
    <KeyboardAwareScrollView style={styles.body}>
    <AppBar text="Add New Employee" leftIcon={<ArrowBack />} />
    <Text style={styles.dateTimeText}>Property & Unit</Text>
    <InputText placeholder="First Name" />
    <InputText placeholder="Last Name" />
    <Text style={styles.dateTimeText}>Contact Information</Text>
    <InputText placeholder="Phone Number" />
    <InputText placeholder="Email Address" />
    <Text style={styles.dateTimeText}>Assigned Area</Text>
    <InputText placeholder="Select Property" addRight={<ArrowDropDown />} />

    <Text style={styles.dateTimeText}>Employee iD</Text>
    <InputText placeholder="EMP-23213" addRight={<GenerateIcon />} />

    <Text style={styles.dateTimeText}>Password</Text>
    <InputText placeholder="Hshdu~78`jil" addRight={<GenerateIcon />} />

    <CustomButton
      text="Add"
      onPress={() => {
        // navigation.navigate('Signin')
      }}
      extraStyle={{marginTop: hp(5), marginBottom:hp(5), width: '50%', alignSelf: 'flex-end'}}
    />
  </KeyboardAwareScrollView>
  )
};

export default AddNewEmployee;
