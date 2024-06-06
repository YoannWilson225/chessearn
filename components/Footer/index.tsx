"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <>
            <footer className="bg-white dark:bg-black relative z-10 pt-16 md:pt-20 lg:pt-24">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
                            <div className="mb-12 max-w-[300px] lg:mb-16">
                                <Link
                                    href="/"
                                    className={`pt-1 navbar-logo block w-full`}
                                ><>
                                        <Image
                                            src="/images/logo/logo.svg"
                                            alt="logo"
                                            width={100}
                                            height={30}
                                            className="header-logo w-full dark:hidden"
                                        />
                                        <Image
                                            src={"/images/logo/logo-white.svg"}
                                            alt="logo"
                                            width={100}
                                            height={30}
                                            className="header-logo hidden w-full dark:block"
                                        />
                                    </>
                                </Link>
                                <p className="mb-9 italic">
                                    "The game of kings, the passion of strategic souls. Here, each piece has its role,
                                    every shot a challenge. Virtual chessboard, where intelligence reigns supreme."                              </p>
                                <div className="flex items-center">
                                    <a
                                        href="/"
                                        aria-label="social-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mr-6 text-body-color duration-300 hover:text-[#6D28D9] dark:text-body-color-dark dark:hover:text-[#6D28D9]"
                                    >
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 22 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12.1 10.4939V7.42705C12.1 6.23984 13.085 5.27741 14.3 5.27741H16.5V2.05296L13.5135 1.84452C10.9664 1.66676 8.8 3.63781 8.8 6.13287V10.4939H5.5V13.7183H8.8V20.1667H12.1V13.7183H15.4L16.5 10.4939H12.1Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        href="/"
                                        aria-label="social-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mr-6 text-body-color duration-300 hover:text-[#6D28D9] dark:text-body-color-dark dark:hover:text-[#6D28D9]"
                                    >
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 22 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M16.8218 5.1344C16.0887 4.29394 15.648 3.19805 15.648 2H14.7293C14.9659 3.3095 15.7454 4.43326 16.8218 5.1344Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M8.3218 11.9048C6.73038 11.9048 5.43591 13.2004 5.43591 14.7931C5.43591 15.903 6.06691 16.8688 6.98556 17.3517C6.64223 16.8781 6.43808 16.2977 6.43808 15.6661C6.43808 14.0734 7.73255 12.7778 9.324 12.7778C9.62093 12.7778 9.90856 12.8288 10.1777 12.9124V9.40192C9.89927 9.36473 9.61628 9.34149 9.324 9.34149C9.27294 9.34149 9.22654 9.34614 9.1755 9.34614V12.0394C8.90176 11.9558 8.61873 11.9048 8.3218 11.9048Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M19.4245 6.67608V9.34614C17.6429 9.34614 15.9912 8.77501 14.6456 7.80911V14.7977C14.6456 18.2851 11.8108 21.127 8.32172 21.127C6.97621 21.127 5.7235 20.6998 4.69812 19.98C5.8534 21.2198 7.50049 22 9.32392 22C12.8083 22 15.6478 19.1627 15.6478 15.6707V8.68211C16.9933 9.64801 18.645 10.2191 20.4267 10.2191V6.78293C20.0787 6.78293 19.7446 6.74574 19.4245 6.67608Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M14.6456 14.7977V7.80911C15.9912 8.77501 17.6429 9.34614 19.4245 9.34614V6.67608C18.3945 6.45788 17.4899 5.90063 16.8218 5.1344C15.7454 4.43326 14.9704 3.3095 14.7245 2H12.2098L12.2051 15.7775C12.1495 17.3192 10.8782 18.5591 9.32393 18.5591C8.35884 18.5591 7.50977 18.0808 6.98085 17.3564C6.06219 16.8688 5.4312 15.9076 5.4312 14.7977C5.4312 13.205 6.72567 11.9094 8.31708 11.9094C8.61402 11.9094 8.90168 11.9605 9.17079 12.0441V9.35079C5.75598 9.42509 3 12.2298 3 15.6707C3 17.3331 3.64492 18.847 4.69812 19.98C5.7235 20.6998 6.97621 21.127 8.32172 21.127C11.8061 21.127 14.6456 18.2851 14.6456 14.7977Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        href="/"
                                        aria-label="social-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mr-6 text-body-color duration-300 hover:text-[#6D28D9]"
                                    >
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11Z"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            />
                                            <circle cx="16.5" cy="7.5" r="1.5" fill="currentColor" />
                                            <circle
                                                cx="12"
                                                cy="12"
                                                r="3"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        href="/"
                                        aria-label="social-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-body-color duration-300 hover:text-[#6D28D9] dark:text-body-color-dark dark:hover:text-[#6D28D9]"
                                    >
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
                            <div className="mb-12 lg:mb-16">
                                <h2 className="mb-10 text-xl font-bold">Liens utiles</h2>
                                <ul>
                                    <li>
                                        <Link
                                            href="/"
                                            className="mb-4 inline-block text-base text-body-color duration-300 hover:text-[#F9CE00]"
                                        >
                                            Accueil
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/about"
                                            className="mb-4 inline-block text-base text-body-color duration-300 hover:text-[#F9CE00]"
                                        >
                                            A propos
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/product"
                                            className="mb-4 inline-block text-base text-body-color duration-300 hover:text-[#F9CE00]"
                                        >
                                            Produits
                                        </Link>
                                    </li>
                                    {/* <li>
                    <Link
                      href="/service"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-[#6D28D9] dark:text-body-color-dark dark:hover:text-[#6D28D9]"
                    >
                      Services
                    </Link>
                  </li> */}
                                </ul>
                            </div>
                        </div>

                        <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
                            <div className="mb-12 lg:mb-16">
                                <h2 className="mb-10 text-xl font-bold">Aide & Support</h2>
                                <ul>
                                    <li>
                                        <Link
                                            href="/contact"
                                            className="mb-4 inline-block text-base text-body-color duration-300 hover:text-[#6D28D9] dark:text-body-color-dark dark:hover:text-[#6D28D9]"
                                        >
                                            Contacts
                                        </Link>
                                    </li>
                                    {/* <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-[#6D28D9] dark:text-body-color-dark dark:hover:text-[#6D28D9]"
                    >
                      Terms of Use
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-[#6D28D9] dark:text-body-color-dark dark:hover:text-[#6D28D9]"
                    >
                      About
                    </Link>
                  </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="py-8">
                        <p className="text-center text-base text-body-color">
                            Copyright © 2024{" "}
                            <a
                                href="https://chessearn.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-md hover:underline"
                            >
                                Chess<span className="text-[#F9CE00]">Earn</span>
                            </a>{" "}
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
