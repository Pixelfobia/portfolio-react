"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating in{" "}
        <span className="font-medium">tourism studies</span>, I decided to dedicate myself
         to my passion for programming and design. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">complete web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          WordPress and Graphic Design
        </span>
        . I am also familiar with PHP, Javascript, React, SQL, Figma/XD and Adobe Suite. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a Junior/Middle
        Web developer and/or Graphic Designer.
      </p>

      <p>
        <span className="italic">When I'm not coding or designing</span>, I enjoy visiting places with charm and history, 
        going to the theater or trying to hit the ball playing tennis. I also enjoy{" "}
        <span className="font-medium">cooking</span>. I am currently finished{" "}
        <span className="font-medium">Art History studies</span>. I'm also learning to play the cello!.
      </p>
    </motion.section>
  );
}
