import Head from "next/head";
import Image from "next/image";
import React, { Fragment } from "react";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { GetStaticProps, GetStaticPropsContext } from "next";
import { initializeApollo } from "../apollo/client";
import { prisma } from "../apollo/prisma";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Fragment>
        <Topbar />
        <Navbar />
      </Fragment>
      <main>
        <Hero />
      </main>
    </>
  );
}
