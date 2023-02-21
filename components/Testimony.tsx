import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const Testimony = () => {
  return (
    <section className="h-screen px-16 py-12 flex gap-12 flex-col">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-base font-bold text-redish">FEEDBACK</p>
          <p className="text-3xl font-bold ">What our clients say about us.</p>
        </div>
        <p className="text-lg text-greyish w-1/3">
          {" "}
          These kind words mean a lot to us and so we look forward to shaping
          more careers.{" "}
        </p>
      </div>
      <div className="flex items-center gap-16 justify-center">
        <div className="flex w-3/12 gap-3 flex-col ">
          {/* <div> */}
          <center>
            <Image
              src="/sar.jpg"
              height={100}
              width={100}
              className="rounded-full"
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
        <div className="flex w-3/12 gap-3 flex-col ">
          {/* <div> */}
          <center>
            <Image
              src="/sar.jpg"
              height={100}
              width={100}
              className="rounded-full"
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
        <div className="flex w-3/12 gap-3 flex-col ">
          {/* <div> */}
          <center>
            <Image
              src="/sar.jpg"
              height={100}
              width={100}
              className="rounded-full"
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
