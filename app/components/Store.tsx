"use client";
import React from "react";
import Image from "next/image";
import { raleway } from "../fonts";
import { motion } from "framer-motion";

export default function Store() {
  return (
    <section>
      <Image
        src={"/assets/illustration-intro.png"}
        width={720}
        height={534}
        alt={"illustration-intro"}
        className="pl-8 pr-8 mt-14 mb-8"
      />
      <div className="flex flex-col justify-center text-center gap-8 text-white">
        <h1 className={`${raleway.className} text-2xl font-bold pl-7 pr-7`}>
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className=" text-sm font-normal pl-10 pr-10 ">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <motion.button
          className={`${raleway.className} btn mb-32`}
          initial={{
            backgroundImage:
              "linear-gradient(135deg, #63e1d9 -42.11%, #34a0cd 100%)",
          }}
          whileHover={{
            backgroundImage:
              "linear-gradient(135deg, #8ADAE3 -42.11%, #8ADAE3 100%)",
          }}
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
}
