import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthStack from './auth_stack';

const AppStack = () => {
    const stack = createNativeStackNavigator();
    return (
        <SafeAreaProvider style={{ flex: 1 }}>
            <NavigationContainer>
                <stack.Navigator
                    initialRouteName={'AuthStack'}
                    screenOptions={{
                        headerShadowVisible: false,
                        headerShown: false,
                    }}>
                    <stack.Screen name="AuthStack" component={AuthStack} />
                    {/* <stack.Screen name="HomeStack" component={HomeStack} />
                    <stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
                    <stack.Screen name="ProfileStack" component={ProfileStack} />
                    <stack.Screen name="PaymentScreen" component={PaymentScreen} />
                    <stack.Screen name="SearchScreen" component={SearchScreen} />
                    <stack.Screen
                        name="AddTrainingSession"
                        component={AddTrainingSession}
                    /> */}
                </stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default AppStack;