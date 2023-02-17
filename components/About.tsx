import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <div className="h-screen px-16 grid items-center grid-cols-2 ">
      <section className="grid gap-4">
        <p className="font-bold text-redish  ">WHO WE ARE</p>
        <p className="text-3xl font-extrabold">
          Experienced and Open Minded Team of HealthCare Professionals
        </p>
        <p>
          MJN Healthcare Consulting is a team of healthcare professionals who
          help one another in their careers. Our contributors are people with
          nursing and care experience like you. We work with trusted healthcare
          providers connecting talented international nurses with healthcare
          facilities around the world PRECISELY IN U.K, U.S.A, U.A.E, and
          Germany.
        </p>
        <div className="grid grid-cols-2  ">
          <div className="flex gap-3 h-20 justify-start">
            <div className=" grid items-center bg-pinkish rounded-md p-3 justify-center">
              {" "}
              <Image
                alt="mission image"
                src="/mission.png"
                height={80}
                // className="bg"
                width={120}
              />{" "}
            </div>
            <div className="">
              <p className="font-bold">Our Mission</p>
              <p className=" text-sm">
                {" "}
                Our purpose today is the same as it always has been – placing
                nurses on the path to career success{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-3 h-20 justify-start">
            <div className=" grid items-center bg-pinkish rounded-md p-3 justify-center">
              {" "}
              <Image
                alt="mission image"
                src="/advice.png"
                height={80}
                // className="bg"
                width={120}
              />{" "}
            </div>
            <div className="">
              <p className="font-bold">Health Advice</p>
              <p className=" text-sm">
                receive advice, insights and inspiration to help you progress
                your career.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-2 ml-auto gap-4 justify-center">
        <div className="bg-lightish h-80 w-60 translate-y-12  rounded-lg"></div>
        <div className="bg-lightish h-80 w-60 -translate-y-12  rounded-lg"></div>
      </div>
    </div>
  );
};

export default AboutSection;
