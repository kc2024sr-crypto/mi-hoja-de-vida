import { StyleSheet, Text, View } from 'react-native';

type TarjetaEstudioProps = {
  titulo: string;
  institucion: string;
  periodo: string;
  enCurso: boolean;
};

export function TarjetaEstudio({
  titulo,
  institucion,
  periodo,
  enCurso,
}: TarjetaEstudioProps) {
  return (
    <View style={[styles.card, enCurso ? styles.currentCard : styles.completedCard]}>
      <View style={styles.heading}>
        <Text style={styles.title}>{titulo}</Text>
        {enCurso ? (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>En curso</Text>
          </View>
        ) : (
          <Text style={styles.completedText}>Finalizado</Text>
        )}
      </View>
      <Text style={styles.institution}>{institucion}</Text>
      <Text style={styles.period}>{periodo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 18,
    gap: 7,
  },
  currentCard: {
    backgroundColor: '#EAF6EE',
    borderColor: '#83C99B',
  },
  completedCard: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E2E8E4',
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 10,
  },
  title: {
    flex: 1,
    color: '#183325',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 23,
  },
  badge: {
    borderRadius: 99,
    backgroundColor: '#7138A5',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
  completedText: {
    color: '#58665D',
    fontSize: 12,
    fontWeight: '600',
  },
  institution: {
    color: '#36483C',
    fontSize: 14,
    fontWeight: '600',
  },
  period: {
    color: '#64736A',
    fontSize: 13,
  },
});
