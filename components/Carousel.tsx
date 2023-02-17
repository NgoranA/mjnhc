import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Image from "next/image";
import Link from "next/link";

function Carousel() {
  return (
    <div
      style={{ height: "28.5rem" }}
      className=" bg-pinkish grid grid-cols-3 items-center justify-between px-16 "
    >
      <div className="grid grid-rows-4 col-span-2">
        {/* <div className=""> */}
        <p className=" items-center grid font-bold underline underline-offset-8 decoration-2 decoration-redish ">
          MJN Healthcare Consulting. The ultimate
        </p>
        {/* </div> */}
        <p className=" text-blackish font-bold text-6xl">
          Guide for you as a <span className="text-redish">nurse</span> dreaming
          of a life abroad
        </p>

        <p className="items-center grid">
          Helping healthcare professionals get jobs in one of the finest
          healthcare facilities abroad.
        </p>
        <div className="flex gap-4">
          <Link
            href=""
            className="bg-redish duration-500 hover:-translate-y-2  border h-11 border-redish rounded-md py-2 px-4 text-white text-sm"
          >
            {" "}
            Learn More
          </Link>
          <Link
            href=""
            className=" flex px-5 duration-500 items-center hover:-translate-y-2 shadow-md shadow-redish h-11 border border-redish rounded-md  text-redish"
          >
            <FontAwesomeIcon
              className="text-2xl mr-2"
              icon={faWhatsapp as IconProp}
            />
            +237 558 996 887
          </Link>
        </div>
      </div>
      <div className="grid items-center justify-center ">
        <Image
          alt="hero image"
          src="/hero.png"
          className="absolute  ml-14"
          height={600}
          width={306}
        />
        <div className="h-96 w-96 bg-gradient-to-b from-redish to-pinkish rounded-full "></div>
      </div>
    </div>
  );
}

export default Carousel;
