// components/Onboarding.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/constants/type';

const Onboarding: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      {/* Logo Little Lemon */}
      <Text style={styles.logo}>LITTLE LEMON</Text>
      
      {/* Main heading */}
      <Text style={styles.heading}>Little Lemon</Text>
      
      {/* Subheading */}
      <Text style={styles.subheading}>Chicago</Text>
      
      {/* Description */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>We are a family owned</Text>
        <Text style={styles.descriptionText}>Mediterranean restaurant,</Text>
        <Text style={styles.descriptionText}>focused on traditional</Text>
        <Text style={styles.descriptionText}>recipes served with a</Text>
      </View>
      
      {/* Name */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name *</Text>
        <TextInput
          style={styles.textInput}
          value={name}
          onChangeText={setName}
          placeholder="tilly"
          placeholderTextColor="#999"
        />
      </View>
      
      {/* Email */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email *</Text>
        <TextInput
          style={styles.textInput}
          value={email}
          onChangeText={setEmail}
          placeholder="tillydoe@example.com"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      
      {/* Button to continue (optional) */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#495E57',
    marginBottom: 20,
    letterSpacing: 2,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#F4CE14',
    marginBottom: 5,
  },
  subheading: {
    fontSize: 24,
    color: '#495E57',
    marginBottom: 30,
  },
  descriptionContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  descriptionText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    lineHeight: 24,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
    fontWeight: '500',
  },
  textInput: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    color: '#333',
  },
  button: {
    backgroundColor: '#495E57',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Onboarding;