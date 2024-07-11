"use client";

import { SessionProvider } from "next-auth/react";
import type { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

export const NextAuthProvider = ({ children }: { children: ReactNode }) => {
  return <SessionProvider>
    <Toaster position='top-center' reverseOrder={false} />
    {children}
  </SessionProvider>;
};