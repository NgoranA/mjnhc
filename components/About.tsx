import {
  faEye,
  faEyeDropper,
  faEyeLowVision,
  faEyeSlash,
  faPersonChalkboard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import ser from "../public/imj2.jpg";
import ser1 from "../public/ser3.jpg";

const AboutSection = () => {
  return (
    <div className=" h-full py-16 md:h-screen px-3 text-left md:text-left  flex flex-col md:flex-row gap-16  md:gap-4 md:px-16 md:py-0  md:items-center md:justify-between ">
      <div className="flex flex-col w-full md:w-7/12 gap-9">
        <p className="font-bold text-redish  ">WHO WE ARE</p>
        <p className="text-3xl font-extrabold">
          Experienced and Open Minded Team of HealthCare Professionals
        </p>
        <p className="text-justify">
          MJN Healthcare Consulting is a team of healthcare professionals who
          help one another in their careers. Our contributors are people with
          nursing and care experience like you. We work with trusted healthcare
          providers connecting talented international nurses with healthcare
          facilities around the world PRECISELY IN U.K, U.S.A, U.A.E, and
          Germany.
        </p>
        <div className="flex flex-col md:flex-row gap-5  justify-between  ">
          <div className="flex gap-3 h-20 justify-start">
            <FontAwesomeIcon
              icon={faEye}
              className="p-5 text-redish text-5xl rounded-lg bg-pinkish"
            />
            <div className="text-left">
              <p className="font-bold">Our Mission</p>
              <p className="text-left text-sm">
                {" "}
                Our purpose today is the same as it always has been – placing
                nurses on the path to career success{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-3 h-20 justify-start">
            <FontAwesomeIcon
              icon={faPersonChalkboard}
              className="p-4 text-redish text-5xl rounded-lg bg-pinkish"
            />
            <div className="text-left">
              <p className="font-bold">Health Advice</p>
              <p className="text-left text-sm">
                receive advice, insights and inspiration to help you progress
                your career.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full md:w-5/12 md:ml-auto gap-4 justify-center">
        <div className="bg-lightish h-56 md:h-96 w-6/12 translate-y-12 relative   rounded-full">
          {" "}
          <Image
            src={ser}
            className="h-full rounded-full"
            alt="about_picture"
          />{" "}
        </div>
        <div className="bg-lightish h-56 md:h-96 w-6/12 -translate-y-12 relative   rounded-full">
          {" "}
          <Image
            src={ser1}
            className="h-full rounded-full"
            alt="about_picture"
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
