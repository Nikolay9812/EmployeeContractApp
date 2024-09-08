import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Дефинирай типовете за навигацията
type RootStackParamList = {
  StepOne: undefined;
  StepTwo: { name: string; date: string };
  StepThree: { name: string; date: string; signature: string | null };
};

type StepOneNavigationProp = StackNavigationProp<RootStackParamList, 'StepOne'>;

const StepOne = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const navigation = useNavigation<StepOneNavigationProp>();

  const handleNext = () => {
    if (name && date) {
      // Навигирай към StepTwo с предаване на параметрите name и date
      navigation.navigate('StepTwo', { name, date });
    } else {
      alert('Please fill out both name and date');
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
  
      <Button
        title="Next"
        onPress={handleNext}
        color="#4CAF50" // Зелен бутон
      />
    </View>
  );
  
};

export default StepOne;
