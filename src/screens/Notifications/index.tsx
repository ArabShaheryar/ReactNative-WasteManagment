import React, { useEffect, useState } from 'react';
import {FlatList, Text, View} from 'react-native';
import styles from './styles';
import AppBar from '../../components/AppBar';
import {
  ArrowBack,
  ClockInRemainder,
  CompletedPickup,
  NewFeatureAdded,
  NewTaskAssign,
  PickupDelayed,
  PickupMissed,
  RentDelayed,
} from '../../Assets';
import {hp} from '../../utils/responsive';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Notifications = () => {
    const navigation = useNavigation<any>();
      const [userRole, setUserRole] = useState(null);
  useEffect(() => {
    const getUserRole = async () => {
      const role = await AsyncStorage.getItem('UserRole');
      setUserRole(role);
    };
    getUserRole();
  }, [userRole]);
  
  const userNotifications = [
    {
      key: 0,
      text: 'Pickup Completed!',
      content: 'Your trash was collected at 10:45 AM.',
      dateTime: '14 Aug 2024',
      icon: <CompletedPickup />,
    },
    {
      key: 1,
      text: 'Rent Due Date',
      content:
        "Dear User, you haven't paid the rent for this month yet. Kindly Pay the rent.",
      dateTime: '14 Aug 2024',
      icon: <RentDelayed />,
    },
    {
      key: 2,
      text: 'Pickup Delayed!',
      content:
        "Due to rain, today's pickup has been delayed. New time: 3:00 PM – 6:00 PM.",
      dateTime: '14 Aug 2024',
      icon: <PickupDelayed />,
    },
    {
      key: 3,
      text: 'Pickup Missed!',
      content:
        'We missed your scheduled pickup due to an inaccessible gate. Please Reschedule Pickup.',
      dateTime: '14 Aug 2024',
      icon: <PickupMissed />,
    },

    {
      key: 4,
      text: 'New Feature Added',
      content:
        'You can now track your pickup status in real-time from the dashboard.',
      dateTime: '14 Aug 2024',
      icon: <NewFeatureAdded />,
    },
  ];

    const employeeNotifications = [
    {
      key: 0,
      text: 'New Task Assigned!',
      content: 'YUnit #A-203, On-Demand Pickup assigned to you. Pickup at Today, 1:15 PM',
      dateTime: '14 Aug 2024',
      icon: <NewTaskAssign />,
    },
    {
      key: 1,
      text: 'Reminder: Clock In',
      content:
        "Don’t forget to clock in before 1:00 PM.",
      dateTime: '14 Aug 2024',
      icon: <ClockInRemainder />,
    },
    
  ];
  return (
    <View style={styles.body}>
      <AppBar text="Notification" leftIcon={<ArrowBack />} OnLeftPress={()=> navigation.goBack()} />

      <View style={[styles.appBarRow, {marginTop: hp(4), marginBottom: hp(1)}]}>
        <Text style={styles.todayText}>Today</Text>
        <View>
          <Text style={styles.todayText}>Mark All as Read</Text>
        </View>
      </View>

      <FlatList
        data={userRole === 'User' ? userNotifications : employeeNotifications}
        renderItem={({item, index}) => {
          return (
            <View style={styles.pickupBox}>
              {item.icon}
              <View>
                <Text style={styles.notificationTitle}>{item.text}</Text>
                <Text style={styles.notificationContent}>{item.content}</Text>
              </View>
              <Text style={styles.notificationDateTime}>{item.dateTime}</Text>
              {/* <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.pickUpDateAndTime}>{item.text}</Text>
                <View style={styles.scheduledBox}>
                  <Text>{item.status}</Text>
                </View>
              </View>
              <Text style={[styles.pickTimeText]}>
                Pickup Point:
                <Text style={[styles.addressText]}>{item.address}</Text>
              </Text> */}
            </View>
          );
        }}
      />
    </View>
  );
};

export default Notifications;
