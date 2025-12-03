import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useStateContext } from '../context/StateContext';

export default function ProductCard({ product, onPress }) {
  const { addToCart } = useStateContext();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      className="w-[48%] bg-white rounded-xl shadow-sm border border-gray-100 mb-4"
    >
      {product.images && product.images[0] ? (
        <Image
          source={{ uri: product.images[0].asset.url }}
          className="w-full h-40 rounded-t-xl"
          resizeMode="cover"
        />
      ) : (
        <View className="bg-gray-100 rounded-t-xl h-40" />
      )}
      
      <View className="p-3">
        <Text className="font-semibold mb-1 text-sm" numberOfLines={2}>
          {product.name || 'Product Name'}
        </Text>
        <Text className="text-gray-600 text-xs mb-2">
          {product.category?.title || 'Category'}
        </Text>
        <View className="flex-row items-center justify-between">
          <Text className="font-bold text-lg">
            ${product.price?.toFixed(2) || '0.00'}
          </Text>
          <TouchableOpacity
            onPress={handleAddToCart}
            className="bg-black rounded-full p-2"
          >
            <Ionicons name="add" size={16} color="white" />
          </TouchableOpacity>
        </View>
        {product.ratings && (
          <View className="flex-row items-center mt-2">
            <Ionicons name="star" size={12} color="#FFD700" />
            <Text className="text-xs text-gray-600 ml-1">
              {product.ratings} ({product.ratings || 0})
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}