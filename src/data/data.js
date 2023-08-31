import featureOne from "../assets/arr1.png";
import featureTwo from "../assets/arr2.png";
import featureThree from "../assets/arr3.png";
import featureFour from "../assets/arr4.png";

import slideOne from "../assets/1.jpg";
import slideTwo from "../assets/2.jpg";
import slideThree from "../assets/3.jpg";
import slideFour from "../assets/4.jpg";
import slideFive from "../assets/5.jpg";

import personOne from "../assets/person1.png";
import personTwo from "../assets/person2.png";
import personThree from "../assets/person3.png";

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

export const footerLinks = [
  {
    title: "Exclusive",
    items: [{ text: "Subscribe" }, { text: "Get 10% Off Your First Order" }],
  },
  {
    title: "Support",
    items: [
      { text: "Cairo, Egypt" },
      { text: "mustafakhaledinfo@gmail.com" },
      { text: "+201151747091" },
    ],
  },
  {
    title: "Account",
    items: [
      { text: "My Account" },
      { text: "Login / Register" },
      { text: "Cart" },
      { text: "Wishlist" },
      { text: "Shop" },
    ],
  },
  {
    title: "Quick Link",
    items: [
      { text: "Privacy Policy" },
      { text: "Terms Of Use" },
      { text: "FAQ" },
      { text: "Contact" },
    ],
  },
  {
    title: "Links",
    items: [
      { icon: "fa-brands fa-github", text: "" },
      { icon: "fa-brands fa-linkedin", text: "" },
    ],
  },
];

export const servicesData = [
  {
    id: 1,
    icon: "fa-solid fa-headset",
    title: "Free And Fast Delivery",
    description: " Free Delivery For All Orders Over $140",
  },

  {
    id: 2,
    icon: "fa-solid fa-truck-fast ",
    title: "24/7 Costumer Service",
    description: "Friendly 24/7 Customer Support",
  },

  {
    id: 3,
    icon: "fa-regular fa-circle-check",
    title: "Money Back Guarantee",
    description: "We Return Money Within 30 Days",
  },
];

export const aboutData = [
  {
    id: 1,
    number: "10.5K",
    icon: "fa-solid fa-shop",
    title: "Sellers active our site.",
  },

  {
    id: 2,
    number: "33k",
    icon: "fa-solid fa-dollar-sign",
    title: "Monthly Product Sale.",
  },

  {
    id: 3,
    number: "45.5k",
    icon: "fa-solid fa-bag-shopping",
    title: "Customer active in our site.",
  },

  {
    id: 4,
    number: "25k",
    icon: "fa-solid fa-sack-dollar",
    title: "Annual gross sale in our site.",
  },
];

export const contactFormInputs = [
  {
    id: 1,
    type: "text",
    placeholder: "Your Name",
    name: "userName",
  },
  {
    id: 2,
    type: "email",
    name: "userEmail",
    placeholder: "Your Email",
  },
  {
    id: 3,
    type: "number",
    name: "userPhone",
    placeholder: "Your Phone",
  },
];

export const teamData = [
  {
    id: 1,
    title: "Will Smith",
    image: personOne,
    description: "Product Designer.",
    links: "",
  },

  {
    id: 2,
    title: "Emma Watson",
    image: personTwo,
    description: "Managing Director.",
    links: "",
  },

  {
    id: 3,
    title: "Tom Cruise",
    image: personThree,
    description: "Founder.",
    links: "",
  },

  {
    id: 4,
    title: "Will Smith",
    image: personOne,
    description: "Product Designer.",
    links: "",
  },

  {
    id: 5,
    title: "Emma Watson",
    image: personTwo,
    description: "Managing Director.",
    links: "",
  },

  {
    id: 6,
    title: "Tom Cruise",
    image: personThree,
    description: "Founder.",
    links: "",
  },
];

export const signUpFormInputs = [
  {
    id: 1,
    type: "text",
    placeholder: "Name",
    name: "userName",
  },
  {
    id: 2,
    type: "email",
    placeholder: "Email",
    name: "userEmail",
  },
  {
    id: 3,
    type: "number",
    placeholder: "Phone Number Egy Only",
    name: "userPhone",
  },
  {
    id: 4,
    type: "password",
    placeholder: "Password",
    name: "password",
  },
];

export const loginFormInputs = [
  {
    id: 1,
    type: "email",
    placeholder: "Your Email",
    name: "userEmail",
  },
  {
    id: 2,
    type: "password",
    placeholder: "Your Password",
    name: "password",
  },
];
