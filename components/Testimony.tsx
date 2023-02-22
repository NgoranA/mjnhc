import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import tita from "../public/test2.jpg";
import imj from "../public/imj.jpg";
import sar from "../public/sar.jpg";

const Testimony = () => {
  return (
    <section className="h-full px-3 md:px-16 py-12 flex gap-12 flex-col">
      <div className="flex flex-col md:flex-row  justify-between">
        <div className=" text-center sm:text-left">
          <p className="text-base font-bold text-redish ">FEEDBACK</p>
          <p className="text-3xl font-bold  ">What our clients say about us.</p>
        </div>
        <p className="text-lg text-greyish w-full md:w-1/3">
          {" "}
          These kind words mean a lot to us and so we look forward to shaping
          more careers.{" "}
        </p>
      </div>
      <div className="flex items-center flex-col md:flex-row gap-16 justify-center">
        <div className="flex shadow-md shadow-lightish px-5 py-3 rounded-md w-full md:w-4/12 gap-3 flex-col ">
          {/* <div> */}
          <center>
            <Image
              src={sar}
              // height={100}
              // width={100}
              className="rounded-full h-20 w-20"
              alt="testimony_image"
            />
          </center>
          {/* </div> */}
          <div className="text-left">
            <FontAwesomeIcon
              icon={faQuoteLeft}
              className="text-redish text-5xl text-left"
            />
          </div>
          <p>
            MJN health care consulting has been the best link to me to the
            contribution of my successful documentation and the assurance of
            arriving at my desired destination. Their patience, teamwork skills
            and good communication is the best.
          </p>
          <div>
            <p className="font-bold text-xl text-blackish">
              SARAH DANSO-{" "}
              <span className="text-greyish italic text-base">
                DHA staff nurse
              </span>{" "}
            </p>
            <p className="text-greyish ">Cameroonian</p>
          </div>
        </div>
        <div className="flex shadow-md shadow-lightish px-5 py-3 rounded-md w-full md:w-4/12 gap-3 flex-col ">
          {/* <div> */}
          <center>
            <Image
              src={imj}
              // height={100}
              // width={100}
              className="rounded-full h-20 w-20"
              alt="testimony_image"
            />
          </center>
          {/* </div> */}
          <div className="text-left">
            <FontAwesomeIcon
              icon={faQuoteLeft}
              className="text-redish text-5xl text-left"
            />
          </div>
          <p>
            I thank MJN Healthcare Consulting so much for their immense
            contribution towards my Dataflow processing and license application.
            Despite the difficulty, they stood by me from the beginning till had
            my license in less than two months.
          </p>
          <div>
            <p className="font-bold text-xl text-blackish">
              Oliver Bediako-{" "}
              <span className="text-greyish italic text-base">
                DHA staff nurse
              </span>{" "}
            </p>
            <p className="text-greyish">Cameroonian</p>
          </div>
        </div>
        <div className="flex shadow-md shadow-lightish px-5 py-3 rounded-md w-full md:w-4/12 gap-3 flex-col ">
          {/* <div> */}
          <center>
            <Image
              src={tita}
              // height={100}
              // width={100}
              className="rounded-full h-20 w-20"
              alt="testimony_image"
            />
          </center>
          {/* </div> */}
          <div className="text-left">
            <FontAwesomeIcon
              icon={faQuoteLeft}
              className="text-redish text-5xl text-left"
            />
          </div>
          <p>
            The benefits of MJN HEALTHCARE CONSULTING cannot be overemphasized:
            her services are just the best. I was followed up till the level of
            Dataflow, followed from my country, received me on arrival and
            helped mount a powerful CV for job search.
          </p>
          <div>
            <p className="font-bold text-xl text-blackish">
              TITA M. LOUIS-{" "}
              <span className="text-greyish italic text-base">
                DHA staff nurse
              </span>{" "}
            </p>
            <p className="text-greyish">Cameroonian</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimony;
