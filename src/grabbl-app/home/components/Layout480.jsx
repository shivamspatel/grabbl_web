"use client";

import React from "react";

export function Layout480() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">
              Faster, Cheaper Delivery for Alcohol and Snacks
            </h2>
          </div>
          <div />
        </div>
        <div className="relative flex">
          <div className="absolute top-[10%] left-0 w-[30%]">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-dim.png"
              className="aspect-square size-full rounded-image object-cover"
              alt="Relume placeholder image 1"
            />
          </div>
          <div className="ml-[15%]">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="aspect-[3/2] size-full rounded-image object-cover"
              alt="Relume placeholder image 2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
