import { useState, useEffect } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'

async function getTodos() {
	return fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json())
}

export default function App() {
	const [data, setData] = useState([])

	useEffect(() => {
		getTodos().then(todos => setData(todos))
	}, [])

	return (
		<View style={styles.container}>
			<FlatList
				data={data}
				keyExtractor={item => item.id}
				renderItem={({ item, index }) => {
					return (
						<Text>
							{index}. {item.title}
						</Text>
					)
				}}
			/>
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
})
