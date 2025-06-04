import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {ArrowBack, CalendarIcon, DeleteUser, SearchIcon} from '../../../Assets';
import AppBar from '../../../components/AppBar';
import InputText from '../../../components/InputText';
import {Colors} from '../../../utils/app_colors';
import { useNavigation } from '@react-navigation/native';

const ManageUser = () => {
     const navigation = useNavigation<any>();
  const allData = [
    // Completed (5 entries)
    {
      id: '1',
      title: 'Ahmed Ali',
      phone: '+12 300 1234567',
      email: 'ahmed@gmial.com',
      property: 'Maple Residency',
      unit_number: '454',
    },
    {
      id: '2',
      title: 'Ahmed Ali',
      phone: '+12 300 1234567',
      email: 'ahmed@gmial.com',
      property: 'Maple Residency',
      unit_number: '454',
    },
    {
      id: '3',
      title: 'Ahmed Ali',
      phone: '+12 300 1234567',
      email: 'ahmed@gmial.com',
      property: 'Maple Residency',
      unit_number: '454',
    },
    {
      id: '4',
      title: 'Ahmed Ali',
      phone: '+12 300 1234567',
      email: 'ahmed@gmial.com',
      property: 'Maple Residency',
      unit_number: '454',
    },
    {
      id: '5',
      title: 'Ahmed Ali',
      phone: '+12 300 1234567',
      email: 'ahmed@gmial.com',
      property: 'Maple Residency',
      unit_number: '454',
    },

    // Missed (5 entries)
    {
      id: '6',
      title: 'Ahmed Ali',
      phone: '+12 300 1234567',
      email: 'ahmed@gmial.com',
      property: 'Maple Residency',
      unit_number: '454',
    },
    {
      id: '7',
      title: 'Ahmed Ali',
      phone: '+12 300 1234567',
      email: 'ahmed@gmial.com',
      property: 'Maple Residency',
      unit_number: '454',
    },
    {
      id: '8',
      title: 'Ahmed Ali',
      phone: '+12 300 1234567',
      email: 'ahmed@gmial.com',
      property: 'Maple Residency',
      unit_number: '454',
    },
    {
      id: '9',
      title: 'Ahmed Ali',
      phone: '+12 300 1234567',
      email: 'ahmed@gmial.com',
      property: 'Maple Residency',
      unit_number: '454',
    },
    {
      id: '10',
      title: 'Ahmed Ali',
      phone: '+12 300 1234567',
      email: 'ahmed@gmial.com',
      property: 'Maple Residency',
      unit_number: '454',
    },

    // Scheduled (5 entries)
    {
      id: '11',
      title: 'Ahmed Ali',
      phone: '+12 300 1234567',
      email: 'ahmed@gmial.com',
      property: 'Maple Residency',
      unit_number: '454',
    },
    {
      id: '12',
      title: 'Ahmed Ali',
      phone: '+12 300 1234567',
      email: 'ahmed@gmial.com',
      property: 'Maple Residency',
      unit_number: '454',
    },
    {
      id: '13',
      title: 'Ahmed Ali',
      phone: '+12 300 1234567',
      email: 'ahmed@gmial.com',
      property: 'Maple Residency',
      unit_number: '454',
    },
    {
      id: '14',
      title: 'Ahmed Ali',
      phone: '+12 300 1234567',
      email: 'ahmed@gmial.com',
      property: 'Maple Residency',
      unit_number: '454',
    },
    {
      id: '15',
      title: 'Ahmed Ali',
      phone: '+12 300 1234567',
      email: 'ahmed@gmial.com',
      property: 'Maple Residency',
      unit_number: '454',
    },
  ];

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <View style={styles.rowContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <View>
          <DeleteUser />
        </View>
      </View>
      <Text style={[styles.detail, {color: Colors.DarkGrey}]}>
        Phone: <Text style={styles.detail}>{item.phone}</Text>
      </Text>
      <Text style={[styles.detail, {color: Colors.DarkGrey}]}>
        Email: <Text style={styles.detail}>{item.email}</Text>
      </Text>
      <Text style={[styles.detail, {color: Colors.DarkGrey}]}>
        Property: <Text style={styles.detail}>{item.property}</Text>
      </Text>
      <Text style={[styles.detail, {color: Colors.DarkGrey}]}>
        Unit #: <Text style={styles.detail}>{item.unit_number}</Text>
      </Text>
    </View>
  );

  return (
    <View style={styles.body}>
      <AppBar text="Manage Users" leftIcon={<ArrowBack />} />

      <InputText
        placeholder="Search by name, email or property"
        addLeft={<SearchIcon />}
      />

      <FlatList
        data={allData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
       <TouchableOpacity style={styles.fab} onPress={()=> navigation.navigate('AdminRequestPickUp')}></TouchableOpacity>
    </View>
  );
};

export default ManageUser;
