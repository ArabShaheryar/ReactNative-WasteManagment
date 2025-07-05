import React from 'react';
import {Image, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AppBar from '../../../components/AppBar';
import {ArrowBack} from '../../../Assets';
import {Images} from '../../../Assets/images';
import styles from './styles';
import {hp} from '../../../utils/responsive';
import {Colors} from '../../../utils/app_colors';

const TaskDetailAdmin = () => {
  const size = hp(7);
  return (
    <KeyboardAwareScrollView style={styles.body}>
      <AppBar text="Task Details" leftIcon={<ArrowBack />} />
      <View style={styles.card}>
        <View style={styles.profilePhoto}>
          <View>
            <Image
              style={{width: size, height: size, borderRadius: size / 2}}
              source={Images.UserProfileImage}
            />
          </View>
        </View>

        <View style={{paddingHorizontal: hp(1)}}>
          <Text style={styles.nameText}>Ahmed Ali</Text>
          <Text style={[styles.detail, {color: Colors.DarkGrey}]}>
            Employee ID: <Text style={styles.detail}>EMP-0231</Text>
          </Text>
          <Text style={[styles.detail, {color: Colors.DarkGrey}]}>
            Phone: <Text style={styles.detail}>+12 300 1234567</Text>
          </Text>
        </View>
      </View>

      <Text style={[styles.dateTimeText, {marginTop: hp(2)}]}>Task Summary</Text>
      <Text style={[styles.detail, {color: Colors.DarkGrey}]}>
        Status: <Text style={styles.detail}>Completed</Text>
      </Text>
      <Text style={[styles.detail, {color: Colors.DarkGrey}]}>
        Date: <Text style={styles.detail}>May 6, 2025</Text>
      </Text>
      <Text style={[styles.detail, {color: Colors.DarkGrey}]}>
        Task Start Time: <Text style={styles.detail}>2:30 PM</Text>
      </Text>
      <Text style={[styles.detail, {color: Colors.DarkGrey}]}>
        Task Completion Time: <Text style={styles.detail}>2:30 PM</Text>
      </Text>
      <View style={styles.divider}></View>
      <Text style={styles.dateTimeText}>Issue Reported</Text>
      <Text style={[styles.detail, {color: Colors.DarkGrey}]}>None.</Text>
      <View style={styles.divider}></View>
      <Text style={styles.dateTimeText}>Routine Pickup Location</Text>
      <Text style={[styles.detail, {color: Colors.DarkGrey}]}>
        Unit Number: <Text style={styles.detail}>A-102</Text>
      </Text>

      <Text style={[styles.detail, {color: Colors.DarkGrey}]}>
        Building Name:<Text style={styles.detail}> Maple Residency</Text>
      </Text>
      <View style={styles.divider}></View>
      <Text style={styles.dateTimeText}>Scheduled Time</Text>
      <Text style={[styles.detail, {color: Colors.DarkGrey}]}>
        Time Slot:<Text style={styles.detail}>2:30 PM – 3:00 PM</Text>
      </Text>
      <View style={styles.divider}></View>
      <Text style={styles.dateTimeText}>Special Instructions</Text>
      <Text style={styles.detail}>
        Hi, There will be Multiple boxes. & remember to ring bell when you
        arrive.
      </Text>
    </KeyboardAwareScrollView>
  );
};

export default TaskDetailAdmin;
