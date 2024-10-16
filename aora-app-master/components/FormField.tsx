import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons } from '@/constants';

interface FormFieldProps {
    title: string,
    value: string,
    placeholder?: string,
    keyboardType?: string,
    handleChangeText: (e: string) => void,
    otherStyles: string
}

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, keyboardType, ...props } : FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`} >
      <Text className='text-base text-black-100 font-pmedium'>{ title }</Text>

      <View className='shadow-2xl border-2 border-black-200 w-full h-16 px-4 bg-grey-200 rounded-2xl focus:border-blue-400 items-center flex-row'>
        <TextInput
          className='flex-1 text-white font-psemibold text-base'
          value={value}
          placeholder={placeholder}
          placeholderTextColor='#7b7b8b'
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Password' && !showPassword}
        />
        {title === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image source={!showPassword ? icons.eye : icons.eyeHide} className='w-6 h-6' resizeMode='contain'/>
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField