import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function ProductsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="px-4 py-4 border-b border-gray-100">
        <Text className="text-2xl font-bold text-center">Products</Text>
      </View>

      {/* Search Bar */}
      <View className="px-4 py-4">
        <View className="flex-row items-center bg-gray-100 rounded-full px-4 py-3">
          <Ionicons name="search" size={20} color="gray" />
          <TextInput
            placeholder="Search products..."
            className="flex-1 ml-3 text-base"
          />
        </View>
      </View>

      {/* Filter Buttons */}
      <View className="px-4 mb-4">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity className="bg-black rounded-full px-4 py-2 mr-3">
            <Text className="text-white font-semibold">All</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-gray-100 rounded-full px-4 py-2 mr-3">
            <Text className="text-gray-700 font-semibold">Men's</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-gray-100 rounded-full px-4 py-2 mr-3">
            <Text className="text-gray-700 font-semibold">Women's</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-gray-100 rounded-full px-4 py-2 mr-3">
            <Text className="text-gray-700 font-semibold">Electronics</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Products Grid */}
      <ScrollView className="flex-1 px-4">
        <View className="flex-row flex-wrap justify-between">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <TouchableOpacity
              key={item}
              className="w-[48%] bg-white rounded-xl shadow-sm border border-gray-100 mb-4"
            >
              <View className="bg-gray-100 rounded-t-xl h-40"></View>
              <View className="p-3">
                <Text className="font-semibold mb-1">Product {item}</Text>
                <Text className="text-gray-600 text-sm mb-2">Category</Text>
                <View className="flex-row items-center justify-between">
                  <Text className="font-bold text-lg">${(item * 25).toFixed(2)}</Text>
                  <TouchableOpacity className="bg-black rounded-full p-2">
                    <Ionicons name="add" size={16} color="white" />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}