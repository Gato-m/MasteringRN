import { Text, StyleSheet, Pressable } from 'react-native';

type AnswerProps = {
  option: string;
  isSelected?: boolean;
  onPress?: () => void;
};

export default function AnswerOption({
  option,
  isSelected,
  onPress,
}: AnswerProps) {
  return (
    <Pressable
      onPress={onPress}
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
    </Pressable>
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
