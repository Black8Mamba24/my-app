import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Form from './components/form/Form'

const queryClient = new QueryClient()

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Form />
		</QueryClientProvider>
	)
}
