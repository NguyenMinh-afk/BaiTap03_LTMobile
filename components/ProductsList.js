import React from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableOpacity } from 'react-native';

const products = [
  { id: '1', name: 'Main dishes', price: '10.00' },
  { id: '2', name: 'Sides', price: '15.00' },
  { id: '3', name: 'Drinks', price: '20.00' },
  { id: '4', name: 'Desserts', price: '25.00' },
];

const ProductItem = ({ name, price }) => (
  <TouchableOpacity style={styles.item} onPress={() => Alert.alert('Product Selected', name)}>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.price}>${price}</Text>
  </TouchableOpacity>
);

const ProductsList = () => {
  const renderItem = ({ item }) => (
    <ProductItem name={item.name} price={item.price} />
  );

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    color: 'gray',
  },
});

export default ProductsList;
