import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import NavigationBar from '@/components/navigationNavbar';
import HeroSection from '@/components/HeroSection';
import MenuSection from '@/components/MenuSection';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <NavigationBar />
        <HeroSection />
        <MenuSection />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});