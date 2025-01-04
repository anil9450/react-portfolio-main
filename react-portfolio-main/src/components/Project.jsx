"use client";
import { PROJECTS } from "@/constants";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className="border-b border-nuetral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((Project, index) => (
          <span key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <Image
                src={Project.image}
                width={150}
                height={150}
                alt={Project.title}
                className="mb-6 rounded mt-4 w-24 h-24"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{Project.title}</h6>
              <p className="mb-4 text-neutral-700 text-justify">{Project.description}</p>
              {/* 
              {Project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-1 rounded bg-neutral-700 text-white px-1 py-1 text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
              */}
            </motion.div>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Project;
