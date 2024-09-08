import React from "react";
import { View, Text, Button, Image, Alert } from "react-native";
import { useRoute } from "@react-navigation/native";
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';

import { StepThreeRouteProp } from "./types";

// Функция за почистване на името на файла от специални символи
const sanitizeFileName = (name: string) => {
  // Замяна на специални символи с тирета
  return name.replace(/[^a-zA-Z0-9]/g, '_');
};

const StepThree = () => {
  const route = useRoute<StepThreeRouteProp>();
  const { name, date, signature } = route.params;

  // Функция за създаване на PDF и споделяне
  const createPDF = async () => {
    try {
      // Създаване на HTML съдържание за PDF
      const htmlContent = `
        <html>
          <body style="font-family: Arial, sans-serif; padding: 20px;">
            <h1>Employee Contract</h1>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Date:</strong> ${date}</p>
            <h2>Signature:</h2>
            <img src="${signature}" alt="Signature" style="width: 100%; height: auto; border: 1px solid #000;" />
          </body>
        </html>
      `;

      // Създаване на PDF файл
      const { uri } = await Print.printToFileAsync({ html: htmlContent });

      // Определяне на име на файла с името на служителя
      const sanitizedFileName = sanitizeFileName(name);
      const fileName = `employee_contract_${sanitizedFileName}.pdf`;

      // Споделяне на файла
      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(uri, {
          mimeType: 'application/pdf',
          dialogTitle: `Share ${fileName}`,
          UTI: 'com.adobe.pdf'
        });
      } else {
        Alert.alert('Sharing not available', 'Unable to share the file.');
      }

    } catch (error) {
      console.error('Error generating PDF:', error);
      Alert.alert('Error', 'Failed to generate PDF.');
    }
  };

  return (
    <View className="flex-1 p-4 bg-white">
      <Text className="text-2xl font-bold mb-4">Review Details</Text>

      <Text className="text-lg mb-2">Name: {name}</Text>
      <Text className="text-lg mb-4">Date: {date}</Text>

      <Text className="text-lg font-bold mb-4">Signature:</Text>
      {signature ? (
        <Image
          source={{ uri: signature }}
          className="h-40 w-full border border-gray-300"
          resizeMode="contain"
        />
      ) : (
        <Text>No signature available</Text>
      )}

      <Button
        title="Generate PDF"
        onPress={createPDF}
        color="#4CAF50"
      />
    </View>
  );
};

export default StepThree;
