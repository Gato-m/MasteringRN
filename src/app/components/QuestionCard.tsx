import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import AnswerOption from './AnswerOption';
import { Question } from '../types';

type QuestionCardProps = {
  question: Question;
};

export default function QuestionCard({ question }: QuestionCardProps) {
  const selectedOption = question.options[0];

  const onOptionSelected = (option: string) => {
    console.warn('Selected ', option);
  };

  return (
    <View style={styles.questionCard}>
      <Text style={styles.question}>{question.title}</Text>

      <View style={{ gap: 10 }}>
        {question.options.map((option, index) => (
          <AnswerOption
            option={option}
            isSelected={option === selectedOption}
            onPress={() => onOptionSelected(option)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  questionCard: {
    backgroundColor: 'seashell',
    borderRadius: 20,
    padding: 30,
    paddingVertical: 30,
    gap: 20,
    borderWidth: 1,
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

  question: {
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 30,
  },
});
