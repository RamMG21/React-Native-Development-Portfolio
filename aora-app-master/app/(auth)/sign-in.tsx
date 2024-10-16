import { View, Text, ScrollView, Image, Alert, } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { Link, router } from 'expo-router'
import { getCurrentUser, signIn } from '@/lib/appwrite'
import { useGlobalContext } from '@/context/GlobalProvider'
import { StatusBar } from 'expo-status-bar'

const SignIn = () => {
	const { setUser, setIsLoggedIn } = useGlobalContext();

	const [form, setForm] = useState({
		email: '',
		password: ''
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const submit = async () => {
		if(!form.email || !form.password) {
		  Alert.alert('Error', 'Please fill in all the fields');
		}
	
		setIsSubmitting(true);
	
		try {
		  await signIn(form.email, form.password)
		  const result = await getCurrentUser();

		  setUser(result);
		  setIsLoggedIn(true);
		  
		  router.replace('/home')
		} catch (error) {
		  Alert.alert('Error', (error as Error).message)
		} finally {
		  setIsSubmitting(false);
		}
	}

  	return (
		
		<SafeAreaView className='bg-#EFEFEF h-full'>
			<StatusBar backgroundColor="#EFEFEF"  />
			<ScrollView contentContainerStyle={{ height: '100%'}}>
				<View className='w-full justify-center h-full px-4 my-6'>
					<Image source={images.log_in_logo} resizeMode='contain' className='w-[415px]' />
					<Text className='text-2xl text-black text-semibold mt-10 font-psemibold'> Log in to Declesh </Text>
					<FormField 
						title='Email'
						value={form.email}
						handleChangeText={(e) => setForm({ ...form, email: e })}
						otherStyles="mt-7"
						keyboardType="email-address"
					/>
					<FormField 
						title='Password'
						value={form.password}
						handleChangeText={(e) => setForm({ ...form, password: e })}
						otherStyles="mt-7"
					/>

					<CustomButton 
						title='Sign In'
						handlePress={submit}
						containerStyles='mt-7'
						isLoading={isSubmitting}
					/>

					<View className='justify-center pt-5 flex-row gap-2'>
						<Text className='text-lg text-black-100 font-pregular'>
							Don't have an account?
						</Text>
						<Link href="/sign-up" className='text-lg font-psemibold text-blue-100'>Create one!</Link>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
  	)
}

export default SignIn