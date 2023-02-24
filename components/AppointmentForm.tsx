import {
  faEnvelopeOpenText,
  faPaperPlane,
  faPhoneSquare,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { FormEvent, useState } from "react";
import teamPic from "../public/app.jpg";
import { gql, useMutation } from "@apollo/client";
import { Toaster, toast } from "react-hot-toast";

const BOOK_APPOINTMENT = gql`
  mutation Mutation($content: AppointmentInput!) {
    createAppointment(content: $content) {
      success
      code
      message
    }
  }
`;

export type Appointment = {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  country: string;
  date: string;
};

function AppointmentForm() {
  const initialValues: Appointment = {
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    country: "",
    date: "",
  };

  const [fields, setFields] = useState<Appointment>(initialValues);
  const formState: boolean =
    !fields.email ||
    !fields.firstName ||
    !fields.lastName ||
    !fields.phone ||
    !fields.country ||
    !fields.date;

  const [createAppointment, { data, error, loading, reset }] = useMutation(
    BOOK_APPOINTMENT,
    {
      variables: { content: fields },
    }
  );

  if (data) {
    if (data?.createAppointment?.success === true) {
      toast.success(data?.createAppointment?.message, {
        duration: 4000,
      });

      reset();
    } else {
      toast.error(data?.createAppointment?.message, {
        duration: 4000,
      });
    }
  } else {
    if (error)
      toast.error(error.message, {
        duration: 4000,
      });
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    createAppointment();
    setFields(initialValues);
  };

  return (
    <div className="h-auto w-11/12 md:w-10/12 rounded-xl shadow-lg shadow-pinkish  -mt-20 bg-white flex-col flex md:flex-row  ">
      <Toaster />
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
                setFields((prev) => {
                  return {
                    ...prev,
                    firstName: e.target.value,
                  };
                });
              }}
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
                setFields((prev) => {
                  return {
                    ...prev,
                    lastName: e.target.value,
                  };
                });
              }}
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
              setFields((prev) => {
                return {
                  ...prev,
                  email: e.target.value,
                };
              });
            }}
            type="email"
            className="rounded-md   focus:ring-2 focus:ring-pinkish   focus:border-none form-input"
          />
        </div>
        <div className="flex w-full flex-col">
          <label htmlFor="" className="text-greyish">
            Phone Number
          </label>
          <input
            onChange={(e) => {
              setFields((prev) => {
                return {
                  ...prev,
                  phone: e.target.value,
                };
              });
            }}
            type="tel"
            className="rounded-md   focus:ring-2 focus:ring-pinkish   focus:border-none form-input"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-greyish">
            Date of Appointment
          </label>
          <input
            onChange={(e) => {
              setFields((prev) => {
                return {
                  ...prev,
                  date: e.target.value,
                };
              });
            }}
            type="datetime-local"
            className="rounded-md    focus:ring-2 focus:ring-pinkish   focus:border-none form-input"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-greyish">
            Country of Residence
          </label>
          <input
            onChange={(e) => {
              setFields((prev) => {
                return {
                  ...prev,
                  country: e.target.value,
                };
              });
            }}
            type="text"
            className="rounded-md   focus:ring-2 focus:ring-pinkish   focus:border-none form-input"
          />
        </div>
        <button
          disabled={formState}
          type="submit"
          className={`${
            formState && !loading
              ? "bg-lightish cursor-help text-pinkish "
              : "bg-redish text-white"
          } rounded-lg shadow-sm py-2 shadow-pinkish `}
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
              Submit <FontAwesomeIcon icon={faPaperPlane} className="px-3 " />
            </>
          )}
        </button>
      </form>
      <div className="flex justify-between w-full md:w-6/12 flex-col">
        <div className="relative h-full">
          <Image
            src={teamPic}
            className=" md:rounded-tr-xl"
            // fill
            alt="appointment_pic"
          />
        </div>
        <div className="flex rounded-b-xl h-full md:rounded-b-none md:rounded-br-xl gap-4 px-5 py-3 bg-pinkish  flex-col">
          <div className="flex gap-3  ">
            <FontAwesomeIcon
              icon={faPhoneSquare}
              className="text-redish text-6xl"
            />
            <div className="flex flex-col">
              <p>Phone Number</p>
              <p className="text-base md:text-xl"> (+971) 525 253 890</p>
            </div>
          </div>
          <div className="flex gap-3  ">
            <FontAwesomeIcon
              icon={faEnvelopeOpenText}
              className="text-redish text-6xl"
            />
            <div className="flex flex-col">
              <p>Email Us</p>
              <p className="text-base md:text-lg">
                {" "}
                info@mjnhealthcare-consulting.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppointmentForm;
