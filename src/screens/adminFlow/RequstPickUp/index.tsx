import React, {useState} from 'react';
import {
  FlatList,
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styles from './styles';
import AppBar from '../../../components/AppBar';
import InputText from '../../../components/InputText';
import {ArrowBack, CalendarIcon, ArrowDropDown} from '../../../Assets';
import CustomButton from '../../../components/CustomButton';
import {hp} from '../../../utils/responsive';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CalendarModal from '../../../components/CustomCalendar';
import { showErrorToast } from '../../../utils/toast';

const AdminRequestPickUp = () => {
  const [CalendarModel, setCalendarModel] = useState(false);
  const [timeSlotModel, settimeSlotModel] = useState(false);
  const [employeeList, setEmployeeList] = useState(false);

    const [unitNumber, setUnitNumber] = useState('');
    const [buildingNumber, setBuildingNumber] = useState('');
    const [specialInst, SetSpecialInst] = useState('');

  
    const handleContinueButton = () => {
      if (!unitNumber || unitNumber === '') {
        showErrorToast('Error', 'Please Enter Unit Number');
        return;
      } else if (!buildingNumber || buildingNumber === '') {
        showErrorToast('Error', 'Please Enter building number');
        return;
      } else if (!specialInst || specialInst === '') {
        showErrorToast('Error', 'Please Enter Special instructions');
        return;
      }  else {
      }
    };


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

  const allEmployees = [
    // Completed (5 entries)
    {
      id: '1',
      title: 'Ali',
    },
    {
      id: '2',
      title: 'Abeeedy',
    },
    {
      id: '3',
      title: 'Muhammad Abdullah',
    },
    {
      id: '4',
      title: 'Ali',
    },
    {
      id: '5',
      title: 'Abeeedy',
    },
  ];

  return (
    <KeyboardAwareScrollView style={styles.body}>
      <AppBar text="Request Pickup" leftIcon={<ArrowBack />} />
      <Text style={styles.dateTimeText}>Property & Unit</Text>
      <InputText placeholder="Unit Number" value={unitNumber}  onChangeText={text => setUnitNumber(text)}/>
      <InputText placeholder="Building Name"  value={buildingNumber}  onChangeText={text => setBuildingNumber(text)}/>
      <Text style={styles.dateTimeText}>Date & Time</Text>
      <InputText
        placeholder="Select Date"
        addRight={<CalendarIcon />}
        onRightPress={() => setCalendarModel(true)}
      />
      <InputText
        placeholder="Select Time Slot"
        addRight={<ArrowDropDown />}
        onRightPress={() => settimeSlotModel(true)}
      />
      <Text style={styles.dateTimeText}>Assign To</Text>
      <InputText placeholder="Select Employee" addRight={<ArrowDropDown />} onRightPress={() => setEmployeeList(true)} />
      <Text style={styles.dateTimeText}>Special instructions</Text>
      <InputText placeholder="e.g; Keep gate open, ring the bell etc."  value={specialInst}  onChangeText={text => SetSpecialInst(text)}/>

      <CustomButton
        text="Add Task"
        onPress={() => {
          handleContinueButton()
          // navigation.navigate('Signin')
        }}
        extraStyle={{marginTop: hp(10), width: '50%', alignSelf: 'flex-end'}}
      />
      <CalendarModal
        visible={CalendarModel}
        onClose={() => setCalendarModel(false)}
        onDateSelect={() => {}}
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

      <Modal
        transparent={true}
        visible={employeeList}
        animationType="fade"
        onRequestClose={() => setEmployeeList(false)}>
        <TouchableWithoutFeedback onPress={() => setEmployeeList(false)}>
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <Text style={styles.propertyHeading}>Select Property</Text>
                <FlatList
                  data={allEmployees}
                  keyExtractor={item => item.id}
                  renderItem={({item}) => (
                    <View>
                      <TouchableOpacity
                        onPress={() => setEmployeeList(false)}
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
    </KeyboardAwareScrollView>
  );
};

export default AdminRequestPickUp;
