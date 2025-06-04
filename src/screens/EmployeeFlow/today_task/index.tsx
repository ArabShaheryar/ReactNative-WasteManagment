import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import styles from './styles';
import AppBar from '../../../components/AppBar';
import {ArrowBack} from '../../../Assets';
import CustomButton from '../../../components/CustomButton';
import {Colors} from '../../../utils/app_colors';
import {hp} from '../../../utils/responsive';
import { useNavigation } from '@react-navigation/native';

const TodayTask = () => {
    const navigation = useNavigation<any>();
  const [selectedTab, setSelectedTab] = useState(0);
  const tabs = [
    {
      key: 0,
      title: 'Pending (08)',
    },
    {
      key: 1,
      title: 'All',
    },
    {
      key: 2,
      title: 'Completed',
    },
    {
      key: 3,
      title: 'On Demand',
    },
  ];

  const allData = [
    // Pending (5 entries)
    {
      id: '1',
      title: 'Routine Pickup',
      date: '15-04-2025',
      timeSlot: '9:00 AM - 12:00 PM',
      pickupPoint: 'House #21, Block A, Main Street',
      status: 'pending',
    },
    {
      id: '2',
      title: 'Office Waste Collection',
      date: '14-04-2025',
      timeSlot: '2:00 PM - 4:00 PM',
      pickupPoint: 'Tech Park, Building C',
      status: 'pending',
    },
    {
      id: '3',
      title: 'Bi-Weekly Recycling',
      date: '12-04-2025',
      timeSlot: '10:00 AM - 1:00 PM',
      pickupPoint: 'Apartment 304, Green Residency',
      status: 'pending',
    },
    {
      id: '4',
      title: 'Special Hazardous Waste',
      date: '10-04-2025',
      timeSlot: '11:00 AM - 12:00 PM',
      pickupPoint: 'Factory Warehouse, Industrial Zone',
      status: 'pending',
    },
    {
      id: '5',
      title: 'Community Cleanup',
      date: '08-04-2025',
      timeSlot: '8:00 AM - 10:00 AM',
      pickupPoint: 'Central Park, Meeting Point',
      status: 'pending',
    },

    // Completed (5 entries)
    {
      id: '6',
      title: 'Monthly Bulk Pickup',
      date: '16-04-2025',
      timeSlot: '9:30 AM - 11:30 AM',
      pickupPoint: 'Villa #5, Palm Street',
      status: 'completed',
    },
    {
      id: '7',
      title: 'E-Waste Collection',
      date: '13-04-2025',
      timeSlot: '1:00 PM - 3:00 PM',
      pickupPoint: 'Shopping Mall Back Entrance',
      status: 'completed',
    },
    {
      id: '8',
      title: 'Restaurant Waste',
      date: '11-04-2025',
      timeSlot: '4:00 PM - 6:00 PM',
      pickupPoint: 'Food Court, Downtown Plaza',
      status: 'completed',
    },
    {
      id: '9',
      title: 'Construction Debris',
      date: '09-04-2025',
      timeSlot: '7:00 AM - 10:00 AM',
      pickupPoint: 'New Highrise Project Site',
      status: 'completed',
    },
    {
      id: '10',
      title: 'Medical Waste',
      date: '07-04-2025',
      timeSlot: '3:00 PM - 5:00 PM',
      pickupPoint: 'City Hospital, Loading Dock',
      status: 'completed',
    },

    {
      id: '11',
      title: 'Monthly Bulk Pickup',
      date: '16-04-2025',
      timeSlot: '9:30 AM - 11:30 AM',
      pickupPoint: 'Villa #5, Palm Street',
      status: 'on-demand',
    },
    {
      id: '12',
      title: 'E-Waste Collection',
      date: '13-04-2025',
      timeSlot: '1:00 PM - 3:00 PM',
      pickupPoint: 'Shopping Mall Back Entrance',
      status: 'on-demand',
    },
    {
      id: '13',
      title: 'Restaurant Waste',
      date: '11-04-2025',
      timeSlot: '4:00 PM - 6:00 PM',
      pickupPoint: 'Food Court, Downtown Plaza',
      status: 'on-demand',
    },
    {
      id: '14',
      title: 'Construction Debris',
      date: '09-04-2025',
      timeSlot: '7:00 AM - 10:00 AM',
      pickupPoint: 'New Highrise Project Site',
      status: 'on-demand',
    },
    {
      id: '15',
      title: 'Medical Waste',
      date: '07-04-2025',
      timeSlot: '3:00 PM - 5:00 PM',
      pickupPoint: 'City Hospital, Loading Dock',
      status: 'on-demand',
    },
  ];

  const filteredData = () => {
    switch (selectedTab) {
      case 1:
        return allData.filter(item => item.status === 'pending');

      case 2:
        return allData.filter(item => item.status === 'completed');
      case 3:
        return allData.filter(item => item.status === 'on-demand');
      default:
        return allData;
    }
  };

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={()=> navigation.navigate('EmployeeTaskDetail',{screenName: 'today'})} style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={[styles.detail, {color: Colors.DarkGrey}]}>
        Pickup Point: <Text style={styles.detail}>{item.pickupPoint}</Text>
      </Text>
      <Text style={[styles.detail, {color: Colors.DarkGrey}]}>
        Scheduled for: <Text style={styles.detail}>{item.timeSlot}</Text>
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text>Report Issue</Text>
       {
        item.status === 'pending' ?  <CustomButton
          text="Start Task"
          onPress={() => {
            // navigation.navigate('Signin')
          }}
          TextStyle={{
            color: Colors.PrimaryColor,
          }}
          extraStyle={{
            width: '40%',
            height: hp(4),
            alignSelf: 'flex-end',
            backgroundColor: Colors.lightGrey,
            borderColor: Colors.PrimaryColor,
            borderWidth: 1,
          }}
        /> : item.status === 'completed' ?  <CustomButton
          text="Completed"
          onPress={() => {
            // navigation.navigate('Signin')
          }}
          TextStyle={{
            color: Colors.PrimaryColor,
          }}
          extraStyle={{
            width: '40%',
            height: hp(4),
            alignSelf: 'flex-end',
            backgroundColor: Colors.lightGrey,
            borderColor: Colors.PrimaryColor,
            borderWidth: 1,
          }}
        /> : item.status === 'on-demand' ?  <CustomButton
          text="Start Task"
          onPress={() => {
            // navigation.navigate('Signin')
          }}
          TextStyle={{
            color: Colors.PrimaryColor,
          }}
          extraStyle={{
            width: '40%',
            height: hp(4),
            alignSelf: 'flex-end',
            backgroundColor: Colors.lightGrey,
            borderColor: Colors.PrimaryColor,
            borderWidth: 1,
          }}
        /> : <View></View>
       }
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.body}>
      <AppBar text="Today’s Task" leftIcon={<ArrowBack />} />

      <View style={styles.tabContainer}>
        {tabs.map(tab => (
          <TouchableOpacity
            key={tab.key}
            style={[styles.tab, selectedTab === tab.key && styles.selectedTab]}
            onPress={() => setSelectedTab(tab.key)}>
            <Text
              style={[
                styles.tabText,
                selectedTab === tab.key && styles.selectedTabText,
              ]}>
              {tab.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredData()}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default TodayTask;
