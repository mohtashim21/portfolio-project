import React from "react";
import { motion } from "framer-motion";
import { FaHtml5 } from "react-icons/fa";
import { LiaCss3Alt } from "react-icons/lia";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { SiPostman } from "react-icons/si";
import { SiPycharm } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiRedux } from "react-icons/si";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";

function TechStack() {
  return (
    <>
      <section className="text-slate-50 flex flex-col items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl text-center my-10">
            Professional <span className="text-amber-300">Skillset</span>
          </h1>
          <div className="flex flex-col sm:gap-12 flex-wrap sm:mt-14 px-[0]">
            <ul className="flex  gap-[2rem] sm:gap-[6rem] flex-wrap text-7xl justify-center">
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="border-2 border-amber-300 py-[1.6rem] px-[3.5rem] rounded-md hover:border-b-2 hover:border-purple-600"
              >
                <DiJavascript1 />
            
              </motion.li>

              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="border-2 border-amber-300 py-[1.6rem] px-[3.5rem] rounded-md hover:border-b-2 hover:border-purple-600"
              >
                <DiNodejs />
              </motion.li>

              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="border-2 border-amber-300 py-[1.6rem] px-[3.5rem] rounded-md hover:border-b-2 hover:border-purple-600"
              >
                <DiGit />
              </motion.li>

              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="border-2 border-amber-300 py-[1.6rem] px-[3.5rem] rounded-md hover:border-b-2 hover:border-purple-600"
              >
                <DiReact />
              </motion.li>
            </ul>
            <ul className="flex  gap-[2rem] sm:gap-[6rem] flex-wrap text-7xl justify-center">
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="border-2 border-amber-300 py-[1.6rem] px-[3.5rem] rounded-md hover:border-b-2 hover:border-purple-600"
              >
                <DiMongodb />
              </motion.li>

              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="border-2 border-amber-300 py-[1.6rem] px-[3.5rem] rounded-md hover:border-b-2 hover:border-purple-600"
              >
                <DiPython />
              </motion.li>

              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="border-2 border-amber-300 py-[1.6rem] px-[3.5rem] rounded-md hover:border-b-2 hover:border-purple-600"
              >
                <FaHtml5 />
              </motion.li>

              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="border-2 border-amber-300 py-[1.6rem] px-[3.5rem] rounded-md hover:border-b-2 hover:border-purple-600"
              >
                <LiaCss3Alt />
              </motion.li>
            </ul>

            <ul className="flex  gap-[2rem] sm:gap-[6rem] flex-wrap text-7xl justify-center">
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="border-2 border-amber-300 py-[1.6rem] px-[3.5rem] rounded-md hover:border-b-2 hover:border-purple-600"
              >
                <FaBootstrap />
              </motion.li>

              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="border-2 border-amber-300 py-[1.6rem] px-[3.5rem] rounded-md hover:border-b-2 hover:border-purple-600"
              >
                <SiTailwindcss />
              </motion.li>

              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="border-2 border-amber-300 py-[1.6rem] px-[3.5rem] rounded-md hover:border-b-2 hover:border-purple-600"
              >
                <SiPandas />
              </motion.li>

              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="border-2 border-amber-300 py-[1.6rem] px-[3.5rem] rounded-md hover:border-b-2 hover:border-purple-600"
              >
                <IoLogoFirebase />
              </motion.li>
            </ul>
          </div>
        </div>

        <div>
          <h1 className="text-5xl text-center my-10">Tools</h1>

          <div className="flex flex-col gap-12 mt-10">
            <ul className="flex gap-[6rem] text-7xl">
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="border-2 border-amber-300 py-[1.6rem] px-[3.5rem] rounded-md hover:border-b-2 hover:border-purple-600"
              >
                <TbBrandVscode />
              </motion.li>

              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                className="border-2 border-amber-300 py-[1.6rem] px-[3.5rem] rounded-md hover:border-b-2 hover:border-purple-600"
              >
                <SiPostman />
              </motion.li>

              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                className="border-2 border-amber-300 py-[1.6rem] px-[3.5rem] rounded-md hover:border-b-2 hover:border-purple-600"
              >
                <SiRedux />
              </motion.li>

              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="border-2 border-amber-300 py-[1.6rem] px-[3.5rem] rounded-md hover:border-b-2 hover:border-purple-600"
              >
                <SiPycharm />
              </motion.li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default TechStack;

