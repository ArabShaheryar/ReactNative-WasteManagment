import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './style';
import AppBar from '../../../components/AppBar';
import {AddButton, ArrowBack, IconsIcons} from '../../../Assets';
import {Colors} from '../../../utils/app_colors';
import {hp} from '../../../utils/responsive';
import {useNavigation} from '@react-navigation/native';

const Properties = () => {
  const navigation = useNavigation<any>();
  const allData = [
    // Completed (5 entries)
    {
      id: '1',
      title: 'Sunview Apartments',
      date: '15-04-2025',
      timeSlot: '9:00 AM - 12:00 PM',
      pickupPoint: 'House #21, Block A, Main Street',
      status: 'completed',
    },
    {
      id: '2',
      title: 'Green Villas',
      date: '14-04-2025',
      timeSlot: '2:00 PM - 4:00 PM',
      pickupPoint: 'Tech Park, Building C',
      status: 'completed',
    },
    {
      id: '3',
      title: 'Sky Heights',
      date: '12-04-2025',
      timeSlot: '10:00 AM - 1:00 PM',
      pickupPoint: 'Apartment 304, Green Residency',
      status: 'completed',
    },
    {
      id: '4',
      title: 'Green Villas',
      date: '10-04-2025',
      timeSlot: '11:00 AM - 12:00 PM',
      pickupPoint: 'Factory Warehouse, Industrial Zone',
      status: 'completed',
    },
    {
      id: '5',
      title: 'Sunview Apartments',
      date: '08-04-2025',
      timeSlot: '8:00 AM - 10:00 AM',
      pickupPoint: 'Central Park, Meeting Point',
      status: 'completed',
    },

    // Missed (5 entries)
  ];

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <View >
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={[styles.detail, {color: Colors.DarkGrey}]}>
            Units: <Text style={styles.detail}>120</Text>
          </Text>
          <Text style={[styles.detail, {color: Colors.DarkGrey}]}>
            Manager: <Text style={styles.detail}>Ali Khan</Text>
          </Text>
          <Text style={[styles.detail, {color: Colors.DarkGrey}]}>
            Contact: <Text style={styles.detail}>03437289479</Text>
          </Text>
        </View>
      </View>
      <IconsIcons />
    </View>
  );

  return (
    <KeyboardAwareScrollView style={styles.body}>
      <AppBar text="Properties" leftIcon={<ArrowBack />} />
      <FlatList
        data={allData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{marginTop: hp(2)}}
      />
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('AddProperty')}>
        <AddButton />
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
};

export default Properties;
