import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import foodfinderImg from "@/public/food-finder.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Frontend development bootcamp, Edx",
    location: "Leeds, UK",
    description:
      "A 16-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Git, GitHub, Node.js, and ReactJS.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Web & graphic designer",
    location: "Almería, SP",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
  {
    title: "Web & graphic designer",
    location: "Bradford, UK",
    description:
      "Corporate image redesign, web design, SEO, mailing design, product mockups, advertising banners, video editing, WordPress, WooCommerce, Photoshop, Illustrator, Premiere, After Effects, XD, Mailchimp, Google Analytics.",
    icon: React.createElement(FaReact),
    date: "2019 - 2021",
  },
] as const;

export const projectsData = [
  {
    title: "Food Finder",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Api Edaman", "Bootstrap"],
    imageUrl: foodfinderImg,
  },
  {
    title: "Day Weather Forecast",
    description:
      "This webpage was created so that a user can find current conditions and a 5-day forecast for any city. The developer was tasked with using the Open Weather API to create the dashboard.",
    tags: ["React", "Next.js", "Bootstrap", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
	"Bootstrap",
  "WordPress",
  "CPT's",
	"PHP",
  "Framer Motion",
	"Adobe Suite",
  "Branding",
  "UI/UX",
  "SEO",
  "Photography",
  "Video Editing",
  "Typography",
] as const;
