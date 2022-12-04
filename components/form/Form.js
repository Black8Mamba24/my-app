import { View, Text, StyleSheet, Button, Alert } from 'react-native'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import Input from '../input'

import { validationSchema } from './validationSchema'

export default function Form() {
	const {
		control,
		handleSubmit,
		formState: { isValid },
	} = useForm({
		mode: 'onBlur',
		defaultValues: {
			firstName: '',
			lastName: '',
			city: '',
			country: '',
		},
		resolver: yupResolver(validationSchema),
	})

	const onSubmit = data => {
		Alert.alert('Form submitted!', JSON.stringify(data))
	}

	return (
		<View style={styles.container}>
			<Text>Basic Form</Text>
			<Input control={control} name='email' placeholder='Address Email' />
			<Input control={control} name='firstName' placeholder='First name' />
			<Input control={control} name='lastName' placeholder='Last name' />
			<Input control={control} name='city' placeholder='City' />
			<Input control={control} name='country' placeholder='Country' />
			<Button title='Submit form' onPress={handleSubmit(onSubmit)} disabled={!isValid} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
})
