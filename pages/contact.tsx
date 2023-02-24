import React, { useState } from "react";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faEnvelopeOpenText,
  faLocationPinLock,
  faPaperPlane,
  faPhoneVolume,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import teamPic from "../public/ct.jpg";
import { Contact } from "../apollo/typeDefs/contact";
import { gql, useMutation } from "@apollo/client";
import { Toaster, toast } from "react-hot-toast";

const CONTACT_US = gql`
  mutation Mutation($content: ContactInput!) {
    createContact(content: $content) {
      success
      code
      message
    }
  }
`;

function Contact(): JSX.Element {
  const initialValues: Contact = {
    email: "",
    firstName: "",
    lastName: "",
    message: "",
    subject: "",
  };

  const [formData, setData] = useState(initialValues);

  const formState: boolean =
    !formData.email ||
    !formData.firstName ||
    !formData.lastName ||
    !formData.message ||
    !formData.subject;

  const [createContact, { data, loading, error, reset }] = useMutation(
    CONTACT_US,
    {
      variables: {
        content: formData,
      },
    }
  );

  if (data) {
    if (data?.createContact?.code === 200) {
      toast.success(data?.createContact?.message);
      reset();
    } else {
      toast.error(data?.createContact?.message);
    }
  } else {
    if (error) toast.error(error.message);
  }
  // if (error) {
  //   toast.error(error.message);
  //   reset();
  // }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createContact();
    setData(initialValues);
  };

  return (
    <div>
      <Toaster />
      <Topbar />
      <Navbar />
      <section className="h-96 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29045.36954170007!2d54.3784372!3d24.496847049999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e665a117643df%3A0x68d093559383d625!2sAl%20Zahiyah%20-%20Abu%20Dhabi%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2scm!4v1677044472372!5m2!1sen!2scm"
          // width="1240"
          // height="300"
          className="w-full h-96"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <section className="flex flex-col md:flex-row gap-16 md:gap-8 z-50 items-center h-fit px-3 md:px-16 -mt-28  ">
        <div className="rounded-lg gap-5 flex flex-col transition duration-500 hover:-translate-y-9 items-center justify-center bg-pinkish w-full md:w-3/12 h-52">
          <FontAwesomeIcon
            icon={faLocationPinLock}
            className="text-redish text-5xl"
          />
          <p className="text-lg font-bold">Our Location</p>
          <p className="text-base text-center">Tourist Club Area Abu Dhabi</p>
        </div>
        <div className="rounded-lg gap-5 flex flex-col transition duration-500 hover:-translate-y-9 items-center justify-center hover:bg-pinkish bg-white shadow-md shadow-pinkish w-full md:w-3/12 h-52">
          <FontAwesomeIcon
            icon={faPhoneVolume}
            className="text-redish text-5xl"
          />
          <p className="text-lg font-bold">Phone Number</p>
          <p className="text-base text-center">(+971) 525 253 890</p>
        </div>
        <div className="rounded-lg gap-5 flex flex-col transition duration-500 hover:-translate-y-9 items-center justify-center hover:bg-pinkish bg-white shadow-md shadow-pinkish w-full md:w-3/12 h-52">
          <FontAwesomeIcon
            icon={faEnvelopeOpenText}
            className="text-redish text-5xl"
          />
          <p className="text-lg font-bold">Email Us</p>
          <p className="text-base text-center">
            info@mjnhealthcare-consulting.com
          </p>
        </div>
        <div className="rounded-lg gap-5 flex flex-col transition duration-500 hover:-translate-y-9 items-center justify-center hover:bg-pinkish bg-white shadow-md shadow-pinkish w-full md:w-3/12 h-52">
          <FontAwesomeIcon icon={faClock} className="text-redish text-5xl" />
          <p className="text-lg font-bold">Working Hours</p>
          <p className="text-base text-center">Mon - Sat : 9.00 - 5.00</p>
        </div>
      </section>
      <section className="my-28 flex justify-center">
        <div className="h-auto w-11/12 md:w-11/12 rounded-xl shadow-lg shadow-pinkish  -mt-20 bg-white flex-col flex md:flex-row  ">
          <form
            onSubmit={handleSubmit}
            className=" w-full md:w-6/12 flex flex-col gap-4 px-6 py-9"
          >
            <div className="flex flex-col sm:flex-row gap-2 items-center  ">
              <div className="flex w-full sm:w-6/12 flex-col ">
                <label htmlFor="" className="text-greyish">
                  First Name
                </label>
                <input
                  onChange={(e) => {
                    setData((prev) => {
                      return {
                        ...prev,
                        firstName: e.target.value,
                      };
                    });
                  }}
                  value={formData.firstName}
                  type="text"
                  className="rounded-md    focus:ring-2 focus:ring-pinkish transition-colors delay-300 duration-700  focus:border-none form-input"
                />
              </div>
              <div className="flex w-full sm:w-6/12 flex-col">
                <label htmlFor="" className="text-greyish">
                  Last Name
                </label>
                <input
                  onChange={(e) => {
                    setData((prev) => {
                      return {
                        ...prev,
                        lastName: e.target.value,
                      };
                    });
                  }}
                  value={formData.lastName}
                  type="text"
                  className="rounded-md    focus:ring-2 focus:ring-pinkish   focus:border-none form-input"
                />
              </div>
            </div>
            <div className="flex w-full flex-col">
              <label htmlFor="" className="text-greyish">
                Email
              </label>
              <input
                onChange={(e) => {
                  setData((prev) => {
                    return {
                      ...prev,
                      email: e.target.value,
                    };
                  });
                }}
                value={formData.email}
                type="email"
                className="rounded-md   focus:ring-2 focus:ring-pinkish   focus:border-none form-input"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="text-greyish">
                Subject
              </label>
              <input
                onChange={(e) => {
                  setData((prev) => {
                    return {
                      ...prev,
                      subject: e.target.value,
                    };
                  });
                }}
                value={formData.subject}
                type="text"
                className="rounded-md   focus:ring-2 focus:ring-pinkish   focus:border-none form-input"
              />
            </div>
            <div className="flex w-full flex-col">
              <label htmlFor="" className="text-greyish">
                Message
              </label>
              <textarea
                onChange={(e) => {
                  setData((prev) => {
                    return {
                      ...prev,
                      message: e.target.value,
                    };
                  });
                }}
                required
                value={formData.message}
                className="rounded-md   focus:ring-2 focus:ring-pinkish   focus:border-none form-input"
              />
            </div>
            <button
              type="submit"
              disabled={formState}
              className={`${
                formState && !loading
                  ? "bg-lightish cursor-help text-pinkish "
                  : "bg-redish text-white"
              }   mt-7 py-3  w-full sm:w-4/12 rounded-lg shadow-sm shadow-pinkish `}
            >
              {loading ? (
                <>
                  Sending...
                  <FontAwesomeIcon
                    icon={faSpinner}
                    className="px-3 text-white animate-spin"
                  />
                </>
              ) : (
                <>
                  Submit{" "}
                  <FontAwesomeIcon icon={faPaperPlane} className="px-3" />
                </>
              )}
            </button>
          </form>
          <div className="relative w-full h-full md:w-6/12">
            {/* <div className="relative h-full"> */}
            <Image
              src={teamPic}
              className="h-full md:rounded-r-xl"
              // fill
              alt="appointment_pic"
            />
            {/* </div> */}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
