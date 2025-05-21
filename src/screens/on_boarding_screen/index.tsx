import React from 'react'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { Images } from '../../Assets/images'
import { OBLogo } from '../../Assets'
import styles from './styles'
import CustomButton from '../../components/CustomButton'
import { hp } from '../../utils/responsive'
import { useNavigation } from '@react-navigation/native'



const OnBoarding = () => {
      const navigation = useNavigation<any>();
    return (
        <ImageBackground source={Images.OB} style={{ flex: 1 }}>
            <View style={styles.bottomContent}>
                <OBLogo />
                <Text style={styles.obText}>Hassle-Free Waste Management!</Text>
                <Text style={styles.obTextContent}>
                    Request trash pickups, get reminders, and track services — all in one app.
                </Text>
                <CustomButton text='Get Started' onPress={() => { 
                    navigation.navigate('Signin')
                }} extraStyle={{marginTop:hp(6)}} />
                <TouchableOpacity><Text style={styles.newUser}>New User? <Text style={styles.newUserSpan}> Create Account</Text></Text></TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default OnBoarding