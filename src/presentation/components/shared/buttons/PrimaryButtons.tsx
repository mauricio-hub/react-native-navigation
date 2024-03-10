import React from 'react'
import { Pressable, Text } from 'react-native'
import { globalStyles } from '../../../theme/theme'

interface Props {
  navigate: ()=>void,
  label: string
}

export const PrimaryButtons = ({navigate,label}:Props) => {
  return (
    <Pressable 
      onPress={navigate}
      style={globalStyles.primaryButton}>
        <Text style={globalStyles.buttonText}>{label}</Text>
      </Pressable>
  )
}
