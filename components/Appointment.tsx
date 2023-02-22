import Link from "next/link";
import React from "react";

function Appointment() {
  return (
    <div className="h-80 gap-7 flex justify-center flex-col  items-center px-16   bg-pinkish">
      <div className="text-center">
        <p className="text-redish text-lg">Let&apos;s get Personal</p>
        <p className="text-3xl md:text-5xl font-bold">
          Contact us today to schedule an Appointment
        </p>
      </div>
      <div className="flex flex-col">
        <Link
          href="appointment"
          className="bg-redish animate-bounce shadow-2xl shadow-redish px-8 rounded-lg py-4  text-white text-lg"
        >
          Book Appointment
        </Link>
      </div>
    </div>
  );
}

export default Appointment;
