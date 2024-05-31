"use client";
// import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
// import toast from "react-hot-toast";
import SocialSignIn from "../SocialSignIn";
// import SwitchOption from "../SwitchOption";
// import MagicLink from "../MagicLink";
import Loader from "@/components/Common/Loader";
import { Label } from "@/components/ui/label";

const Signin = () => {
  const router = useRouter();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    checkboxToggle: false,
  });

  // const [isPassword, setIsPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // const loginUser = (e: any) => {
  //   e.preventDefault();

  //   setLoading(true);
  //   signIn("credentials", { ...loginData, redirect: false })
  //     .then((callback) => {
  //       if (callback?.error) {
  //         toast.error(callback?.error);
  //         console.log(callback?.error);
  //         setLoading(false);
  //         return;
  //       }

  //       if (callback?.ok && !callback?.error) {
  //         toast.success("Login successful");
  //         setLoading(false);
  //         router.push("/");
  //       }
  //     })
  //     .catch((err) => {
  //       setLoading(false);
  //       console.log(err.message);
  //       toast.error(err.message);
  //     });
  // };

  return (
    <section className="dark:bg-dark lg:py-20">
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


              {/* 
              <SwitchOption
                isPassword={isPassword}
                setIsPassword={setIsPassword}
              /> */}

              {/* {isPassword ? ( */}
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-[22px]">
                  <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) =>
                      setLoginData({ ...loginData, email: e.target.value })
                    }
                    className="w-full rounded-md px-5 py-3 dark:bg-white bg-[#D2D2D2] text-base text-dark outline-none transition placeholder:text-dark-6 focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-black dark:focus:border-primary"
                  />
                </div>
                <div className="mb-[22px]">
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) =>
                      setLoginData({ ...loginData, password: e.target.value })
                    }
                    className="w-full rounded-md px-5 py-3 dark:bg-white bg-[#D2D2D2] dark:text-black outline-none transition"
                  />
                </div>
                <div className="mb-9">
                  <button
                    // onClick={loginUser}
                    type="submit"
                    className="flex w-full cursor-pointer items-center font-bold justify-center rounded-md bg-[#F9CE00] px-5 py-3 text-base text-white transition duration-300 ease-in-out"
                  >
                    Login {loading && <Loader />}
                  </button>
                </div>
                <SocialSignIn />

                {/* <span className="z-1 relative my-8 block text-center">
                  <span className="-z-1 absolute left-0 top-1/2 block h-px w-full bg-stroke"></span>
                  <span className="text-body-secondary relative z-10 inline-block  px-3 text-base">
                    OR
                  </span>
                </span> */}

              </form>
              {/* ) : (
                <MagicLink />
              )} */}

              <Link
                href="/forgot-password"
                className="mb-2 inline-block text-base text-dark text-[#F9CE00] hover:underline"
              >
                Forget Password?
              </Link>
              <p className="text-body-secondary text-base">
                You do not have an account ? <Link href="/sign-up" className="text-[#F9CE00] hover:underline">
                  Register !
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

export default Signin;




