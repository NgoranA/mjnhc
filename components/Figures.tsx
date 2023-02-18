import React from "react";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Figures() {
  return (
    <section className="bg-white py-9 flex px-16 items-center justify-between h-96 w-full">
      <div className="flex flex-col gap-4">
        <p className=" font-bold text-redish capitalize">WHY CHOOSE US</p>
        <p className="font-bold text-3xl">Our Numbers speak for themselves</p>
        <p className="text-lg w-96">
          With our expertise and experience we have achieved so much from the
          moment of our existence, we have....
        </p>
        <Link
          href="#appointment"
          className=" bg-redish px-8 w-60    rounded-md py-3 text-white"
        >
          <FontAwesomeIcon className="mr-2" icon={faCalendarAlt} />
          Book an appointment{" "}
        </Link>
      </div>
      <div className="flex   items-center gap-12">
        <div className="flex  flex-col gap-12 -translate-y-8 ">
          <div className="bg-redish h-20 rounded-md  ">
            <div className="bg-pinkish shadow-md shadow-redish  -translate-x-5 -translate-y-5 px-5 py-2 scroll-smooth  rounded-md h-20 w-56">
              <p className="text-lg text-greyish font-bold">10+</p>
              <p className="text-lg text-greyish">Years of Experience</p>
            </div>
          </div>
          <div className="bg-redish h-20 rounded-md   ">
            <div className="bg-pinkish shadow-md shadow-redish  -translate-x-5 -translate-y-5 px-5 py-2 scroll-smooth  rounded-md h-20 w-56">
              <p className="text-lg text-greyish font-bold">200+</p>
              <p className="text-lg text-greyish">Placements Made</p>
            </div>
          </div>
        </div>
        <div className="flex  gap-12 flex-col translate-y-8 ">
          <div className="bg-redish h-20 rounded-md   ">
            <div className="bg-pinkish shadow-md shadow-redish  -translate-x-5 -translate-y-5 px-5 py-2 scroll-smooth  rounded-md h-20 w-56">
              <p className="text-lg text-greyish font-bold">100+</p>
              <p className="text-lg text-greyish">Exams Success Stories</p>
            </div>
          </div>
          <div className="bg-redish h-20 rounded-md   ">
            <div className="bg-pinkish shadow-md shadow-redish  -translate-x-5 -translate-y-5 px-5 py-2 scroll-smooth  rounded-md h-20 w-56">
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
