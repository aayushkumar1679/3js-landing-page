"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Specs from "../components/Specs";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for 3D assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Head>
        <title>Nexus Pro - Revolutionary Smartphone</title>
        <meta
          name="description"
          content="Experience the future with Nexus Pro - Cutting-edge smartphone technology"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <Features />
        <Specs />
        <Gallery />
      </main>

      <Footer />
    </div>
  );
}
