import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../../utils/app_colors';
import AppBar from '../../../components/AppBar';
import {AddButton, ArrowBack} from '../../../Assets';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const ManageEmployeeTasks = () => {
   const navigation = useNavigation<any>();
  const [selectedTab, setSelectedTab] = useState(0);
  const tabs = [
    {
      key: 0,
      title: 'All (98)',
    },
    {
      key: 1,
      title: 'Pending',
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
    // Completed (5 entries)
    {
      id: '1',
      title: 'Routine Pickup',
      date: '15-04-2025',
      timeSlot: '9:00 AM - 12:00 PM',
      pickupPoint: 'House #21, Block A, Main Street',
      status: 'Pending',
    },
    {
      id: '2',
      title: 'Office Waste Collection',
      date: '14-04-2025',
      timeSlot: '2:00 PM - 4:00 PM',
      pickupPoint: 'Tech Park, Building C',
      status: 'Pending',
    },
    {
      id: '3',
      title: 'Bi-Weekly Recycling',
      date: '12-04-2025',
      timeSlot: '10:00 AM - 1:00 PM',
      pickupPoint: 'Apartment 304, Green Residency',
      status: 'Pending',
    },
    {
      id: '4',
      title: 'Special Hazardous Waste',
      date: '10-04-2025',
      timeSlot: '11:00 AM - 12:00 PM',
      pickupPoint: 'Factory Warehouse, Industrial Zone',
      status: 'Completed',
    },
    {
      id: '5',
      title: 'Community Cleanup',
      date: '08-04-2025',
      timeSlot: '8:00 AM - 10:00 AM',
      pickupPoint: 'Central Park, Meeting Point',
      status: 'Pending',
    },

    // Missed (5 entries)
    {
      id: '6',
      title: 'Monthly Bulk Pickup',
      date: '16-04-2025',
      timeSlot: '9:30 AM - 11:30 AM',
      pickupPoint: 'Villa #5, Palm Street',
      status: 'Completed',
    },
    {
      id: '7',
      title: 'E-Waste Collection',
      date: '13-04-2025',
      timeSlot: '1:00 PM - 3:00 PM',
      pickupPoint: 'Shopping Mall Back Entrance',
      status: 'Completed',
    },
    {
      id: '8',
      title: 'Restaurant Waste',
      date: '11-04-2025',
      timeSlot: '4:00 PM - 6:00 PM',
      pickupPoint: 'Food Court, Downtown Plaza',
      status: 'Completed',
    },
    {
      id: '9',
      title: 'Construction Debris',
      date: '09-04-2025',
      timeSlot: '7:00 AM - 10:00 AM',
      pickupPoint: 'New Highrise Project Site',
      status: 'Completed',
    },
    {
      id: '10',
      title: 'Medical Waste',
      date: '07-04-2025',
      timeSlot: '3:00 PM - 5:00 PM',
      pickupPoint: 'City Hospital, Loading Dock',
      status: 'Completed',
    },

    // Scheduled (5 entries)
    {
      id: '11',
      title: 'Regular Household Pickup',
      date: '18-04-2025',
      timeSlot: '8:00 AM - 12:00 PM',
      pickupPoint: '123 Maple Road',
      status: 'On Demand',
    },
    {
      id: '12',
      title: 'Garden Waste Collection',
      date: '19-04-2025',
      timeSlot: '10:00 AM - 2:00 PM',
      pickupPoint: 'Community Garden, East Sector',
      status: 'On Demand',
    },
    {
      id: '13',
      title: 'School Recycling Program',
      date: '20-04-2025',
      timeSlot: '1:00 PM - 4:00 PM',
      pickupPoint: 'City Public School',
      status: 'On Demand',
    },
    {
      id: '14',
      title: 'Commercial Waste',
      date: '21-04-2025',
      timeSlot: '9:00 AM - 11:00 AM',
      pickupPoint: 'Business Center, Suite 45',
      status: 'On Demand',
    },
    {
      id: '15',
      title: 'Event Cleanup',
      date: '22-04-2025',
      timeSlot: '5:00 PM - 8:00 PM',
      pickupPoint: 'Convention Center',
      status: 'On Demand',
    },
  ];

  const filteredData = () => {
    switch (selectedTab) {
      case 1:
        return allData.filter(item => item.status === 'Pending');
      case 2:
        return allData.filter(item => item.status === 'Completed');
      case 3:
        return allData.filter(item => item.status === 'On Demand');
      default:
        return allData;
    }
  };

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={()=> navigation.navigate('TaskDetailAdmin')} style={styles.card}>
      <View style={styles.rowContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <View
          style={[
            styles.statusBadge,
            item.status === 'Completed' && {backgroundColor: 'green'},
            item.status === 'Pending' && {backgroundColor: 'red'},
            item.status === 'On Demand' && {backgroundColor: 'orange'},
          ]}>
          <Text style={styles.statusText}>{item.status.toUpperCase()}</Text>
        </View>
      </View>
      <Text style={[styles.detail, {color: Colors.DarkGrey}]}>
        Date: <Text style={styles.detail}>{item.date}</Text>
      </Text>
      <Text style={[styles.detail, {color: Colors.DarkGrey}]}>
        Time Slot: <Text style={styles.detail}>{item.timeSlot}</Text>
      </Text>
      <Text style={[styles.detail, {color: Colors.DarkGrey}]}>
        Pickup Point: <Text style={styles.detail}>{item.pickupPoint}</Text>
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.body}>
      <AppBar text="Manage Today’s Tasks" leftIcon={<ArrowBack />} />

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
      <TouchableOpacity style={styles.fab} onPress={()=> navigation.navigate('AddNewEmployee')}>
   <AddButton />
  </TouchableOpacity>
    </View>
  );
};

export default ManageEmployeeTasks;
