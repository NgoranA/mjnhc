import React from "react";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faEye,
  faUsersViewfinder,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import usPic from "../public/us.jpg";
import j from "../public/john.png";
import Link from "next/link";

function About(): JSX.Element {
  return (
    <div>
      <Topbar />
      <Navbar />
      <section>
        <div className="bg-pinkish h-60 justify-center w-full gap-4 items-center flex flex-col">
          <p className="text-3xl font-bold text-redish">About Us</p>
          <p>
            {" "}
            Home{" "}
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-sm text-redish mx-5"
            />{" "}
            About Us{" "}
          </p>
        </div>
      </section>
      <section className="flex py-8 my-6 flex-col px-5 md:px-16 gap-3 ">
        <p className="text-base text-redish ">
          About MJN Healthcare Consulting
        </p>
        <h1 className=" text-2xl  md:text-4xl font-bold text-greyish">
          Our Team Is Dedicated To Provide The Smoothest Experience And
          Transition To You And Your Loved Ones{" "}
        </h1>
        <div className="flex flex-col md:flex-row gap-16">
          <div className="relative h-full rounded-lg w-full md:w-6/12 ">
            <Image src={usPic} alt="us-pic" className="rounded-lg" />
          </div>
          <div className="flex flex-col w-full gap-2 md:w-6/12 ">
            <p>
              MJN Healthcare Consulting is a team of healthcare professionals
              who help one another in their careers. Our contributors are people
              with nursing and care experience like you. We work with trusted
              healthcare providers connecting talented international nurses with
              healthcare facilities around the world PRECISELY IN U.K, U.S.A,
              U.A.E, and Germany.
            </p>
            <div className="flex flex-col md:flex-row  gap-16">
              <div className="flex  flex-col items-start gap-3">
                <FontAwesomeIcon
                  icon={faEye}
                  className="text-redish  text-4xl"
                />
                <p className="text-3xl font-bold">Our Mission</p>
                <p className="text-greyish text-base ">
                  Our Mission today is the same as it always has been – placing
                  nurses on the path to career success
                </p>
              </div>
              <div className="flex items-start flex-col gap-3">
                <FontAwesomeIcon
                  icon={faUsersViewfinder}
                  className="text-redish text-4xl"
                />
                <p className="text-3xl font-bold">Our Vision</p>
                <p className="text-greyish text-base ">
                  Our Vision today is to impact the lives of health personnels
                  and showing them worthwile opportunities
                </p>
              </div>
            </div>
            <hr className="border-t-redish" />
            <div className="flex gap-5 mt-2 flex-col justify-between md:flex-row ">
              <div className="flex items-center gap-3">
                <Image
                  src={j}
                  alt="ceo-pic"
                  // height={70}
                  // width={70}
                  className="rounded-full w-20 h-20"
                />
                <div className="flex gap-2 flex-col">
                  <p className="text-md font-bold">Mbout John Nyah, RN, BSN</p>
                  <p className="font-greyish">CEO and Founder</p>
                </div>
              </div>
              <div className="flex items-center">
                <Link
                  href="services"
                  className="px-5 animate-bounce w-full hover:bg-pinkish py-3 rounded-lg text-center text-white bg-redish"
                >
                  Our Services{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
