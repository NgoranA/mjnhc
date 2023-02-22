import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Image from "next/image";
import hero from "../public/hero.png";
import Link from "next/link";
import j from "../public/j.png";

function Carousel() {
  return (
    <section
      // style={{ height: "28.5rem" }}
      className=" bg-pinkish h-[full] md:h-[30rem] flex flex-col md:flex-row gap-16 items-center justify-start md:items-center md:justify-between px-3 md:px-16 "
    >
      <div className="grid grid-rows-4 col-span-full text-center md:text-left md:col-span-2">
        {/* <div className=""> */}
        <p className=" items-center grid font-bold underline underline-offset-8 decoration-2 decoration-redish text-sm md:text-base ">
          MJN Healthcare Consulting. The ultimate
        </p>
        {/* </div> */}
        <p className=" text-blackish font-bold text-2xl md:text-6xl">
          Guide for you as a <span className="text-redish">nurse</span> dreaming
          of a life abroad
        </p>

        <p className="items-center grid">
          Helping healthcare professionals get jobs in one of the finest
          healthcare facilities abroad.
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <Link
            href="services"
            className="bg-redish duration-500 hover:-translate-y-2  border h-11 border-redish rounded-md py-2 px-5 text-white text-md"
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
            (+971) 525 253 890
          </Link>
        </div>
      </div>
      <div className="relative flex md:h-full   items-center justify-center ">
        <Image
          alt="hero image"
          src={j}
          className="absolute h-full w-96 overflow-hidden  md:ml-14"
          // height={600}
          // width={500}
        />
        <div className=" h-96 w-96 bg-gradient-to-b from-redish to-pinkish rounded-full "></div>
      </div>
    </section>
  );
}

export default Carousel;
