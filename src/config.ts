import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://rakrisi.com/", // replace this with your deployed domain
  author: "Radhe Krishna Singh",
  desc: "RaKriSi Blogging Website",
  title: "RaKriSi",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/rakrisi/",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },

  {
    name: "Instagram",
    href: "https://www.instagram.com/ra_kri_si/",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/radhekrishna-singh-78323616b/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:radhesingh12321@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/ra_kri_si",
    linkTitle: `${SITE.title} on Twitter`,
    active: false,
  },
];
