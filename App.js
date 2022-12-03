import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import PhotoList from './components/PhotoList'

const queryClient = new QueryClient()

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<PhotoList />
		</QueryClientProvider>
	)
}
