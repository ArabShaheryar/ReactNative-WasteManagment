import React, { useState } from 'react';
import {View, Text, Image, Modal, TouchableWithoutFeedback, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';
import AppBar from '../../../components/AppBar';
import {ArrowBack, ArrowDropDown, EditIcon} from '../../../Assets';
import {Images} from '../../../Assets/images';
import {hp} from '../../../utils/responsive';
import InputText from '../../../components/InputText';
import CustomButton from '../../../components/CustomButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const UserEditProfile = () => {
  const size = hp(14); // or any equal size using hp/wp
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
    <KeyboardAwareScrollView style={styles.body}>
      <AppBar text="Update Profile" leftIcon={<ArrowBack />} />

      <View style={styles.profilePhoto}>
        <View>
          <Image
            style={{width: size, height: size, borderRadius: size / 2}}
            source={Images.UserProfileImage}
          />
          <View style={styles.editIcon}>
            <EditIcon />
          </View>
        </View>

        <View style={{marginLeft: 12, marginTop: 10}}>
          <Text style={styles.UserName}>Nouman Imran</Text>
          <Text style={styles.UserEmail}>Tenant</Text>
        </View>
      </View>

      <Text style={styles.headinText}>Profile Setting</Text>
      <InputText placeholder="First Name" />
      <InputText placeholder="Last Name" />

      <Text
        style={[styles.headinText, {marginBottom: hp(0), marginTop: hp(2)}]}>
        Property Setup
      </Text>
      <InputText placeholder="Select Property"    addRight={<ArrowDropDown />}   onRightPress={() => setPropertyModel(true)}/>
      <InputText placeholder="Building Number" />
      <InputText placeholder="Unit Number" />

      <CustomButton
        text="Update"
        onPress={() => {
          // navigation.navigate('Signin')
        }}
        extraStyle={{marginTop: hp(4), width: '50%', alignSelf: 'flex-end'}}
      />
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

export default UserEditProfile;
