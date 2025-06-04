
import React from 'react'
import { View, Text } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ArrowBack, ArrowDropDown } from '../../../Assets'
import AppBar from '../../../components/AppBar'
import CustomButton from '../../../components/CustomButton'
import InputText from '../../../components/InputText'
import { hp } from '../../../utils/responsive'
import styles from './styles'

const AddProperty = () => {
  return (
    <KeyboardAwareScrollView style={styles.body}>
    <AppBar text="Add New Property" leftIcon={<ArrowBack />} />
    <Text style={styles.dateTimeText}>Property Details</Text>
    <InputText placeholder="Property Name" />
    <InputText placeholder="Units" />
    <Text style={styles.dateTimeText}>Contact Information</Text>
    <InputText placeholder="Manager Name" />
    <InputText placeholder="Email Address" />
     <InputText placeholder="Phone Number" />
    <Text style={styles.dateTimeText}>Access Code</Text>
    <InputText placeholder="PRT343" addRight={<ArrowDropDown />} />

    

    <CustomButton
      text="Add"
      onPress={() => {
        // navigation.navigate('Signin')
      }}
      extraStyle={{marginTop: hp(5), marginBottom:hp(5), width: '50%', alignSelf: 'flex-end'}}
    />
  </KeyboardAwareScrollView>
  )
}

export default AddProperty