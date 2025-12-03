import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const menuItems = [
    { icon: 'person-outline', title: 'Edit Profile', subtitle: 'Update your information' },
    { icon: 'bag-outline', title: 'Order History', subtitle: 'View your past orders' },
    { icon: 'heart-outline', title: 'Wishlist', subtitle: 'Your favorite items' },
    { icon: 'card-outline', title: 'Payment Methods', subtitle: 'Manage payment options' },
    { icon: 'location-outline', title: 'Addresses', subtitle: 'Manage shipping addresses' },
    { icon: 'settings-outline', title: 'Settings', subtitle: 'App preferences' },
    { icon: 'help-circle-outline', title: 'Help & Support', subtitle: 'Get assistance' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="px-4 py-4 border-b border-gray-100">
        <Text className="text-2xl font-bold text-center">Profile</Text>
      </View>

      <ScrollView className="flex-1">
        {/* Profile Info */}
        <View className="items-center py-8">
          <View className="bg-gray-100 rounded-full w-24 h-24 items-center justify-center mb-4">
            <Ionicons name="person" size={40} color="gray" />
          </View>
          <Text className="text-xl font-bold mb-1">John Doe</Text>
          <Text className="text-gray-600">john.doe@example.com</Text>
        </View>

        {/* Menu Items */}
        <View className="px-4">
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              className="flex-row items-center py-4 border-b border-gray-100"
            >
              <View className="bg-gray-100 rounded-full p-3 mr-4">
                <Ionicons name={item.icon} size={20} color="black" />
              </View>
              <View className="flex-1">
                <Text className="font-semibold text-lg">{item.title}</Text>
                <Text className="text-gray-600 text-sm">{item.subtitle}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="gray" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout Button */}
        <View className="px-4 py-8">
          <TouchableOpacity className="bg-red-500 rounded-full py-4">
            <Text className="text-white text-center font-bold text-lg">
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}