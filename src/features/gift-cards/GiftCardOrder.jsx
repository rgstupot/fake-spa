import { useState } from "react";
import GiftCardOrderConfirmation from "./GiftCardOrderConfirmation";
import GiftCardOrderForm from "./GiftCardOrderForm";
import GiftCardThankYou from "./GiftCardThankYou";

function GiftCardOrder() {
  const [orderForm, setOrderForm] = useState(true);
  const [thankYou, setThankYou] = useState(false);

  return (
    <div className="flex flex-col md:flex-row gap-5 md:gap-[10rem] justify-center items-center">
      <div className="bg-pink-50 border border-pink-50 rounded-md h-[8rem] sm:h-[10rem] md:h-[12rem] lg:h-[14rem] w-[12rem] sm:w-[16rem] md:w-[20rem] lg:w-[24rem] shadow-md flex flex-col items-center justify-center">
        <img src="fakeSpa_pink.webp" alt="fakeSpa Gift Card" />
        <h1 className="text-xs text-pink-600">Gift Card</h1>
      </div>
      {orderForm ? (
        <GiftCardOrderForm setOrderForm={setOrderForm} />
      ) : thankYou ? (
        <GiftCardThankYou
          setOrderForm={setOrderForm}
          setThankYou={setThankYou}
        />
      ) : (
        <GiftCardOrderConfirmation
          setOrderForm={setOrderForm}
          setThankYou={setThankYou}
        />
      )}
    </div>
  );
}

export default GiftCardOrder;
