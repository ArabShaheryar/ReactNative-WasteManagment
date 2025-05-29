import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {hp, wp} from '../../../utils/responsive';
import styles from './styles';
import {Images} from '../../../Assets/images';
import {
  AccountSetting,
  ArrowBack,
  ArrowForward,
  EditIcon,
  InfoCircle,
  PersonIcon,
  SettingIcon,
  StarFeedback,
  SupportIcon,
  TermsAndConditions,
} from '../../../Assets';
import AppBar from '../../../components/AppBar';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const UserProfile = () => {
  const navigation = useNavigation<any>();
  const size = hp(14); // or any equal size using hp/wp

  return (
    <KeyboardAwareScrollView style={styles.body}>
      <AppBar text="Setting" leftIcon={<ArrowBack />} />
      <View style={styles.profilePhoto}>
        <View>
          <Image
          style={{width: size, height: size, borderRadius: size / 2}}
          source={Images.UserProfileImage}
        />
          <View style={{position:'absolute', marginTop:hp(10), marginLeft:wp(20)}}><EditIcon /></View>
        </View>
        
        <View style={{marginLeft: 12, marginTop: 10}}>
          <Text style={styles.UserName}>Nouman Imran</Text>
          <Text style={styles.UserEmail}>Tenant</Text>
        </View>
      </View>
      <Text style={styles.headinText}>General</Text>

      <View style={styles.generView}>
        {/* General Setting */}
        {/* <View style={styles.rowStyle}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <SettingIcon />
            <Text style={styles.itemText}>General Setting</Text>
          </View>
          <ArrowForward />
        </View> */}
        {/* <View style={styles.divider}></View> */}
         {/* My Profile */}
        <TouchableOpacity onPress={()=> navigation.navigate('UserEditProfile')} style={styles.rowStyle}>
          <View style={{flexDirection: 'row'}}>
            <PersonIcon />
            <Text style={styles.itemText}>My Profile</Text>
          </View>
          <ArrowForward />
        </TouchableOpacity>


        {/* <View style={styles.divider}></View> */}

        {/* <View style={styles.rowStyle}>
          <View style={{flexDirection: 'row'}}>
            <AccountSetting />
            <Text style={styles.itemText}>Account Setting</Text>
          </View>
          <ArrowForward />
        </View> */}

        {/* General Setting */}

      </View>
      <Text
        style={[styles.headinText, {marginBottom: hp(2), marginTop: hp(2)}]}>
        Legal & Support
      </Text>

      <View style={styles.generView}>
        {/* Terms And Conditions */}
        <View style={styles.rowStyle}>
          <View style={{flexDirection: 'row'}}>
            <TermsAndConditions />
            <Text style={styles.itemText}>Terms & Conditions</Text>
          </View>
          <ArrowForward />
        </View>

      
        <View style={styles.divider}></View>
          {/* Feedback Screen */}
        <TouchableOpacity onPress={()=> navigation.navigate('FeedbackScreen')} style={styles.rowStyle}>
          <View style={{flexDirection: 'row'}}>
            <StarFeedback />
            <Text style={styles.itemText}>Feedback</Text>
          </View>
          <ArrowForward />
        </TouchableOpacity>



        <View style={styles.divider}></View>
 {/* Feedback Screen */}
        <TouchableOpacity onPress={()=> navigation.navigate('UserSupport')} style={styles.rowStyle}>
          <View style={{flexDirection: 'row'}}>
            <SupportIcon />
            <Text style={styles.itemText}>Support</Text>
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

        <TouchableOpacity onPress={async ()=> {
          await AsyncStorage.setItem('UserRole', '');
          
           setTimeout(() => {
            navigation.replace('AuthStack')
           }, 300);
        }}>
          <Text style={[styles.itemText,{alignSelf:'center', marginTop:hp(2)}]}>Logout</Text>
         
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default UserProfile;
