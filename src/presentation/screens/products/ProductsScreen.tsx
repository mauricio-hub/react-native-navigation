import React from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {FlatList} from 'react-native-gesture-handler';
import {PrimaryButtons} from '../../components/shared/buttons/PrimaryButtons';
import {type NavigationProp, useNavigation} from '@react-navigation/native';
import {type RootStackParams} from '../../routes/StackNavigator';

const products = [
  {
    id: 1,
    name: 'Producto 1',
    price: 100,
  },
  {
    id: 2,
    name: 'Producto 2',
    price: 200,
  },
  {
    id: 3,
    name: 'Producto 3',
    price: 300,
  },
  {
    id: 4,
    name: 'Producto 4',
    price: 400,
  },
  {
    id: 5,
    name: 'Producto 5',
    price: 500,
  },
  {
    id: 6,
    name: 'Producto 6',
    price: 600,
  },
];

export const ProducstScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
      <Text style={{marginBottom: 10, fontSize: 30}}>Productos</Text>

      <FlatList
        data={products}
        renderItem={({item}) => (
          <PrimaryButtons
            navigate={() =>
              navigation.navigate('Product', {
                id: item.id,
                name: item.name,
                price: item.price,
              })
            }
            label={item.name}
          />
        )}
      />

      <Text style={{marginBottom: 10, fontSize: 30}}>Ajustes</Text>

      <PrimaryButtons
        navigate={() => navigation.navigate('Settings')}
        label="Ajustes"
      />
    </View>
  );
};
