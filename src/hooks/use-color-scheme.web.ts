import { useColorScheme as useRNColorScheme } from 'react-native';

/**
 * Keep the app deterministic during web static rendering and fall back to a light scheme.
 */
export function useColorScheme() {
  return useRNColorScheme() ?? 'light';
}
