import { StatusBar } from 'expo-status-bar'
import {
	StyleSheet,
	Text,
	View,
	Button,
	Alert,
	TouchableOpacity,
	TouchableHighlight,
	TouchableNativeFeedback,
	Image,
} from 'react-native'

export default function App() {
	return (
		<View style={styles.container}>
			<Image
				style={{
					width: 100,
					height: 100,
				}}
				source={{
					uri: 'https://i.pinimg.com/736x/1c/be/92/1cbe92737bfba141fad4b1540f065121.jpg',
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
