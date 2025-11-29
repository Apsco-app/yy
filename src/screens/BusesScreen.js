import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import Card from "../components/Card";
import { BUSES } from "../utils/data";
import { useBooking } from "../context/BookingContext";

export default function BusesScreen({ navigation }) {
  const { setSelectedBus } = useBooking();

  function select(bus) {
    setSelectedBus(bus);
    navigation.navigate("SeatSelection");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available buses</Text>
      <FlatList
        data={BUSES}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => select(item)}>
            <Card style={styles.card}>
              <Text style={styles.busTitle}>{item.name}</Text>
              <Text style={styles.price}>${item.price.toFixed(2)}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f8fafc" },
  title: { fontSize: 20, fontWeight: "700", marginBottom: 10 },
  card: { padding: 14, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  busTitle: { fontSize: 16, fontWeight: "600" },
  price: { color: "#059669", fontWeight: "700" },
});
