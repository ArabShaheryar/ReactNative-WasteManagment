import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import styles from './styles';
import {AppLogoWithColor, Email, EyeHide, Lock} from '../../../Assets';
import InputText from '../../../components/InputText';
import CustomButton from '../../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {hp, wp} from '../../../utils/responsive';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Colors} from '../../../utils/app_colors';

const Signin = (props: any) => {
  const {userType} = props?.route?.params;
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      style={{flexGrow: 1}}>
      <View style={styles.body}>
        <View style={styles.bottomContent}>
          <View style={styles.logoStyle}>
            <AppLogoWithColor />
          </View>
          <View style={{paddingHorizontal: wp(4)}}>
            <Text style={styles.SignInText}>Sign In</Text>
            {userType === 'User' ? (
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.dontHaveAccountText}>
                  Don’t have an account?{' '}
                  <Text style={styles.dontHaveAccountTextSpan}>Sign Up</Text>
                </Text>
              </TouchableOpacity>
            ) : (
              <View>
                <Text style={styles.dontHaveAccountText}>
                  Enter your credential provided you by admin.
                </Text>
              </View>
            )}
            <InputText
              placeholder="Email"
              addLeft={<Email />}
              value={email}
              onChangeText={(text: any) => setEmail(text)}
            />
            <InputText
              placeholder="Password"
              value={password}
              onChangeText={(text: any) => setPassword(text)}
              addLeft={<Lock />}
              addRight={<EyeHide />}
            />
            {userType === 'User' ? (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ForgetPassword');
                }}>
                <Text style={styles.forgetText}>Forgot Password?</Text>
              </TouchableOpacity>
            ) : (
              <View>
                <Text style={[styles.forgetText, {alignSelf: 'flex-start'}]}>
                  Contact{' '}
                  <Text
                    style={[styles.forgetText, {color: Colors.PrimaryColor}]}>
                    Admin
                  </Text>{' '}
                  in case if you forgot Email or password.
                </Text>
              </View>
            )}
            <CustomButton
              text="Sign In"
              onPress={() => {
                if (userType === 'User') {
                  navigation.replace('UserStack');
                } else {
                  if (email.trim() === 'Admin@gmail.com') {
                    navigation.replace('AdminStack');
                  } else {
                    navigation.replace('EmployeeStack');
                  }
                }
              }}
              extraStyle={{marginTop: hp(20)}}
            />
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Signin;
