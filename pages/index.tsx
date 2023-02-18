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

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>MJNHealth care</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col">
        <Topbar />
        <Navbar />
        <Hero />
        <AboutSection />
        <Services />
        <Figures />
        <Team />
      </main>
    </>
  );
}
