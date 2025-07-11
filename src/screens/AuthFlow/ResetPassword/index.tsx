import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AppBar from '../../../components/AppBar';
import InputText from '../../../components/InputText';
import CustomButton from '../../../components/CustomButton';
import {hp, wp} from '../../../utils/responsive';
import {Colors} from '../../../utils/app_colors';
import styles from './styles';
import {EyeHide, Lock} from '../../../Assets';
import {showErrorToast} from '../../../utils/toast';

const ResetPassword = () => {
  const navigation = useNavigation<any>();
  const [roleModel, setRoleModel] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleContinueButton = () => {
    if (!password || password === '') {
      showErrorToast('Error', 'Please Enter Password');
      return;
    } else if (!confirmPassword || confirmPassword === '') {
      showErrorToast('Error', 'Please Enter Confirm Password');
      return;
    } else if (password !== confirmPassword) {
      showErrorToast('Error', 'Password Mismatch');
      return;
    } else {
      setRoleModel(true);
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
        <Text style={styles.profileText}>Change Password</Text>
        <Text style={styles.profileInfo}>Create a New Password</Text>
        <InputText
          placeholder="Password"
          addLeft={<Lock />}
          addRight={<EyeHide />}
          value={password}
          onChangeText={(text: any) => setPassword(text)}
        />
        <InputText
          placeholder="Confirm Password"
          addLeft={<Lock />}
          addRight={<EyeHide />}
          value={confirmPassword}
          onChangeText={(text: any) => setConfirmPassword(text)}
        />

        <CustomButton
          text="Reset Password"
          onPress={() => {
            handleContinueButton();
          }}
          extraStyle={{marginTop: hp(40), marginBottom: hp(5)}}
        />
      </View>

      <Modal
        transparent={true}
        visible={roleModel}
        animationType="fade"
        onRequestClose={() => setRoleModel(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.logInAs}>Password Changed!</Text>
            <Text style={styles.contentText}>
              Password Changed Successfully. Now you can use your New Password
              to login into your account.
            </Text>
            <CustomButton
              text="Back to Login"
              onPress={() => {
                setRoleModel(false);
                navigation.navigate('Signin', {userType: 'User'});
              }}
              extraStyle={{marginTop: hp(2.5)}}
            />
          </View>
        </View>
      </Modal>
    </KeyboardAwareScrollView>
  );
};

export default ResetPassword;
