import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ProductsList from './components/ProductsList';
import GroupedProductsList from './components/GroupedProductsList';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Danh sách sản phẩm</Text>
      <ProductsList />
      <Text style={styles.header}>Danh sách nhóm sản phẩm</Text>
      <GroupedProductsList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
});
