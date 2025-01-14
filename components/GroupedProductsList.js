import React from 'react';
import { StyleSheet, Text, View, SectionList, Alert, TouchableOpacity } from 'react-native';

const groupedProducts = [
  { title: 'Main dishes', data: ['Pizza', 'Burger', 'Risotto'] },
  { title: 'Sides', data: ['Frendch Fries', 'Onion Rings', 'Fried Shrimps'] },
  { title: 'Drinks', data: ['Water', 'Coke', 'Beer'] },
  { title: 'Dessertsesserts', data: ['Cheese Cake', 'Ice Cream'] },
];

const GroupedProductItem = ({ name }) => (
  <TouchableOpacity style={styles.item} onPress={() => Alert.alert('Product Selected', name)}>
    <Text style={styles.name}>{name}</Text>
  </TouchableOpacity>
);

const GroupedProductsList = () => {
  const renderItem = ({ item }) => (
    <GroupedProductItem name={item} />
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={styles.header}>{title}</Text>
  );

  return (
    <SectionList
      sections={groupedProducts}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      keyExtractor={(item, index) => item + index}
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
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    padding: 10,
    backgroundColor: '#90caf9',
  },
});

export default GroupedProductsList;
