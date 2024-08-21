import { useGiftCard } from "../../context/GiftCardContext";

function GiftCardOrderConfirmation({ setOrderForm, setThankYou }) {
  const { initialPurchaseState, purchase, setPurchase } = useGiftCard();

  let purchaseAmount = Number(purchase.amount);
  let taxAmount = Number(purchase.amount) * 0.07;

  function finalizeOrder() {
    setPurchase(initialPurchaseState);
    setThankYou(true);
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-center items-center">
        <h1 className="text-pink-50 text-2xl font-medium">
          Order Confirmation
        </h1>
      </div>
      <div className="flex flex-col justify-start text-pink-50">
        <h2>{purchase.email}</h2>
      </div>
      <div className="flex flex-col justify-start text-pink-50">
        <h2>
          {purchase.firstName} {purchase.lastName}
        </h2>
        <h2>{purchase.address}</h2>
        <h2>
          {purchase.city}, {purchase.state} {purchase.zipCode}
        </h2>
      </div>
      <div className="flex flex-col">
        <div className="text-pink-50 flex justify-between">
          <h2>Gift Card</h2>
          <h2>
            {purchaseAmount.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 2,
            })}
          </h2>
        </div>
        <div className="text-pink-50 flex justify-between">
          <h2>Tax</h2>
          <h2>
            {taxAmount.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 2,
            })}
          </h2>
        </div>
        <hr />
        <div className="text-pink-50 flex justify-between font-medium">
          <h2>Total</h2>
          <h2>
            {(purchaseAmount + taxAmount).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 2,
            })}
          </h2>
        </div>
      </div>
      <div className="flex justify-around items-center">
        <button
          onClick={() => setOrderForm(true)}
          className="bg-pink-50 text-pink-600 px-2 py-3 rounded-md font-semibold uppercase hover:bg-pink-100 hover:text-pink-700 outline-none text-sm"
        >
          go back
        </button>
        <button
          onClick={finalizeOrder}
          className="bg-pink-50 text-pink-600 px-2 py-3 rounded-md font-semibold uppercase hover:bg-pink-100 hover:text-pink-700 outline-none text-sm"
        >
          finalize order
        </button>
      </div>
    </div>
  );
}

export default GiftCardOrderConfirmation;
