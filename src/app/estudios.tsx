import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { TarjetaEstudio } from '@/components/TarjetaEstudio';
import { estudios } from '@/constants/hoja-de-vida';

export default function EstudiosScreen() {
  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.eyebrow}>FORMACIÓN ACADÉMICA</Text>
        <Text style={styles.title}>Mis estudios</Text>
        <Text style={styles.description}>
          Formación registrada en el SENA. El programa actual se identifica con la insignia “En
          curso”.
        </Text>
        <View style={styles.cards}>
          {estudios.map((estudio) => (
            <TarjetaEstudio
              key={estudio.titulo}
              titulo={estudio.titulo}
              institucion={estudio.institucion}
              periodo={estudio.periodo}
              enCurso={estudio.enCurso}
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
    gap: 12,
  },
});
