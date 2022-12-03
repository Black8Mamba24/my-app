import { useState } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'

export default function App() {
	const [value, setValue] = useState('')

	return (
		<View style={styles.container}>
			<Text>Value: {value}</Text>
			<TextInput style={styles.input} onChangeText={text => setValue(text)} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center',
	},
	input: {
		backgroundColor: '#eee',
		paddingVertical: 8,
		paddingHorizontal: 16,
		width: '50%',
		borderRadius: 4,
	},
})
