import React, { useState } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import UIInput from "../components/UIInput";
import UIButton from "../components/UIButton";
import { useBooking } from "../context/BookingContext";

export default function AuthScreen({ navigation }) {
  const { completeAuth } = useBooking();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  function onContinue() {
    if (!name || !phone) return alert("Enter name & phone");
    completeAuth(name, phone);
    navigation.replace("Region");
  }

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Text style={styles.title}>Welcome to YY Buses</Text>
      <Text style={styles.subtitle}>Sign in to continue</Text>

      <UIInput placeholder="Full name" value={name} onChangeText={setName} />
      <UIInput placeholder="Phone number" value={phone} keyboardType="phone-pad" onChangeText={setPhone} />

      <UIButton onPress={onContinue}>Continue</UIButton>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center", backgroundColor: "#f3f4f6" },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 8, color: "#111827" },
  subtitle: { color: "#6b7280", marginBottom: 20 },
});
