import Head from "next/head";
import React from "react";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faEnvelopeOpenText,
  faPaperPlane,
  faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons";
import teamPic from "../public/app.jpg";
import AppointmentForm from "../components/AppointmentForm";

function Appointment() {
  return (
    <>
      <Head>
        <title>MJNHealth care</title>
        <meta
          name="MJN healthcare consulting"
          content="healthcare consulting nurses nurse health travel abroad"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Topbar />
      <Navbar />
      <section className="flex flex-col mb-20 items-center">
        <div className="bg-pinkish h-72 justify-center w-full gap-4 items-center flex flex-col">
          <p className="text-3xl font-bold text-redish">Appointment</p>
          <p>
            {" "}
            Home{" "}
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-sm text-redish mx-5"
            />{" "}
            Appointment{" "}
          </p>
        </div>

        <AppointmentForm />
      </section>
      <Footer />
    </>
  );
}

export default Appointment;
