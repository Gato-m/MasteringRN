import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import QuestionCard from './components/QuestionCard';
import CustomButton from './components/CustomButton';
import questions from '../questions';
import Card from './components/Card';
import { FontAwesome6 } from '@expo/vector-icons';

const question = questions[0];

export default function QuizScreen() {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        {/* Header */}
        <View>
          <Text style={styles.title}>Question 1/5</Text>
        </View>

        {/* Body */}
        <View>
          {question ? (
            <QuestionCard question={question} />
          ) : (
            <Card title="There are no questions yet!">
              <Text>Correct answers 3/5</Text>
              <Text>Best score 10</Text>
            </Card>
          )}

          {/* Timer */}
          <Text style={styles.timer}>20 sec</Text>
        </View>

        {/* Footer */}
        <CustomButton
          title="CUSTOM BUTTON"
          onPress={() => console.log('Custom Button Pressed!')}
          onLongPress={() => console.log('Lon Press - Pressed!')}
          rightIcon={
            <FontAwesome6 name="arrow-right" size={18} color="white" />
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FDFEF4',
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  title: {
    textAlign: 'center',
    color: '#005055',
  },
  timer: {
    marginVertical: 15,
    textAlign: 'center',
    color: '#005055',
    fontWeight: 'bold',
  },
});
