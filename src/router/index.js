import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreateChatScreen from '../screens/Chat/CreateChat';
import RoomChatScreen from '../screens/Chat/RoomChat';
import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/SignIn';
import SignUpScreen from '../screens/SignUp';

const Stack = createNativeStackNavigator();

// eslint-disable-next-line no-undef
export default Router = ({initialRouteName}) => (
  <Stack.Navigator
    initialRouteName={initialRouteName}
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="SignInScreen" component={LoginScreen} />
    <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="CreateChatScreen" component={CreateChatScreen} />
    <Stack.Screen name="RoomChatScreen" component={RoomChatScreen} />
  </Stack.Navigator>
);
