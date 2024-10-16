import { Image, View, ScrollView, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import CustomButton from '@/components/CustomButton'
import { StatusBar } from 'expo-status-bar'
import { Redirect, router } from 'expo-router'
import 'react-native-url-polyfill/auto'
import { useGlobalContext } from '@/context/GlobalProvider'
import { LinearGradient } from 'expo-linear-gradient';

const App = () => {
  const { isLoading, isLoggedIn } = useGlobalContext();

  if(!isLoading && isLoggedIn) return <Redirect href="/home" />
  
  return (
    <SafeAreaView className=' h-full'>
      <LinearGradient
        // Background Linear Gradient
        colors={['#94A5FF', '#DFE0E8']}
        start={{ x: 0, y: 0 }} // Esquina superior izquierda
        end={{ x: 0.2, y: 1 }} // Esquina inferior derecha
        style={styles.background} 
      />
      <ScrollView contentContainerStyle={{ height: '100%'}}>
        <View className='w-full justify-center items-center h-full px-4'>
          <Image 
            source={images.icon_1}
            className='w-[230px] h-[140px]'
            resizeMode='contain'
          />
          
          <Image 
           source={images.cards}
           className='max-w-[380px] w-full h-[300px]'
           resizeMode='contain'
          />

          <View className='relative mt-5'>
            <Text className="text-4xl text-white font-bold text-center">Discover <Text className='text-blue-100'>Declesh</Text> </Text>
            <Image 
              source={images.path}
              className='w-[136px] h-[15px] absolute -bottom-2 -right-5'
              resizeMode='contain'
            />
          </View>

          <Text className='text-sm font-pregular text-blue-100 mt-7 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum</Text>

          <CustomButton title="Continue with email" handlePress={() => router.push('/sign-in')} containerStyles="w-full mt-7" />
        </View>
      </ScrollView>

      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
 
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 1000,
  },
  
});


export default App

