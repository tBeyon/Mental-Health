import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, TouchableOpacity, TextInput } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import StackNavigator from './navigation/StackNavigator';

export default function App() {
  return (
    <>
      <StackNavigator />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingVertical: 20,
    backgroundColor: "blue",
    paddingHorizontal: 14,
    borderRadius: 50
  }
});
