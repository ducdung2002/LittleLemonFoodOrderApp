import React from 'react';
import { View, Text, Image, TextInput, StyleSheet } from 'react-native';

const HeroSection: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>Little Lemon</Text>
        <Text style={styles.subHeading}>Chicago</Text>
        <Text style={styles.description}>
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </Text>
      </View>
      <Image 
        source={require('../assets/images/Lau-Kim-Chi-Hai-San.jpg')} 
        style={styles.image} 
      />
      <TextInput
        style={styles.searchInput}
        placeholder="Search menu..."
        placeholderTextColor="#999"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#495E57',
    padding: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    minWidth: '50%',
  },
  heading: {
    color: '#F4CE14',
    fontSize: 32,
    fontWeight: 'bold',
  },
  subHeading: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 10,
  },
  description: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 15,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginVertical: 10,
  },
  searchInput: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
});

export default HeroSection;