import React from 'react'
import { Text, View } from 'react-native'
import { globalStyles } from '../../theme/theme'
import { PrimaryButtons } from '../../components/shared/buttons/PrimaryButtons'
import { StackActions, useNavigation } from '@react-navigation/native'

export const SettingsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={globalStyles.container}> 
      <Text>SttingsScreen</Text>

      <PrimaryButtons label="Home" navigate={
        ()=>navigation.dispatch(StackActions.popToTop())
      }/>
      <PrimaryButtons label="Regresar" navigate={
        ()=>navigation.goBack()
      }/>
    </View>
  )
}