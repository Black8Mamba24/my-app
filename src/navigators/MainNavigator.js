import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../screens/home'
import Login from '../screens/login'
import Register from '../screens/register'

const MainStack = createNativeStackNavigator()

export default function MainNavigator() {
	return (
		<MainStack.Navigator initialRouteName='Login'>
			<MainStack.Screen name='Home' component={Home} />
			<MainStack.Screen name='Login' component={Login} />
			<MainStack.Screen name='Register' component={Register} />
		</MainStack.Navigator>
	)
}
