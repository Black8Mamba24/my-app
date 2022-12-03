import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image, Button, TouchableHighlight, Alert, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

export default function App() {
	return (
		<View style={styles.container}>
			<Image
				source={{
					uri: 'https://i.pinimg.com/736x/1c/be/92/1cbe92737bfba141fad4b1540f065121.jpg',
				}}
				style={{ width: 200, height: 200, marginTop: 50, borderRadius: 100 }}
			/>
			<Text style={{ fontSize: 30, marginTop: 100 }}>
				Mateusz <Text style={{ fontWeight: 'bold' }}>Mikoda</Text>
			</Text>
			<StatusBar style='auto' />
			<TouchableOpacity
				onPress={() => {
					Alert.alert('You clicked this button')
				}}>
				<View
					style={{
						width: 200,
						height: 50,
						backgroundColor: 'lightgray',
						borderRadius: 10,
						marginTop: 20,
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<FontAwesome5 name='cube' size={24} color='black' />
					<Text style={{ marginLeft: 10 }}>Click this icon!</Text>
				</View>
			</TouchableOpacity>

			<Image
				source={require('./assets/favicon.png')}
				style={{
					width: 100,
					height: 100,
					marginTop: 10,
					marginBottom: 50,
					borderRadius: 100,
				}}
			/>
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
