import React from 'react'
import { Text, View } from 'react-native'
import AppBar from '../../../components/AppBar'
import { ArrowBack, InfoFilled } from '../../../Assets'
import styles from './styles'
import { Colors } from '../../../utils/app_colors'
import CustomButton from '../../../components/CustomButton'

const EmployeeTaskDetail = () => {
  return (
    <View style={styles.body}>
      <AppBar text="Task Details" leftIcon={<ArrowBack />} />
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Text>Routine Pickup Location</Text>
         <Text>View on Map</Text>
      </View>
      <Text style={[styles.detail, {color: Colors.DarkGrey}]}>
        Unit Number: <Text style={styles.detail}>A-102</Text>
      </Text>
      <Text style={[styles.detail, {color: Colors.DarkGrey}]}>
        Building Name: <Text style={styles.detail}> Maple Residency</Text>
      </Text>
      <View style={styles.divider}></View>
        <Text>Scheduled Time</Text>
       <Text style={[styles.detail, {color: Colors.DarkGrey}]}>
        Time Slot: <Text style={styles.detail}>A-102</Text>
      </Text>
      <View style={styles.divider}></View>
        <Text>Special Instructions</Text>
       <Text style={[styles.detail, {color: Colors.DarkGrey}]}>
       Hi, There will be Multiple boxes. & remember to ring bell when you arrive.
      </Text>

      <InfoFilled />
      <Text>Once you tap 'Start Task', the tenant will be notified to get ready for waste pickup. Please start only when you're near their unit.</Text>
        <Text style={[styles.detail, {color: Colors.DarkGrey}]}>
        Having Issue: <Text style={styles.detail}>Report Admin</Text>
      </Text>
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
         <CustomButton
          text="Delay Task"
          onPress={() => {
            // navigation.navigate('Signin')
          }}
          extraStyle={{width: '45%', alignSelf: 'flex-end'}}
        />
         <CustomButton
          text="Start Task"
          onPress={() => {
            // navigation.navigate('Signin')
          }}
          extraStyle={{width: '45%', alignSelf: 'flex-end'}}
        />
      </View>
    </View>
  )
}

export default EmployeeTaskDetail