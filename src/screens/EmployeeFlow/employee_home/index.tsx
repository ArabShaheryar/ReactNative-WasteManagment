import React, {useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {Images} from '../../../Assets/images';
import {
  CompletedTask,
  MissedTask,
  Notification,
  PendingTask,
} from '../../../Assets';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../../components/CustomButton';
import {Colors} from '../../../utils/app_colors';
import {height, hp} from '../../../utils/responsive';

const EmployeeHome = () => {
  const navigation = useNavigation<any>();
  const [checkIn, setCheckIn] = useState(false);
  const allData = [
    {
      id: '1',
      title: 'Routine Pickup',
      date: '15-04-2025',
      timeSlot: '2:30 PM',
      pickupPoint: 'House #21, Block A, Main Street',
    },
    {
      id: '2',
      title: 'Routine Pickup',
      date: '14-04-2025',
      timeSlot: '2:30 PM',
      pickupPoint: 'Tech Park, Building C',
    },
    {
      id: '3',
      title: 'Routine Pickup',
      date: '12-04-2025',
      timeSlot: '2:30 PM',
      pickupPoint: 'Apartment 304, Green Residency',
    },
    {
      id: '4',
      title: 'Routine Pickup',
      date: '10-04-2025',
      timeSlot: '2:30 PM',
      pickupPoint: 'Factory Warehouse, Industrial Zone',
    },
    {
      id: '5',
      title: 'Routine Pickup',
      date: '08-04-2025',
      timeSlot: '2:30 PM',
      pickupPoint: 'Central Park, Meeting Point',
    },
  ];

  const renderItem = ({item}) => (
    <TouchableOpacity  onPress={()=> navigation.navigate('EmployeeTaskDetail')} style={styles.card}>
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
        <CustomButton
          text="Start Task"
          TextStyle={{
            color: Colors.PrimaryColor,
          }}
          onPress={() => {
            // navigation.navigate('Signin')
          }}
          extraStyle={{
            width: '40%',
             height: hp(5),
            alignSelf: 'flex-end',
            backgroundColor: Colors.lightGrey,
            borderColor: Colors.PrimaryColor,
            borderWidth:1,
          }}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.body}>
      <View style={styles.appBarRow}>
       <TouchableOpacity onPress={()=> navigation.navigate('EmployeeTaskDetail',{screenName: 'today'})}>
         <Image source={Images.DummyUserImage} style={styles.userImage} />
       </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Notifications');
          }}>
          <Notification />
        </TouchableOpacity>
      </View>
      <Text style={styles.letsGoText}>
        {checkIn ? 'You’re Checked In!' : 'Lets Get to Work!'}
      </Text>
      <Text style={styles.shiftTime}>Your Shift Hours 09:00 - 16:00</Text>

      <CustomButton
        text={!checkIn ? 'Check In' : 'Check Out'}
        onPress={() => {
          setCheckIn(!checkIn);
        }}
        TextStyle={{
          color: !checkIn ? Colors.PrimaryColor : Colors.Whitecolor,
        }}
        extraStyle={{
          marginTop: hp(2),
          backgroundColor: !checkIn ? Colors.Whitecolor : Colors.PrimaryColor,
          borderColor: !checkIn ? Colors.PrimaryColor : Colors.PrimaryColor,
          borderWidth: 1,
        }}
      />

      <Text style={styles.todayJobsText}>Todays Job Summary</Text>

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
          <Text style={styles.workStatusText}>Completed</Text>
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
          <Text style={styles.workStatusText}>Missed</Text>
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
        <Text style={styles.todayJobsText}>Next Task’s</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('TodayTask')}
          style={styles.viewAllBox}>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={allData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default EmployeeHome;
