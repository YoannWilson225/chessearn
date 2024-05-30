import React from "react";
import Image from "next/image";


const PreLoader = () => {
  return (
    <div className="fixed left-0 top-0 z-999999 flex h-screen w-screen items-center justify-center bg-white">
      <div className="h-20 w-20 animate-spin rounded-full border-4 border-solid border-[#F9CE00] border-t-transparent">
        {/* <Image
          src={"/images/logo/anim.svg"}
          alt="logo"
          width={30}
          height={53}
          className="header-logo hidden w-full dark:block"
        /> */}
      </div>
    </div>
  );
};

export default PreLoader;