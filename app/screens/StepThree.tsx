import React from 'react';
import { View, Button, Text } from 'react-native';
import Signature from 'react-native-signature-canvas';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StepTwoNavigationProp, StepTwoRouteProp } from './types';

const StepThree = () => {
  const navigation = useNavigation<StepTwoNavigationProp>();
  const route = useRoute<StepTwoRouteProp>();
  const [ownerSignature, setOwnerSignature] = React.useState<string | null>(null);

  const handleOK = (sig: string) => {
    setOwnerSignature(sig);
  };

  const handleNext = () => {
    navigation.navigate('StepFour', {
      gender: route.params.gender,
      owner: route.params.owner,
      name: route.params.name,
      birthDate: route.params.birthDate,
      date: route.params.date,
      address: route.params.address,
      employeeSignature: route.params.employeeSignature, // Подписът на служителя
      ownerSignature: ownerSignature, // Подписът на собственика
      pdfUri: route.params.pdfUri, 
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', padding: 16 }}>Подпис на собственика</Text>
      <View style={{ flex: 1 }}>
        <Signature
          onOK={handleOK}
          descriptionText="Подпис на собственика"
          clearText="Изчисти"
          confirmText="Запази"
          webStyle={''}
          style={{ flex: 1, borderWidth: 1, borderColor: '#ccc' }}
        />
      </View>
      <View style={{ padding: 16 }}>
        <Button title="Напред" onPress={handleNext} color="#4CAF50" />
      </View>
    </View>
  );
};



export default StepThree;
