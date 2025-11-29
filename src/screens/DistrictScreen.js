import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import Card from "../components/Card";
import { DISTRICTS } from "../utils/data";
import { useBooking } from "../context/BookingContext";

export default function DistrictScreen({ navigation }) {
  const { selectedRegion, setSelectedDistrict } = useBooking();
  const list = DISTRICTS[selectedRegion?.id] || [];

  function select(d) {
    setSelectedDistrict(d);
    navigation.navigate("Buses");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Districts in {selectedRegion?.name}</Text>
      <FlatList
        data={list}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => select(item)}>
            <Card style={styles.card}>
              <Text style={styles.cardTitle}>{item.name}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f8fafc" },
  title: { fontSize: 20, fontWeight: "700", marginBottom: 12 },
  card: { padding: 12 },
  cardTitle: { fontSize: 16 },
});
