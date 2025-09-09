import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function First() {
  return (
    <View>
      <Text style={styles.text}>First component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontSize: 20,
    marginTop: 20,
  },
});
