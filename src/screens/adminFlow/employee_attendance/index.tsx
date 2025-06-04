import React, { useState } from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';
import AppBar from '../../../components/AppBar';
import {
  ArrowBack,
  CalendarIcon,
  DownloadReport,
  SearchIcon,
} from '../../../Assets';
import InputText from '../../../components/InputText';
import { hp } from '../../../utils/responsive';
import CalendarModal from '../../../components/CustomCalendar';

const EmployeeAttendance = () => {
    const [CalendarModel, setCalendarModel] = useState(false);
  const attendanceData = [
    {
      name: 'Ali Khan',
      clockIn: '9:10 AM',
      clockOut: '5:02 PM',
      status: 'On-Time',
    },
    {name: 'Zara Ahmed', clockIn: '', clockOut: '', status: 'Absent'},
    {
      name: 'Kamran Raza',
      clockIn: '9:42 AM',
      clockOut: '5:05 PM',
      status: 'Late',
    },
    {
      name: 'Ahmed Ali',
      clockIn: '9:10 AM',
      clockOut: '5:02 PM',
      status: 'On-Time',
    },
    {name: 'Zohaib', clockIn: '9:42 AM', clockOut: '5:05 PM', status: 'Late'},
    {
      name: 'Ali Khan',
      clockIn: '9:10 AM',
      clockOut: '5:02 PM',
      status: 'On-Time',
    },
    {name: 'Zara Ahmed', clockIn: '', clockOut: '', status: 'Absent'},
    {
      name: 'Kamran Raza',
      clockIn: '9:42 AM',
      clockOut: '5:05 PM',
      status: 'Late',
    },
    {
      name: 'Ahmed Ali',
      clockIn: '9:10 AM',
      clockOut: '5:02 PM',
      status: 'On-Time',
    },
    {name: 'Zohaib', clockIn: '9:42 AM', clockOut: '5:05 PM', status: 'Late'},
  ];

  const StatusTag = ({status}) => {
    const statusStyle =
      {
        'On-Time': styles.statusOnTime,
        Late: styles.statusLate,
        Absent: styles.statusAbsent,
      }[status] || styles.statusDefault;
    const textColor =
      {
        'On-Time': styles.statusOnTimeText,
        Late: styles.statusLateText,
        Absent: styles.statusAbsentText,
      }[status] || styles.statusText;

    return (
      <View style={[styles.statusTag, statusStyle]}>
        <Text style={[styles.statusText, textColor]}>{status}</Text>
      </View>
    );
  };
  const renderHeader = () => (
    <View style={[styles.row, styles.headerRow]}>
      <Text style={[styles.cell, styles.headerText]}>Name</Text>
      <Text style={[styles.cell, styles.headerText]}>Clock In</Text>
      <Text style={[styles.cell, styles.headerText]}>Clock Out</Text>
      <Text style={[styles.cell, styles.headerText]}>Status</Text>
    </View>
  );

  const renderItem = ({item}) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.name}</Text>
      <Text style={styles.cell}>{item.clockIn || '—'}</Text>
      <Text style={styles.cell}>{item.clockOut || '—'}</Text>
      <View style={styles.cell}>
        <StatusTag status={item.status} />
      </View>
    </View>
  );
  return (
    <View style={styles.body}>
      <AppBar
        text="Attendance Report"
        leftIcon={<ArrowBack />}
        rightIcon={<DownloadReport />}
      />
      <InputText placeholder="Search by name or ID" addLeft={<SearchIcon />} />
      <View style={{flexDirection:'row', alignItems:'center', marginTop: hp(2)}}>
        <Text style={styles.dateText}>May 5, 2025</Text>
       <TouchableOpacity onPress={() => setCalendarModel(true)}>
         <CalendarIcon />
       </TouchableOpacity>
      </View>
      {renderHeader()}
      <FlatList
        data={attendanceData}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
       <CalendarModal
        visible={CalendarModel}
        onClose={() => setCalendarModel(false)}
        onDateSelect={() => {}}
      />
    </View>
  );
};

export default EmployeeAttendance;
