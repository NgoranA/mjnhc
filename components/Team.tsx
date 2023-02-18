import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faFacebookF,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <section className="bg-lightish h-fit flex bg-gradient-to-t from-lightish flex-col py-12  ">
      <div className="flex justify-between items-center pl-16">
        <div className="w-7/12 gap-5 flex flex-col z-50 ">
          <p className="text-base text-redish font-bold">OUR TEAM</p>{" "}
          <p className="text-3xl font-bold ">Meet Our Team Of Experts</p>
          <p className="text-greyish">
            <span className="font-bold"> Mbout John Nyah</span> and his Well
            Trained and Experienced Team of Experts are dedicated in providing
            the best possible health care job placement. We at MJN Healthcare
            consulting are focused on helping you get a better ob placement
            abroad.
          </p>
          <div>
            <p className="font-bold text-lg"> Mbout John Nyah, RN, BSN</p>
            <p className="text-redish font-bold">CEO and Founder</p>
          </div>
        </div>
        <div className="col-4 overflow-hidden ">
          <Image
            src="/seo.png"
            alt="ceo picture"
            className="absolute hover:scale-105 transition duration-500 -ml-52"
            height={400}
            width={350}
          />
          {/* <div className="absolute z-50 bg-redish -ml-52  h-20  w-full"></div> */}
          <div className=" h-96 w-96 -mr-36 bg-gradient-to-b from-redish z-30  rounded-full"></div>
        </div>
      </div>
      <div className="bg-gradient-to-t from-lightish z-40  -mt-14 h-20 "></div>
      <div className="bg-lightish h-96 z-50 flex gap-9 justify-between px-16">
        <figure className="flex hover:scale-110 items-center gap-3 transition duration-500 bg-white w-full rounded-2xl ">
          <Image
            src="/f.jpg"
            width={300}
            height={50}
            className=" h-full rounded-l-2xl  "
            alt="team_picture"
          />
          <figcaption className=" flex gap-5 flex-col ">
            <p className="text-lg font-bold">Ngoran Mirabel Kiwonyuy </p>
            <div>
              <p className="text-lg text-redish">Country Manager </p>
              <p className="text-base">United Arab Emirates</p>
              <p className="text-base">R.N</p>
            </div>
            <div className="flex items-center text-redish gap-3 text-2xl">
              <FontAwesomeIcon icon={faWhatsapp as IconProp} />
              <FontAwesomeIcon icon={faFacebookF as IconProp} />
              <FontAwesomeIcon icon={faLinkedinIn as IconProp} />
            </div>
          </figcaption>
        </figure>
        <figure className="flex hover:scale-110 transition duration-500 items-center text-right justify-end gap-3  bg-white w-full rounded-2xl ">
          <figcaption className=" flex gap-5 flex-col">
            <p className="text-lg font-bold">Ngoran Mirabel Kiwonyuy </p>
            <div>
              <p className="text-lg text-redish">Country Manager </p>
              <p className="text-base">United Arab Emirates</p>
              <p className="text-base">R.N</p>
            </div>
            <div className="flex items-center justify-end text-redish gap-3 text-2xl">
              <FontAwesomeIcon icon={faWhatsapp as IconProp} />
              <FontAwesomeIcon icon={faFacebookF as IconProp} />
              <FontAwesomeIcon icon={faLinkedinIn as IconProp} />
            </div>
          </figcaption>
          <Image
            src="/f.jpg"
            width={300}
            height={50}
            className=" h-full rounded-r-2xl "
            alt="team_picture"
          />
        </figure>
      </div>
    </section>
  );
};

export default Team;
