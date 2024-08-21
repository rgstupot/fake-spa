import { FaFacebook, FaInstagram, FaXTwitter, FaTiktok } from "react-icons/fa6";

function Footer() {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-pink-50 text-xs sm:text-sm md:text-base font-medium py-1 px-2 hover:bg-pink-700 hover:text-pink-100 cursor-pointer rounded-full">
        555 Spa Lane, Charleston WV
      </h2>
      <div className="flex gap-1">
        <FaFacebook className="text-pink-50 hover:text-pink-100 h-[2rem] w-[2rem] cursor-pointer rounded-md p-1 hover:bg-pink-700" />
        <FaInstagram className="text-pink-50 hover:text-pink-100 h-[2rem] w-[2rem] cursor-pointer rounded-md p-1 hover:bg-pink-700" />
        <FaXTwitter className="text-pink-50 hover:text-pink-100 h-[2rem] w-[2rem] cursor-pointer rounded-md p-1 hover:bg-pink-700" />
        <FaTiktok className="text-pink-50 hover:text-pink-100 h-[2rem] w-[2rem] cursor-pointer rounded-md p-1 hover:bg-pink-700" />
      </div>
    </div>
  );
}

export default Footer;
