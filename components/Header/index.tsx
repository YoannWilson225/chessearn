"use client";
import { signOut, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Burger from "./Burger";
import { NavigationMenuDemo } from "./NavbarLinks";
import ProfilAvatar from "./ProfilAvatar";
import { Button } from "@nextui-org/react";
// import { authOptions } from "@/app/lib/auth";
// import './style.css'

const Header = () => {
  const { data: session } = useSession();

  console.log('session', session);

  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  // const navbarToggleHandler = () => {
  //   setNavbarOpen(!navbarOpen);
  // };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  // const handleSubmenu = (index: any) => {
  //   if (openIndex === index) {
  //     setOpenIndex(-1);
  //   } else {
  //     setOpenIndex(index);
  //   }
  // };

  const { theme, setTheme } = useTheme();

  // const [session, setSession] = useState(null);

  // console.log(session);

  // useEffect(() => {
  //   const fetchSession = async () => {
  //     const session: any = await getServerSession(authOptions);
  //     setSession(session);
  //     console.log(session);

  //   };

  //   fetchSession();
  // }, []);

  return (
    <>
      <header
        className={`ud-header left-0 top-0 z-40 pb-4 flex w-full items-center ${sticky
          ? "shadow-nav fixed z-[999] border-b-[0.1px] border-b-[#212121] dark:border-b-[white]  border-stroke backdrop-blur-[5px] dark:border-dark-5/20 dark:bg-dark/10"
          : "absolute bg-transparent"
          }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="flex w-60 max-w-full px-1">
              <Burger />
              <Link
                href="/"
                className={`pt-1 navbar-logo block w-full`}
              ><>
                  <Image
                    src={`${sticky
                      ? "/images/logo/logo.svg"
                      : "/images/logo/logo.svg"
                      }`}
                    alt="logo"
                    width={140}
                    height={30}
                    className="header-logo w-full dark:hidden"
                  />
                  <Image
                    src={"/images/logo/logo-white.svg"}
                    alt="logo"
                    width={140}
                    height={30}
                    className="header-logo hidden w-full dark:block"
                  />
                </>
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 px-6 py-4 duration-100 dark:border-body-color/20 dark:bg-dark-2 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 lg:dark:bg-transparent ${navbarOpen
                    ? "visibility top-full opacity-100"
                    : "invisible top-[120%] opacity-0"
                    }`}
                >
                  <ul className="block lg:ml-8 lg:flex lg:gap-x-8 xl:ml-14 pt-5 xl:gap-x-12">
                    <NavigationMenuDemo></NavigationMenuDemo>
                  </ul>
                </nav>
              </div>
              <div className="hidden items-center justify-end pr-16 sm:flex lg:pr-0">
                {/* theme toggler */}
                <button
                  aria-label="theme toggler"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="flex h-8 w-8 items-center justify-center duration-300 pt-5 mr-5"
                >
                  <span>
                    <svg
                      viewBox="0 0 16 16"
                      className="hidden h-[22px] w-[22px] fill-current dark:block"
                    >
                      <path d="M4.50663 3.2267L3.30663 2.03337L2.36663 2.97337L3.55996 4.1667L4.50663 3.2267ZM2.66663 7.00003H0.666626V8.33337H2.66663V7.00003ZM8.66663 0.366699H7.33329V2.33337H8.66663V0.366699V0.366699ZM13.6333 2.97337L12.6933 2.03337L11.5 3.2267L12.44 4.1667L13.6333 2.97337ZM11.4933 12.1067L12.6866 13.3067L13.6266 12.3667L12.4266 11.1734L11.4933 12.1067ZM13.3333 7.00003V8.33337H15.3333V7.00003H13.3333ZM7.99996 3.6667C5.79329 3.6667 3.99996 5.46003 3.99996 7.6667C3.99996 9.87337 5.79329 11.6667 7.99996 11.6667C10.2066 11.6667 12 9.87337 12 7.6667C12 5.46003 10.2066 3.6667 7.99996 3.6667ZM7.33329 14.9667H8.66663V13H7.33329V14.9667ZM2.36663 12.36L3.30663 13.3L4.49996 12.1L3.55996 11.16L2.36663 12.36Z" />
                    </svg>

                    <svg
                      viewBox="0 0 23 23"
                      className={`h-[30px] w-[30px] fill-current dark:hidden ${!sticky && ""
                        }`}
                    >
                      <g clipPath="url(#clip0_40_125)">
                        <path d="M16.6111 15.855C17.591 15.1394 18.3151 14.1979 18.7723 13.1623C16.4824 13.4065 14.1342 12.4631 12.6795 10.4711C11.2248 8.47905 11.0409 5.95516 11.9705 3.84818C10.8449 3.9685 9.72768 4.37162 8.74781 5.08719C5.7759 7.25747 5.12529 11.4308 7.29558 14.4028C9.46586 17.3747 13.6392 18.0253 16.6111 15.855Z" />
                      </g>
                    </svg>
                  </span>
                </button>
                {/* {session ? */}
                <ProfilAvatar />
                <div className="pt-5">
                  <Button
                    href="/"
                    className={`px-6 py-3 rounded-[20px] border font-semi bg-transparent dark:border-white border-[#1B1B1B]`}
                  >
                    0,0 $
                  </Button>
                  {/* <Button
                    className={`px-6 py-3 ml-5 rounded-[20px] font-semibold text-[black] bg-[#F9CE00]`}
                  >
                    <svg viewBox="0 -0.5 25 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.75 9.874C11.75 10.2882 12.0858 10.624 12.5 10.624C12.9142 10.624 13.25 10.2882 13.25 9.874H11.75ZM13.25 4C13.25 3.58579 12.9142 3.25 12.5 3.25C12.0858 3.25 11.75 3.58579 11.75 4H13.25ZM9.81082 6.66156C10.1878 6.48991 10.3542 6.04515 10.1826 5.66818C10.0109 5.29121 9.56615 5.12478 9.18918 5.29644L9.81082 6.66156ZM5.5 12.16L4.7499 12.1561L4.75005 12.1687L5.5 12.16ZM12.5 19L12.5086 18.25C12.5029 18.25 12.4971 18.25 12.4914 18.25L12.5 19ZM19.5 12.16L20.2501 12.1687L20.25 12.1561L19.5 12.16ZM15.8108 5.29644C15.4338 5.12478 14.9891 5.29121 14.8174 5.66818C14.6458 6.04515 14.8122 6.48991 15.1892 6.66156L15.8108 5.29644ZM13.25 9.874V4H11.75V9.874H13.25ZM9.18918 5.29644C6.49843 6.52171 4.7655 9.19951 4.75001 12.1561L6.24999 12.1639C6.26242 9.79237 7.65246 7.6444 9.81082 6.66156L9.18918 5.29644ZM4.75005 12.1687C4.79935 16.4046 8.27278 19.7986 12.5086 19.75L12.4914 18.25C9.08384 18.2892 6.28961 15.5588 6.24995 12.1513L4.75005 12.1687ZM12.4914 19.75C16.7272 19.7986 20.2007 16.4046 20.2499 12.1687L18.7501 12.1513C18.7104 15.5588 15.9162 18.2892 12.5086 18.25L12.4914 19.75ZM20.25 12.1561C20.2345 9.19951 18.5016 6.52171 15.8108 5.29644L15.1892 6.66156C17.3475 7.6444 18.7376 9.79237 18.75 12.1639L20.25 12.1561Z" fill="currentColor"></path> </g></svg>
                      Logout

                  </Button> */}
                </div>
                {/* : */}
                {/* <div className="pt-5">
                    <Link
                      href="/sign-in"
                      className={`px-6 py-3 w-[169px] h-[69px] rounded-[20px] border dark:border-white border-[#1B1B1B]`}
                    >
                      Login
                    </Link>
                    <Link
                      href="/sign-up"
                      className={`px-6 py-3 ml-5 w-[169px] h-[69px] rounded-[20px] border dark:border-white border-[#1B1B1B]`}
                    >
                      Register
                    </Link>
                  </div> */}
                {/* } */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
