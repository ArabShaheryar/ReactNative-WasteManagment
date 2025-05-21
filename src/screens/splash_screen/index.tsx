import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import styles from './styles'
import { AppLogo } from '../../Assets'
import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {
  const navigation = useNavigation<any>();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation.replace('OnBoarding');
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <View style={styles.body}>
      <View>
        <AppLogo />
      </View>
    </View>
  )
}

export default SplashScreen