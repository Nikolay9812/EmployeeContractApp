import React from "react";
import { View, Text, Button, Image, Alert } from "react-native";
import { useRoute } from "@react-navigation/native";
import * as Print from "expo-print";
import * as Sharing from "expo-sharing";

import { StepThreeRouteProp } from "./types";

// Функция за почистване на името на файла от специални символи
const sanitizeFileName = (name: string) => {
  // Замяна на специални символи с тирета
  return name.replace(/[^a-zA-Z0-9]/g, "_");
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
          <head>
            <style>
              body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
              h1, h2 { font-weight: bold; }
              p { margin: 0 0 10px 0; }
              .page-break { page-break-before: always; }
            </style>
          </head>
          <body>
            <h1>Arbeitsvertrag</h1>
            <p>Dieser Arbeitsvertrag (nachfolgend "Vertrag" genannt) wird am ${date} geschlossen zwischen:</p>
            
            <h2>1. Arbeitgeber</h2>
            <p>Firma: [Arbeitgeber Firma]</p>
            <p>Adresse: [Arbeitgeber Adresse]</p>
            
            <h2>2. Arbeitnehmer</h2>
            <p>Name: ${name}</p>
            <p>Adresse: [Arbeitnehmer Adresse]</p>
            
            <h2>§1 Beschäftigung</h2>
            <p>Der Arbeitnehmer wird als [Berufsbezeichnung] eingestellt. Die Beschäftigung beginnt am [Startdatum].</p>
            
            <h2>§2 Arbeitszeit</h2>
            <p>Die regelmäßige Arbeitszeit beträgt [Stundenanzahl] Stunden pro Woche. Die Arbeitszeiten sind von [Startzeit] bis [Endzeit].</p>
            
            <h2>§3 Vergütung</h2>
            <p>Der Arbeitnehmer erhält ein monatliches Gehalt von [Gehalt] Euro brutto.</p>
            
            <h2>§4 Urlaub</h2>
            <p>Der Arbeitnehmer hat Anspruch auf [Urlaubsanspruch] Tage bezahlten Urlaub pro Jahr.</p>
            
            <h2>§5 Kündigung</h2>
            <p>Die Kündigungsfrist beträgt [Kündigungsfrist] Wochen/Monate.</p>
            
            <div class="page-break"></div>

            <h2>§6 Vertraulichkeit</h2>
            <p>Der Arbeitnehmer verpflichtet sich, alle geschäftlichen und betrieblichen Angelegenheiten vertraulich zu behandeln.</p>
            
            <h2>§7 Schlussbestimmungen</h2>
            <p>Dieser Vertrag unterliegt dem Recht der [Land]. Änderungen und Ergänzungen dieses Vertrages bedürfen der Schriftform.</p>
            
            <h2>Unterschriften</h2>
            <p>${name}</p>
            <p>[Arbeitgeber Name]</p>
            <p>Arbeitgeber</p>
            
            <img src="${signature}" alt="Signature" style="width: 100%; height: auto; border: 1px solid #000;" />
            
            <p>[Arbeitnehmer Name]</p>
            <p>Arbeitnehmer</p>
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
          mimeType: "application/pdf",
          dialogTitle: `Share ${fileName}`, // Показва заглавие при споделяне
          UTI: "com.adobe.pdf",
        });
      } else {
        Alert.alert("Sharing not available", "Unable to share the file.");
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

      <Button title="Generate PDF" onPress={createPDF} color="#4CAF50" />
    </View>
  );
};

export default StepThree;
