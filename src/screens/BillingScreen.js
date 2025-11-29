import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import UIInput from "../components/UIInput";
import UIButton from "../components/UIButton";
import { useBooking } from "../context/BookingContext";

export default function BillingScreen({ navigation }) {
  const { selectedBus, selectedSeats, user, confirmBooking } = useBooking();
  const [passengerName, setPassengerName] = useState(user?.name || "");
  const total = (selectedBus?.price || 0) * (selectedSeats.length || 1);

  function goToPayment() {
    const booking = {
      passengers: selectedSeats.map(s => ({ seat: s, name: passengerName })),
      bus: selectedBus,
      total,
    };
    // store current booking details then go to Payment
    confirmBooking({ ...booking, step: "billing" });
    navigation.navigate("Payment");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Billing</Text>
      <Text style={styles.sub}>Bus: {selectedBus?.name}</Text>
      <Text style={styles.sub}>Seats: {selectedSeats.join(", ")}</Text>
      <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>

      <UIInput placeholder="Passenger name" value={passengerName} onChangeText={setPassengerName} />
      <UIButton onPress={goToPayment}>Proceed to Payment</UIButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f8fafc" },
  title: { fontSize: 20, fontWeight: "700" },
  sub: { marginTop: 6, color: "#6b7280" },
  total: { marginTop: 10, fontWeight: "800", fontSize: 18 },
});
