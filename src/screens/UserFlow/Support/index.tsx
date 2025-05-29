import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import styles from './styles';
import {ArrowBack, Email, NewComplain} from '../../../Assets';
import AppBar from '../../../components/AppBar';
import {hp, wp} from '../../../utils/responsive';
import {Colors} from '../../../utils/app_colors';
import {Images} from '../../../Assets/images';
import { useNavigation } from '@react-navigation/native';

const UserSupport = () => {
  const navigation = useNavigation<any>();
  const allData = [
    // Completed (5 entries)
    {
      id: '1',
      title: 'Connection Bug',
      date: '15-04-2025',
      complainId: '#86421',
      complain: 'Why i am unable to add request?',
      status: 'pending',
    },
    {
      id: '2',
      title: 'Connection Bug',
      date: '14-04-2025',
      complainId: '#86421',
      complain: 'Why i am unable to add request?',
      status: 'completed',
    },
    {
      id: '3',
      title: 'Connection Bug',
      date: '14-04-2025',
      complainId: '#86421',
      complain: 'Why i am unable to add request?',
      status: 'in Progresss',
    },
  ];

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <View style={styles.rowContainer}>
        <View style={{flexDirection: 'row', }}>
          <Image source={Images.DummyUserImage} style={styles.userImage} />
          <View style={{marginLeft:wp(1)}}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.title}>{item.complainId}</Text>
          </View>
        </View>
        <View
          style={[
            styles.statusBadge,
            item.status === 'completed' && {backgroundColor: 'green'},
            item.status === 'pending' && {backgroundColor: 'red', borderRadius:12},
            item.status === 'in Progresss' && {backgroundColor: 'orange', borderRadius:12},
          ]}>
          <Text style={styles.statusText}>{item.status.toUpperCase()}</Text>
        </View>
      </View>

     <Text style={styles.complainText}>{item.complain}</Text>
      <Text style={styles.dateText}>{item.date}</Text>
    </View>
  );

  return (
    <View style={styles.body}>
      <AppBar text="Support" leftIcon={<ArrowBack />} />

      <View
        style={styles.ActionBox}>
        <TouchableOpacity onPress={()=> navigation.navigate('NewComplain')}>
          <View style={styles.quickActionBox}>
            <NewComplain />
            <Text style={styles.actionText}>New Compaint</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.quickActionBox}>
          <Email />
          <Text style={styles.actionText}>Email Us</Text>
        </View>
      </View>

      <FlatList data={allData} renderItem={renderItem} />
    </View>
  );
};

export default UserSupport;
