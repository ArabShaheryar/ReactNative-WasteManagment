import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  AccessCode,
  AppLogoWithColor,
  Email,
  EyeHide,
  InfoCircle,
  Lock,
  SignupLogo,
  UserIcon,
} from '../../../Assets';
import styles from './styles';
import {hp, wp} from '../../../utils/responsive';
import InputText from '../../../components/InputText';
import CustomButton from '../../../components/CustomButton';
import {showErrorToast} from '../../../utils/toast';

const SignUp = () => {
  const navigation = useNavigation<any>();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleContinueButton = () => {
    if (!userName || userName === '') {
      showErrorToast('Error', 'Please Enter Username');
      return;
    } else if (!email || email === '') {
      showErrorToast('Error', 'Please Enter Email');
      return;
    } else if (!password || password === '') {
      showErrorToast('Error', 'Please Enter Password');
      return;
    } else if (!confirmPassword || confirmPassword === '') {
      showErrorToast('Error', 'Please Enter Confirm Password');
      return;
    } else if (password !== confirmPassword) {
      showErrorToast('Error', 'Password Mismatch');
      return;
    } else {
      navigation.navigate('ProfileSetup');
    }
  };

  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      style={{flexGrow: 1}}>
      <View style={styles.body}>
        <View style={styles.bottomContent}>
          <View style={styles.logoStyle}>
            <SignupLogo />
          </View>
          <View style={{paddingHorizontal: wp(4)}}>
            <Text style={styles.SignInText}>Create Account</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Signin', {userType: 'User'})}>
              <Text style={styles.dontHaveAccountText}>
                Already have an account?
                <Text style={styles.dontHaveAccountTextSpan}>Sign In</Text>
              </Text>
            </TouchableOpacity>

            <InputText placeholder="Access Code" addLeft={<AccessCode />} />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: hp(1),
              }}>
              <InfoCircle />
              <Text style={styles.accessCodeText}>
                Access code provided by your
                <Text style={styles.accessCodeTextSpan}> Property Manager</Text>
              </Text>
            </View>
            <InputText value={userName} placeholder="User Name" addLeft={<UserIcon />} onChangeText={(text)=> setUserName(text)} />
            <InputText value={email} placeholder="Email" addLeft={<Email />} onChangeText={(text)=> setEmail(text)} />
            <InputText
              placeholder="Password"
              addLeft={<Lock />}
              addRight={<EyeHide />}
              value={password}
              onChangeText={(text)=> setPassword(text)}
            />
            <InputText
              placeholder="Confirm Password"
              addLeft={<Lock />}
              addRight={<EyeHide />}
              value={confirmPassword}
              onChangeText={(text)=> setConfirmPassword(text)}
            />

            <CustomButton
              text="Sign Up"
              onPress={() => {
                handleContinueButton();
              }}
              extraStyle={{marginTop: hp(8), marginBottom: hp(5)}}
            />
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignUp;
