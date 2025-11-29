import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BookingProvider } from "./src/context/BookingContext";
import RegionScreen from "./src/screens/RegionScreen";
import AuthScreen from "./src/screens/AuthScreen";
import DistrictScreen from "./src/screens/DistrictScreen";
import BusesScreen from "./src/screens/BusesScreen";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsScreen from "./src/screens/ResultsScreen";
import SeatSelectionScreen from "./src/screens/SeatSelectionScreen";
import BillingScreen from "./src/screens/BillingScreen";
import PaymentScreen from "./src/screens/PaymentScreen";
import ReceiptScreen from "./src/screens/ReceiptScreen";
import HistoryScreen from "./src/screens/HistoryScreen";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <BookingProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator initialRouteName="Auth" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Auth" component={AuthScreen} />
          <Stack.Screen name="Region" component={RegionScreen} />
          <Stack.Screen name="District" component={DistrictScreen} />
          <Stack.Screen name="Buses" component={BusesScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="Results" component={ResultsScreen} />
          <Stack.Screen name="SeatSelection" component={SeatSelectionScreen} />
          <Stack.Screen name="Billing" component={BillingScreen} />
          <Stack.Screen name="Payment" component={PaymentScreen} />
          <Stack.Screen name="Receipt" component={ReceiptScreen} />
          <Stack.Screen name="History" component={HistoryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </BookingProvider>
  );
}
