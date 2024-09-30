"use client"; // Đảm bảo dòng này để ứng dụng client-side

import { useRouter, usePathname } from "next/navigation";
import React, { useState } from "react";

export const LinkButton = ({
  children,
  link,
  text,
  decorate,
}: {
  children: React.ReactNode;
  link: string;
  text: string;
  decorate: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const [isHovered, setIsHovered] = useState<boolean>(false);

  const rootLink = link.slice(21);
  const isActive = pathname === rootLink;

  const handleNav = (link: string) => {
    if (link.slice(0, 19) === "https://portfoliowd") {
      router.push(link);
    } else {
      window.open(link, "_blank");
    }
  };

  return (
    <>
      <div
        onClick={() => handleNav(link)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="sm:w-10 sm:h-10 w-8 h-8 bg-[#222222] p-2 relative rounded-md flex justify-center items-center hover:scale-125 duration-200 hover:translate-y-[-8px] hover:mx-2 cursor-pointer"
      >
        <div className="sm:w-8 sm:h-8 w-6 h-6 flex justify-center items-center text-white/20">
          {children}
        </div>

        {isHovered && (
          <div className="flex justify-center items-center absolute top-[-32px] text-white/60 border-[1px] border-white/20 rounded-md px-2 py-1 text-[8px]">
            {text}
          </div>
        )}
        {isActive && (
          <div className="w-1 h-1 rounded-full bg-white absolute bottom-[-6px]"></div>
        )}
      </div>
      <div className={`block my-auto ${decorate}`}></div>
    </>
  );
};
