import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import AdminHome from '../screens/adminFlow/admin_home';
import {
  DashbaordSelected,
  DashbaordUnSelected,
  EmployeeSelected,
  EmployeeUnSelected,
  TaskSelected,
  TaskUnSelected,
  UserSelected,
  UserUnSelected,
} from '../Assets';
import {Colors} from '../utils/app_colors';
import ManageEmployeeTasks from '../screens/adminFlow/ManageEmployeesTask';
import ManageEmployees from '../screens/adminFlow/manage_employees';
import ManageUser from '../screens/adminFlow/manage_user';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          width: '100%',
          height: 69,
          alignSelf: 'center',
        },
        tabBarLabelStyle: {marginBottom: 5},
        tabBarIconStyle: {
          marginTop: 5,
        },
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarActiveTintColor: Colors.PrimaryColor,
          tabBarInactiveTintColor: Colors.DarkGrey,
          tabBarIcon: ({focused}) =>
            focused ? (
              <DashbaordSelected></DashbaordSelected>
            ) : (
              <DashbaordUnSelected></DashbaordUnSelected>
            ),
        }}
        name="Dashboard"
        component={AdminHome}></Tab.Screen>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarActiveTintColor: Colors.PrimaryColor,
          tabBarInactiveTintColor: Colors.DarkGrey,
          tabBarIcon: ({focused}) =>
            focused ? (
              <TaskSelected></TaskSelected>
            ) : (
              <TaskUnSelected></TaskUnSelected>
            ),
        }}
        name="Tasks"
        component={ManageEmployeeTasks}></Tab.Screen>

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarActiveTintColor: Colors.PrimaryColor,
          tabBarInactiveTintColor: Colors.DarkGrey,
          tabBarIcon: ({focused}) =>
            focused ? (
              <EmployeeSelected></EmployeeSelected>
            ) : (
              <EmployeeUnSelected></EmployeeUnSelected>
            ),
        }}
        name="Employess"
        component={ManageEmployees}></Tab.Screen>

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarActiveTintColor: Colors.PrimaryColor,
          tabBarInactiveTintColor: Colors.DarkGrey,
          tabBarIcon: ({focused}) =>
            focused ? (
              <UserSelected></UserSelected>
            ) : (
              <UserUnSelected></UserUnSelected>
            ),
        }}
        name="Users"
        component={ManageUser}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  home: {
    height: 18,
    width: 18,
  },
});
