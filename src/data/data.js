import featureOne from "../assets/arr1.png";
import featureTwo from "../assets/arr2.png";
import featureThree from "../assets/arr3.png";
import featureFour from "../assets/arr4.png";

import slideOne from "../assets/1.jpg";
import slideTwo from "../assets/2.jpg";
import slideThree from "../assets/3.jpg";
import slideFour from "../assets/4.jpg";
import slideFive from "../assets/5.jpg";

export const featuresData = [
  {
    id: 1,
    boxStyles: "col-span-3 row-span-2",
    imageSrc: featureOne,
    title: "Women's Collections",
    description: "Featured Women's Collections That Give You Anther Vibe.",
    link: "Chop Now",
  },

  {
    id: 2,
    boxStyles: "col-start-2 row-start-3",
    imageSrc: featureTwo,
    title: "Play Station-5",
    description: " Black And White Version Of PS-5 Coming Out On Sale.",
    link: "Chop Now",
  },

  {
    id: 3,
    boxStyles: "col-start-1 row-start-3",
    imageSrc: featureThree,
    title: "Perfume",
    description: "Cocci Intense Out EDP.",
    link: "Chop Now",
  },

  {
    id: 4,
    boxStyles: "row-start-3",
    imageSrc: featureFour,
    title: "Speakers.",
    description: "Amazon Wireless Speakers.",
    link: "Chop Now",
  },
];

export const categoryLinks = [
  {
    class: "fa-solid fa-mobile",
  },
  { class: "fa-solid fa-desktop" },
  { class: "fa-solid fa-camera" },
  { class: "fa-solid fa-headphones" },
  { class: "fa-solid fa-gamepad" },
];

export const HomeLinksData = [
  {
    id: 1,
    title: "Women's Fashion",
    linkHref: "/women",
  },

  {
    id: 2,
    title: "Men's Fashion",
    linkHref: "/men",
  },

  {
    id: 3,
    title: "Electronics",
    linkHref: "/electronics",
  },

  {
    id: 4,
    title: "Baby & Toys",
    linkHref: "/baby",
  },

  {
    id: 5,
    title: "Books",
    linkHref: "/books",
  },

  {
    id: 6,
    title: "Games",
    linkHref: "/books",
  },

  {
    id: 7,
    title: "Games",
    linkHref: "/books",
  },

  {
    id: 8,
    title: "Beauty & Health",
    linkHref: "/books",
  },
];

export const headerLinksData = [
  {
    id: 1,
    title: "Home",
    linkHref: "/",
  },

  {
    id: 2,
    title: "Contact",
    linkHref: "/contact",
  },

  {
    id: 3,
    title: "About",
    linkHref: "/about",
  },

  {
    id: 4,
    title: "Sign Up",
    linkHref: "/signUp",
  },
];

export const slides = [
  { url: slideOne },
  { url: slideTwo },
  { url: slideThree },
  { url: slideFour },
  { url: slideFive },
];
