import { Link, useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <h1 className="text-pink-50 font-extrabold text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] text-center">
        find your relaxation.
      </h1>
      <div className="flex flex-col sm:flex-row justify-around gap-5">
        <button
          onClick={() => navigate("/booking")}
          className="text-sm sm:text-base md:text-lg lg-text-xl uppercase text-pink-600 bg-pink-50 rounded-full py-1 px-2 sm:py-2 sm:px-3 md:py-3 md:px-4 lg:py-4 lg:px-5 font-medium hover:font-semibold hover:bg-pink-100 hover:text-pink-700 outline-none"
        >
          book appointment
        </button>
        <button
          onClick={() => navigate("/services")}
          className="text-sm sm:text-base md:text-lg lg-text-xl uppercase text-pink-600 bg-pink-50 rounded-full py-1 px-2 sm:py-2 sm:px-3 md:py-3 md:px-4 lg:py-4 lg:px-5 font-medium hover:font-semibold hover:bg-pink-100 hover:text-pink-700 outline-none"
        >
          browse services
        </button>
      </div>
      <div className="flex flex-col gap-2 text-pink-50 text-pretty sm:w-4/5 md:w-3/4 lg:w-2/3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          quidem nobis voluptatem dolores incidunt, dicta facilis et debitis
          nemo dolorum neque, qui delectus illo fuga possimus. Atque eaque
          placeat quo! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aliquid laboriosam quia eos eum alias molestiae rerum perspiciatis.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-3 text-pink-50 text-sm sm:text-base md:text-lg">
        <h2 className="font-semibold">Sunday</h2>
        <h2 className="text-center">1:00 PM</h2>
        <h2 className="text-center">-</h2>
        <h2 className="text-center">6:00 PM</h2>
        <h2 className="font-semibold">Monday</h2>
        <h2 className="text-center">9:00 AM</h2>
        <h2 className="text-center">-</h2>
        <h2 className="text-center">6:00 PM</h2>
        <h2 className="font-semibold">Tuesday</h2>
        <h2 className="text-center">9:00 AM</h2>
        <h2 className="text-center">-</h2>
        <h2 className="text-center">6:00 PM</h2>
        <h2 className="font-semibold">Wednesday</h2>
        <h2 className="text-center">9:00 AM</h2>
        <h2 className="text-center">-</h2>
        <h2 className="text-center">6:00 PM</h2>
        <h2 className="font-semibold">Thursday</h2>
        <h2 className="text-center">9:00 AM</h2>
        <h2 className="text-center">-</h2>
        <h2 className="text-center">6:00 PM</h2>
        <h2 className="font-semibold">Friday</h2>
        <h2 className="text-center">9:00 AM</h2>
        <h2 className="text-center">-</h2>
        <h2 className="text-center">6:00 PM</h2>
        <h2 className="font-semibold">Saturday</h2>
        <h2 className="text-center">9:00 AM</h2>
        <h2 className="text-center">-</h2>
        <h2 className="text-center">8:00 PM</h2>
      </div>
      <div className="flex grow shrink rounded-full py-1 px-[10rem] sm:px-[15rem] md:px-[20rem] lg:px-[25rem] bg-pink-50"></div>
      <Link
        to="/order-gift-card"
        className="rounded-md hover:bg-pink-700 py-6 px-10"
      >
        <div className="flex flex-col gap-5 justify-center items-center">
          <div className="bg-pink-50 border border-pink-50 rounded-md h-[8rem] sm:h-[10rem] md:h-[12rem] lg:h-[14rem] w-[12rem] sm:w-[16rem] md:w-[20rem] lg:w-[24rem] shadow-md flex flex-col items-center justify-center">
            <img src="fakeSpa_pink.webp" alt="fakeSpa Gift Card" />
            <h1 className="text-xs text-pink-600">Gift Card</h1>
          </div>
          <h1 className="text-pink-50 sm:text-lg md:text-xl lg:text-2xl">
            Get your fakeSpa gift cards today!
          </h1>
        </div>
      </Link>
    </div>
  );
}

export default Main;
