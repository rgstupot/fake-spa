import { HiOutlineCalendarDays } from "react-icons/hi2";

import { useNavigate } from "react-router-dom";

function BookingThankYou({ setBookingForm, setBookingThankYou }) {
  const navigate = useNavigate();

  function onReturn() {
    setBookingForm(true);
    setBookingThankYou(false);
    navigate("/");
  }

  return (
    <div className="flex flex-col justify-center items-center gap-3 text-pink-50">
      <HiOutlineCalendarDays className=" h-[5rem] w-[5rem]" />
      <h1 className="text-3xl font-medium">Booked!</h1>
      <p className="text-xs">
        Your booking details will arrive to your email shortly.
      </p>
      <button
        onClick={onReturn}
        className="bg-pink-50 text-pink-600 px-2 py-3 rounded-md font-semibold uppercase hover:bg-pink-100 hover:text-pink-700 outline-none"
      >
        return home
      </button>
    </div>
  );
}

export default BookingThankYou;
