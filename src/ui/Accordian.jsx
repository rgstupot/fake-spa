import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";

function Accordian({ children, label, icon }) {
  const [accordianOpen, setAccordianOpen] = useState(false);
  return (
    <div
      className={`bg-pink-700 text-pink-50 rounded-md border border-pink-50 p-3 shadow-sm ${
        accordianOpen && "border-pink-300"
      }`}
    >
      <button
        className="flex w-full items-center justify-between mb-2"
        onClick={() => setAccordianOpen(!accordianOpen)}
      >
        <span className="text-semibold text-2xl flex gap-5 items-center">
          {label} {icon}
        </span>
        {accordianOpen ? (
          <HiChevronUp className="text-pink-50" />
        ) : (
          <HiChevronDown className="text-pink-50" />
        )}
      </button>
      <div
        className={`grid overflow-hidden text-sm transition-all duration-300 ease-in-out ${
          accordianOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}

export default Accordian;
