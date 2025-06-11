import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen: React.FC = () => {
  const navigation = useNavigation();
  const [notifications, setNotifications] = React.useState({
    orderStatuses: true,
    passwordChanges: false,
    specialOffers: true,
    newsletter: false,
  });

  const handleLogout = () => {
    // Xử lý logout ở đây
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image 
          source={require('../assets/images/man-avatar-icon-free-vector.jpg')}
          style={styles.avatar}
        />
        <View style={styles.avatarActions}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>Change</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>First name</Text>
        <Text style={styles.value}>Tilly</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Last name</Text>
        <Text style={styles.value}>Doe</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>tillydoe@example.com</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Phone number</Text>
        <Text style={styles.value}>(217) 555-0113</Text>
      </View>

      <View style={styles.notificationsSection}>
        <Text style={styles.sectionTitle}>Email notifications</Text>
        
        <View style={styles.notificationItem}>
          <Text style={styles.notificationText}>Order statuses</Text>
          <Switch
            value={notifications.orderStatuses}
            onValueChange={(value) => setNotifications({...notifications, orderStatuses: value})}
          />
        </View>

        <View style={styles.notificationItem}>
          <Text style={styles.notificationText}>Password changes</Text>
          <Switch
            value={notifications.passwordChanges}
            onValueChange={(value) => setNotifications({...notifications, passwordChanges: value})}
          />
        </View>

        <View style={styles.notificationItem}>
          <Text style={styles.notificationText}>Special offers</Text>
          <Switch
            value={notifications.specialOffers}
            onValueChange={(value) => setNotifications({...notifications, specialOffers: value})}
          />
        </View>

        <View style={styles.notificationItem}>
          <Text style={styles.notificationText}>Newsletter</Text>
          <Switch
            value={notifications.newsletter}
            onValueChange={(value) => setNotifications({...notifications, newsletter: value})}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Log out</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Discard changes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.footerButton, styles.saveButton]}>
          <Text style={[styles.footerButtonText, styles.saveButtonText]}>Save changes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  avatarActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  actionButton: {
    marginHorizontal: 10,
  },
  actionText: {
    color: '#495E57',
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EDEFEE',
    paddingBottom: 15,
  },
  label: {
    color: '#666',
    fontSize: 14,
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
  },
  notificationsSection: {
    marginTop: 30,
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  notificationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  notificationText: {
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: '#F4CE14',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 30,
  },
  logoutText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
  },
  footerButton: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#495E57',
    borderRadius: 10,
    marginHorizontal: 5,
  },
  saveButton: {
    backgroundColor: '#495E57',
  },
  footerButtonText: {
    fontWeight: 'bold',
  },
  saveButtonText: {
    color: '#fff',
  },
});

export default ProfileScreen;