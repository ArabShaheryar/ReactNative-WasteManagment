import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {AddButton, ArrowBack, DeleteUser, SearchIcon} from '../../../Assets';
import {Colors} from '../../../utils/app_colors';
import AppBar from '../../../components/AppBar';
import InputText from '../../../components/InputText';
import {useNavigation} from '@react-navigation/native';

const ManageEmployees = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const navigation = useNavigation<any>();
  const tabs = [
    {
      key: 0,
      title: 'All (98)',
    },
    {
      key: 1,
      title: 'On Duty',
    },
    {
      key: 2,
      title: 'Off Duty',
    },
    {
      key: 3,
      title: 'Late',
    },
  ];
  const allData = [
    // Completed (5 entries)
    {
      id: '1',
      title: 'Ahmed Ali',
      phone: '+12 300 1234567',
      email: 'ahmed@gmial.com',
      property: 'Maple Residency',
      unit_number: '454',
      status: 'On Duty',
    },
    {
      id: '2',
      title: 'Ahmed Ali',
      phone: '+12 300 1234567',
      email: 'ahmed@gmial.com',
      property: 'Maple Residency',
      unit_number: '454',
      status: 'On Duty',
    },
    {
      id: '3',
      title: 'Ahmed Ali',
      phone: '+12 300 1234567',
      email: 'ahmed@gmial.com',
      property: 'Maple Residency',
      unit_number: '454',
      status: 'On Duty',
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
      status: 'On Duty',
    },

    // Missed (5 entries)
    {
      id: '6',
      title: 'Ahmed Ali',
      phone: '+12 300 1234567',
      email: 'ahmed@gmial.com',
      property: 'Maple Residency',
      unit_number: '454',
      status: 'Off Duty',
    },
    {
      id: '7',
      title: 'Ahmed Ali',
      phone: '+12 300 1234567',
      email: 'ahmed@gmial.com',
      property: 'Maple Residency',
      unit_number: '454',
      status: 'Off Duty',
    },
    {
      id: '8',
      title: 'Ahmed Ali',
      phone: '+12 300 1234567',
      email: 'ahmed@gmial.com',
      property: 'Maple Residency',
      unit_number: '454',
      status: 'Off Duty',
    },
    {
      id: '9',
      title: 'Ahmed Ali',
      phone: '+12 300 1234567',
      email: 'ahmed@gmial.com',
      property: 'Maple Residency',
      unit_number: '454',
      status: 'Off Duty',
    },
    {
      id: '10',
      title: 'Ahmed Ali',
      phone: '+12 300 1234567',
      email: 'ahmed@gmial.com',
      property: 'Maple Residency',
      unit_number: '454',
      status: 'Off Duty',
    },

    // Scheduled (5 entries)
    {
      id: '11',
      title: 'Ahmed Ali',
      phone: '+12 300 1234567',
      email: 'ahmed@gmial.com',
      property: 'Maple Residency',
      unit_number: '454',
      status: 'Late',
    },
    {
      id: '12',
      title: 'Ahmed Ali',
      phone: '+12 300 1234567',
      email: 'ahmed@gmial.com',
      property: 'Maple Residency',
      unit_number: '454',
      status: 'Late',
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
      status: 'Late',
    },
    {
      id: '15',
      title: 'Ahmed Ali',
      phone: '+12 300 1234567',
      email: 'ahmed@gmial.com',
      property: 'Maple Residency',
      unit_number: '454',
      status: 'Late',
    },
  ];

  const filteredData = () => {
    switch (selectedTab) {
      case 1:
        return allData.filter(item => item.status === 'On Duty');
      case 2:
        return allData.filter(item => item.status === 'Off Duty');
      case 3:
        return allData.filter(item => item.status === 'Late');
      default:
        return allData;
    }
  };

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <View style={styles.rowContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <View
          style={[
            styles.statusBadge,
            item.status === 'On Duty' && {backgroundColor: 'green'},
            item.status === 'Late' && {backgroundColor: 'red'},
            item.status === 'Off Duty' && {backgroundColor: 'orange'},
          ]}>
          <Text style={styles.statusText}>{item?.status?.toUpperCase()}</Text>
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
      <AppBar text="Manage Employees" leftIcon={<ArrowBack />} />

      <InputText
        placeholder="Search by name, email or property"
        addLeft={<SearchIcon />}
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
      <TouchableOpacity
        style={styles.fab}
        onPress={() =>
          navigation.navigate('Manage Employees')
        }></TouchableOpacity>
      <TouchableOpacity
        style={styles.fab}
        onPress={() =>
          navigation.navigate('AddNewEmployee')
        }></TouchableOpacity>
      <TouchableOpacity
        style={styles.fab}
        onPress={() =>
          navigation.navigate('AddNewEmployee')
        }>
          <AddButton />
        </TouchableOpacity>
        
    </View>
  );
};

export default ManageEmployees;
