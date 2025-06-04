import React from 'react';
import {Text, View} from 'react-native';
import AppBar from '../../../components/AppBar';
import {ArrowBack, InfoFilled} from '../../../Assets';
import styles from './styles';
import {Colors} from '../../../utils/app_colors';
import CustomButton from '../../../components/CustomButton';
import {hp} from '../../../utils/responsive';

const EmployeeTaskDetail = (props: any) => {
  const {screenName} = props?.route?.params;
  return (
    <View style={styles.body}>
      <AppBar text="Task Details" leftIcon={<ArrowBack />} />

      {screenName === 'today' ? (
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: hp(4),
            }}>
            <Text style={styles.headingText}>Routine Pickup Location</Text>
            <Text style={styles.viewMap}>View on Map</Text>
          </View>
          <View style={{marginTop: hp(1)}}>
            <Text style={[styles.detail, {color: Colors.DarkGrey}]}>
              Unit Number: <Text style={styles.detail}>A-102</Text>
            </Text>
            <Text style={[styles.detail, {color: Colors.DarkGrey}]}>
              Building Name: <Text style={styles.detail}> Maple Residency</Text>
            </Text>
          </View>
          <View style={styles.divider}></View>
          <Text style={styles.headingText}>Scheduled Time</Text>
          <Text
            style={[styles.detail, {color: Colors.DarkGrey, marginTop: hp(1)}]}>
            Time Slot: <Text style={styles.detail}>A-102</Text>
          </Text>
          <View style={styles.divider}></View>
          <Text style={styles.headingText}>Special Instructions</Text>
          <Text
            style={[styles.detail, {color: Colors.DarkGrey, marginTop: hp(1)}]}>
            Hi, There will be Multiple boxes. & remember to ring bell when you
            arrive.
          </Text>
          <View style={{marginTop: hp(20)}}></View>
          <InfoFilled />
          <Text style={styles.instructionText}>
            Once you tap 'Start Task', the tenant will be notified to get ready
            for waste pickup. Please start only when you're near their unit.
          </Text>
          <Text style={[styles.instructionText, {color: Colors.DarkGrey}]}>
            Having Issue: <Text style={styles.detail}>Report Admin</Text>
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: hp(4),
            }}>
            <CustomButton
              text="Delay Task"
              onPress={() => {
                // navigation.navigate('Signin')
              }}
              TextStyle={{
                color: Colors.PrimaryColor,
              }}
              extraStyle={{
                width: '45%',

                alignSelf: 'flex-end',
                backgroundColor: Colors.lightGrey,
                borderColor: Colors.PrimaryColor,
                borderWidth: 1,
              }}
            />
            <CustomButton
              text="Start Task"
              onPress={() => {
                // navigation.navigate('Signin')
              }}
              extraStyle={{width: '45%', alignSelf: 'flex-end'}}
            />
          </View>
        </View>
      ) : (
        <View>
           <Text style={styles.headingText}>Task Summary</Text>
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
              Task Completion Time: <Text style={styles.detail}>2:40 PM</Text>
            </Text>
            <View style={styles.divider}></View>
             <Text style={styles.headingText}>Issue Reported</Text>
               <Text style={[styles.detail, {color: Colors.DarkGrey}]}>
              None.:
            </Text>
             <View style={styles.divider}></View>
              <Text style={styles.headingText}>Routine Pickup Location</Text>
               <Text style={[styles.detail, {color: Colors.DarkGrey}]}>
              Unit Number: <Text style={styles.detail}>A-102</Text>
            </Text>
              <Text style={[styles.detail, {color: Colors.DarkGrey}]}>
              Building Name: <Text style={styles.detail}>Maple Residenc</Text>
            </Text>

             <View style={styles.divider}></View>
              <Text style={styles.headingText}>Scheduled Time</Text>
               <Text style={[styles.detail, {color: Colors.DarkGrey}]}>
              Time Slot: <Text style={styles.detail}>2:30 PM – 3:00 PM</Text>
            </Text>
             <View style={styles.divider}></View>
          <Text style={styles.headingText}>Special Instructions</Text>
          <Text
            style={[styles.detail, {color: Colors.DarkGrey, marginTop: hp(1)}]}>
            Hi, There will be Multiple boxes. & remember to ring bell when you arrive.
          </Text>
        </View>
      )}
    </View>
  );
};

export default EmployeeTaskDetail;
