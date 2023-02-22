import React from "react";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Figures() {
  return (
    <section className="bg-white gap-28 py-20 flex flex-col md:flex-row-reverse px-3  md:px-16 md:items-center md:justify-between h-full w-full">
      <div className="flex flex-col gap-4">
        <p className=" font-bold text-redish capitalize">WHY CHOOSE US</p>
        <p className="font-bold text-2xl md:text-3xl">
          Our Numbers speak for themselves
        </p>
        <p className="text-lg w-full">
          With our expertise and experience we have achieved so much from the
          moment of our existence, we have....
        </p>
        <Link
          href="appointment"
          className=" bg-redish px-8 w-full text-center hover:scale-110 transition duration-500   rounded-md py-3 text-white"
        >
          <FontAwesomeIcon className="mr-2" icon={faCalendarAlt} />
          Book an appointment{" "}
        </Link>
      </div>
      <div className="flex  flex-col sm:flex-row-reverse items-center pl-5  gap-3 sm:gap-12">
        <div className="flex  flex-col  gap-12 -translate-y-8 ">
          <div className="bg-redish h-24 rounded-md  ">
            <div className="bg-pinkish shadow-md shadow-redish  -translate-x-5 -translate-y-5 px-5 py-2 scroll-smooth  rounded-md h-24 w-72">
              <p className="text-lg text-greyish font-bold">10+</p>
              <p className="text-lg text-greyish">Years of Experience</p>
            </div>
          </div>
          <div className="bg-redish h-24 rounded-md   ">
            <div className="bg-pinkish shadow-md shadow-redish  -translate-x-5 -translate-y-5 px-5 py-2 scroll-smooth  rounded-md h-24 w-72">
              <p className="text-lg text-greyish font-bold">200+</p>
              <p className="text-lg text-greyish">Placements Made</p>
            </div>
          </div>
        </div>
        <div className="flex  gap-12 flex-col translate-y-8 ">
          <div className="bg-redish h-24 rounded-md   ">
            <div className="bg-pinkish shadow-md shadow-redish  -translate-x-5 -translate-y-5 px-5 py-2 scroll-smooth  rounded-md h-24 w-72">
              <p className="text-lg text-greyish font-bold">100+</p>
              <p className="text-lg text-greyish">Exams Success Stories</p>
            </div>
          </div>
          <div className="bg-redish h-24 rounded-md   ">
            <div className="bg-pinkish shadow-md shadow-redish  -translate-x-5 -translate-y-5 px-5 py-2 scroll-smooth  rounded-md h-24 w-72">
              <p className="text-lg text-greyish font-bold">15+</p>
              <p className="text-lg text-greyish">Support Hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Figures;
