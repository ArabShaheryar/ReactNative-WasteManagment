

import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import { AppLogoWithColor, Email, EyeHide, Lock } from '../../../Assets'
import InputText from '../../../components/InputText'
import CustomButton from '../../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { hp, wp } from '../../../utils/responsive'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Signin = () => {
    const navigation = useNavigation<any>();
    return (
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false} style={{flexGrow:1}}>
            <View style={styles.body}>
            <View style={styles.bottomContent}>
                <View style={styles.logoStyle}>
                    <AppLogoWithColor />
                </View>
                <View style={{ paddingHorizontal: wp(4), }}>
                    <Text style={styles.SignInText}>Sign In</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}><Text style={styles.dontHaveAccountText}>Don’t have an account? <Text style={styles.dontHaveAccountTextSpan}>Sign Up</Text></Text></TouchableOpacity>
                    <InputText placeholder='Email' addLeft={<Email />} />
                    <InputText placeholder='Password' addLeft={<Lock />} addRight={<EyeHide />} />
                    <Text style={styles.forgetText}>Forgot Password?</Text>
                    <CustomButton text='Sign In' onPress={() => {
                        navigation.navigate('Signin')
                    }} extraStyle={{ marginTop: hp(20) }} />
                </View>
            </View>
        </View>
        </KeyboardAwareScrollView>
    )
}

export default Signin