import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import UIButton from "../components/UIButton";
import { useBooking } from "../context/BookingContext";

export default function PaymentScreen({ navigation }) {
  const { currentBooking, setPaymentMethod, confirmBooking, selectedBus } = useBooking();
  const [method, setMethod] = useState("mobile_money");

  const amount = currentBooking?.total || (selectedBus?.price || 0);

  function payNow() {
    // Simulate successful payment
    setPaymentMethod(method);
    const booking = confirmBooking({ ...currentBooking, paid: true, method });
    navigation.navigate("Receipt", { bookingId: booking.id });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment</Text>
      <Text style={styles.sub}>Amount: ${Number(amount).toFixed(2)}</Text>

      <View style={{ marginTop: 12 }}>
        <UIButton variant={method === "mobile_money" ? undefined : "ghost"} onPress={() => setMethod("mobile_money")}>Mobile Money</UIButton>
        <UIButton variant={method === "card" ? undefined : "ghost"} onPress={() => setMethod("card")}>Card</UIButton>
        <UIButton variant={method === "paypal" ? undefined : "ghost"} onPress={() => setMethod("paypal")}>PayPal</UIButton>
      </View>

      <View style={{ marginTop: 20 }}>
        <UIButton onPress={payNow}>Pay ${Number(amount).toFixed(2)}</UIButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f8fafc" },
  title: { fontSize: 20, fontWeight: "700" },
  sub: { marginTop: 6, color: "#6b7280" },
});
