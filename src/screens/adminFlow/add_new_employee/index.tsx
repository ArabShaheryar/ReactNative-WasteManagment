import React, {useState} from 'react';
import {Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  ArrowBack,
  ArrowDropDown,
  CalendarIcon,
  GenerateIcon,
} from '../../../Assets';
import AppBar from '../../../components/AppBar';
import CustomButton from '../../../components/CustomButton';
import InputText from '../../../components/InputText';
import {hp} from '../../../utils/responsive';
import styles from './styles';
import {showErrorToast} from '../../../utils/toast';

const AddNewEmployee = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [selectProperty, setSelectProperty] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');

  const handleContinueButton = () => {
    if (!firstName || firstName === '') {
      showErrorToast('Error', 'Please Enter First Name');
      return;
    } else if (!lastName || lastName === '') {
      showErrorToast('Error', 'Please Enter Last Name');
      return;
    } else if (!phoneNumber || phoneNumber === '') {
      showErrorToast('Error', 'Please Enter Phone Number');
      return;
    } else if (!email || email === '') {
      showErrorToast('Error', 'Please Enter Email');
      return;
    } else if (!selectProperty || selectProperty === '') {
      showErrorToast('Error', 'Please Select Property');
      return;
    } else if (!employeeId || employeeId === '') {
      showErrorToast('Error', 'Please Enter Employee Id');
      return;
    } else if (password !== password) {
      showErrorToast('Error', 'Please Enter Password');
      return;
    } else {
    }
  };

  return (
    <KeyboardAwareScrollView style={styles.body}>
      <AppBar text="Add New Employee" leftIcon={<ArrowBack />} />
      <Text style={styles.dateTimeText}>Property & Unit</Text>
      <InputText
        value={firstName}
        placeholder="First Name"
        onChangeText={text => setFirstName(text)}
      />
      <InputText
        value={lastName}
        placeholder="Last Name"
        onChangeText={text => setLastName(text)}
      />
      <Text style={styles.dateTimeText}>Contact Information</Text>
      <InputText
        value={phoneNumber}
        placeholder="Phone Number"
        onChangeText={text => setPhoneNumber(text)}
      />
      <InputText
        value={email}
        placeholder="Email Address"
        onChangeText={text => setEmail(text)}
      />
      <Text style={styles.dateTimeText}>Assigned Area</Text>
      <InputText
        value={selectProperty}
        placeholder="Select Property"
        addRight={<ArrowDropDown />}
        onChangeText={text => setSelectProperty(text)}
      />

      <Text style={styles.dateTimeText}>Employee iD</Text>
      <InputText
        value={employeeId}
        placeholder="EMP-23213"
        addRight={<GenerateIcon />}
        onChangeText={text => setEmployeeId(text)}
      />

      <Text style={styles.dateTimeText}>Password</Text>
      <InputText
        value={password}
        placeholder="Hshdu~78`jil"
        addRight={<GenerateIcon />}
        onChangeText={text => setPassword(text)}
      />

      <CustomButton
        text="Add"
        onPress={() => {
          handleContinueButton();
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

export default AddNewEmployee;
