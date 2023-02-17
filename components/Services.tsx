import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserDoctor,
  faArrowRight,
  faPersonChalkboard,
  faSchoolCircleCheck,
  faHospitalAlt,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Services = () => {
  return (
    <div className=" grid grid-flow-row-dense h-screen bg-pinkish  items-center  py-6 px-16 ">
      <div className=" flex flex-col gap-2">
        <p className="font-bold underline decoration-2 underline-offset-4 ">
          OUR SERVICES
        </p>
        <p className="text-4xl font-bold w-5/12 ">
          We Provide Better Health Experience and Placement
        </p>
      </div>
      <div className="grid gap-6 text-greyish grid-cols-4">
        <div className="bg-white h-96 p-3  rounded-lg">
          <div className="  rounded-lg flex gap-3 items-center flex-col text-center  border-greylight border-2 px-2 py-10  ">
            <div className="h-20 w-20 p-2 flex items-center justify-center bg-lightish rounded-full">
              <FontAwesomeIcon
                icon={faUserDoctor}
                className="text-redish text-3xl"
              />
            </div>
            <p className="font-bold text-xl">
              {" "}
              Placement of Health Professionals{" "}
            </p>
            <p className="text-lg text-greyish">
              {" "}
              To place healthcare to the U.K, U.S.A, U.A.E, and Germany. This
              includes Doctors, Nurses, Dentists.
            </p>
          </div>
          {/* <div className="w-full"> */}
          <Link
            href="services"
            className="h-12 w-12 mx-auto -mt-6 bg-redish items-center justify-center flex rounded-full text-white outline-lightish outline  outline-4"
          >
            {" "}
            <FontAwesomeIcon icon={faArrowRight} />{" "}
          </Link>
          {/* </div> */}
        </div>
        <div className="bg-white h-96 p-3  rounded-lg">
          <div className="  rounded-lg flex gap-3 items-center flex-col text-center  border-greylight border-2 px-2 py-10  ">
            <div className="h-20 w-20 p-2 flex items-center justify-center bg-lightish rounded-full">
              <FontAwesomeIcon
                icon={faPersonChalkboard}
                className="text-redish text-3xl"
              />
            </div>
            <p className="font-bold text-xl">
              {" "}
              Coaching for potential license exam takers{" "}
            </p>
            <p className="text-lg text-greyish">
              {" "}
              Being there for you as a professional coach and reviewing classes
              to help you take you exams successfully.
            </p>
          </div>
          <Link
            href="services"
            className="h-12 w-12 mx-auto -mt-6 bg-redish items-center justify-center flex rounded-full text-white outline-lightish outline  outline-4"
          >
            {" "}
            <FontAwesomeIcon icon={faArrowRight} />{" "}
          </Link>
        </div>
        <div className="bg-white h-96 p-3  rounded-lg">
          <div className="  rounded-lg flex gap-3 items-center flex-col text-center  border-greylight border-2 px-2 py-10  ">
            <div className="h-20 w-20 p-2 flex items-center justify-center bg-lightish rounded-full">
              <FontAwesomeIcon
                icon={faSchoolCircleCheck}
                className="text-redish text-3xl"
              />
            </div>
            <p className="font-bold text-xl">
              {" "}
              Coaching for potential license exam takers{" "}
            </p>
            <p className="text-lg text-greyish">
              {" "}
              Being there for you as a professional coach and review classes to
              help you take you exams successfully.
            </p>
          </div>
          <Link
            href="services"
            className="h-12 w-12 mx-auto -mt-6 bg-redish items-center justify-center flex rounded-full text-white outline-lightish outline  outline-4"
          >
            {" "}
            <FontAwesomeIcon icon={faArrowRight} />{" "}
          </Link>
        </div>
        <div className="bg-white h-96 p-3  rounded-lg">
          <div className="  rounded-lg flex gap-3 items-center flex-col text-center  border-greylight border-2 px-2 py-10  ">
            <div className="h-20 w-20 p-2 flex items-center justify-center bg-lightish rounded-full">
              <FontAwesomeIcon
                icon={faHospitalAlt}
                className="text-redish text-3xl"
              />
            </div>
            <p className="font-bold text-xl">
              {" "}
              Ensure a <span className="text-redish">guaranteed</span> placement
              of <span className="text-blackish">Professional</span>{" "}
            </p>
            <p className="text-lg text-greyish">
              {" "}
              Being there for you as a professional coach and review classes to
              help you take you exams successfully.
            </p>
          </div>
          <Link
            href="services"
            className="h-12 w-12 mx-auto -mt-6 bg-redish items-center justify-center flex rounded-full text-white outline-lightish outline  outline-4"
          >
            {" "}
            <FontAwesomeIcon icon={faArrowRight} />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
