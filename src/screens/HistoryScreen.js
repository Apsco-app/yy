import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import { useBooking } from "../context/BookingContext";

export default function HistoryScreen() {
  const { bookingHistory } = useBooking();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Booking History</Text>
      <FlatList
        data={bookingHistory}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <Card>
            <Text style={{ fontWeight: "700" }}>{item.bus?.name}</Text>
            <Text>Seats: {item.passengers?.map(p => p.seat).join(", ")}</Text>
            <Text style={{ color: "#6b7280" }}>{new Date(item.createdAt).toLocaleString()}</Text>
            <Text style={{ fontWeight: "800" }}>Total: ${Number(item.total).toFixed(2)}</Text>
          </Card>
        )}
        ListEmptyComponent={<Text style={{ marginTop: 12 }}>No bookings yet</Text>}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f8fafc" },
  title: { fontSize: 20, fontWeight: "700", marginBottom: 8 },
});
