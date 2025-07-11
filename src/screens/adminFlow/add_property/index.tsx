import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ArrowBack, ArrowDropDown, GenerateIcon} from '../../../Assets';
import AppBar from '../../../components/AppBar';
import CustomButton from '../../../components/CustomButton';
import InputText from '../../../components/InputText';
import {hp} from '../../../utils/responsive';
import styles from './styles';
import {showErrorToast} from '../../../utils/toast';

const AddProperty = () => {
  const [propertyName, setPropertyName] = useState('');
  const [unitNumber, setUnitNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [managerName, setManagerName] = useState('');
  const [accessCode, setAccessCode] = useState('');

  const handleContinueButton = () => {
    if (!propertyName || propertyName === '') {
      showErrorToast('Error', 'Please Enter PropertyName');
      return;
    } else if (!unitNumber || unitNumber === '') {
      showErrorToast('Error', 'Please Enter Unit');
      return;
    } else if (!managerName || managerName === '') {
      showErrorToast('Error', 'Please Enter manager name');
      return;
    } else if (!email || email === '') {
      showErrorToast('Error', 'Please Enter Email');
      return;
    } else if (!phoneNumber || phoneNumber === '') {
      showErrorToast('Error', 'Please Select phone number');
      return;
    } else if (!accessCode || accessCode === '') {
      showErrorToast('Error', 'Please Enter Access code');
      return;
    } else {
    }
  };

  return (
    <KeyboardAwareScrollView style={styles.body}>
      <AppBar text="Add New Property" leftIcon={<ArrowBack />} />
      <Text style={styles.dateTimeText}>Property Details</Text>
      <InputText
        placeholder="Property Name"
        value={propertyName}
        onChangeText={text => setPropertyName(text)}
      />
      <InputText
        placeholder="Units"
        value={unitNumber}
        onChangeText={text => setUnitNumber(text)}
      />
      <Text style={styles.dateTimeText}>Contact Information</Text>
      <InputText
        placeholder="Manager Name"
        value={managerName}
        onChangeText={text => setManagerName(text)}
      />
      <InputText
        placeholder="Email Address"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <InputText
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
      />
      <Text style={styles.dateTimeText}>Access Code</Text>
      <InputText
        placeholder="PRT343"
        addRight={<GenerateIcon />}
        value={accessCode}
        onChangeText={text => setAccessCode(text)}
      />

      <CustomButton
        text="Add"
        onPress={() => {
          handleContinueButton()
          // navigation.navigate('Signin')
        }}
        extraStyle={{
          marginTop: hp(5),
          marginBottom: hp(5),
          width: '50%',
          alignSelf: 'flex-end',
        }}
      />
    </KeyboardAwareScrollView>
  );
};

export default AddProperty;
