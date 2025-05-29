import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserHomeScreen from "../screens/UserFlow/user_home_screen";
import RequestPicupScreen from "../screens/UserFlow/request_pickup";
import Notifications from "../screens/Notifications";
import UserPickUpHistory from "../screens/UserFlow/pickup_history";
import FeedbackScreen from "../screens/UserFlow/feedback";
import UserProfile from "../screens/UserFlow/user_profile";
import UserEditProfile from "../screens/UserFlow/UserEditProfile";
import UserSupport from "../screens/UserFlow/Support";
import NewComplain from "../screens/UserFlow/new_complain";

const stack = createNativeStackNavigator();

const UserStack = () => {


  return (
    <stack.Navigator
      initialRouteName={'UserHomeScreen'}
      screenOptions={{
        headerShadowVisible: false,
        headerShown: false,
      }}>
      <stack.Screen name="UserHomeScreen" component={UserHomeScreen} />
       <stack.Screen name="RequestPicupScreen" component={RequestPicupScreen} />
       <stack.Screen name="Notifications" component={Notifications} />
       <stack.Screen name="UserPickUpHistory" component={UserPickUpHistory} />
       <stack.Screen name="FeedbackScreen" component={FeedbackScreen} />
        <stack.Screen name="UserProfile" component={UserProfile} />
        <stack.Screen name="UserEditProfile" component={UserEditProfile} />
        <stack.Screen name="UserSupport" component={UserSupport} />
         <stack.Screen name="NewComplain" component={NewComplain} />
    
    </stack.Navigator>
  );
};

export default UserStack;