import React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import {
  CompletedPickup,
  CompletedSmallTick,
  CompletedTask,
  MissedTask,
  NewRequest,
  Notification,
  PendingTask,
  MissedSmallTick,
} from '../../../Assets';
import {Images} from '../../../Assets/images';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {hp, wp} from '../../../utils/responsive';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const AdminHome = () => {
  const navigation = useNavigation<any>();

  const allData = [
    {
      id: '1',
      title: 'A-102 Pickup Completed by Ali',
      date: '15-04-2025',
      timeSlot: '03:32 AM',
      icon: <CompletedSmallTick />,
    },
    {
      id: '2',
      title: 'Missed Pickup – B-210.',
      date: '14-04-2025',
      timeSlot: '2:30 PM',
      icon: <MissedSmallTick />,
    },
    {
      id: '3',
      title: 'New Request: C-304 (On-Demand).',
      date: '12-04-2025',
      timeSlot: '2:30 PM',
      icon: <NewRequest />,
    },
    {
      id: '4',
      title: 'New Request: C-304 (On-Demand).',
      date: '10-04-2025',
      timeSlot: '2:30 PM',
      icon: <NewRequest />,
    },
    {
      id: '5',
      title: 'A-102 Pickup Completed by Usman',
      date: '08-04-2025',
      timeSlot: '2:30 PM',
      icon: <CompletedSmallTick />,
    },
    {
      id: '1',
      title: 'A-102 Pickup Completed by Ali',
      date: '15-04-2025',
      timeSlot: '03:32 AM',
      icon: <CompletedSmallTick />,
    },
    {
      id: '2',
      title: 'Missed Pickup – B-210.',
      date: '14-04-2025',
      timeSlot: '2:30 PM',
      icon: <MissedSmallTick />,
    },
    {
      id: '3',
      title: 'New Request: C-304 (On-Demand).',
      date: '12-04-2025',
      timeSlot: '2:30 PM',
      icon: <NewRequest />,
    },
    {
      id: '4',
      title: 'New Request: C-304 (On-Demand).',
      date: '10-04-2025',
      timeSlot: '2:30 PM',
      icon: <NewRequest />,
    },
    {
      id: '5',
      title: 'A-102 Pickup Completed by Usman',
      date: '08-04-2025',
      timeSlot: '2:30 PM',
      icon: <CompletedSmallTick />,
    },
  ];

  const renderItem = ({item}) => (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row'}}>
          {item.icon}
          <Text style={styles.itemTextStyle}>{item.title}</Text>
        </View>
        <Text>{item.timeSlot}</Text>
      </View>
      <View style={styles.divider}></View>
    </View>
  );

  return (
    <KeyboardAwareScrollView style={styles.body}>
      <View style={styles.appBar}>
        <View style={styles.appBarRow}>
          <TouchableOpacity
          // onPress={() => navigation.navigate('EmployeeProfile')}
          >
            <Image source={Images.DummyUserImage} style={styles.userImage} />
          </TouchableOpacity>
          {/* <TouchableOpacity
            onPress={() => {
              navigation.navigate('Notifications');
            }}>
            <Notification />
          </TouchableOpacity> */}
        </View>
        <Text style={styles.CountText}>59</Text>
        <Text style={styles.CountTextAll}>/92</Text>
        <Text style={styles.totalCompletedTaskText}>
          Total Requests Completed Today
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ManageEmployeeTasks');
          }}>
          <Text style={styles.manageRequestText}>{'Manage Requests >'}</Text>
        </TouchableOpacity>
      </View>
      <View style={{paddingHorizontal: wp(4), marginTop: hp(3)}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.quickActionBox}>
            <PendingTask />
            <Text style={styles.workStatusText}>Pending</Text>
            <Text
              style={[
                styles.workStatusText,
                {marginTop: hp(1), color: Colors.blackColorNetural},
              ]}>
              0
            </Text>
          </View>
          <View style={styles.quickActionBox}>
            <CompletedTask />
            <Text style={styles.workStatusText}>Routine Pickups</Text>
            <Text
              style={[
                styles.workStatusText,
                {marginTop: hp(1), color: Colors.blackColorNetural},
              ]}>
              0
            </Text>
          </View>
          <View style={styles.quickActionBox}>
            <MissedTask />
            <Text style={styles.workStatusText}>On Demand</Text>
            <Text
              style={[
                styles.workStatusText,
                {marginTop: hp(1), color: Colors.blackColorNetural},
              ]}>
              0
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: hp(2),
          }}>
          <Text style={styles.todayJobsText}>Employess</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('EmployeeAttendance')}
            style={styles.viewAllBox}>
            <Text style={styles.seeAllText}>Manage</Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={[
              styles.quickActionBox,
              {height: hp(10), paddingVertical: hp(0)},
            ]}>
            <Text style={[styles.workStatusText, {marginTop: hp(2)}]}>
              On-Duty
            </Text>
            <Text
              style={[
                styles.workStatusText,
                {marginTop: hp(2), color: Colors.blackColorNetural},
              ]}>
              0
            </Text>
          </View>
          <View
            style={[
              styles.quickActionBox,
              {height: hp(10), paddingVertical: hp(0)},
            ]}>
            <Text style={[styles.workStatusText, {marginTop: hp(2)}]}>
              Off-Duty
            </Text>
            <Text
              style={[
                styles.workStatusText,
                {marginTop: hp(2), color: Colors.blackColorNetural},
              ]}>
              0
            </Text>
          </View>
          <View
            style={[
              styles.quickActionBox,
              {height: hp(10), paddingVertical: hp(0)},
            ]}>
            <Text style={[styles.workStatusText, {marginTop: hp(2)}]}>
              Late Clock-ins
            </Text>
            <Text
              style={[
                styles.workStatusText,
                {marginTop: hp(2), color: Colors.blackColorNetural},
              ]}>
              0
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: hp(2),
          }}>
          <Text style={styles.todayJobsText}>Properties</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Properties')}
            style={styles.viewAllBox}>
            <Text style={styles.seeAllText}>Manage</Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={[
              styles.propertiesBox,
              {height: hp(10), paddingVertical: hp(0)},
            ]}>
            <Text style={[styles.workStatusText, {marginTop: hp(2)}]}>
              Total Properties
            </Text>
            <Text
              style={[
                styles.workStatusText,
                {marginTop: hp(2), color: Colors.blackColorNetural},
              ]}>
              20
            </Text>
          </View>
          <View
            style={[
              styles.propertiesBox,
              {height: hp(10), paddingVertical: hp(0)},
            ]}>
            <Text style={[styles.workStatusText, {marginTop: hp(2)}]}>
              Active Properties
            </Text>
            <Text
              style={[
                styles.workStatusText,
                {marginTop: hp(2), color: Colors.blackColorNetural},
              ]}>
              5
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: hp(2),
          }}>
          <Text style={styles.todayJobsText}>Activity Log</Text>
          {/* <TouchableOpacity
            onPress={() => navigation.navigate('TodayTask')}
            style={styles.viewAllBox}>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity> */}
        </View>

        <FlatList
          data={allData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.card}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default AdminHome;
