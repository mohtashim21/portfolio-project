import React from "react";
import { motion } from "framer-motion";
import "./Home.css";
import Type from "./Type";
import homeSvg from "../assets/home-main.svg";
import homeOne from "../assets/one.jpg";
import Particle from "./Particle";

const Home = () => {
  return (
    <main>
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="sm:flex sm:justify-center sm:flex-wrap sm:gap-[12%] sm:mr-[7%]">
          <Particle />
          <div
            className="text-[1.9rem] sm:text-[2.6rem] pl-[1.8rem] pt-[12%] mb-[5%]"
            style={{
              color: "wheat",
              fontWeight: "bolder",
              fontFamily: "revert-layer",
            }}
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Hi There!{" "}
              <span className="animate__animated animate__flip">👋🏻</span>
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              I'M{" "}
              <span style={{ color: "#E6E6E6", fontWeight: "bolder" }}>
                MOHTASHIM MAAZ
              </span>
            </motion.h1>
            <div style={{ marginTop: "10%", color: "#E6E6E6" }}>
              <Type />
            </div>
          </div>
          <div>
            <img
              src={homeSvg}
              alt="image"
              className="h-[70vh] ml-[5%] sm:h-[75vh] sm:pt-[20%]"
            />
          </div>
        </div>
      </motion.section>

      <div className="flex mt-[5%] ml-[11%] gap-[10%] flex-wrap text-slate-50">
        <div>
          <motion.img
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            src={homeOne}
            alt="Image"
            className="h-[55vh] ml-[5%] sm:h-96 rounded-xl"
          />
        </div>

        <div className="my-[2%] sm:my-[0]">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1
              className="text-amber-300 my-[3%] sm:my-0 sm:mb-[2%] text-[2.6rem] sm:text-[3.3rem] font-bold"
              style={{ fontFamily: "revert" }}
            >
              About Me
            </h1>
            <p className="text-[wheat] font-bold text-[1.3rem] sm:text-[1.6rem] px-[1%] sm:px-0 leading-9 sm:leading-10 mb-[2%]">
              <h1 className="text-lime-200 text-[1.6rem] sm:text-[2rem] mb-[2.6%]">
                Let Me Introduce Myself
              </h1>
              I'm a passionate Mern Stack web developer, <br />
              I have knowledge in HTML, CSS, JavaScript, Bootstrap, React JS{" "}
              <br />
              I am still learning the backend technologies, but i know frontend{" "}
              <br /> technologies.. I have build several projects in MERN Stack
              & React JS.
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Home;
