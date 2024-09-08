import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Дефинирай типове за всеки екран
type RootStackParamList = {
  StepOne: undefined;
  StepTwo: { name: string; date: string };
  StepThree: { name: string; date: string; signature: string | null };
};

// Типизация за навигацията
export type StepTwoNavigationProp = StackNavigationProp<RootStackParamList, 'StepTwo'>;
export type StepThreeNavigationProp = StackNavigationProp<RootStackParamList, 'StepThree'>;

// Типизация за рутовете
export type StepTwoRouteProp = RouteProp<RootStackParamList, 'StepTwo'>;
export type StepThreeRouteProp = RouteProp<RootStackParamList, 'StepThree'>;
