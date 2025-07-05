import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AdminHome from '../screens/adminFlow/admin_home';
import ManageEmployeeTasks from '../screens/adminFlow/ManageEmployeesTask';
import AdminRequestPickUp from '../screens/adminFlow/RequstPickUp';
import AddNewEmployee from '../screens/adminFlow/add_new_employee';
import AddProperty from '../screens/adminFlow/add_property';
import Properties from '../screens/adminFlow/properties';
import ManageUser from '../screens/adminFlow/manage_user';
import BottomTab from './admin_bottom_tab';
import EmployeeAttendance from '../screens/adminFlow/employee_attendance';
import TaskDetailAdmin from '../screens/adminFlow/task_details_admin';
import EmployeeDetailsAdmin from '../screens/adminFlow/employee_detail_admin';

const stack = createNativeStackNavigator();

const AdminStack = () => {
  return (
    <stack.Navigator
      initialRouteName={'BottomTab'}
      screenOptions={{
        headerShadowVisible: false,
        headerShown: false,
      }}>
      <stack.Screen name="BottomTab" component={BottomTab} />
      <stack.Screen
        name="ManageEmployeeTasks"
        component={ManageEmployeeTasks}
      />
      <stack.Screen name="AddNewEmployee" component={AddNewEmployee} />
      <stack.Screen name="AddProperty" component={AddProperty} />
      <stack.Screen name="Properties" component={Properties} />
      <stack.Screen name="ManageUser" component={ManageUser} />
      <stack.Screen name="EmployeeAttendance" component={EmployeeAttendance} />
      <stack.Screen name="AdminRequestPickUp" component={AdminRequestPickUp} />
      <stack.Screen name="TaskDetailAdmin" component={TaskDetailAdmin} />
      <stack.Screen
        name="EmployeeDetailsAdmin"
        component={EmployeeDetailsAdmin}
      />
    </stack.Navigator>
  );
};

export default AdminStack;
