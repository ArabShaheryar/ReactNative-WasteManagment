import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AppBar from '../../../components/AppBar';
import {
  ArrowBack,
  ArrowForward,
  EditIcon,
  EditSmall,
  InfoCircle,
  Lock,
  Notification,
  NotificationSmal,
  PersonIcon,
  SettingIcon,
  StarFeedback,
  SupportIcon,
  TermsAndConditions,
} from '../../../Assets';
import styles from './styles';
import {hp, wp} from '../../../utils/responsive';
import {Images} from '../../../Assets/images';
import {Colors} from '../../../utils/app_colors';
import {useNavigation} from '@react-navigation/native';

const EmployeeProfile = () => {
  const navigation = useNavigation<any>();
  const size = hp(7);
  return (
    <KeyboardAwareScrollView style={styles.body}>
      <AppBar text="Setting" leftIcon={<ArrowBack />} />
      <View style={styles.card}>
        <View style={styles.profilePhoto}>
          <View>
            <Image
              style={{width: size, height: size, borderRadius: size / 2}}
              source={Images.UserProfileImage}
            />
            <View
              style={{
                position: 'absolute',
                marginTop: hp(5),
                marginLeft: wp(11),
              }}>
              <EditSmall />
            </View>
          </View>
        </View>

        <View>
          <Text style={styles.nameText}>Ahmed Ali</Text>
          <Text style={[styles.detail, {color: Colors.DarkGrey}]}>
            Employee ID: <Text style={styles.detail}>EMP-0231</Text>
          </Text>
          <Text style={[styles.detail, {color: Colors.DarkGrey}]}>
            Phone: <Text style={styles.detail}>+12 300 1234567</Text>
          </Text>
          <Text style={[styles.detail, {color: Colors.DarkGrey}]}>
            Assigned Area: <Text style={styles.detail}>Maple Residency</Text>
          </Text>
        </View>
        <View style={styles.viewAllBox}>
          <Text style={styles.seeAllText}>Active</Text>
        </View>
      </View>
      <Text style={styles.headinText}>General</Text>
      <View style={styles.generView}>
        {/* General Setting */}
        <View style={styles.rowStyle}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <SettingIcon />
            <Text style={styles.itemText}>General Setting</Text>
          </View>
          <ArrowForward />
        </View>
        <View style={styles.divider}></View>

        {/* My Profile  */}
        <TouchableOpacity
          onPress={() => navigation.navigate('EmployeeEditProfile')}
          style={styles.rowStyle}>
          <View style={{flexDirection: 'row'}}>
            <PersonIcon />
            <Text style={styles.itemText}>My Profile</Text>
          </View>
          <ArrowForward />
        </TouchableOpacity>

        <View style={styles.divider}></View>

        {/* Notifications  */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Notifications')}
          style={styles.rowStyle}>
          <View style={{flexDirection: 'row'}}>
            <NotificationSmal />
            <Text style={styles.itemText}>Notifications</Text>
          </View>
          <ArrowForward />
        </TouchableOpacity>

        <View style={styles.divider}></View>

        {/* Work History  */}
        <TouchableOpacity
          onPress={() => navigation.navigate('EmployeeWorkHistory')}
          style={styles.rowStyle}>
          <View style={{flexDirection: 'row'}}>
            <Lock />
            <Text style={styles.itemText}>Work History</Text>
          </View>
          <ArrowForward />
        </TouchableOpacity>
      </View>

      <Text
        style={[styles.headinText, {marginBottom: hp(2), marginTop: hp(2)}]}>
        Legal & Support
      </Text>

      <View style={styles.generView}>
        {/* Terms and Conditions */}
        <View style={styles.rowStyle}>
          <View style={{flexDirection: 'row'}}>
            <TermsAndConditions />
            <Text style={styles.itemText}>Terms & Conditions</Text>
          </View>
          <ArrowForward />
        </View>
        <View style={styles.divider}></View>
        {/* Report and issue  */}
        <TouchableOpacity
          onPress={() => navigation.navigate('ReportIssue')}
          style={styles.rowStyle}>
          <View style={{flexDirection: 'row'}}>
            <SupportIcon />
            <Text style={styles.itemText}>Report Issue</Text>
          </View>
          <ArrowForward />
        </TouchableOpacity>

        <View style={styles.divider}></View>
        <View style={styles.rowStyle}>
          <View style={{flexDirection: 'row'}}>
            <InfoCircle />
            <Text style={styles.itemText}>About App</Text>
          </View>
          <ArrowForward />
        </View>

        <View>
          <Text
            style={[styles.itemText, {alignSelf: 'center', marginTop: hp(2)}]}>
            Logout
          </Text>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default EmployeeProfile;
