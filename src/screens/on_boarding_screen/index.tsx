import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Images} from '../../Assets/images';
import {EmployeeLogo, HomeLogo, OBLogo} from '../../Assets';
import styles from './styles';
import CustomButton from '../../components/CustomButton';
import {hp} from '../../utils/responsive';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Colors} from '../../utils/app_colors';

const OnBoarding = () => {
  const navigation = useNavigation<any>();
  const [roleModel, setRoleModel] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');
  const UserRole = 'UserRole';
  useEffect(() => {
    setRoleModel(true);
  }, []);

  const handleContinueButton = async () => {
    setRoleModel(false);
    setSelectedRole(selectedRole);
    await AsyncStorage.setItem(UserRole, selectedRole);
  };

  return (
    <ImageBackground source={Images.OB} style={{flex: 1}}>
      <View style={styles.bottomContent}>
        <OBLogo />
        <Text style={styles.obText}>{'Hassle-Free Waste \nManagement!'}</Text>
        <Text style={styles.obTextContent}>
          Request trash pickups, get reminders, and track services — all in one
          app.
        </Text>
        <CustomButton
          text="Get Started"
          onPress={() => {
            navigation.navigate('Signin', {userType: selectedRole});
          }}
          extraStyle={{marginTop: hp(6)}}
        />
        {selectedRole === 'User' ? (
          <TouchableOpacity onPress={() => navigation.replace('SignUp')}>
            <Text style={styles.newUser}>
              New User? <Text style={styles.newUserSpan}> Create Account</Text>
            </Text>
          </TouchableOpacity>
        ) : (
          <View style={{ paddingBottom: hp(5),}}></View>
        )}
      </View>
      <Modal
        transparent={true}
        visible={roleModel}
        animationType="fade"
        onRequestClose={() => setRoleModel(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.logInAs}>Login as</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TouchableOpacity
                onPress={() => setSelectedRole('User')}
                style={[
                  styles.roleBox,
                  {
                    borderColor:
                      selectedRole === 'User'
                        ? Colors.PrimaryColor
                        : Colors.lightGrey,
                  },
                ]}>
                <HomeLogo />
                <Text
                  style={[
                    styles.roleText,
                    {
                      color:
                        selectedRole === 'User'
                          ? Colors.PrimaryColor
                          : Colors.DarkGrey,
                    },
                  ]}>
                  User
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setSelectedRole('Employee')}
                style={[
                  styles.roleBox,
                  {
                    borderColor:
                      selectedRole === 'Employee'
                        ? Colors.PrimaryColor
                        : Colors.lightGrey,
                  },
                ]}>
                <EmployeeLogo />
                <Text
                  style={[
                    styles.roleText,
                    {
                      color:
                        selectedRole === 'Employee'
                          ? Colors.PrimaryColor
                          : Colors.DarkGrey,
                    },
                  ]}>
                  Employee
                </Text>
              </TouchableOpacity>
            </View>
            <CustomButton
              text="Continue"
              onPress={() => {
                handleContinueButton();
              }}
              extraStyle={{marginTop: hp(2.5)}}
            />
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
};

export default OnBoarding;
