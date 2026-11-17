import { StyleSheet, Text, View } from 'react-native';

type TarjetaExperienciaProps = {
  titulo: string;
  tipo: string;
  descripcion: string;
};

export function TarjetaExperiencia({ titulo, tipo, descripcion }: TarjetaExperienciaProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.type}>{tipo}</Text>
      <Text style={styles.title}>{titulo}</Text>
      <Text style={styles.description}>{descripcion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E2E8E4',
    borderWidth: 1,
    borderRadius: 16,
    padding: 18,
    gap: 8,
  },
  type: {
    color: '#176B3A',
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.6,
  },
  title: {
    color: '#183325',
    fontSize: 17,
    fontWeight: '700',
  },
  description: {
    color: '#4C5B51',
    fontSize: 14,
    lineHeight: 21,
  },
});
