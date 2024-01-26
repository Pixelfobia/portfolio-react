import React from "react";
// import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import foodfinderImg from "@/public/foodfinder.jpg";
import forecastImg from "@/public/forecast.png";
import searchcarImg from "@/public/searchcar.jpg";
import wpthemeImg from "@/public/wptheme.png";

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
    enlace: "https://www.edx.org/boot-camps/coding/careers/front-end-developer",
  },
  {
    title: "La Factoría, Digital designer",
    location: "Almería, SP",
    description:
      "Responsible of website design from sketch. Built in WordPress also logo creation, merchandise products, SEO, image optimization, flyer design, poster, banners, video editing.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
    enlace: "https://lafactoria-almeria.com",
  },
  {
    title: "Magma Organic, Web designer",
    location: "Bradford, UK",
    description:
      "In this company I was responsible for creating the online store with Wordpress and WooCommerce. I also designed labels, packaging, print and digital graphics, as well as working on SEO, email template design for MailChimp, API configuration, landing pages and Google Analytics.",
    icon: React.createElement(FaReact),
    date: "2019 - 2020",
    enlace: "https://britishcbd.net",
  },
  {
    title: "Prensarama, Layout designer",
    location: "Almeria, SP",
    description:
      "In this company I was responsible for the layout of editorial publications and the design of advertisements.",
    icon: React.createElement(FaReact),
    date: "2008 - 2015",
    enlace: "https://prensarama.com",
  },
  {
    title: "Los Escullos, Digital designer",
    location: "Almeria, SP",
    description:
      "At Los Escullos Resort and at the Rodalquilar Hotel, I carried out redesign work on the website and corporate image, e-commerce, design of posters and flyers, advertising banners and graphic resources. I was also in charge of the local network, backups and contact with software providers.",
    icon: React.createElement(FaReact),
    date: "2000 - 2008",
    enlace: "https://losescullossanjose.com",
  },
] as const;

export const projectsData = [
  {
    title: "Custom WordPress Theme from scratch",
    description:
      "Creating a WordPress theme from sketch, using Boostrap and Pods Custom post types",
    tags: ["PHP", "HTML", "CSS", "Bootstrap", "Pods CPT"],
    imageUrl: wpthemeImg,
    enlaces: "https://github.com/Pixelfobia/WP-Theme/tree/main",
  },
  {
    title: "Food Recipe Finder",
    description:
      "Foodvarse is a dynamic recipe finder web application . This is a front-end-only project that is implemented using React, React Router, Redux, Redux Toolkit, and Tailwind CSS.",
    tags: ["React", "React Router", "Redux", "Api Edaman", "Tailwind"],
    imageUrl: foodfinderImg,
    enlaces: "https://pixelfobia.github.io/Food-Recipe-Finder/",
  },
  {
    title: "5 Day Weather Forecast",
    description:
      "Presenting the user with current conditions (temperature, humidity and wind speed) and the 5-day forecast. Using the Open Weather API to create the dashboard.",
    tags: ["React", "JavaScript", "RestAPI", "Bootstrap"],
    imageUrl: forecastImg,
    enlaces: "https://pixelfobia.github.io/Day-Weather-Forecast/",
  },
  {
    title: "Search Car",
    description:
      "App for a vehicle search engine for rent with the Use Next.js 13 App Router and Server Side Rendering, Implement Advanced Search Functionality, Create Filtering Capabilities, Optimize Metadata and SEO, Create custom filter, combobox, and modal elements.",
    tags: ["React", "Nextjs", "TypeScript", "Tailwind", "API's", "Adobe Suite"],
    imageUrl: searchcarImg,
    enlaces: "https://search-car-react.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Nextjs",
  "Nodejs",
  "Git",
  "Tailwind",
	"Bootstrap",
  "WordPress",
  "CPT's",
	"PHP",
	"Photoshop",
  "Illustrator",
  "InDesign",
  "Premiere Pro",
  "After Effects",
  "XD/Figma",
  "Branding",
  "UI/UX",
  "SEO",
  "Photography",
  "Photogrammetry",
  "Typography",
] as const;