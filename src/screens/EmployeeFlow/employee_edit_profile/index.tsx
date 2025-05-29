

import React from 'react'
import { Image, Text, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './styles'
import AppBar from '../../../components/AppBar'
import { ArrowBack, EditIcon } from '../../../Assets'
import InputText from '../../../components/InputText'
import CustomButton from '../../../components/CustomButton'
import { hp } from '../../../utils/responsive'
import { Images } from '../../../Assets/images'

const EmployeeEditProfile = () => {
     const size = hp(14); // or any equal size using hp/wp
  return (
  <KeyboardAwareScrollView style={styles.body}>
      <AppBar text="Update Profile" leftIcon={<ArrowBack />} />

      <View style={styles.profilePhoto}>
        <View>
          <Image
            style={{width: size, height: size, borderRadius: size / 2}}
            source={Images.UserProfileImage}
          />
          <View style={styles.editIcon}>
            <EditIcon />
          </View>
        </View>

        <View style={{marginLeft: 12, marginTop: 10}}>
          <Text style={styles.UserName}>Nouman Imran</Text>
          <Text style={styles.UserEmail}>Tenant</Text>
        </View>
      </View>

      
      <InputText placeholder="First Name" />
      <InputText placeholder="Last Name" />
      <InputText placeholder="Phone Number" />

     

      <CustomButton
        text="Update"
        onPress={() => {
          // navigation.navigate('Signin')
        }}
        extraStyle={{marginTop: hp(4), width: '50%', alignSelf: 'flex-end'}}
      />
    </KeyboardAwareScrollView>
  )
}

export default EmployeeEditProfile