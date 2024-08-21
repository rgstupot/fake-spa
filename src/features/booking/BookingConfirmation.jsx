import { useBooking } from "../../context/BookingContext";
import { format } from "date-fns";

function BookingConfirmation({ setBookingForm, setBookingThankYou }) {
  const { initialBookingState, booking, setBooking } = useBooking();

  function finalizeBooking() {
    setBooking(initialBookingState);
    setBookingThankYou(true);
  }

  return (
    <div className="flex flex-col gap-3 justify-center">
      <div className="flex justify-center items-center">
        <h1 className="text-pink-50 text-2xl font-medium">
          Booking Confirmation
        </h1>
      </div>
      <div className="flex flex-col justify-start text-pink-50">
        <h2>{booking.name}</h2>
        <h2>{booking.email}</h2>
        <h2>{booking.phone}</h2>
      </div>
      <div className="flex flex-col justify-start text-pink-50">
        <h2>{booking.service}</h2>
        <h2>
          {format(
            new Date(booking.date.replace(/-/g, "/").replace(/T.+/, "")),
            "EEEE, MMMM dd, yyyy"
          )}
        </h2>
        <h2>{booking.time}</h2>
      </div>
      <div className="flex flex-col justify-start text-pink-50">
        <h2>Confirmation will be sent to your email listed above.</h2>
      </div>

      <div className="flex justify-around items-center">
        <button
          onClick={() => setBookingForm(true)}
          className="bg-pink-50 text-pink-600 px-2 py-3 rounded-md font-semibold uppercase hover:bg-pink-100 hover:text-pink-700 outline-none text-sm"
        >
          go back
        </button>
        <button
          onClick={finalizeBooking}
          className="bg-pink-50 text-pink-600 px-2 py-3 rounded-md font-semibold uppercase hover:bg-pink-100 hover:text-pink-700 outline-none text-sm"
        >
          finalize booking
        </button>
      </div>
    </div>
  );
}

export default BookingConfirmation;
