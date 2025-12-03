import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function CartScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="px-4 py-4 border-b border-gray-100">
        <Text className="text-2xl font-bold text-center">Shopping Cart</Text>
      </View>

      <ScrollView className="flex-1 px-4 py-4">
        {/* Cart Items */}
        {[1, 2, 3].map((item) => (
          <View key={item} className="flex-row bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-4">
            <View className="bg-gray-100 rounded-xl w-20 h-20 mr-4"></View>
            <View className="flex-1">
              <Text className="font-semibold text-lg mb-1">Product {item}</Text>
              <Text className="text-gray-600 text-sm mb-2">Category</Text>
              <View className="flex-row items-center justify-between">
                <Text className="font-bold text-lg">${(item * 25).toFixed(2)}</Text>
                <View className="flex-row items-center">
                  <TouchableOpacity className="bg-gray-100 rounded-full p-2">
                    <Ionicons name="remove" size={16} color="black" />
                  </TouchableOpacity>
                  <Text className="mx-4 font-semibold">1</Text>
                  <TouchableOpacity className="bg-black rounded-full p-2">
                    <Ionicons name="add" size={16} color="white" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Checkout Section */}
      <View className="px-4 py-6 border-t border-gray-100">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-lg font-semibold">Total:</Text>
          <Text className="text-2xl font-bold">$150.00</Text>
        </View>
        <TouchableOpacity className="bg-black rounded-full py-4">
          <Text className="text-white text-center font-bold text-lg">
            Proceed to Checkout
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}