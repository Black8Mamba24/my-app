import { useState, useEffect } from 'react'
import { StyleSheet, View, Text, FlatList, Image } from 'react-native'

async function getPhotos() {
	return fetch('https://jsonplaceholder.typicode.com/photos').then(response => response.json())
}

export default function App() {
	const [photos, setPhotos] = useState([])

	useEffect(() => {
		getPhotos().then(photos => setPhotos(photos))
	}, [])

	const itemRenderer = ({ item, index }) => (
		<View style={[[styles.listItemContainer, index % 2 === 0 ? styles.odd : {}]]}>
			<Image style={styles.image} source={{ uri: `${item.thumbnailUrl}.png` }} />
			<Text>{item.title}</Text>
		</View>
	)

	return (
		<FlatList
			ListHeaderComponent={() => <Text style={styles.header}>Photos</Text>}
			ListFooterComponent={() => <Text style={styles.footer}>End</Text>}
			ListEmptyComponent={() => <Text style={styles.empty}>Empty</Text>}
			data={photos}
			keyExtractor={item => item.id}
			renderItem={itemRenderer}
		/>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center',
	},
	header: {
		paddingTop: 20,
		fontWeight: 'bold',
		fontSize: 20,
		textAlign: 'center',
	},
	image: {
		width: 150,
		height: 150,
	},
	listItemContainer: {
		paddingVertical: 10,
		alignItems: 'center',
	},
	odd: {
		backgroundColor: 'rgba(194, 249, 112, 0.2)',
	},
})
