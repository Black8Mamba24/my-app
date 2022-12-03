import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, Image } from 'react-native'

export default function App() {
	return (
		<View style={styles.container}>
			<Text>
				Hello <Text style={{ fontWeight: 'bold' }}>World xoxo</Text>
			</Text>
			<TouchableOpacity onPress={() => {}} activeOpacity={0.6}>
				<View style={{}}>
					<Text>Hello World</Text>
				</View>
			</TouchableOpacity>
			<TouchableHighlight onPress={() => {}} activeOpacity={0.6}>
				<View style={{}}>
					<Text>Hello World</Text>
				</View>
			</TouchableHighlight>
			<Button title='Press me' onPress={() => Alert.alert('Hello World')} />
			<StatusBar style='auto' />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
