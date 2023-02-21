import {
  faEnvelopeOpenText,
  faPaperPlane,
  faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import teamPic from "../public/app.jpg";

function AppointmentForm() {
  return (
    <div className="h-auto w-11/12 md:w-10/12 rounded-xl shadow-lg shadow-pinkish  -mt-20 bg-white flex-col flex md:flex-row  ">
      <form className=" w-full md:w-6/12 flex flex-col gap-4 px-6 py-9">
        <div className="flex flex-col sm:flex-row gap-2 items-center  ">
          <div className="flex w-full sm:w-6/12 flex-col ">
            <label htmlFor="" className="text-greyish">
              First Name
            </label>
            <input
              type="text"
              className="rounded-md    focus:ring-2 focus:ring-pinkish transition-colors delay-300 duration-700  focus:border-none form-input"
            />
          </div>
          <div className="flex w-full sm:w-6/12 flex-col">
            <label htmlFor="" className="text-greyish">
              Last Name
            </label>
            <input
              type="text"
              className="rounded-md    focus:ring-2 focus:ring-pinkish   focus:border-none form-input"
            />
          </div>
        </div>
        <div className="flex w-full flex-col">
          <label htmlFor="" className="text-greyish">
            Email
          </label>
          <input
            type="email"
            className="rounded-md   focus:ring-2 focus:ring-pinkish   focus:border-none form-input"
          />
        </div>
        <div className="flex w-full flex-col">
          <label htmlFor="" className="text-greyish">
            Phone Number
          </label>
          <input
            type="tel"
            className="rounded-md   focus:ring-2 focus:ring-pinkish   focus:border-none form-input"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-greyish">
            Date of Appointment
          </label>
          <input
            type="datetime-local"
            className="rounded-md    focus:ring-2 focus:ring-pinkish   focus:border-none form-input"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-greyish">
            Country of Residence
          </label>
          <input
            type="text"
            className="rounded-md   focus:ring-2 focus:ring-pinkish   focus:border-none form-input"
          />
        </div>
        <button
          type="submit"
          className="bg-redish mt-7 py-3 text-white rounded-lg shadow-sm shadow-pinkish "
        >
          Submit <FontAwesomeIcon icon={faPaperPlane} className="px-3" />
        </button>
      </form>
      <div className="flex justify-between w-full md:w-6/12 flex-col">
        <div className="relative h-full">
          <Image
            src={teamPic}
            className=" md:rounded-tr-xl"
            // fill
            alt="appointment_pic"
          />
        </div>
        <div className="flex rounded-b-xl h-full md:rounded-b-none md:rounded-br-xl gap-4 px-5 py-3 bg-pinkish  flex-col">
          <div className="flex gap-3  ">
            <FontAwesomeIcon
              icon={faPhoneSquare}
              className="text-redish text-6xl"
            />
            <div className="flex flex-col">
              <p>Phone Number</p>
              <p className="text-base md:text-xl"> (+971) 525 253 890</p>
            </div>
          </div>
          <div className="flex gap-3  ">
            <FontAwesomeIcon
              icon={faEnvelopeOpenText}
              className="text-redish text-6xl"
            />
            <div className="flex flex-col">
              <p>Email Us</p>
              <p className="text-base md:text-lg">
                {" "}
                info@mjnhealthcare-consulting.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppointmentForm;
