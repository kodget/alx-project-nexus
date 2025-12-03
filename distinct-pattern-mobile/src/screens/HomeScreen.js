import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
        {/* Header */}
        <View className="px-4 py-6">
          <Text className="text-3xl font-bold text-center text-black">
            Distinct Patterns
          </Text>
          <Text className="text-center text-gray-600 mt-2">
            Fashion that speaks your language
          </Text>
        </View>

        {/* Hero Section */}
        <View className="px-4 mb-8">
          <View className="bg-gray-100 rounded-2xl p-6 items-center">
            <Text className="text-2xl font-bold mb-2">New Collection</Text>
            <Text className="text-gray-600 text-center mb-4">
              Discover our latest fashion trends
            </Text>
            <TouchableOpacity className="bg-black px-6 py-3 rounded-full">
              <Text className="text-white font-semibold">Shop Now</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Categories */}
        <View className="px-4 mb-8">
          <Text className="text-xl font-bold mb-4">Categories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity className="bg-gray-100 rounded-xl p-4 mr-4 w-32">
              <Text className="font-semibold text-center">Men's</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-100 rounded-xl p-4 mr-4 w-32">
              <Text className="font-semibold text-center">Women's</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-100 rounded-xl p-4 mr-4 w-32">
              <Text className="font-semibold text-center">Electronics</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-100 rounded-xl p-4 mr-4 w-32">
              <Text className="font-semibold text-center">Jewelry</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Featured Products */}
        <View className="px-4 mb-8">
          <Text className="text-xl font-bold mb-4">Featured Products</Text>
          <View className="flex-row flex-wrap justify-between">
            <View className="w-[48%] bg-white rounded-xl shadow-sm border border-gray-100 mb-4">
              <View className="bg-gray-100 rounded-t-xl h-32"></View>
              <View className="p-3">
                <Text className="font-semibold mb-1">Product Name</Text>
                <Text className="text-gray-600 text-sm mb-2">Category</Text>
                <Text className="font-bold text-lg">$99.99</Text>
              </View>
            </View>
            <View className="w-[48%] bg-white rounded-xl shadow-sm border border-gray-100 mb-4">
              <View className="bg-gray-100 rounded-t-xl h-32"></View>
              <View className="p-3">
                <Text className="font-semibold mb-1">Product Name</Text>
                <Text className="text-gray-600 text-sm mb-2">Category</Text>
                <Text className="font-bold text-lg">$149.99</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}