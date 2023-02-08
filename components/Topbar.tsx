import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeCircleCheck,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

function Topbar() {
  return (
    <div className="h-12  bg-pinkish px-3   flex items-center justify-between md:px-16 ">
      <div className="flex items-center space-x-3 justify-start">
        <a
          href="mailto: info@mjnhealthcare-consulting.com"
          className=" text-sm flex items-center space-x-2 "
        >
          {" "}
          <FontAwesomeIcon
            icon={faEnvelopeCircleCheck}
            className="text-base text-redish  "
          />{" "}
          <p className="text-xs md:text-base">
            info@mjnhealthcare-consulting.com
          </p>
        </a>
        <div className="hidden sm:flex items-center space-x-2">
          <FontAwesomeIcon icon={faPhone} className="text-base text-redish  " />
          <p className="max-w-md text-sm hidden sm:block">+237 568 524 236</p>
        </div>
      </div>
      <div className="flex items-center justify-start text-sm space-x-2 ">
        <p className="hidden md:block">Follow Us at</p>
        <div className="h-3 w-3 rounded-full flex items-center justify-center border-lightish border p-4">
          <FontAwesomeIcon
            className="text-redish "
            icon={faFacebookF as IconProp}
          />
        </div>
        <div className="h-3 w-3 rounded-full flex items-center justify-center border-lightish border p-4">
          <FontAwesomeIcon
            className="text-redish "
            icon={faLinkedinIn as IconProp}
          />
        </div>
        <div className="h-3 w-3 rounded-full flex items-center justify-center border-lightish border p-4">
          <FontAwesomeIcon
            className="text-redish "
            icon={faTwitter as IconProp}
          />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
