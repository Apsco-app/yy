import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import UIButton from "../components/UIButton";
import { useBooking } from "../context/BookingContext";

export default function ReceiptScreen({ route, navigation }) {
  const { bookingHistory } = useBooking();
  const bookingId = route.params?.bookingId;
  const booking = bookingHistory.find(b => b.id === bookingId);

  if (!booking) {
    return (
      <View style={{ flex: 1, padding: 16 }}>
        <Text>No receipt found.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Receipt</Text>
      <Text style={styles.sub}>Booking ID: {booking.id}</Text>
      <Text style={{ marginTop: 8 }}>Bus: {booking.bus?.name}</Text>
      <Text>Seats: {booking.passengers?.map(p => p.seat).join(", ")}</Text>
      <Text style={styles.total}>Paid: ${booking.total?.toFixed(2)}</Text>

      <View style={{ marginTop: 16 }}>
        <UIButton onPress={() => navigation.navigate("Region")}>Book Another</UIButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f8fafc" },
  title: { fontSize: 20, fontWeight: "700" },
  sub: { color: "#6b7280" },
  total: { marginTop: 12, fontWeight: "800" },
});
