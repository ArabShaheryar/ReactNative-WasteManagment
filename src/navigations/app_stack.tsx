import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AuthStack from './auth_stack';
import UserStack from './user_stack';
import EmployeeStack from './employee_stack';
import AdminStack from './admin_stack';
import BottomTab from './admin_bottom_tab';

const AppStack = () => {
    const stack = createNativeStackNavigator();
    return (
<NavigationContainer>
                <stack.Navigator
                    initialRouteName={'AuthStack'}
                    screenOptions={{
                        headerShadowVisible: false,
                        headerShown: false,
                    }}>
                    <stack.Screen name="AuthStack" component={AuthStack} />
                    <stack.Screen name="UserStack" component={UserStack} />
                    <stack.Screen name="EmployeeStack" component={EmployeeStack} />
                     <stack.Screen name="AdminStack" component={AdminStack} />
                   
                </stack.Navigator>
            </NavigationContainer>
    );
};

export default AppStack;