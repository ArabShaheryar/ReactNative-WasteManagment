import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import AppBar from '../../../components/AppBar';
import {ArrowBack, EditIcon} from '../../../Assets';
import {Images} from '../../../Assets/images';
import {hp} from '../../../utils/responsive';
import InputText from '../../../components/InputText';
import CustomButton from '../../../components/CustomButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const UserEditProfile = () => {
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

      <Text style={styles.headinText}>Profile Setting</Text>
      <InputText placeholder="First Name" />
      <InputText placeholder="Last Name" />

      <Text
        style={[styles.headinText, {marginBottom: hp(0), marginTop: hp(2)}]}>
        Property Setup
      </Text>
      <InputText placeholder="Select Property" />
      <InputText placeholder="Building Number" />
      <InputText placeholder="Unit Number" />

      <CustomButton
        text="Update"
        onPress={() => {
          // navigation.navigate('Signin')
        }}
        extraStyle={{marginTop: hp(4), width: '50%', alignSelf: 'flex-end'}}
      />
    </KeyboardAwareScrollView>
  );
};

export default UserEditProfile;
