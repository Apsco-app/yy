import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import Card from "../components/Card";
import { REGIONS } from "../utils/data";
import { useBooking } from "../context/BookingContext";

export default function RegionScreen({ navigation }) {
  const { setSelectedRegion, user } = useBooking();

  function select(region) {
    setSelectedRegion(region);
    navigation.navigate("District");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Hello, {user?.name || "Guest"}</Text>
      <Text style={styles.title}>Choose a region</Text>

      <FlatList
        data={REGIONS}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => select(item)} activeOpacity={0.8}>
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
  welcome: { color: "#374151", fontSize: 14, marginBottom: 6 },
  title: { fontSize: 20, fontWeight: "700", marginBottom: 12 },
  card: { padding: 16 },
  cardTitle: { fontSize: 16, fontWeight: "600" },
});
