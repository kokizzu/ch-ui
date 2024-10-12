"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowBigDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative w-full py-12 md:py-24 lg:pt-26 min-h-screen lg-h-scren flex flex-col justify-between">
      <div className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-pink-500">
            Data is better when we see it!
          </h1>
          <p className="max-w-[600px] md:text-lg/relaxed lg:text-lg/relaxed xl:text-2xl/relaxed font-semibold">
            CH-UI makes working with data easy. This UI connects you directly to
            your ClickHouse instance, allowing you to view, filter, and export
            your data with ease.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/docs/"
              className="inline-flex items-center justify-center no-underline px-8 py-3 text-xl font-bold text-white rounded-md bg-gradient-to-r from-orange-600 to-orange-300 hover:from-orange-500 hover:to-orange-200 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Get Started 🚀
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-[500px] aspect-square">
            <Image
              src="/logo.png"
              alt="Hero"
              fill
              style={{ objectFit: "contain" }}
              className="rounded-lg"
            />
          </div>
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 mb-4">
            <ArrowBigDown
              size={58}
              onClick={() => {
                window.scrollTo({
                  top: window.innerHeight + 30,
                  behavior: "smooth",
                });
              }}
              className="text-orange-500 cursor-pointer animate-bounce"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
