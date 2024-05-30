"use client";
// import { signOut, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import menuData from "./menuData";
import { Separator } from "../ui/separator";
import Burger from "./Burger";
// import './style.css'

const Header = () => {
  // const { data: session } = useSession();

  const pathUrl = usePathname();
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

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
  const handleSubmenu = (index: any) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const { theme, setTheme } = useTheme();

  return (
    <>
      <header
        className={`ud-header left-0 top-0 z-40 flex w-full items-center ${sticky
          ? "shadow-nav fixed z-[999] border-b border-stroke backdrop-blur-[5px] dark:border-dark-5/20 dark:bg-dark/10"
          : "absolute bg-transparent"
          }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="flex w-60 max-w-full px-1">
              <Burger />
              <Link
                href="/"
                className={`navbar-logo block w-full`}
              >
                {pathUrl !== "/" ? (
                  <>
                    <Image
                      src={`/images/logo/logo.svg`}
                      alt="logo"
                      width={240}
                      height={30}
                      className="header-logo w-full dark:hidden"
                    />
                    <Image
                      src={`/images/logo/logo-white.svg`}
                      alt="logo"
                      width={240}
                      height={30}
                      className="header-logo hidden w-full dark:block"
                    />
                  </>
                ) : (
                  <>
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
                )}
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                {/* <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${navbarOpen ? " top-[7px] rotate-45" : " "
                      } ${pathUrl !== "/" && ""} ${pathUrl === "/" && sticky
                        ? ""
                        : ""
                      }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${navbarOpen ? "opacity-0 " : " "
                      } ${pathUrl !== "/" && ""} ${pathUrl === "/" && sticky
                        ? ""
                        : ""
                      }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${navbarOpen ? " top-[-8px] -rotate-45" : " "
                      } ${pathUrl !== "/" && ""} ${pathUrl === "/" && sticky
                        ? ""
                        : ""
                      }`}
                  />
                </button> */}
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 px-6 py-4 duration-100 dark:border-body-color/20 dark:bg-dark-2 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 lg:dark:bg-transparent ${navbarOpen
                    ? "visibility top-full opacity-100"
                    : "invisible top-[120%] opacity-0"
                    }`}
                >
                  <ul className="block lg:ml-8 lg:flex lg:gap-x-8 xl:ml-14 pt-5 xl:gap-x-12">
                    {menuData.map((menuItem, index) =>
                      menuItem.path ? (
                        <li key={index} className="group relative">
                          {pathUrl !== "/" ? (
                            <Link
                              onClick={navbarToggleHandler}
                              scroll={false}
                              href={menuItem.path}
                              className={`ud-menu-scroll flex lg:inline-flex font-semibold lg:px-0 lg:py-6 ${pathUrl === menuItem?.path && ""
                                }`}
                            >
                              {menuItem.title}
                            </Link>
                          ) : (
                            <Link
                              scroll={false}
                              href={menuItem.path}
                              className={`ud-menu-scroll flex py-2 font-semibold text-base lg:inline-flex lg:px-0 lg:py-6 ${sticky
                                ? ""
                                : ""
                                } ${pathUrl === menuItem?.path &&
                                sticky &&
                                ""
                                }`}
                            >
                              {menuItem.title}
                            </Link>
                          )}
                        </li>
                      ) : (
                        <li className="submenu-item group relative" key={index}>
                          {pathUrl !== "/" ? (
                            <button
                              onClick={() => handleSubmenu(index)}
                              className={`ud-menu-scroll flex items-center justify-between py-2 text-base lg:inline-flex lg:px-0 lg:py-6`}
                            >
                              {menuItem.title}

                              <span className="pl-1">
                                <svg
                                  className={`duration-300 lg:group-hover:rotate-180`}
                                  width="16"
                                  height="17"
                                  viewBox="0 0 16 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.00039 11.9C7.85039 11.9 7.72539 11.85 7.60039 11.75L1.85039 6.10005C1.62539 5.87505 1.62539 5.52505 1.85039 5.30005C2.07539 5.07505 2.42539 5.07505 2.65039 5.30005L8.00039 10.525L13.3504 5.25005C13.5754 5.02505 13.9254 5.02505 14.1504 5.25005C14.3754 5.47505 14.3754 5.82505 14.1504 6.05005L8.40039 11.7C8.27539 11.825 8.15039 11.9 8.00039 11.9Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </button>
                          ) : (
                            <button
                              onClick={() => handleSubmenu(index)}
                              className={`ud-menu-scroll flex items-center justify-between py-2 text-base lg:inline-flex lg:px-0 lg:py-6 ${sticky
                                ? ""
                                : ""
                                }`}
                            >
                              {menuItem.title}

                              <span className="pl-1">
                                <svg
                                  className={`duration-300 lg:group-hover:rotate-180`}
                                  width="16"
                                  height="17"
                                  viewBox="0 0 16 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.00039 11.9C7.85039 11.9 7.72539 11.85 7.60039 11.75L1.85039 6.10005C1.62539 5.87505 1.62539 5.52505 1.85039 5.30005C2.07539 5.07505 2.42539 5.07505 2.65039 5.30005L8.00039 10.525L13.3504 5.25005C13.5754 5.02505 13.9254 5.02505 14.1504 5.25005C14.3754 5.47505 14.3754 5.82505 14.1504 6.05005L8.40039 11.7C8.27539 11.825 8.15039 11.9 8.00039 11.9Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </button>
                          )}

                          <div
                            className={`submenu relative left-0 top-full w-[250px] rounded-sm p-4 transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${openIndex === index ? "!-left-[25px]" : "hidden"
                              }`}
                          >
                            {menuItem?.submenu?.map((submenuItem: any, i: any) => (
                              <Link
                                href={submenuItem.path}
                                key={i}
                                className={`block rounded px-4 py-[10px] text-sm ${pathUrl === submenuItem.path
                                  ? ""
                                  : ""
                                  }`}
                              >
                                {submenuItem.title}
                              </Link>
                            ))}
                          </div>
                        </li>
                      ),
                    )}
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
                      className={`h-[30px] w-[30px] fill-current dark:hidden ${!sticky && pathUrl === "/" && ""
                        }`}
                    >
                      <g clipPath="url(#clip0_40_125)">
                        <path d="M16.6111 15.855C17.591 15.1394 18.3151 14.1979 18.7723 13.1623C16.4824 13.4065 14.1342 12.4631 12.6795 10.4711C11.2248 8.47905 11.0409 5.95516 11.9705 3.84818C10.8449 3.9685 9.72768 4.37162 8.74781 5.08719C5.7759 7.25747 5.12529 11.4308 7.29558 14.4028C9.46586 17.3747 13.6392 18.0253 16.6111 15.855Z" />
                      </g>
                    </svg>
                  </span>
                </button>
                <div className="pt-5">
                  {pathUrl !== "/" ? (
                    <>
                      <Link
                        href="/signin"
                        className="px-7 py-3 w-[169px] h-[69px] rounded-[20px] border border-white"
                      >
                        Login
                      </Link>
                      <Link
                        href="/signup"
                        className="px-6 py-3 w-[169px] h-[69px] rounded-[20px] border border-white"
                      >
                        Register
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/signin"
                        className={`px-6 py-3 w-[169px] h-[69px] rounded-[20px] border dark:border-white border-[#1B1B1B]`}
                      >
                        Login
                      </Link>
                      <Link
                        href="/signup"
                        className={`px-6 py-3 ml-5 w-[169px] h-[69px] rounded-[20px] border dark:border-white border-[#1B1B1B]`}
                      >
                        Register
                      </Link>
                    </>
                  )}
                </div>

                {/* {session?.user ? (
                  <>
                    <p
                      className={`loginBtn px-7 py-3 text-base font-medium ${
                        !sticky && pathUrl === "/" ? "text-white" : "text-dark"
                      }`}
                    >
                      {session?.user?.name}
                    </p>
                    {pathUrl !== "/" || sticky ? (
                      <button
                        onClick={() => signOut()}
                        className="signUpBtn rounded-lg bg-primary bg-opacity-100 px-6 py-3 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-20 hover:text-dark"
                      >
                        Sign Out
                      </button>
                    ) : (
                      <button
                        onClick={() => signOut()}
                        className="signUpBtn rounded-lg  bg-opacity-20 px-6 py-3 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
                      >
                        Sign Out
                      </button>
                    )}
                  </>
                ) : (
                  <>
                    {pathUrl !== "/" ? (
                      <>
                        <Link
                          href="/signin"
                          className="px-7 py-3 text-base font-medium text-dark hover:opacity-70 dark:text-white"
                        >
                          Sign In
                        </Link>
                        <Link
                          href="/signup"
                          className="rounded-lg bg-primary px-6 py-3 text-base font-medium text-white duration-300 ease-in-out hover:bg-primary/90 dark:/10 dark:hover:/20"
                        >
                          Sign Up
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link
                          href="/signin"
                          className={`px-7 py-3 text-base font-medium hover:opacity-70 ${
                            sticky ? "text-dark dark:text-white" : "text-white"
                          }`}
                        >
                          Sign In
                        </Link>
                        <Link
                          href="/signup"
                          className={`rounded-lg px-6 py-3 text-base font-medium text-white duration-300 ease-in-out ${
                            sticky
                              ? "bg-primary hover:bg-primary/90 dark:/10 dark:hover:/20"
                              : "/10 hover:/20"
                          }`}
                        >
                          Sign Up
                        </Link>
                      </>
                    )}
                  </>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
