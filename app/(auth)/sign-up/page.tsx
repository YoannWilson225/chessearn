import Signup from "@/components/Auth/SignUp";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Register",
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
