import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Question } from '../types';

type AnswerProps = {
  option: string;
};

export default function AnswerOption({ option }: AnswerProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{option}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 20,
    borderRadius: 100,
  },
  text: {
    color: '#005055',
    fontWeight: '500',
    textAlign: 'left',
  },
});
