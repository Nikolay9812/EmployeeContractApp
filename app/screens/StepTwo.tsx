import React from "react";
import { View, Button, Text } from "react-native";
import Signature from "react-native-signature-canvas";
import { useNavigation, useRoute } from "@react-navigation/native";

import { StepTwoNavigationProp, StepTwoRouteProp } from "./types"; // Импортирай типовете

const StepTwo = () => {
  const navigation = useNavigation<StepTwoNavigationProp>();
  const route = useRoute<StepTwoRouteProp>();

  const [signature, setSignature] = React.useState<string | null>(null);

  const handleOK = (sig: string) => {
    setSignature(sig);
  };

  const handleNext = () => {
    // Навигирай към StepThree с параметри, типизирани правилно
    navigation.navigate("StepThree", {
      name: route.params.name,
      date: route.params.date,
      signature,
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', padding: 16 }}>Sign Below</Text>
  
      <View style={{ flex: 1 }}>
        <Signature
          onOK={handleOK}
          descriptionText="Sign here"
          clearText="Clear"
          confirmText="Save"
          webStyle={`
            .m-signature-pad {
              box-shadow: none;
              border: none;
              margin: 0;
              width: 100%;  /* Използва цялата ширина на екрана */
              height: 100%; /* Задава височината да бъде на цял екран */
            }
            .m-signature-pad--body {
              border: none;
              margin: 0;
              width: 100%;
              height: 100%;  /* Височина на платното */
            }
            .m-signature-pad--footer {
              display: flex;
              justify-content: space-between;
              padding: 10px;
            }
            .button {
              background-color: #4CAF50;
              color: white;
              border: none;
              padding: 10px 20px;
              font-size: 16px;
              border-radius: 5px;
            }
          `}
          style={{ flex: 1, borderWidth: 1, borderColor: '#ccc' }}  // Подписът ще се разпъне вертикално
        />
      </View>
  
      <View style={{ padding: 16 }}>
        <Button
          title="Next"
          onPress={handleNext}
          color="#4CAF50"
        />
      </View>
    </View>
  );
  
  
};

export default StepTwo;
