import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import AppBar from '../../../components/AppBar';
import InputText from '../../../components/InputText';
import { Colors } from '../../../utils/app_colors';
import { hp, wp } from '../../../utils/responsive';
import CustomButton from '../../../components/CustomButton';

const ProfileSetup = () => {
    const navigation = useNavigation<any>();
    return (
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false} style={{ flexGrow: 1, backgroundColor: Colors.Whitecolor, paddingHorizontal: wp(4) }}>
            <View style={styles.body}>
                <AppBar />
                <Text style={styles.profileText}>Setup Profile</Text>
                <Text style={styles.profileInfo}>Please fill in your details to complete profile.</Text>
                <InputText placeholder='First Name' />
                <InputText placeholder='Last Name' />
                <Text style={styles.profileSetupText}>Property Setup</Text>
                <InputText placeholder='Select Property' />
                <InputText placeholder='Building Number' />
                <InputText placeholder='Unit Number' />

                <CustomButton text='Finish' onPress={() => {
                    navigation.navigate('ProfileSetup')
                }} extraStyle={{ marginTop: hp(16), marginBottom: hp(5) }} />
            </View>
        </KeyboardAwareScrollView>
    )
}

export default ProfileSetup