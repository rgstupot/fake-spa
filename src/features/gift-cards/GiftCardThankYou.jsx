import { IoIosCheckmarkCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function GiftCardThankYou({ setOrderForm, setThankYou }) {
  const navigate = useNavigate();

  function onReturn() {
    setOrderForm(true);
    setThankYou(false);
    navigate("/");
  }

  return (
    <div className="flex flex-col justify-center items-center gap-3 text-pink-50">
      <IoIosCheckmarkCircle className=" h-[5rem] w-[5rem]" />
      <h1 className="text-3xl font-medium">Thank You!</h1>
      <p className="text-xs">
        Your order details will arrive to your email shortly.
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

export default GiftCardThankYou;
