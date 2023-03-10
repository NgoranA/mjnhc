import Head from "next/head";
import Image from "next/image";
import React, { Fragment } from "react";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

import prisma from "../apollo/prisma";
import AboutSection from "../components/About";
import Services from "../components/Services";
import Figures from "../components/Figures";
import Team from "../components/Team";
import Testimony from "../components/Testimony";
import Appointment from "../components/Appointment";
import Footer from "../components/Footer";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>MJNHealth care</title>
        <meta
          name="MJN healthcare consulting"
          content="healthcare consulting nurses nurse health travel abroad"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Topbar />
        <Navbar />
        <Hero />
        <AboutSection />
        <Services />
        <Figures />
        <Team />
        <Testimony />
        <Appointment />
        <Footer />
      </main>
    </>
  );
}
