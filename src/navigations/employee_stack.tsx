import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EmployeeHome from '../screens/EmployeeFlow/employee_home';
import EmployeeTaskDetail from '../screens/EmployeeFlow/task_details';
import ReportIssue from '../screens/EmployeeFlow/report_issue';
import TodayTask from '../screens/EmployeeFlow/today_task';
import EmployeeProfile from '../screens/EmployeeFlow/employee_profile';
import EmployeeWorkHistory from '../screens/EmployeeFlow/employee_work_history';
import EmployeeEditProfile from '../screens/EmployeeFlow/employee_edit_profile';
import Notifications from '../screens/Notifications';

const stack = createNativeStackNavigator();

const EmployeeStack = () => {
  return (
    <stack.Navigator
      initialRouteName={'EmployeeHome'}
      screenOptions={{
        headerShadowVisible: false,
        headerShown: false,
      }}>
      <stack.Screen name="EmployeeHome" component={EmployeeHome} />
       <stack.Screen name="Notifications" component={Notifications} />
      <stack.Screen name="EmployeeTaskDetail" component={EmployeeTaskDetail} />
      <stack.Screen name="ReportIssue" component={ReportIssue} />
      <stack.Screen name="TodayTask" component={TodayTask} />
      <stack.Screen name="EmployeeProfile" component={EmployeeProfile} />
      <stack.Screen
        name="EmployeeWorkHistory"
        component={EmployeeWorkHistory}
      />
       <stack.Screen name="EmployeeEditProfile" component={EmployeeEditProfile} />
    </stack.Navigator>
  );
};

export default EmployeeStack;
