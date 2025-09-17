import { View } from 'react-native';
import { useState } from 'react';
import AnswerOption from './AnswerOption';
import { Question } from '../types';
import Card from './Card';

type QuestionCardProps = {
  question: Question;
};

export default function QuestionCard({ question }: QuestionCardProps) {
  const selectedOption = question.options[0];
  const currentSelectoption = (option: string) => {
    console.log('Current Selected: ', option);
  };

  return (
    <Card title={question.title}>
      <View style={{ gap: 10 }}>
        {question.options.map((option) => (
          <AnswerOption
            key={option}
            option={option}
            isSelected={option === selectedOption}
            onPress={() => currentSelectoption(option)}
          />
        ))}
      </View>
    </Card>
  );
}
