// Third-party libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

// UI libraries
import AppLayout from "./ui/AppLayout";
import Main from "./pages/Main";
import About from "./pages/About";
import GiftCardOrder from "./features/gift-cards/GiftCardOrder";
import { GiftCardProvider } from "./context/GiftCardContext";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import { BookingProvider } from "./context/BookingContext";

function App() {
  return (
    <BookingProvider>
      <GiftCardProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Main />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="booking" element={<Booking />} />
              <Route path="order-gift-card" element={<GiftCardOrder />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GiftCardProvider>
    </BookingProvider>
  );
}

export default App;
