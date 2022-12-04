import { View, Button, Alert } from 'react-native'
import Lottie from 'lottie-react-native'

export default function HomeScreen() {
	return (
		<View>
			<Lottie source={require('../../../assets/owl.json')} autoPlay loop style={{ width: 300, height: 200 }} />
		</View>
	)
}
