import { useGiftCard } from "../../context/GiftCardContext";
import { useForm } from "react-hook-form";
import states from "../../data/states.json";

function GiftCardOrderForm({ setOrderForm }) {
  const { purchase, setPurchase } = useGiftCard();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...purchase,
    },
  });

  function onSubmit(data, e) {
    e.preventDefault();
    setPurchase(data);
    setOrderForm(false);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4"
    >
      <div className="flex flex-col justify-start gap-2">
        <h4 className="text-sm text-pink-50">Amount</h4>

        <div className="flex gap-1 items-center">
          <span className="text-pink-50">$</span>
          <input
            type="number"
            {...register("amount", {
              required: "This field is required.",
              min: { value: 25, message: "Minimum of $25." },
              max: { value: 300, message: "Maximum of $300." },
            })}
            className="p-2 rounded-md outline-pink-700 grow flex"
          />
        </div>
        {errors.amount && (
          <span className="text-sm text-pink-200">
            {errors?.amount?.message}
          </span>
        )}
      </div>
      <div className="flex flex-col justify-start gap-2">
        <h4 className="text-sm text-pink-50">First Name</h4>
        <input
          type="text"
          {...register("firstName", { required: true })}
          className="p-2 rounded-md outline-pink-700 grow flex"
        />
        {errors.firstName && (
          <span className="text-sm text-pink-200">This field is required.</span>
        )}
      </div>
      <div className="flex flex-col justify-start gap-2">
        <h4 className="text-sm text-pink-50">Last Name</h4>
        <input
          type="text"
          {...register("lastName", { required: true })}
          className="p-2 rounded-md outline-pink-700 grow flex"
        />
        {errors.lastName && (
          <span className="text-sm text-pink-200">This field is required.</span>
        )}
      </div>
      <div className="flex flex-col justify-start gap-2">
        <h4 className="text-sm text-pink-50">Email</h4>
        <input
          type="text"
          {...register("email", {
            required: "This field is required.",
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Valid email address required.",
            },
          })}
          className="p-2 rounded-md outline-pink-700 grow flex"
        />
        {errors.email && (
          <span className="text-sm text-pink-200">
            {errors?.email?.message}
          </span>
        )}
      </div>
      <div className="flex flex-col justify-start gap-2">
        <h4 className="text-sm text-pink-50">Address</h4>
        <input
          type="text"
          {...register("address", { required: true })}
          className="p-2 rounded-md outline-pink-700 grow flex"
        />
        {errors.address && (
          <span className="text-sm text-pink-200">This field is required.</span>
        )}
      </div>
      <div className="flex flex-col justify-start gap-2">
        <h4 className="text-sm text-pink-50">City</h4>
        <input
          type="text"
          {...register("city", { required: true })}
          className="p-2 rounded-md outline-pink-700 grow flex"
        />
        {errors.city && (
          <span className="text-sm text-pink-200">This field is required.</span>
        )}
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col justify-start gap-2 w-1/3">
          <h4 className="text-sm text-pink-50">State</h4>
          <select
            className="p-2 rounded-md outline-pink-700"
            {...register("state")}
          >
            {states.map((state) => (
              <option key={state.abbreviation} value={state.abbreviation}>
                {state.abbreviation}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col justify-start gap-2 w-1/2">
          <h4 className="text-sm text-pink-50">Zip Code</h4>
          <input
            type="text"
            {...register("zipCode", {
              required: "This field is required",
              pattern: {
                value: /^\d{5}(?:[-\s]\d{4})?$/,
                message: "Valid ZIP Code required.",
              },
            })}
            className="p-2 rounded-md outline-pink-700"
          />
          {errors.zipCode && (
            <span className="text-sm text-pink-200">
              {errors?.zipCode?.message}
            </span>
          )}
        </div>
      </div>
      <button className="bg-pink-50 text-pink-600 px-2 py-3 rounded-md font-semibold uppercase hover:bg-pink-100 hover:text-pink-700 outline-none">
        Order
      </button>
    </form>
  );
}

export default GiftCardOrderForm;
