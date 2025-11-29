import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function UIButton({ children, onPress, style, variant = "primary" }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, variant === "ghost" ? styles.ghost : styles.primary, style]}>
      <Text style={[styles.txt, variant === "ghost" ? styles.ghostTxt : styles.primaryTxt]}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 120,
    marginVertical: 6,
  },
  primary: {
    backgroundColor: "#2563eb", // accent color
    shadowColor: "#000",
    elevation: 3,
  },
  ghost: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  txt: {
    fontSize: 16,
    fontWeight: "600",
  },
  primaryTxt: {
    color: "#fff",
  },
  ghostTxt: {
    color: "#111827",
  },
});
