import { createContext, useContext, useState } from "react";

const BookingContext = createContext();

function BookingProvider({ children }) {
  const initialBookingState = {
    name: "",
    phone: "",
    email: "",
    servceType: "",
    service: "",
    date: "",
    time: "",
  };

  const [booking, setBooking] = useState(initialBookingState);

  return (
    <BookingContext.Provider
      value={{
        booking,
        setBooking,
        initialBookingState,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

function useBooking() {
  const context = useContext(BookingContext);
  if (context === undefined)
    throw new Error("BookingContext was used outside the BookingProvider");
  return context;
}

export { BookingProvider, useBooking };
