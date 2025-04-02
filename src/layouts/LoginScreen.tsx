
import { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { useNavigation } from "expo-router"; // No se utiliza useRootNavigationState en este ejemplo
import RegisterScreen from "./RegisterScreen";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [settShowRegister, setShowRegister] = useState(false);

 
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  if (settShowRegister){
    return <RegisterScreen onClose={() => setShowRegister(false)} />
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in</Text>

      <TextInput 
        style={styles.input}
        placeholder="admin@gmail.com"
        value={email}
        onChangeText={setEmail}
      />
      <Text>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="**********"
        secureTextEntry
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      
      <TouchableOpacity onPress={() => setShowRegister(true)}>
        <Text style={styles.link}>Sing up</Text>
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
    alignItems:"center"
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  link: {
    marginTop: 10,
    color: "blue",
    textDecorationLine:"underline"
  }
});