import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect } from "react";
import SplashScreen from "../screens/splash_screen";
import OnBoarding from "../screens/on_boarding_screen";

const stack = createNativeStackNavigator();

const AuthStack = () => {


  return (
    <stack.Navigator
      initialRouteName={'OnBoarding'}
      screenOptions={{
        headerShadowVisible: false,
        headerShown: false,
      }}>
      <stack.Screen name="SplashScreen" component={SplashScreen} />
      <stack.Screen name="OnBoarding" component={OnBoarding} />
      {/* 
      <stack.Screen name="UserRole" component={UserRole} />
      <stack.Screen name="LoginScreen" component={LoginScreen} />
      <stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <stack.Screen name="OTPVerfication" component={OTPVerfication} />
      <stack.Screen name="UpdatePassword" component={UpdatePassword} />
      <stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <stack.Screen name="UploadProfileImage" component={UploadProfileImage} />
      <stack.Screen name="ProfileSetup" component={ProfileSetup} /> */}
    {/* //  <stack.Screen name="AddTrainingSession" component={AddTrainingSession} /> */}
     
    </stack.Navigator>
  );
};

export default AuthStack;