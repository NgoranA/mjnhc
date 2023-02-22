import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookSquare,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <section className="bg-lightish h-full flex bg-gradient-to-t from-lightish flex-col py-12  ">
      <div className="flex flex-col items-center  sm:flex-row sm:justify-between gap-8 sm:gap-16 sm:items-center pl-3 md:pl-16">
        <div className="w-full md:w-10/12 gap-5 flex flex-col z-50 ">
          <p className="text-base text-redish text-center sm:text-left font-bold">
            OUR TEAM
          </p>{" "}
          <p className="text-3xl font-bold text-center sm:text-left ">
            Meet Our Team Of Experts
          </p>
          <p className="text-greyish w-11/12 text-justify sm:text-left sm:w-10/12">
            <span className="font-bold "> Mbout John Nyah</span> and his Well
            Trained and Experienced Team of Experts are dedicated in providing
            the best possible health care job placement. We at MJN Healthcare
            consulting are focused on helping you get a better job placement
            abroad.
          </p>
          <div>
            <p className="font-bold text-lg text-center sm:text-left">
              {" "}
              Mbout John Nyah, RN, BSN
            </p>
            <p className="text-redish font-bold text-center sm:text-left">
              CEO and Founder
            </p>
          </div>
        </div>
        <div className="w-full sm:w-5/12  md:ml-96 overflow-hidden ">
          {/* <div className="overflow-x-hidden"> */}
          <Image
            src="/seo.png"
            alt="ceo picture"
            className="absolute hover:scale-105 transition duration-500 ml-0 sm:-ml-52  "
            height={400}
            width={350}
          />
          {/* </div> */}
          {/* <div className="absolute z-50 bg-redish -ml-52  h-20  w-full"></div> */}
          <div className=" h-96 w-96 -mr-36 bg-gradient-to-b from-redish z-30  rounded-full"></div>
        </div>
      </div>
      <div className="bg-gradient-to-t from-lightish z-40  -mt-14 h-20 "></div>
      <div className="bg-lightish h-full z-50 flex flex-col sm:flex-row gap-9 justify-between px-8 md:px-16  w-full">
        <figure className="flex flex-col md:flex-row hover:scale-110 items-center gap-3 transition duration-500 bg-white w-full rounded-2xl ">
          <Image
            src="/f.jpg"
            width={300}
            height={50}
            className=" h-full w-full md:w-6/12 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none  "
            alt="team_picture"
          />
          <figcaption className=" flex gap-2 md:gap-5 py-5 text-center items-center md:items-start md:text-left flex-col ">
            <p className="text-lg font-bold">Ngoran Mirabel Kiwonyuy </p>
            <div>
              <p className="text-lg text-redish">Country Manager </p>
              <p className="text-base">United Arab Emirates</p>
              <p className="text-base">R.N</p>
            </div>
            <div className="flex items-center text-redish gap-3 text-2xl">
              <FontAwesomeIcon icon={faWhatsapp as IconProp} />
              <FontAwesomeIcon icon={faFacebookSquare as IconProp} />
              <FontAwesomeIcon icon={faLinkedinIn as IconProp} />
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col-reverse md:flex-row hover:scale-110 transition duration-500 items-center text-center md:text-right w-full justify-end gap-3  bg-white rounded-2xl ">
          <figcaption className=" flex gap-2 md:gap-5 py-5 items-center flex-col">
            <p className="text-lg font-bold">Mrs. Karean Etchu </p>
            <div>
              <p className="text-lg text-redish">Country Manager </p>
              <p className="text-base">United Kingdom</p>
              <p className="text-base">SRN</p>
            </div>
            <div className="flex items-center justify-end text-redish gap-3 text-2xl">
              <FontAwesomeIcon icon={faWhatsapp as IconProp} />
              <FontAwesomeIcon icon={faFacebookSquare as IconProp} />
              <FontAwesomeIcon icon={faLinkedinIn as IconProp} />
            </div>
          </figcaption>
          <Image
            src="/f.jpg"
            width={300}
            height={50}
            className=" h-full rounded-t-2xl w-full md:w-6/12 md:rounded-r-2xl md:rounded-tl-none "
            alt="team_picture"
          />
        </figure>
      </div>
    </section>
  );
};

export default Team;
