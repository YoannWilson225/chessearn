import Signin from "@/components/Auth/SignIn";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Login",
};

const SigninPage = () => {
  return (
    <>
      {/* <Breadcrumb pageName="Sign In Page" /> */}

      <Signin />
    </>
  );
};

export default SigninPage;
