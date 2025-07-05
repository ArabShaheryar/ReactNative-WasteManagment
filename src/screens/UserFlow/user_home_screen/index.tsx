import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {Images} from '../../../Assets/images';
import {Notification, NotificationSmal} from '../../../Assets';
import PickUpBox from '../../../components/PickupBox';
import {hp} from '../../../utils/responsive';
import {useNavigation} from '@react-navigation/native';

const UserHomeScreen = () => {
  const navigation = useNavigation<any>();
  const recentPickups = [
    {
      key: 0,
      text: '12 April 2025',
      address: 'Pickup Point: House #21, Block A, Main Street',
      status: 'completed',
    },
    {
      key: 1,
      text: '12 April 2025',
      address: 'Pickup Point: House #21, Block A, Main Street',
      status: 'pending',
    },
    {
      key: 2,
      text: '12 April 2025',
      address: 'Pickup Point: House #21, Block A, Main Street',
      status: 'missed',
    },
    {
      key: 2,
      text: '12 April 2025',
      address: 'Pickup Point: House #21, Block A, Main Street',
      status: 'missed',
    },
    {
      key: 2,
      text: '12 April 2025',
      address: 'Pickup Point: House #21, Block A, Main Street',
      status: 'missed',
    },
    {
      key: 2,
      text: '12 April 2025',
      address: 'Pickup Point: House #21, Block A, Main Street',
      status: 'missed',
    },
    {
      key: 2,
      text: '12 April 2025',
      address: 'Pickup Point: House #21, Block A, Main Street',
      status: 'missed',
    },
  ];
  return (
    <View style={styles.body}>
      <View style={styles.appBarRow}>
        <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
          <Image source={Images.DummyUserImage} style={styles.userImage} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Notifications');
          }}>
          <Notification />
        </TouchableOpacity>
      </View>
      <View style={styles.latestNotificationBox}>
        <NotificationSmal />
        <Text style={styles.recentNotificationText}>
          Get your trash ready. the rider will soon be there. if there
        </Text>
      </View>
      <View style={styles.MainBoxContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.mainBoxTitle}>Next Routine Pickup</Text>
          <View style={styles.scheduledBox}>
            <Text style={styles.scheduleText}>Scheduled</Text>
          </View>
        </View>
        <Text style={[styles.dateTimeStyle]}>02/12/2025 11:27 PM</Text>
      </View>

      <Text style={styles.quickActionText}>Quick Actions</Text>
      <View style={styles.quickActionsContainer}>
        {/* Request Pickup Box */}
        <TouchableOpacity
          onPress={() => navigation.navigate('RequestPicupScreen')}>
          <View style={styles.quickActionBox}>
            <Image style={styles.actionsImages} source={Images.RequestPickUp} />
          </View>
          <Text style={styles.quickActionsText}>Request Pickup</Text>
        </TouchableOpacity>

        {/* Feedback Box */}
        <TouchableOpacity onPress={() => navigation.navigate('UserSupport')}>
          <View style={styles.quickActionBox}>
            <Image style={styles.actionsImages} source={Images.SupportIcon} />
          </View>
          <Text style={styles.quickActionsText}>Support</Text>
        </TouchableOpacity>

        {/* View History Box */}
        <TouchableOpacity
          onPress={() => navigation.navigate('UserPickUpHistory')}>
          <View style={styles.quickActionBox}>
            <Image style={styles.actionsImages} source={Images.ViewHistory} />
          </View>
          <Text style={styles.quickActionsText}>View History</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.appBarRow, {marginTop: hp(4), marginBottom: hp(1)}]}>
        <Text style={styles.recentPickupText}>Recent Pickups</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('UserPickUpHistory')}
          style={styles.viewAllBox}>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={recentPickups}
        renderItem={({item, index}) => {
          return (
            <View style={styles.pickupBox}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.pickUpDateAndTime}>{item.text}</Text>
                <View style={styles.scheduledBox}>
                  <Text>{item.status}</Text>
                </View>
              </View>
              <Text style={[styles.pickTimeText]}>
                Pickup Point:
                <Text style={[styles.addressText]}>{item.address}</Text>
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default UserHomeScreen;
