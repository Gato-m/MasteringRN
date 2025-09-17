import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import QuestionCard from './components/QuestionCard';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import CustomButton from './components/Custombutton';
import questions from '../questions';
import Card from './components/Card';

const question = questions[120];

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
          title="Next"
          onPress={() => console.warn('Next')}
          rightIcon={
            <FontAwesome6 name="arrow-right-long" size={16} color="white" />
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
  button: {
    backgroundColor: '#005055',
    padding: 20,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
    letterSpacing: 1.5,
  },
  buttonIcon: {
    position: 'absolute',
    right: 30,
  },
});
