import { object, ref, string } from 'yup'

export const validationSchema = object().shape({
	firstName: string().required('Name is required'),
	lastName: string().required('Last name is required'),
	email: string().email('Invalid email').required('Email is required'),
	city: string().required('City is required'),
	country: string().required('Country is required'),
	password: string().min(8, 'Password must be at least 8 characters').required('Password is required'),
	repeatPassword: string()
		.required()
		.oneOf([ref('password')], 'Password must match'),
})

