import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Дефинирай типовете за навигацията
type RootStackParamList = {
  StepOne: undefined;
  StepTwo: { name: string; date: string; address: string };
  StepThree: { name: string; date: string; address: string; signature: string | null };
};

type StepOneNavigationProp = StackNavigationProp<RootStackParamList, 'StepOne'>;

const StepOne = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [address, setAddress] = useState('');
  const navigation = useNavigation<StepOneNavigationProp>();

  const handleNext = () => {
    if (name && date && address) {
      // Навигирай към StepTwo с предаване на параметрите name, date и address
      navigation.navigate('StepTwo', { name, date, address });
    } else {
      alert('Please fill out name, date, and address');
    }
  };

  return (
    <View className="flex-1 p-4 bg-white">
      <Text className="text-xl font-bold mb-4">Enter Employee Name</Text>
      <TextInput
        className="border border-gray-300 rounded-md p-4 mb-4 text-lg"
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      <Text className="text-xl font-bold mb-4">Enter Date</Text>
      <TextInput
        className="border border-gray-300 rounded-md p-4 mb-4 text-lg"
        placeholder="Date"
        value={date}
        onChangeText={setDate}
      />

      <Text className="text-xl font-bold mb-4">Enter Address</Text>
      <TextInput
        className="border border-gray-300 rounded-md p-4 mb-4 text-lg"
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />

      <Button
        title="Next"
        onPress={handleNext}
        color="#4CAF50" // Зелен бутон
      />
    </View>
  );
};

export default StepOne;
