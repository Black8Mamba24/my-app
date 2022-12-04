import { View, Text, Button } from 'react-native'

export default function LoginScreen({ navigation }) {
	return (
		<View>
			<Text>LoginScreen</Text>
			<Button title='GO HOME' onPress={() => navigation.navigate('Home')} />
			<Button title='GO REGISTER' onPress={() => navigation.navigate('Register')} />
		</View>
	)
}
