import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookSquare,
  faFly,
  faLinkedinIn,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faChevronRight,
  faEnvelope,
  faLocation,
  faLocationArrow,
  faMapLocation,
  faPaperPlane,
  faPhone,
  faPhoneAlt,
  faPhoneSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex bg-lightish px-4 md:px-16 items-start py-8">
      <div className="flex flex-col-reverse md:flex-row  gap-5 justify-between">
        <div className=" gap-3 flex md:hidden  flex-col">
          <p className="font-bold text-greyish text-base">
            Our Contact Information
          </p>
          <ul className="flex gap-2 flex-col text-greyish">
            <li>
              {" "}
              <FontAwesomeIcon
                icon={faMapLocation}
                className="text-redish text-base mr-3"
              />{" "}
              Tourist Club Area Abu Dhabi United Arab Emirates (UAE)
            </li>
            <li>
              {" "}
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-redish text-base mr-3"
              />{" "}
              info@mjnhealthcare-consulting.com
            </li>
            <li>
              {" "}
              <FontAwesomeIcon
                icon={faPhone}
                className="text-redish text-base mr-3"
              />{" "}
              (+971)525253890
            </li>
          </ul>
        </div>
        <div className="flex gap-5 flex-col w-full md:w-3/12">
          <Image alt="logo" src="/logo.png" width={246} height={71} />
          <p className="text-base text-greyish">
            MJN Healthcare Consulting is a team of healthcare professionals who
            help one another in their careers. Our contributors are people with
            nursing and care experience like you.
          </p>
          <div className="flex items-center text-redish gap-3 text-2xl">
            <FontAwesomeIcon icon={faTwitter as IconProp} />
            <FontAwesomeIcon icon={faFacebookSquare as IconProp} />
            <FontAwesomeIcon icon={faLinkedinIn as IconProp} />
          </div>
        </div>

        <div className="flex  gap-8 flex-col w-full md:w-2/12">
          <p className="text-lg font-bold text-greyish">Other Pages</p>
          <ul className="gap-2 flex text-greyish flex-col">
            <li className="hover:text-redish">
              <Link href="services">
                {" "}
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="mr-3 text-redish text-xs font-bold"
                />{" "}
                Services
              </Link>
            </li>
            <li className="hover:text-redish">
              <Link href="about">
                {" "}
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="mr-3 text-redish text-xs font-bold"
                />{" "}
                About Us
              </Link>
            </li>
            <li className="hover:text-redish">
              <Link href="appointment">
                {" "}
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="mr-3 text-redish text-xs font-bold"
                />{" "}
                Book Appointment
              </Link>
            </li>
            <li className="hover:text-redish">
              <Link href="contact">
                {" "}
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="mr-3 text-redish text-xs font-bold"
                />{" "}
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 w-full md:w-6/12">
          <div className="h-32 bg-greyish py-3 gap-3 px-5 rounded-lg flex flex-col">
            <p className="text-lg text-white">Subscribe to Our Newsletter</p>
            <div>
              <input
                type="text"
                className="h-12 px-5 w-full rounded-full  focus:outline-none"
              />
              {/* <button> */}
              <FontAwesomeIcon
                className="bg-greyish p-3 rounded-full text-white absolute -ml-11 mt-1"
                icon={faPaperPlane}
              />
              {/* </button> */}
            </div>
          </div>
          <div className=" gap-3 hidden md:flex flex-col">
            <p className="font-bold text-greyish text-base">
              Our Contact Information
            </p>
            <ul className="flex gap-2 flex-col text-greyish">
              <li>
                {" "}
                <FontAwesomeIcon
                  icon={faMapLocation}
                  className="text-redish text-base mr-3"
                />{" "}
                Tourist Club Area Abu Dhabi United Arab Emirates (UAE)
              </li>
              <li>
                {" "}
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-redish text-base mr-3"
                />{" "}
                info@mjnhealthcare-consulting.com
              </li>
              <li>
                {" "}
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-redish text-base mr-3"
                />{" "}
                (+971)525253890
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
