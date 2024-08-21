import { useForm } from "react-hook-form";
import { useBooking } from "../../context/BookingContext";

function BookingForm({ setBookingForm }) {
  const { booking, setBooking } = useBooking();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...booking,
    },
  });

  const hours = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];

  const sundayHours = ["1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];

  const sundayCheck =
    watch("date") !== undefined
      ? new Date(watch("date").replace(/-/g, "/").replace(/T.+/, "")).getDay()
      : 1;

  function onSubmit(data, e) {
    e.preventDefault();
    setBooking(data);
    setBookingForm(false);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 justify-center items-center bg-pink-700 rounded-md border-pink-50 border py-3 px-5"
    >
      <h1 className="text-pink-50 text-2xl font-semibold">
        Schedule Appointment
      </h1>
      <div className="flex flex-col justify-start gap-2 w-full md:w-4/5">
        <h4 className="text-sm md:text-base text-pink-50">Name</h4>
        <input
          type="text"
          {...register("name", {
            required: "This field is required.",
          })}
          className="p-2 rounded-md outline-pink-700 text-sm md:text-base"
        />
        {errors.name && (
          <span className="text-sm text-pink-200">{errors?.name?.message}</span>
        )}
      </div>
      <div className="flex flex-col justify-start gap-2 w-full md:w-4/5">
        <h4 className="text-sm md:text-base text-pink-50">Phone</h4>
        <input
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="555-555-5555"
          {...register("phone", {
            required: "This field is required.",
          })}
          className="p-2 rounded-md outline-pink-700 text-sm md:text-base"
        />
        {errors.phone && (
          <span className="text-sm text-pink-200">
            {errors?.phone?.message}
          </span>
        )}
      </div>
      <div className="flex flex-col justify-start gap-2 w-full md:w-4/5">
        <h4 className="text-sm md:text-base text-pink-50">Email</h4>
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
      <div className="flex flex-col justify-start gap-2 w-full md:w-4/5">
        <h4 className="text-sm md:text-base text-pink-50">Service Type</h4>
        <select
          {...register("serviceType", {
            required: "This field is required.",
          })}
          className="p-2 rounded-md outline-pink-700 text-sm md:text-base"
        >
          <option value="" hidden>
            Select Service Type...
          </option>
          <option value="skincare">skincare.</option>
          <option value="massage">massage.</option>
          <option value="nails">nails.</option>
        </select>
        {errors.serviceType && (
          <span className="text-sm text-pink-200">
            {errors?.serviceType?.message}
          </span>
        )}
      </div>
      {watch("serviceType") &&
        (watch("serviceType") === "skincare" ? (
          <div className="flex flex-col justify-start gap-2 w-full md:w-4/5">
            <h4 className="text-sm md:text-base text-pink-50">Service</h4>
            <select
              {...register("service", {
                required: "This field is required.",
              })}
              className="p-2 rounded-md outline-pink-700 text-sm md:text-base"
            >
              <option value="" hidden>
                Select Service...
              </option>
              <option value="facial">facial - $75 | 50 minutes</option>
              <option value="micro dermabrasion">
                micro dermabrasion - $75 | 40 minutes
              </option>
              <option value="face peel">face peel - $110 | 50 minutes</option>
              <option value="microneedling">
                microneedling - $250 | 90 minutes
              </option>
            </select>
            {errors.service && (
              <span className="text-sm text-pink-200">
                {errors?.service?.message}
              </span>
            )}
          </div>
        ) : watch("serviceType") === "massage" ? (
          <div className="flex flex-col justify-start gap-2 w-full md:w-4/5">
            <h4 className="text-sm md:text-base text-pink-50">Service</h4>
            <select
              {...register("service", {
                required: "This field is required.",
              })}
              className="p-2 rounded-md outline-pink-700 text-sm md:text-base"
            >
              <option value="" hidden>
                Select Service...
              </option>
              <option value="massage">massage - $50 | 30 minutes</option>
              <option value="couples massage">
                couples massage - $100 | 30 minutes
              </option>
              <option value="prenatal massage">
                prenatal massage - $80 | 60 minutes
              </option>
              <option value="hot stone massage">
                hot stone massage - $135 | 90 minutes
              </option>
            </select>
            {errors.service && (
              <span className="text-sm text-pink-200">
                {errors?.service?.message}
              </span>
            )}
          </div>
        ) : (
          <div className="flex flex-col justify-start gap-2 w-full md:w-4/5">
            <h4 className="text-sm md:text-base text-pink-50">Service</h4>
            <select
              {...register("service", {
                required: "This field is required.",
              })}
              className="p-2 rounded-md outline-pink-700 text-sm md:text-base"
            >
              <option value="" hidden>
                Select Service...
              </option>
              <option value="manicure">manicure - $40 | 60 minutes</option>
              <option value="pedicure">pedicure - $55 | 60 minutes</option>
              <option value="pedi peel">pedi peel - $90 | 120 minutes</option>
              <option value="shellac gel polish">
                shellac gel polish - $45 | 45 minutes
              </option>
            </select>
            {errors.service && (
              <span className="text-sm text-pink-200">
                {errors?.service?.message}
              </span>
            )}
          </div>
        ))}
      {watch("service") && (
        <div className="flex flex-col justify-start gap-2 w-full md:w-4/5">
          <h4 className="text-sm md:text-base text-pink-50">Date</h4>
          <input
            type="date"
            {...register("date", {
              required: "This field is required.",
            })}
            className="p-2 rounded-md outline-pink-700 text-sm md:text-base"
          ></input>
          {errors.date && (
            <span className="text-sm text-pink-200">
              {errors?.date?.message}
            </span>
          )}
        </div>
      )}
      {watch("date") && (
        <div className="flex flex-col justify-start gap-2 w-full md:w-4/5">
          <h4 className="text-sm md:text-base text-pink-50">Time</h4>
          <div className="grid grid-cols-2 xl:grid-cols-3 text-center gap-x-20 gap-y-2">
            {sundayCheck > 0
              ? hours.map((hour) => (
                  <label
                    key={hour}
                    className="has-[:checked]:bg-pink-500 rounded-full cursor-pointer text-pink-50 hover:bg-pink-500"
                  >
                    <input
                      type="radio"
                      value={hour}
                      {...register("time", {
                        required: "This field is required.",
                      })}
                      className="hidden"
                    />
                    {hour}
                  </label>
                ))
              : sundayHours.map((hour) => (
                  <label
                    key={hour}
                    className="has-[:checked]:bg-pink-500 rounded-full cursor-pointer text-pink-50 hover:bg-pink-500"
                  >
                    <input
                      type="radio"
                      value={hour}
                      {...register("time", {
                        required: "This field is required.",
                      })}
                      className="hidden"
                    />
                    {hour}
                  </label>
                ))}
          </div>
          {errors.time && (
            <span className="text-sm text-pink-200">
              {errors?.time?.message}
            </span>
          )}
        </div>
      )}
      <button className="rounded-md w-full md:w-auto bg-pink-50 text-pink-600 uppercase py-1 px-5 font-semibold hover:bg-pink-100">
        submit
      </button>
    </form>
  );
}

export default BookingForm;
