import {useNavigation} from '@react-navigation/native';
import React, { useState } from 'react';
import {Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AppBar from '../../../components/AppBar';
import {Colors} from '../../../utils/app_colors';
import {hp, wp} from '../../../utils/responsive';
import InputText from '../../../components/InputText';
import CustomButton from '../../../components/CustomButton';
import styles from './styles';
import {Email} from '../../../Assets';
import { showErrorToast } from '../../../utils/toast';

const ForgetPassword = () => {
  const navigation = useNavigation<any>();
   const [email, setEmail] = useState('');

  const handleContinueButton = () => {
    if (!email || email === '') {
      showErrorToast('Error', 'Please Enter Password');
      return;
    } else {
      navigation.navigate('ResetPassword');
    }
  };
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
        <Text style={styles.profileText}>Forget Password</Text>
        <Text style={styles.profileInfo}>
          Enter your Email Address to reset your current password.
        </Text>
        <InputText value={email} placeholder="Email" addLeft={<Email />}  onChangeText={(text: any) => setEmail(text)}/>

        <CustomButton
          text="Finish"
          onPress={() => {
            handleContinueButton()
          }}
          extraStyle={{marginTop: hp(56), marginBottom: hp(5)}}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default ForgetPassword;
