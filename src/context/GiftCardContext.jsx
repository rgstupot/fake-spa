import { createContext, useContext, useState } from "react";

const GiftCardContext = createContext();

function GiftCardProvider({ children }) {
  const initialPurchaseState = {
    amount: 0,
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "AL",
    zipCode: "",
  };

  const [purchase, setPurchase] = useState(initialPurchaseState);

  return (
    <GiftCardContext.Provider
      value={{
        purchase,
        setPurchase,
        initialPurchaseState,
      }}
    >
      {children}
    </GiftCardContext.Provider>
  );
}

function useGiftCard() {
  const context = useContext(GiftCardContext);
  if (context === undefined)
    throw new Error("GiftCardContext was used outside the GiftCardProvider");
  return context;
}

export { GiftCardProvider, useGiftCard };
