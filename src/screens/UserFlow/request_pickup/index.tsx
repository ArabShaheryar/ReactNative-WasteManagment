import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import AppBar from '../../../components/AppBar';
import {ArrowBack, ArrowDropDown, CalendarIcon} from '../../../Assets';
import InputText from '../../../components/InputText';
import CustomButton from '../../../components/CustomButton';
import {hp} from '../../../utils/responsive';
import CalendarModal from '../../../components/CustomCalendar';
import { useIsFocused } from '@react-navigation/native';

const RequestPicupScreen = () => {
  const [timeSlotModel, settimeSlotModel] = useState(false);
     const [CalendarModel, setCalendarModel] = useState(false);
      const isFocued = useIsFocused();
  const allData = [
    // Completed (5 entries)
    {
      id: '1',
      title: '5AM To 7AM',
    },
    {
      id: '2',
      title: '7AM To 9PM',
    },
    {
      id: '3',
      title: '1PM To 3PM',
    },
    {
      id: '4',
      title: '5PM To 7PM',
    },
    {
      id: '5',
      title: 'Other',
    },
  ];


  return (
    <View style={styles.body}>
      <AppBar text="Request Pickup" leftIcon={<ArrowBack />} />
      <Text style={styles.dateTimeText}>Date & Time</Text>
      <InputText placeholder="Select Date" addRight={<CalendarIcon />} onRightPress={()=> setCalendarModel(true)}/>
      <InputText placeholder="Select Time Slot" addRight={<ArrowDropDown />} onRightPress={()=> settimeSlotModel(true)}/>
      <Text style={styles.dateTimeText}>Special instructions</Text>
      <InputText placeholder="e.g; Keep gate open, ring the bell etc." />

      <CustomButton
        text="Request Pickup"
        onPress={() => {
          // navigation.navigate('Signin')
        }}
        extraStyle={{marginTop: hp(40), width: '50%', alignSelf: 'flex-end'}}
      />
  <CalendarModal
          visible={CalendarModel}
          onClose={() => setCalendarModel(false)}
          onDateSelect={()=>{}}
     
        />
      <Modal
        transparent={true}
        visible={timeSlotModel}
        animationType="fade"
        onRequestClose={() => settimeSlotModel(false)}>
        <TouchableWithoutFeedback onPress={() => settimeSlotModel(false)}>
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <Text style={styles.propertyHeading}>Select Property</Text>
                <FlatList
                  data={allData}
                  keyExtractor={item => item.id}
                  renderItem={({item}) => (
                    <View>
                      <TouchableOpacity
                        onPress={() => settimeSlotModel(false)}
                        style={styles.propertyItem}>
                        <Text style={styles.propertyText}>{item.title}</Text>
                      </TouchableOpacity>
                      <View style={styles.divider} />
                    </View>
                  )}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default RequestPicupScreen;
