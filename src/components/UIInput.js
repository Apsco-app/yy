import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

export default function UIInput(props) {
  return (
    <View style={styles.wrap}>
      <TextInput {...props} style={[styles.input, props.style]} placeholderTextColor="#9CA3AF" />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { marginVertical: 8 },
  input: {
    height: 48,
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    fontSize: 16,
  },
});
