import { useState } from "react";
import BookingForm from "../features/booking/BookingForm";
import BookingConfirmation from "../features/booking/BookingConfirmation";
import BookingThankYou from "../features/booking/BookingThankYou";

function Booking() {
  const [bookingForm, setBookingForm] = useState(true);
  const [bookingThankYou, setBookingThankYou] = useState(false);

  return (
    <div className="flex flex-col gap-5 md:grid md:grid-cols-2">
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-start text-5xl md:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-extrabold text-pink-50">
          <h1>book.</h1>
          <h1>your.</h1>
          <h1>relaxation.</h1>
        </div>
      </div>
      {bookingForm ? (
        <BookingForm setBookingForm={setBookingForm} />
      ) : bookingThankYou ? (
        <BookingThankYou
          setBookingForm={setBookingForm}
          setBookingThankYou={setBookingThankYou}
        />
      ) : (
        <BookingConfirmation
          setBookingForm={setBookingForm}
          setBookingThankYou={setBookingThankYou}
        />
      )}
    </div>
  );
}

export default Booking;
