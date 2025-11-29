import React, { createContext, useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

const BookingContext = createContext();

export function BookingProvider({ children }) {
  const [user, setUser] = useState(null);
  const [currentScreen, setCurrentScreen] = useState("region");
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedBus, setSelectedBus] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [passengerCount, setPassengerCount] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isPremium, setIsPremium] = useState(false);
  const [currentBooking, setCurrentBooking] = useState(null);
  const [bookingHistory, setBookingHistory] = useState([]);

  function completeAuth(name, phone) {
    setUser({ name, phone });
    setCurrentScreen("region");
  }

  function resetBooking() {
    setSelectedRegion(null);
    setSelectedDistrict(null);
    setSelectedBus(null);
    setSelectedSeats([]);
    setPassengerCount(1);
    setPaymentMethod("");
    setIsPremium(false);
    setCurrentBooking(null);
  }

  function confirmBooking(details) {
    const booking = {
      id: uuidv4(),
      createdAt: new Date().toISOString(),
      ...details,
    };
    setBookingHistory(prev => [booking, ...prev]);
    setCurrentBooking(booking);
    return booking;
  }

  return (
    <BookingContext.Provider
      value={{
        user,
        completeAuth,
        currentScreen,
        setCurrentScreen,
        selectedRegion,
        setSelectedRegion,
        selectedDistrict,
        setSelectedDistrict,
        selectedBus,
        setSelectedBus,
        selectedSeats,
        setSelectedSeats,
        passengerCount,
        setPassengerCount,
        paymentMethod,
        setPaymentMethod,
        isPremium,
        setIsPremium,
        currentBooking,
        setCurrentBooking,
        bookingHistory,
        setBookingHistory,
        resetBooking,
        confirmBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  return useContext(BookingContext);
}
