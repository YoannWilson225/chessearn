import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "HOME",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "GAMES",
    path: "/",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "Antichess",
        path: "/",
        newTab: false,
      },
      {
        id: 62,
        title: "Chess960",
        path: "/",
        newTab: false,
      },
      {
        id: 63,
        title: "Crazyhouse",
        path: "/",
        newTab: false,
      },
      {
        id: 64,
        title: "Atomic",
        path: "/",
        newTab: false,
      }
    ],
  },
  {
    id: 3,
    title: "TOURNAMENT",
    path: "/",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "Swiss system",
        path: "/",
        newTab: false,
      },
      {
        id: 62,
        title: "Arena tournaments",
        path: "/",
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: "CHALLENGE",
    path: "/",
    newTab: false,
  },
  {
    id: 5,
    title: "COMMUNAUTY",
    path: "/",
    newTab: false,
  },
  // {
  //   id: 6,
  //   title: "Pages",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 61,
  //       title: "About Page",
  //       path: "/about",
  //       newTab: false,
  //     },
  //     {
  //       id: 62,
  //       title: "Pricing Page",
  //       path: "/pricing",
  //       newTab: false,
  //     },
  //     {
  //       id: 63,
  //       title: "Contact Page",
  //       path: "/contact",
  //       newTab: false,
  //     },
  //     {
  //       id: 64,
  //       title: "Blog Grid Page",
  //       path: "/blogs",
  //       newTab: false,
  //     },
  //     {
  //       id: 66,
  //       title: "Sign Up Page",
  //       path: "/signup",
  //       newTab: false,
  //     },
  //     {
  //       id: 67,
  //       title: "Sign In Page",
  //       path: "/signin",
  //       newTab: false,
  //     },
  //     {
  //       id: 68,
  //       title: "Error Page",
  //       path: "/error",
  //       newTab: false,
  //     },
  //   ],
  // },
];
export default menuData;
