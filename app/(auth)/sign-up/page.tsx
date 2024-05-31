import Signup from "@/components/Auth/SignUp";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Sign Up | Play SaaS Starter Kit and Boilerplate for Next.js",
};

const SigninPage = () => {
  return (
    <>
      {/* <Breadcrumb pageName="Sign In Page" /> */}

      <Signup />
    </>
  );
};

export default SigninPage;
