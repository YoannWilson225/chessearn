"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SocialSignIn from "../SocialSignIn";
import { useState } from "react";
import Loader from "@/components/Common/Loader";
import { Input } from "@nextui-org/react";
import { EyeSlashFilledIcon } from "../components/EyeSlashFilledIcon";
import { EyeFilledIcon } from "../components/EyeFilledIcon";
import { MailIcon } from "../components/MailIcon";

const SignUp = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <section className="dark:bg-dark lg:py-[90px]">
      <div className="pt-14 container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp relative mx-auto max-w-[525px] overflow-hidden rounded-lg py-14 text-center sm:px-12 md:px-[60px] dark:bg-[#292929] bg-white"
              data-wow-delay=".15s"
            >
              <div className="mb-10 text-center">
                <Link href="/" className="mx-auto inline-block max-w-[160px]">
                  <Image
                    src="/images/logo/logo.svg"
                    alt="logo"
                    width={140}
                    height={30}
                    className="dark:hidden"
                  />
                  <Image
                    src="/images/logo/logo-white.svg"
                    alt="logo"
                    width={140}
                    height={30}
                    className="hidden dark:block"
                  />
                </Link>
              </div>
              <form >
                <div className="mb-[22px]">
                  <Input
                    label="Name"
                    labelPlacement="outside"
                    type="text"
                    placeholder="You"
                    name="name"
                    required
                    className="w-full rounded-md"
                  />
                </div>
                <div className="mb-[22px]">
                  <Input
                    type="email"
                    required
                    // isInvalid={false}
                    label="Email"
                    placeholder="you@example.com"
                    className="pt-5"
                    labelPlacement="outside"
                    endContent={
                      <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    errorMessage="Please enter a valid e-mail"
                  />
                </div>
                <div className="mb-[22px]">
                  <Input
                    type={isVisible ? "text" : "password"}
                    label="Password"
                    labelPlacement="outside"
                    variant="bordered"
                    placeholder="Enter your password"
                    className="pt-2"
                    endContent={
                      <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                        {isVisible ? (
                          <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                          <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        )}
                      </button>
                    }
                  />
                </div>
                <div className="mb-9">
                  <button
                    type="submit"
                    className="flex w-full cursor-pointer items-center font-bold justify-center rounded-md bg-[#F9CE00] px-5 py-3 text-base text-white transition duration-300 ease-in-out"
                  >
                    Register {loading && <Loader />}
                  </button>
                </div>
                <SocialSignIn />

              </form>
              <p className="text-body-secondary mb-4 text-base">
                By creating an account you are agree with our{" "}
                <a href="/#" className="text-[#F9CE00] font-semibold hover:underline">
                  Privacy
                </a>{" "}
                and{" "}
                <a href="/#" className="text-[#F9CE00] font-semibold hover:underline">
                  Policy
                </a>
              </p>

              <p className="text-body-secondary text-base">
                Already have an account ?  <Link
                  href="/sign-in"
                  className="pl-2 text-[#F9CE00] font-semibold hover:underline"
                >
                  Login !
                </Link>
              </p>
              <div>
                <span className="absolute right-1 top-1">
                  <Image src="images/logo/minisvg.svg" width={110}
                    height={30}
                    alt=""
                    className="hidden dark:block"
                  />
                </span>
                <span className="absolute bottom-1 left-1">
                  <Image src="images/logo/minisvg2.svg" width={110}
                    height={30}
                    alt="" className="hidden dark:block"
                  />
                </span>
              </div>

              <div>
                <span className="absolute right-1 top-1">
                  <Image src="images/logo/minisvg-white.svg" width={110}
                    height={30}
                    alt=""
                    className="dark:hidden" />
                </span>
                <span className="absolute bottom-1 left-1">
                  <Image src="images/logo/minisvg2-white.svg" width={110}
                    height={30}
                    alt="" className="dark:hidden" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
