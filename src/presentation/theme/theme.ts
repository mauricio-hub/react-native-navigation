import {StyleSheet} from 'react-native';

export const globalColors = {
  primary: '#5856D6',
  secondary: '#FF2D55',
  tertiary: '#4CD964',
  success: '#28C76F',
  warning: '#FF9F0A',
  info: '#5AC8FA',
  danger: '#FF453A',
  dark: '#000',
  background: '#fff',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: globalColors.background,
  },
  primaryButton: {
    backgroundColor: globalColors.primary,
    padding: 10,
    borderRadius:10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,

  },
  buttonText: {
    color: globalColors.background,
    fontSize: 18,
  }
});
