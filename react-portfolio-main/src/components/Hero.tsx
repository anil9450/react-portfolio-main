"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";
import profilePicture1 from "../assets/anilmn.png";

const container = (delay: any) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero = () => {
  return (
    <>
      <div className="border-b border-nuetral-900 pb-4 lg:mb-0">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
              <motion.h1
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl"
              >
                Anil Kushwaha
              </motion.h1>
              <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl 
            text-transparent"
              >
                Web Developer
              </motion.span>
              <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="my-2 max-w-xl py-6 font-light tracking-tighter text-justify"
              >
                {HERO_CONTENT}
              </motion.p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center items-center">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={profilePicture1}
                  alt="Anil Kumar Singh Kushwaha"
                  className="rounded-3xl w-96 h-96 mt-16"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
