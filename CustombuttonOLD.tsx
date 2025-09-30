import { ComponentProps, ReactNode } from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';

type CustomButton = {
  rightIcon?: ReactNode;
  title: string;
} & ComponentProps<typeof Pressable>;

const CustomButton = ({
  rightIcon,
  title,
  ...pressableProps
}: CustomButton) => {
  return (
    <Pressable {...pressableProps} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
      <View style={styles.rightIcon}>{rightIcon}</View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#005055',
    padding: 20,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
    letterSpacing: 1.5,
  },
  rightIcon: {
    position: 'absolute',
    right: 20,
  },
});

export default CustomButton;
