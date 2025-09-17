import { View, Text, StyleSheet } from 'react-native';
import { PropsWithChildren } from 'react';

// type Card = PropsWithChildren<{
//   title: string;
// }>;

// type Card = {
//   title: string;
//   children: React.ReactNode;
// };

type Card = {
  title: string;
};

export default function Card({ title, children }: PropsWithChildren<Card>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'seashell',
    borderRadius: 20,
    padding: 30,
    paddingVertical: 30,
    gap: 20,
    borderWidth: 2,
    borderColor: 'lightgray',

    // Shaddow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  title: {
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 30,
    color: '#0c0c0cff',
  },
});
