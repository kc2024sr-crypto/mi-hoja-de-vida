import { Pressable, StyleSheet, Text, View, type ComponentProps } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

type IconName = ComponentProps<typeof Ionicons>['name'];

type TarjetaHobbyProps = {
  titulo: string;
  detalle: string;
  icono: IconName;
  onPress: () => void;
};

export function TarjetaHobby({ titulo, detalle, icono, onPress }: TarjetaHobbyProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`Ver interés: ${titulo}`}
      accessibilityHint={detalle}
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
      <View style={styles.iconContainer}>
        <Ionicons name={icono} size={22} color="#176B3A" />
      </View>
      <View style={styles.copy}>
        <Text style={styles.title}>{titulo}</Text>
        <Text style={styles.hint}>Toca para ver detalles</Text>
      </View>
      <Ionicons name="chevron-forward" size={18} color="#7B8A80" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 76,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
    padding: 14,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2E8E4',
    backgroundColor: '#FFFFFF',
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EAF6EE',
  },
  copy: {
    flex: 1,
    gap: 3,
  },
  title: {
    color: '#183325',
    fontSize: 15,
    fontWeight: '700',
  },
  hint: {
    color: '#64736A',
    fontSize: 12,
  },
  pressed: {
    opacity: 0.75,
  },
});
