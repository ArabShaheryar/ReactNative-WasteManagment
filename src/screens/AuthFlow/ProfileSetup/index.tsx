import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, Modal, TouchableWithoutFeedback, FlatList, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import AppBar from '../../../components/AppBar';
import InputText from '../../../components/InputText';
import {Colors} from '../../../utils/app_colors';
import {hp, wp} from '../../../utils/responsive';
import CustomButton from '../../../components/CustomButton';
import {ArrowDropDown} from '../../../Assets';

const ProfileSetup = () => {
  const navigation = useNavigation<any>();
  const [properyModel, setPropertyModel] = useState(false);

  const allData = [
    // Completed (5 entries)
    {
      id: '1',
      title: 'Property 1',
    },
    {
      id: '2',
      title: 'Property 2',
    },
    {
      id: '3',
      title: 'Property 3',
    },
    {
      id: '4',
      title: 'Property 4',
    },
    {
      id: '5',
      title: 'Property 5',
    },
  ];

  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flexGrow: 1,
        backgroundColor: Colors.Whitecolor,
        paddingHorizontal: wp(4),
      }}>
      <View style={styles.body}>
        <AppBar />
        <Text style={styles.profileText}>Setup Profile</Text>
        <Text style={styles.profileInfo}>
          Please fill in your details to complete profile.
        </Text>
        <InputText placeholder="First Name" />
        <InputText placeholder="Last Name" />
        <Text style={styles.profileSetupText}>Property Setup</Text>
        <InputText
          placeholder="Select Property"
          addRight={<ArrowDropDown />}
          onRightPress={() => setPropertyModel(true)}
        />
        <InputText placeholder="Building Number" />
        <InputText placeholder="Unit Number" />

        <CustomButton
          text="Finish"
          onPress={() => {
            navigation.navigate('Signin', {userType: 'User'});
          }}
          extraStyle={{marginTop: hp(16), marginBottom: hp(5)}}
        />
      </View>

      <Modal
        transparent={true}
        visible={properyModel}
        animationType="fade"
        onRequestClose={() => setPropertyModel(false)}>
        <TouchableWithoutFeedback onPress={() => setPropertyModel(false)}>
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              <Text style={styles.propertyHeading}>Select Property</Text>
              <FlatList
                data={allData}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                  <View>
                    <TouchableOpacity onPress={() => setPropertyModel(false)} style={styles.propertyItem}>
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

export default ProfileSetup;
