import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { TarjetaHobby } from '@/components/TarjetaHobby';
import { intereses } from '@/constants/hoja-de-vida';
import { mostrarAlerta } from '@/utils/show-alert';

export default function HobbiesScreen() {
  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.eyebrow}>INTERESES</Text>
        <Text style={styles.title}>Hobbies</Text>
        <Text style={styles.description}>
          Intereses tomados del CV. Toca una tarjeta para ver su detalle.
        </Text>
        <View style={styles.cards}>
          {intereses.map((interes) => (
            <TarjetaHobby
              key={interes.titulo}
              titulo={interes.titulo}
              detalle={interes.detalle}
              icono={interes.icono}
              onPress={() => mostrarAlerta(interes.titulo, interes.detalle)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F8F6',
  },
  content: {
    width: '100%',
    maxWidth: 620,
    alignSelf: 'center',
    paddingHorizontal: 22,
    paddingTop: 22,
    paddingBottom: 28,
    gap: 12,
  },
  eyebrow: {
    color: '#176B3A',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.2,
  },
  title: {
    color: '#183325',
    fontSize: 28,
    fontWeight: '800',
  },
  description: {
    color: '#64736A',
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 8,
  },
  cards: {
    gap: 10,
  },
});
