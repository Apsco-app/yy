import React, { useMemo } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import Card from "../components/Card";
import UIButton from "../components/UIButton";
import { useBooking } from "../context/BookingContext";

const { width } = Dimensions.get("window");

export default function SeatSelectionScreen({ navigation }) {
  const { selectedBus, selectedSeats, setSelectedSeats, passengerCount } = useBooking();

  const seats = useMemo(() => {
    const count = selectedBus?.seats || 40;
    return Array.from({ length: count }, (_, i) => i + 1);
  }, [selectedBus]);

  function toggleSeat(id) {
    if (selectedSeats.includes(id)) {
      setSelectedSeats(selectedSeats.filter(s => s !== id));
    } else {
      if (selectedSeats.length >= passengerCount) {
        // allow selecting only up to passengerCount
        setSelectedSeats([...selectedSeats.slice(0, passengerCount - 1), id]);
      } else {
        setSelectedSeats([...selectedSeats, id]);
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select seats for {selectedBus?.name}</Text>

      <FlatList
        data={seats}
        numColumns={4}
        keyExtractor={(i) => String(i)}
        renderItem={({ item }) => {
          const isSelected = selectedSeats.includes(item);
          return (
            <TouchableOpacity onPress={() => toggleSeat(item)} style={[styles.seat, isSelected ? styles.seatSelected : null]}>
              <Text style={isSelected ? styles.seatTxtSelected : styles.seatTxt}>{item}</Text>
            </TouchableOpacity>
          );
        }}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      <View style={{ marginTop: 12 }}>
        <UIButton onPress={() => navigation.navigate("Billing")}>Continue to Billing</UIButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f8fafc" },
  title: { fontSize: 18, fontWeight: "700", marginBottom: 10 },
  seat: {
    width: (width - 32) / 4 - 8,
    height: 44,
    margin: 4,
    borderRadius: 8,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  seatSelected: {
    backgroundColor: "#2563eb",
  },
  seatTxt: { color: "#111827", fontWeight: "600" },
  seatTxtSelected: { color: "#fff", fontWeight: "700" },
});
