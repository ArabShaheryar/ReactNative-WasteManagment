import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AppBar from '../../../components/AppBar';
import InputText from '../../../components/InputText';
import CustomButton from '../../../components/CustomButton';
import {hp, wp} from '../../../utils/responsive';
import {Colors} from '../../../utils/app_colors';
import styles from './styles';
import {EyeHide, Lock} from '../../../Assets';

const ResetPassword = () => {
  const navigation = useNavigation<any>();
  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flexGrow: 1,
        backgroundColor: Colors.Whitecolor,
        paddingHorizontal: wp(4),
      }}>
      <View style={styles.body}>
        <AppBar />
        <Text style={styles.profileText}>Change Password</Text>
        <Text style={styles.profileInfo}>Create a New Password</Text>
        <InputText
          placeholder="Password"
          addLeft={<Lock />}
          addRight={<EyeHide />}
        />
        <InputText
          placeholder="Confirm Password"
          addLeft={<Lock />}
          addRight={<EyeHide />}
        />

        <CustomButton
          text="Reset Password"
          onPress={() => {
            navigation.navigate('Signin', {userType: 'User'});
          }}
          extraStyle={{marginTop: hp(40), marginBottom: hp(5)}}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default ResetPassword;
