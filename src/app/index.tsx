import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';

import { MiBoton } from '@/components/MiBoton';
import { perfil } from '@/constants/hoja-de-vida';
import { mostrarAlerta } from '@/utils/show-alert';

export default function InicioScreen() {
  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.eyebrow}>HOJA DE VIDA</Text>
        <View style={styles.identity}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={34} color="#176B3A" />
          </View>
          <Text style={styles.name}>{perfil.nombre}</Text>
          <Text style={styles.title}>{perfil.titulacion}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Perfil</Text>
          <View style={styles.profileCard}>
            <Text style={styles.profileText}>{perfil.resumen}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contacto</Text>
          <View style={styles.actions}>
            <MiBoton
              icon="mail-outline"
              label="Enviar correo"
              onPress={() => mostrarAlerta('Correo electrónico', perfil.correo)}
            />
            <MiBoton
              icon="call-outline"
              label="Llamar"
              variant="secondary"
              onPress={() => mostrarAlerta('Teléfono', perfil.telefono)}
            />
            <MiBoton
              icon="logo-github"
              label="GitHub"
              variant="secondary"
              onPress={() => mostrarAlerta('GitHub', perfil.github)}
            />
          </View>
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
    paddingTop: 18,
    paddingBottom: 28,
    gap: 28,
  },
  eyebrow: {
    color: '#176B3A',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.4,
  },
  identity: {
    alignItems: 'center',
    gap: 10,
    paddingTop: 4,
  },
  avatar: {
    width: 76,
    height: 76,
    borderRadius: 38,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E1F0E6',
    borderWidth: 1,
    borderColor: '#C4DECB',
  },
  name: {
    color: '#183325',
    fontSize: 27,
    fontWeight: '800',
    textAlign: 'center',
  },
  title: {
    color: '#4C5B51',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
  section: {
    gap: 12,
  },
  sectionTitle: {
    color: '#183325',
    fontSize: 18,
    fontWeight: '700',
  },
  profileCard: {
    padding: 18,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2E8E4',
    backgroundColor: '#FFFFFF',
  },
  profileText: {
    color: '#4C5B51',
    fontSize: 14,
    lineHeight: 22,
  },
  actions: {
    gap: 10,
  },
});
