import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ArrowBack, CallIcon, CompletedSmallTick, IconsIcons} from '../../../Assets';
import {Images} from '../../../Assets/images';
import AppBar from '../../../components/AppBar';
import {hp, wp} from '../../../utils/responsive';
import {Colors} from '../../../utils/app_colors';
import styles from './styles';
import CustomButton from '../../../components/CustomButton';

const EmployeeDetailsAdmin = () => {
  const size = hp(7);

  const allData = [
    {
      id: '1',
      title: 'C-204 – Completed at 1:45 PM.',
      date: '15-04-2025',
      timeSlot: '03:32 AM',
      icon: <CompletedSmallTick />,
    },
    {
      id: '2',
      title: 'C-204 – Completed at 1:45 PM.',
      date: '14-04-2025',
      timeSlot: '2:30 PM',
      icon: <CompletedSmallTick />,
    },
    {
      id: '3',
      title: 'C-204 – Completed at 1:45 PM.',
      date: '12-04-2025',
      timeSlot: '2:30 PM',
      icon: <CompletedSmallTick />,
    },
  ];

  const renderItem = ({item}) => (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row'}}>
          {item.icon}
          <Text style={styles.itemTextStyle}>{item.title}</Text>
        </View>
        <Text>{item.timeSlot}</Text>
      </View>
      <View style={styles.divider}></View>
    </View>
  );

  return (
    <KeyboardAwareScrollView style={styles.body}>
      <AppBar text="Employee Details" leftIcon={<ArrowBack />}  rightIcon={<IconsIcons />}/>
      <View style={styles.card}>
        <View style={styles.profilePhoto}>
          <View>
            <Image
              style={{width: size, height: size, borderRadius: size / 2}}
              source={Images.UserProfileImage}
            />
          </View>
        </View>

        <View style={{paddingHorizontal: hp(1)}}>
          <Text style={styles.nameText}>Ahmed Ali</Text>
          <Text style={[styles.detail, {color: Colors.DarkGrey}]}>
            Employee ID: <Text style={styles.detail}>EMP-0231</Text>
          </Text>
          <Text style={[styles.detail, {color: Colors.DarkGrey}]}>
            Phone: <Text style={styles.detail}>+12 300 1234567</Text>
          </Text>
        </View>
        <View style={[styles.statusBadge]}>
          <Text style={[styles.statusText]}>On Duty</Text>
        </View>
      </View>

      <Text style={[styles.dateTimeText, {marginTop: hp(2)}]}>
        Location & Shift
      </Text>
      <Text style={[styles.detail, {color: Colors.DarkGrey}]}>
        Last Known Location:<Text style={styles.detail}>Zone B </Text>
      </Text>
      <Text style={[styles.detail, {color: Colors.DarkGrey}]}>
        Clocked In: <Text style={styles.detail}> 2:30 PM</Text>
      </Text>
      <Text style={[styles.detail, {color: Colors.DarkGrey}]}>
        Clocked Out:<Text style={styles.detail}> --- (on duty) </Text>
      </Text>
      <Text style={[styles.detail, {color: Colors.DarkGrey}]}>
        Assigned Shift:<Text style={styles.detail}> 9 AM – 5 PM </Text>
      </Text>
      <View style={styles.divider}></View>
      <Text style={styles.dateTimeText}>Today’s Task Summary</Text>
      <Text style={[styles.detail, {color: Colors.DarkGrey}]}>
        Tasks Today:<Text style={styles.detail}>12</Text>
      </Text>
      <Text style={[styles.detail, {color: Colors.DarkGrey}]}>
        Pending Tasks:<Text style={styles.detail}>3</Text>
      </Text>
      <Text style={[styles.detail, {color: Colors.DarkGrey}]}>
        On-Demand Tasks:<Text style={styles.detail}> 4</Text>
      </Text>

      <View style={styles.divider}></View>
      <Text style={styles.dateTimeText}>Recent Work History</Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: hp(2),
        }}>
        <Text style={styles.todayJobsText}>Recent Work History</Text>
        <TouchableOpacity style={styles.viewAllBox}>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={allData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.workcard}
      />

      <View style={{flexDirection: 'row', alignItems:'center', marginTop: hp(4), alignSelf:'flex-end'}}>
        <CustomButton
          text="View Attendance Report"
          onPress={() => {}}
          TextStyle={{
            color: Colors.PrimaryColor,
          }}
          extraStyle={{
            marginRight: wp(2),
            width: '60%',
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: Colors.PrimaryColor,
          }}
        />
        <CallIcon />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default EmployeeDetailsAdmin;
