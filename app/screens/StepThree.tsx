import React from "react";
import { View, Text, Button, Image, Alert } from "react-native";
import { useRoute } from "@react-navigation/native";
import * as Print from "expo-print";
import * as Sharing from "expo-sharing";
import { contractSections } from './Contract';  // Импортиране на секции

import { StepThreeRouteProp } from "./types";

// Функция за почистване на името на файла от специални символи
const sanitizeFileName = (name: string) => {
  return name.replace(/[^a-zA-Z0-9]/g, "_");
};

const StepThree = () => {
  const route = useRoute<StepThreeRouteProp>();
  const { name, date, address, signature } = route.params;

  // Замяна на плейсхолдърите в HTML шаблона
  const replacePlaceholders = (template: string) => {
    return template
      .replace(/{{name}}/g, name)
      .replace(/{{date}}/g, date)
      .replace(/{{address}}/g, address)
      .replace(/{{signature}}/g, signature ? signature : "");
  };

  // Генериране на PDF за конкретна секция
  const createPDFForSection = async (sectionIndex: number) => {
    try {
      const section = contractSections[sectionIndex];
      const filledHtml = replacePlaceholders(section.content);

      // Генериране на PDF файл
      const { uri } = await Print.printToFileAsync({ html: filledHtml });

      const fileName = `contract_${sanitizeFileName(name)}_${sectionIndex + 1}.pdf`;

      // Споделяне на файла
      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(uri, {
          mimeType: "application/pdf",
          dialogTitle: `Share ${fileName}`,
          UTI: "com.adobe.pdf",
        });
      } else {
        Alert.alert("Sharing not available", `Unable to share ${fileName}.`);
      }
    } catch (error) {
      console.error("Error generating PDF:", error);
      Alert.alert("Error", "Failed to generate PDF.");
    }
  };

  return (
    <View className="flex-1 p-4 bg-white">
      <Text className="text-2xl font-bold mb-4">Review Details</Text>

      <Text className="text-lg mb-2">Name: {name}</Text>
      <Text className="text-lg mb-4">Date: {date}</Text>
      <Text className="text-lg mb-4">Address: {address}</Text>

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

      {contractSections.map((section, index) => (
        <Button
          key={index}
          title={`Generate PDF for ${section.title}`}
          onPress={() => createPDFForSection(index)}
          color="#4CAF50"
        />
      ))}
    </View>
  );
};

export default StepThree;
