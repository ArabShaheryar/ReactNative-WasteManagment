import {useNavigation} from '@react-navigation/native';
import React from 'react';
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

const SignUp = () => {
  const navigation = useNavigation<any>();
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
            <InputText placeholder="User Name" addLeft={<UserIcon />} />
            <InputText placeholder="Email" addLeft={<Email />} />
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
              text="Sign Up"
              onPress={() => {
                navigation.navigate('ProfileSetup');
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
