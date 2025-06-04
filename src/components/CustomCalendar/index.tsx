import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {ArrowBackBG, ArrowForwardBG} from '../../Assets';
import {Colors} from '../../utils/app_colors';
import styles from './styles';
import {hp} from '../../utils/responsive';

const CalendarModal = ({visible, onClose, onDateSelect}) => {
  const [currentMonthState, setCurrentMonthState] = useState('');
  const [currentMonth, setCurrentMonth] = useState('');
  useEffect(() => {
    const date = new Date();
    const options = {month: 'long', year: 'numeric'};
    const formattedMonthYear = date.toLocaleDateString('en-US', options);
    setCurrentMonthState(moment(currentMonth, 'MMMM YYYY').format('YYYY-MM'));
    setCurrentMonth(formattedMonthYear);
  }, [currentMonth]);

  const handleDayPress = day => {
    onClose();
    const formattedDate = moment(day.dateString).format('ddd, MMM DD, YYYY'); // Changed format
    onDateSelect(formattedDate); // Will output like "Mon, Jul 22, 2024"
  };

  const changeMonth = direction => {
    const newMonth = moment(currentMonthState, 'YYYY-MM')
      .add(direction, 'months')
      .format('YYYY-MM');
    setCurrentMonthState(newMonth);
  };
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
      onRequestClose={() => onClose(false)}>
      <TouchableWithoutFeedback onPress={() => onClose(false)}>
        <View style={styles.CalendarModalContainer}>
          <View style={styles.CalendarmodalContent}>
            <Calendar
              key={currentMonthState}
              current={currentMonthState}
              style={{
                // height: 350,
                marginTop: 20,
                borderRadius: 8,
              }}
              onDayPress={handleDayPress}
              customHeader={() => (
                <View style={{alignItems: 'center', marginTop: hp(2)}}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => changeMonth(-1)}>
                      <ArrowBackBG />
                    </TouchableOpacity>
                    <Text style={styles.currentMonthStyle}>
                      {moment(currentMonthState, 'YYYY-MM').format('MMMM YYYY')}
                    </Text>
                    <TouchableOpacity onPress={() => changeMonth(1)}>
                      <ArrowForwardBG />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.weekdayContainer}>
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
                      <Text key={index} style={styles.weekdayText}>
                        {day}
                      </Text>
                    ))}
                  </View>
                </View>
              )}
              theme={{
                backgroundColor: '#ffffff',
                calendarBackground: '#ffffff',
                textSectionTitleColor: Colors.blackColorNetural,
                selectedDayBackgroundColor: '#00adf5',
                selectedDayTextColor: '#ffffff',
                todayTextColor: '#00adf5',
                dayTextColor: '#2d4150',
                textDisabledColor: '#dd99ee',
                textDayFontWeight: '500',
                textMonthFontWeight: 'bold',
                textDayHeaderFontWeight: 'bold',
              }}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default CalendarModal;
