import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { menuItems } from '@/constants/menuItem';

type Category = 'starters' | 'mains' | 'desserts' | 'drinks';

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('starters');
  const categories: Category[] = ['starters', 'mains', 'desserts', 'drinks'];

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <View style={styles.container}>
      <Text style={styles.deliveryText}>ORDER FOR DELIVERY!</Text>
      
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.categoryContainer}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              activeCategory === category && styles.activeCategoryButton
            ]}
            onPress={() => setActiveCategory(category)}
          >
            <Text style={styles.categoryText}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <View style={styles.itemTextContainer}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
            <Image source={item.image} style={styles.itemImage} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  deliveryText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  categoryContainer: {
    marginBottom: 20,
  },
  categoryButton: {
    backgroundColor: '#EDEFEE',
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
  },
  activeCategoryButton: {
    backgroundColor: '#F4CE14',
  },
  categoryText: {
    fontWeight: 'bold',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EDEFEE',
    paddingBottom: 15,
  },
  itemTextContainer: {
    flex: 1,
    marginRight: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemDescription: {
    color: '#666',
    marginBottom: 5,
  },
  itemPrice: {
    fontWeight: 'bold',
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});

export default MenuSection;