import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function AccordionProfile() {
  return (
    <Accordion
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            height: "auto",
            transition: {
              height: {
                type: "spring",
                stiffness: 500,
                damping: 30,
                duration: 1,
              },
              opacity: {
                easings: "ease",
                duration: 1,
              },
            },
          },
          exit: {
            y: -10,
            opacity: 0,
            height: 0,
            transition: {
              height: {
                easings: "ease",
                duration: 0.25,
              },
              opacity: {
                easings: "ease",
                duration: 0.3,
              },
            },
          },
        },
      }}
    >
      <AccordionItem key="1" aria-label="Accordion 1" title="Mask" className="pl-5 pr-5 bg-[#F8F7F1] dark:bg-[#1B1B1B] rounded-xl">
        <button className="flex w-full text-left border-t-[0.1px] border-black dark:border-white font-semibold py-2">
          <svg width="25" height="25" viewBox="0 0 30 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.5 0H7.5C3 0 0 2.64706 0 8.82353V21.1765C0 27.3529 3 30 7.5 30H22.5C27 30 30 27.3529 30 21.1765V8.82353C30 2.64706 27 0 22.5 0ZM23.205 10.7471L18.51 15.1588C17.52 16.0941 16.26 16.5529 15 16.5529C13.74 16.5529 12.465 16.0941 11.49 15.1588L6.795 10.7471C6.315 10.2882 6.24 9.44118 6.615 8.87647C7.005 8.31176 7.71 8.20588 8.19 8.66471L12.885 13.0765C14.025 14.1529 15.96 14.1529 17.1 13.0765L21.795 8.66471C22.275 8.20588 22.995 8.29412 23.37 8.87647C23.76 9.44118 23.685 10.2882 23.205 10.7471Z" fill="currentColor" />
          </svg>
          <span className="text-md pl-2">Messages</span></button>
          
      </AccordionItem>
    </Accordion>
  );
}

