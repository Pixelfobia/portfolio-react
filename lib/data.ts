import React from "react";
// import { CgWorkAlt } from "react-icons/cg";
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
      "Responsible of website design from sketch. Built in WordPress also logo creation, merchandise products, SEO, image optimization, flyer design, poster, banners, video editing.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
  {
    title: "Web & graphic designer",
    location: "Bradford, UK",
    description:
      "In this company I was responsible for creating the online store with Wordpress and WooCommerce. I also designed labels, packaging, print and digital graphics, as well as working on SEO, email template design for MailChimp, API configuration, landing pages and Google Analytics.",
    icon: React.createElement(FaReact),
    date: "2019 - 2020",
  },
] as const;

export const projectsData = [
  {
    title: "Food Recipe Finder",
    description:
      "Foodvarse is a dynamic recipe finder web application . This is a front-end-only project that is implemented using React, React Router, Redux, Redux Toolkit, and Tailwind CSS.",
    tags: ["React", "React Router", "Redux", "Api Edaman", "Tailwind"],
    imageUrl: foodfinderImg,
    enlaces: "https://foodvarse.netlify.app/",
  },
  {
    title: "5 Day Weather Forecast",
    description:
      "Presenting the user with current conditions (temperature, humidity and wind speed) and the 5-day forecast. Using the Open Weather API to create the dashboard.",
    tags: ["React", "JavaScript", "RestAPI", "Bootstrap"],
    imageUrl: forecastImg,
    enlaces: "https://5dayforecast.netlify.app/",
  },
  {
    title: "Cineclub Almería",
    description:
      "Responsible for the design of website design from sketch. Built in WordPress, logo creation, merchandise products, SEO, image optimization, flyer design, poster, banners, video editing.",
    tags: ["WordPress", "CPT's", "PHP", "Tailwind", "JavaScript", "Adobe Suite"],
    imageUrl: cineclubImg,
    enlaces: "https://lafactoria-almeria.com/",
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
  "Photogrammetry",
  "Video Editing",
  "Typography",
] as const;
