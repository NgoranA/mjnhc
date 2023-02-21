import Image from "next/image";
import React from "react";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faEnvelopeOpenText,
  faPersonChalkboard,
  faPersonCircleCheck,
  faPhoneSquare,
  faPlaneDeparture,
} from "@fortawesome/free-solid-svg-icons";
import teamPic from "../public/app.jpg";
import servPic from "../public/serv.jpg";
import servPic1 from "../public/serv1.jpg";
import AppointmentForm from "../components/AppointmentForm";

function Services() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <section className="flex flex-col">
        <div className="bg-pinkish h-60 justify-center w-full gap-4 items-center flex flex-col">
          <p className="text-3xl font-bold text-redish">Services</p>
          <p>
            {" "}
            Home{" "}
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-sm text-redish mx-5"
            />{" "}
            Services{" "}
          </p>
        </div>
        <div className=" px-3 md:px-16 flex flex-col md:flex-row gap-12 py-16 md:py-28">
          <div className="flex justify-between w-full md:w-6/12 flex-col">
            <div className="relative h-full">
              <Image
                src={servPic}
                className="rounded-t-xl md:rounded-t-xl"
                // fill
                alt="appointment_pic"
              />
            </div>
            <div className="flex items-start rounded-b-xl h-full md:rounded-b-none md:rounded-br-xl gap-4 px-5 py-3 shadow-md shadow-grey  flex-col">
              {/* <div className="flex gap-3 -mt-5 "> */}
              <FontAwesomeIcon
                icon={faPersonChalkboard}
                className="text-white rounded-lg -mt-12 bg-pinkish p-2 z-40  text-6xl"
              />
              <p className="text-lg font-bold text-greyish">
                Orientation Towards Exams
              </p>
              <p className="text-base">
                We guide you through you preparations for the exams by Reviewing
                all materials, thus provifing you with just what you need to be
                successful.
              </p>

              {/* </div> */}
            </div>
          </div>
          <div className="flex justify-between w-full md:w-6/12 flex-col">
            <div className="relative h-full">
              <Image
                src={servPic}
                className="rounded-t-xl md:rounded-t-xl"
                // fill
                alt="appointment_pic"
              />
            </div>
            <div className="flex items-start rounded-b-xl h-full md:rounded-b-none md:rounded-br-xl gap-4 px-5 py-3 shadow-md shadow-grey  flex-col">
              {/* <div className="flex gap-3 -mt-5 "> */}
              <FontAwesomeIcon
                icon={faPlaneDeparture}
                className="text-white rounded-lg -mt-12 bg-pinkish p-2 z-40  text-6xl"
              />
              <p className="text-lg font-bold text-greyish">Job Placements</p>
              <p className="text-base">
                We guide you through the process of placing you in countries
                with great opportunities. U.K, U.S.A, U.A.E, and Germany where
                you can have live a dream life of the professional you are.
              </p>

              {/* </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-pinkish flex flex-col text-3xl font-bold text-center justify-start pt-8 md:pt-16 h-60">
        <p className="text-redish">Book an appointment right away</p>
        <p className="text-base text-greyish">
          Closer to you than you can imagine!
        </p>
      </section>

      <section className="flex flex-col items-center -mt-24">
        <div className="flex my-20 justify-center">
          <AppointmentForm />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Services;
