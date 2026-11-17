import { Alert, Platform } from 'react-native';

export function mostrarAlerta(titulo: string, mensaje: string) {
  if (Platform.OS === 'web') {
    if (typeof window !== 'undefined') {
      window.alert(`${titulo}\n\n${mensaje}`);
    }
    return;
  }

  Alert.alert(titulo, mensaje);
}
