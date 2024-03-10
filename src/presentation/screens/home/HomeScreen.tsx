import React from 'react'
import {  View } from 'react-native'
import { globalStyles } from '../../theme/theme'
import  {type NavigationProp, useNavigation } from '@react-navigation/native';
import { PrimaryButtons } from '../../components/shared/buttons/PrimaryButtons';
import type { RootStackParams } from '../../routes/StackNavigator';

export const HomeScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>(); 

  return (
    <View  style={globalStyles.container}>
     <PrimaryButtons navigate={()=>navigation.navigate('Products')} label="Productos"/>
     <PrimaryButtons navigate={()=>navigation.navigate('Settings')} label="Settings"/>
    </View>
  )
}
