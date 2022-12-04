import { useQuery } from '@tanstack/react-query'
import { StyleSheet, Text, FlatList, View } from 'react-native'

async function getAlbums() {
	return fetch('https://jsonplaceholder.typicode.com/albums').then(response => response.json())
}

export default function AlbumList() {
	const { data } = useQuery(['albums'], getAlbums)

	const itemRenderer = ({ item }) => (
		<View style={styles.horizontal}>
			<Text>{item.title}</Text>
		</View>
	)
	return (
		<FlatList
			ListHeaderComponent={() => <Text style={styles.header}>Albums</Text>}
			ListFooterComponent={() => <Text style={styles.footer}>End</Text>}
			ListEmptyComponent={() => <Text style={styles.empty}>Empty</Text>}
			data={data}
			keyExtractor={item => item.id}
			renderItem={itemRenderer}
			horizontal={true}
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
	horizontal: {
		backgroundColor: 'red',
		height: 50,
		borderWidth: 1,
		display: 'flex',
		flexDirection: 'column',
	},
})
