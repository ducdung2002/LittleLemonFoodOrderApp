import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const NavigationBar: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/images/icon.png')} 
        style={styles.logo} 
      />
      <Image 
        source={require('../assets/images/favicon.png')} 
        style={styles.profileIcon} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 40,
    resizeMode: 'contain',
  },
  profileIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});

export default NavigationBar;