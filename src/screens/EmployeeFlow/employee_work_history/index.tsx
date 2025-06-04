import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import AppBar from '../../../components/AppBar';
import {ArrowBack, CalendarIcon, SearchIcon} from '../../../Assets';
import InputText from '../../../components/InputText';
import {Colors} from '../../../utils/app_colors';
import {useNavigation} from '@react-navigation/native';
import CalendarModal from '../../../components/CustomCalendar';

const EmployeeWorkHistory = () => {
  const navigation = useNavigation<any>();
  const [selectedTab, setSelectedTab] = useState(0);
  const [CalendarModel, setCalendarModel] = useState(false);
  const tabs = [
    {
      key: 0,
      title: 'All (98)',
    },
    {
      key: 1,
      title: 'Today',
    },
    {
      key: 2,
      title: 'This Week',
    },
    {
      key: 3,
      title: 'This Month',
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
      status: 'completed',
    },
    {
      id: '2',
      title: 'Office Waste Collection',
      date: '14-04-2025',
      timeSlot: '2:00 PM - 4:00 PM',
      pickupPoint: 'Tech Park, Building C',
      status: 'completed',
    },
    {
      id: '3',
      title: 'Bi-Weekly Recycling',
      date: '12-04-2025',
      timeSlot: '10:00 AM - 1:00 PM',
      pickupPoint: 'Apartment 304, Green Residency',
      status: 'completed',
    },
    {
      id: '4',
      title: 'Special Hazardous Waste',
      date: '10-04-2025',
      timeSlot: '11:00 AM - 12:00 PM',
      pickupPoint: 'Factory Warehouse, Industrial Zone',
      status: 'completed',
    },
    {
      id: '5',
      title: 'Community Cleanup',
      date: '08-04-2025',
      timeSlot: '8:00 AM - 10:00 AM',
      pickupPoint: 'Central Park, Meeting Point',
      status: 'completed',
    },

    // Missed (5 entries)
    {
      id: '6',
      title: 'Monthly Bulk Pickup',
      date: '16-04-2025',
      timeSlot: '9:30 AM - 11:30 AM',
      pickupPoint: 'Villa #5, Palm Street',
      status: 'missed',
    },
    {
      id: '7',
      title: 'E-Waste Collection',
      date: '13-04-2025',
      timeSlot: '1:00 PM - 3:00 PM',
      pickupPoint: 'Shopping Mall Back Entrance',
      status: 'missed',
    },
    {
      id: '8',
      title: 'Restaurant Waste',
      date: '11-04-2025',
      timeSlot: '4:00 PM - 6:00 PM',
      pickupPoint: 'Food Court, Downtown Plaza',
      status: 'missed',
    },
    {
      id: '9',
      title: 'Construction Debris',
      date: '09-04-2025',
      timeSlot: '7:00 AM - 10:00 AM',
      pickupPoint: 'New Highrise Project Site',
      status: 'missed',
    },
    {
      id: '10',
      title: 'Medical Waste',
      date: '07-04-2025',
      timeSlot: '3:00 PM - 5:00 PM',
      pickupPoint: 'City Hospital, Loading Dock',
      status: 'missed',
    },

    // Scheduled (5 entries)
    {
      id: '11',
      title: 'Regular Household Pickup',
      date: '18-04-2025',
      timeSlot: '8:00 AM - 12:00 PM',
      pickupPoint: '123 Maple Road',
      status: 'scheduled',
    },
    {
      id: '12',
      title: 'Garden Waste Collection',
      date: '19-04-2025',
      timeSlot: '10:00 AM - 2:00 PM',
      pickupPoint: 'Community Garden, East Sector',
      status: 'scheduled',
    },
    {
      id: '13',
      title: 'School Recycling Program',
      date: '20-04-2025',
      timeSlot: '1:00 PM - 4:00 PM',
      pickupPoint: 'City Public School',
      status: 'scheduled',
    },
    {
      id: '14',
      title: 'Commercial Waste',
      date: '21-04-2025',
      timeSlot: '9:00 AM - 11:00 AM',
      pickupPoint: 'Business Center, Suite 45',
      status: 'scheduled',
    },
    {
      id: '15',
      title: 'Event Cleanup',
      date: '22-04-2025',
      timeSlot: '5:00 PM - 8:00 PM',
      pickupPoint: 'Convention Center',
      status: 'scheduled',
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
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={[styles.detail, {color: Colors.DarkGrey}]}>
        Shift: <Text style={styles.detail}>{item.pickupPoint}</Text>
      </Text>
      <Text style={[styles.detail, {color: Colors.DarkGrey}]}>
        Tasks Completed: <Text style={styles.detail}>{item.timeSlot}</Text>
      </Text>
      <Text style={[styles.detail, {color: Colors.DarkGrey}]}>
        Issues Reported: <Text style={styles.detail}>{item.timeSlot}</Text>
      </Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('EmployeeTaskDetail', {screenName: 'history'})
        }>
        <Text style={{alignSelf: 'flex-end'}}>View Details</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.body}>
      <AppBar text="Work History" leftIcon={<ArrowBack />} />
      <InputText
        placeholder="Custom Date Range"
        addLeft={<SearchIcon />}
        addRight={<CalendarIcon />}
        onRightPress={() => setCalendarModel(true)}
      />

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
      <CalendarModal
        visible={CalendarModel}
        onClose={() => setCalendarModel(false)}
        onDateSelect={() => {}}
      />
    </View>
  );
};

export default EmployeeWorkHistory;
