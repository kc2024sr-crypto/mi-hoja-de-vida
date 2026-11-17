import { Pressable, StyleSheet, Text, type ComponentProps } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

type IconName = ComponentProps<typeof Ionicons>['name'];

type MiBotonProps = {
  icon: IconName;
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
};

export function MiBoton({ icon, label, onPress, variant = 'primary' }: MiBotonProps) {
  const isPrimary = variant === 'primary';

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        isPrimary ? styles.primary : styles.secondary,
        pressed && styles.pressed,
      ]}>
      <Ionicons name={icon} size={19} color={isPrimary ? '#FFFFFF' : '#176B3A'} />
      <Text style={[styles.label, isPrimary ? styles.primaryLabel : styles.secondaryLabel]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 50,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 16,
    borderRadius: 14,
    borderWidth: 1,
  },
  primary: {
    backgroundColor: '#176B3A',
    borderColor: '#176B3A',
  },
  secondary: {
    backgroundColor: '#FFFFFF',
    borderColor: '#D5E4D9',
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
  },
  primaryLabel: {
    color: '#FFFFFF',
  },
  secondaryLabel: {
    color: '#176B3A',
  },
  pressed: {
    opacity: 0.78,
  },
});
