import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../public/logo.png";
import Image from "next/image";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const router = useRouter();

  const menu = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Services",
      path: "#services",
    },
    {
      label: "About Us",
      path: "/about",
    },
    {
      label: "Blog",
      path: "/blog",
    },
    {
      label: "Contact Us",
      path: "/contact",
    },
  ];

  return (
    <>
      <nav className=" sticky px-3 md:px-16 flex items-center justify-between">
        <Image
          src="/logo.png"
          className="hidden lg:block"
          width={246}
          height={71}
          alt="logo"
        />
        <Image
          src="/logo.png"
          className="lg:hidden"
          width={150}
          height={60}
          alt="logo"
        />
        <div className="lg:hidden items-center flex space-x-6 ">
          <button
            className={`text-2xl text-greyish font-bold ${
              openMenu ? " animate-bounce" : "animate-pulse"
            }  `}
            onClick={() => setOpenMenu(!openMenu)}
          >
            {" "}
            <FontAwesomeIcon icon={faBarsStaggered} />{" "}
          </button>
        </div>

        <div className="hidden lg:flex space-x-9">
          {menu.map((page, index) => {
            return (
              <Link
                key={index}
                className={` ${
                  router.asPath === page.path && " border-b-4 border-b-redish  "
                }  font-red font-medium hover:scale-100 delay-150 hover:text-redish hover:-translate-y-1  `}
                href={page.path}
              >
                {" "}
                {page.label}{" "}
              </Link>
            );
          })}
        </div>
        <button className="hidden bg-redish px-8 font-red_hat  rounded-md py-3 text-white lg:block">
          Book an appointment{" "}
        </button>
      </nav>
      {openMenu && (
        <div className="w-full flex flex-col transition ease-linear delay-75  bg-white absolute">
          {menu.map((page, index) => {
            return (
              <Link
                key={index}
                className={`w-full font-bold  px-3 py-3 ${
                  router.asPath === page.path &&
                  " border-l-8 border-l-redish bg-pinkish"
                }`}
                href={page.path}
              >
                {" "}
                {page.label}{" "}
              </Link>
            );
          })}

          <div className="w-full px-2">
            <button className="w-full font-red_hat font-bold rounded-md bg-redish text-white py-3 ">
              Book an appointment
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
