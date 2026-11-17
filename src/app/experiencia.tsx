import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { TarjetaExperiencia } from '@/components/TarjetaExperiencia';
import { proyectoAcademico } from '@/constants/hoja-de-vida';

export default function ExperienciaScreen() {
  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.eyebrow}>EXPERIENCIA</Text>
        <Text style={styles.title}>Experiencia y proyectos</Text>
        <View style={styles.notice}>
          <Text style={styles.noticeTitle}>Experiencia laboral</Text>
          <Text style={styles.noticeText}>Sin experiencia laboral registrada.</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Proyecto académico</Text>
          <TarjetaExperiencia
            titulo={proyectoAcademico.titulo}
            tipo={proyectoAcademico.tipo}
            descripcion={proyectoAcademico.descripcion}
          />
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
    gap: 20,
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
  notice: {
    padding: 18,
    borderRadius: 16,
    backgroundColor: '#EDF1EE',
    gap: 4,
  },
  noticeTitle: {
    color: '#183325',
    fontSize: 15,
    fontWeight: '700',
  },
  noticeText: {
    color: '#64736A',
    fontSize: 14,
    lineHeight: 20,
  },
  section: {
    gap: 12,
  },
  sectionTitle: {
    color: '#183325',
    fontSize: 18,
    fontWeight: '700',
  },
});
