import { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { useNavigation } from "expo-router"; // Correct import for useNavigation
import RegisterScreen from "./RegisterScreen"; // Assuming RegisterScreen is in the same directory

export default function LoginScreen() {
  const navigation = useNavigation(); // Correctly get the navigation object
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // Added state for password
  const [showRegister, setShowRegister] = useState(false); // Renamed for clarity: settShowRegister -> showRegister

  useEffect(() => {
    // This will hide the header for this screen in the navigation stack.
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  // If showRegister is true, render the RegisterScreen.
  // We'll pass a prop to close it, which will set showRegister back to false.
  if (showRegister) {
    return <RegisterScreen onClose={() => setShowRegister(false)} />;
  }

  // --- Functions for authentication (placeholders) ---
  const handleLogin = () => {
    // In a real application, you would integrate Firebase or another auth service here.
    // For example:
    // try {
    //   await signInWithEmailAndPassword(auth, email, password);
    //   Alert.alert("Éxito", "Sesión iniciada correctamente!");
    //   navigation.navigate('Home'); // Navigate to your home screen
    // } catch (error) {
    //   Alert.alert("Error de inicio de sesión", error.message);
    // }

    // For now, a simple check:
    if (email === "admin@gmail.com" && password === "password") { // Example credentials
      Alert.alert("Success", "Logged in!");
      // Here you would typically navigate to your main application screen, e.g.:
      // navigation.navigate('Home');
    } else {
      Alert.alert("Error", "Invalid email or password.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in</Text>

      <TextInput
        style={styles.input}
        placeholder="admin@gmail.com"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address" // Hint for better user experience
        autoCapitalize="none" // Prevents auto-capitalization for emails
      />
      {/* Added a label for password input */}
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="**********"
        value={password} // Bind password state
        onChangeText={setPassword} // Update password state
        secureTextEntry // Hides the input text
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setShowRegister(true)}>
        <Text style={styles.link}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: { // Added style for the password label
    alignSelf: 'flex-start', // Align left with inputs
    marginLeft: '10%', // Match input horizontal alignment
    marginTop: 10,
    marginBottom: 5,
    fontSize: 16,
    color: '#333',
  },
  input: {
    width: "80%",
    padding: 10,
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc"
  },
  button: {
    padding: 10,
    backgroundColor: "#007bff",
    borderRadius: 5,
    width: "80%",
    marginTop: 10,
    alignItems: "center"
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  link: {
    marginTop: 10,
    color: "blue",
    textDecorationLine: "underline"
  }
});