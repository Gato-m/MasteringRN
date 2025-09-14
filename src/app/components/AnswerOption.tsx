import { View, Text, StyleSheet } from 'react-native';

type AnswerProps = {
  option: string;
  isSelected?: boolean;
};

export default function AnswerOption({ option, isSelected }: AnswerProps) {
  return (
    <View
      style={[
        styles.container,
        isSelected && [
          { backgroundColor: 'navajowhite' },
          { borderColor: 'lightgray' },
        ],
      ]}
    >
      <Text
        style={[
          styles.text,
          isSelected && [
            { fontWeight: 'bold' },
            { color: 'black' },
            { fontSize: 16 },
          ],
        ]}
      >
        {option}
      </Text>
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
    color: '#128d96ff',
    fontWeight: '500',
    textAlign: 'left',
  },
});
