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
    <div
      id="services"
      className=" grid grid-flow-row-dense h-screen bg-pinkish  items-center  py-7 px-16 "
    >
      <div className="flex items-center justify-between">
        <div className=" flex flex-col  gap-2">
          <p className="font-bold text-redish offset-4 shadow-2xl shadow-redish  ">
            OUR SERVICES
          </p>
          <p className="text-3xl font-bold w-2/3 ">
            We Provide Better Health Experience and Placement
          </p>
        </div>
        <Link
          href="/services"
          className="bg-redish transition   hover:duration-500 hover:ease-in-out hover:-translate-y-2 shadow-2xl hover: shadow-redish rounded-lg text-white  px-9 py-3"
        >
          {" "}
          All Services{" "}
        </Link>
      </div>
      <div className="grid gap-6 text-greyish grid-cols-4">
        <div className="bg-white h-96 p-3 hover:-translate-y-4 duration-300 hover:text-redish  rounded-lg">
          <div className="  rounded-lg flex gap-3 items-center flex-col text-center  border-greylight hover:border-lightish border-2 px-2 py-10  ">
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
            className="h-12  w-12 mx-auto -mt-6 bg-redish items-center justify-center flex rounded-full text-white outline-lightish outline  outline-4"
          >
            {" "}
            <FontAwesomeIcon icon={faArrowRight} />{" "}
          </Link>
          {/* </div> */}
        </div>
        <div className="bg-white hover:text-redish hover:-translate-y-4 duration-300 h-96 p-3  rounded-lg">
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
        <div className="bg-white hover:text-redish h-96 p-3 hover:-translate-y-4 duration-300  rounded-lg">
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
        <div className="bg-white hover:text-redish h-96 p-3 hover:-translate-y-4 duration-300  rounded-lg">
          <div className="  rounded-lg flex gap-3 items-center flex-col text-center  border-greylight border-2 px-2 py-10  ">
            <div className="h-20 w-20 p-2 flex items-center justify-center bg-lightish rounded-full">
              <FontAwesomeIcon
                icon={faHospitalAlt}
                className="text-redish text-3xl"
              />
            </div>
            <p className="font-bold text-xl">
              {" "}
              Ensure <span className="text-redish">guaranteed</span> placement.
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
