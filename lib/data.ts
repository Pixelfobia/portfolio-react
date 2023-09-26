import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import foodfinderImg from "@/public/foodfinder.jpg";
import forecastImg from "@/public/forecast.png";
import cineclubImg from "@/public/cineclub.jpg";

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
      "Responsible for the design of website design from sketch. Built in WordPress, logo creation, merchandise products, SEO, image optimization, flyer design, poster, banners, video editing.",
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
    title: "Food Recipe Finder",
    description:
      "Foodvarse is a dynamic recipe finder web application . This is a front-end-only project that is implemented using React, React Router, Redux, Redux Toolkit, and Tailwind CSS.",
    tags: ["React", "React Router", "Redux", "Api Edaman", "Tailwind"],
    imageUrl: foodfinderImg,
  },
  {
    title: "5 Day Weather Forecast",
    description:
      "Presenting the user with current conditions (temperature, humidity and wind speed) and the 5-day forecast. Using the Open Weather API to create the dashboard.",
    tags: ["React", "JavaScript", "RestAPI", "Bootstrap"],
    imageUrl: forecastImg,
  },
  {
    title: "Cineclub Almería",
    description:
      "Responsible for the design of website design from sketch. Built in WordPress, logo creation, merchandise products, SEO, image optimization, flyer design, poster, banners, video editing.",
    tags: ["WordPress", "CPT's", "PHP", "Tailwind", "JavaScript"],
    imageUrl: cineclubImg,
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
