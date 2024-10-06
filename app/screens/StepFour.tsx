import React from "react";
import { View, Text, Button, Alert } from "react-native";
import * as FileSystem from "expo-file-system";
import { PDFDocument, rgb } from "pdf-lib";
import * as Sharing from "expo-sharing";
import { useRoute } from "@react-navigation/native";
import { StepFourRouteProp } from "./types";

// Примерен интерфейс за координатите
interface FieldCoordinates {
  owner?: { x: number; y: number };
  name?: { x: number; y: number };
  date?: { x: number; y: number };
  birthDate?: { x: number; y: number };
  gender?: { x: number; y: number };
  address?: { x: number; y: number };
  employeeSignature?: { x: number; y: number }; // Подпис на служителя
  ownerSignature?: { x: number; y: number }; // Подпис на собственика
}

type CoordinatesMap = {
  [key: number]: FieldCoordinates;
};

const StepFour = () => {
  const route = useRoute<StepFourRouteProp>();
  const {
    owner,
    name,
    gender,
    date,
    birthDate,
    address,
    employeeSignature,
    ownerSignature,
    pdfUri,
  } = route.params;

  const generateAndDownloadPdf = async () => {
    try {
      if (!pdfUri) {
        Alert.alert("Error", "No PDF file selected");
        return;
      }

      // Зареждане на съществуващия PDF
      const existingPdfBytes = await FileSystem.readAsStringAsync(pdfUri, {
        encoding: FileSystem.EncodingType.Base64,
      });
      const pdfDoc = await PDFDocument.load(existingPdfBytes);

      // Определяне на координатите за полетата на страниците
      const fieldCoordinates: CoordinatesMap = {
        // 1: {
        //   date: { x: 110, y: 85 },
        //   name: { x: 280, y: 85 },
        //   employeeSignature: { x: 380, y: 60 },
        // },
        // 2: {
        //   date: { x: 440, y: 655 },
        //   name: { x: 280, y: 430 },
        //   owner: { x: 90, y: 250 },
        //   ownerSignature: { x: 90, y: 140 },
        //   employeeSignature: { x: 380, y: 140 },
        // },
        // 3: {
        //   date: { x: 70, y: 80 },
        //   employeeSignature: { x: 150, y: 60 },
        //   name: { x: 320, y: 80 },
        // },
        // 4: {
        //   date: { x: 68, y: 60 },
        //   name: { x: 230, y: 60 },
        //   employeeSignature: { x: 450, y: 50 },
        // },
        // 13: {
        //   name: { x: 150, y: 445 },
        //   date: { x: 150, y: 370 },
        //   employeeSignature: { x: 150, y: 360 },
        // },
        // 14: {
        //   date: { x: 70, y: 110 },
        //   employeeSignature: { x: 150, y: 70 },
        //   name: { x: 323, y: 110 },
        // },
        // 15: {
        //   date: { x: 145, y: 130 },
        //   address: { x: 220, y: 130 },
        //   employeeSignature: { x: 150, y: 70 },
        //   name: { x: 145, y: 85 },
        // },
        // 16: {
        //   date: { x: 170, y: 275 },
        //   address: { x: 110, y: 275 },
        //   employeeSignature: { x: 110, y: 260 },
        //   name: { x: 110, y: 320 },
        // },
        // 17: {
        //   date: { x: 170, y: 427 },
        //   address: { x: 110, y: 427 },
        //   employeeSignature: { x: 110, y: 410 },
        //   name: { x: 110, y: 470 },
        // },
        // 1: { //едно и шест са за работния договор
        //   gender: { x: 72, y: 682 },
        //   name: { x: 72, y: 668 },
        //   address: { x: 72, y: 654 },
        //   birthDate: { x: 445, y: 668 },
        // },
        // 6: { //едно и шест са за работния договор
        //   date: { x: 160, y: 380 },
        //   ownerSignature: { x: 90, y: 290 },
        //   employeeSignature: { x: 330, y: 290 },
        // },
        12: {
            date: { x: 135, y: 135 },
            owner: { x: 75, y: 77 },
            name: { x: 290, y: 77 },
            employeeSignature: { x: 370, y: 70 },
          },
      };

      const pages = pdfDoc.getPages();

      // Обработване на всяка страница по отделно
      for (let i = 0; i < pages.length; i++) {
        const page = pages[i];
        const coords = fieldCoordinates[i + 1];

        if (coords) {
          // Проверка и добавяне на име
          if (coords.name) {
            page.drawText(name || "", {
              x: coords.name.x,
              y: coords.name.y,
              size: 12,
              color: rgb(0, 0, 0),
            });
          }

          // Проверка и добавяне на име
          if (coords.gender) {
            page.drawText(gender || "", {
              x: coords.gender.x,
              y: coords.gender.y,
              size: 12,
              color: rgb(0, 0, 0),
            });
          }

          // Проверка и добавяне на име
          if (coords.owner) {
            page.drawText(owner || "", {
              x: coords.owner.x,
              y: coords.owner.y,
              size: 12,
              color: rgb(0, 0, 0),
            });
          }

          // Проверка и добавяне на дата
          if (coords.date) {
            page.drawText(date || "", {
              x: coords.date.x,
              y: coords.date.y,
              size: 12,
              color: rgb(0, 0, 0),
            });
          }

          // Проверка и добавяне на дата
          if (coords.birthDate) {
            page.drawText(birthDate || "", {
              x: coords.birthDate.x,
              y: coords.birthDate.y,
              size: 12,
              color: rgb(0, 0, 0),
            });
          }

          // Проверка и добавяне на адрес
          if (coords.address) {
            page.drawText(address || "", {
              x: coords.address.x,
              y: coords.address.y,
              size: 12,
              color: rgb(0, 0, 0),
            });
          }

          // Добавяне на подписа на служителя
          if (coords.employeeSignature && employeeSignature) {
            const signatureImage = await pdfDoc.embedPng(employeeSignature);
            const imageDims = signatureImage.scale(0.1);

            page.drawImage(signatureImage, {
              x: coords.employeeSignature.x,
              y: coords.employeeSignature.y,
              width: imageDims.width,
              height: imageDims.height,
            });
          }

          // Добавяне на подписа на собственика
          if (coords.ownerSignature && ownerSignature) {
            const signatureImage = await pdfDoc.embedPng(ownerSignature);
            const imageDims = signatureImage.scale(0.1);

            page.drawImage(signatureImage, {
              x: coords.ownerSignature.x,
              y: coords.ownerSignature.y,
              width: imageDims.width,
              height: imageDims.height,
            });
          }
        }
      }

      // Записване на модифицирания PDF
      const pdfBytes = await pdfDoc.saveAsBase64();
      const fileUri = `${FileSystem.documentDirectory}contract_signed.pdf`;

      await FileSystem.writeAsStringAsync(fileUri, pdfBytes, {
        encoding: FileSystem.EncodingType.Base64,
      });

      // Споделяне на подписания PDF файл
      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(fileUri);
      } else {
        Alert.alert("Sharing not available", "Unable to share PDF file.");
      }
    } catch (error) {
      console.error("Error generating PDF:", error);
      Alert.alert("Error", "Failed to generate and download PDF.");
    }
  };

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: "white" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>
        Review and Download PDF
      </Text>
      <Button
        title="Download Signed PDF"
        onPress={generateAndDownloadPdf}
        color="#4CAF50"
      />
    </View>
  );
};

export default StepFour;
