"use client";

import { ContainerPage } from "@/components/ContainerPage";

import { useState } from "react";

export default function Resume() {
  const [isOpenCV, setIsOpenCV] = useState<Boolean>(false);

  const handleOpenCV = () => {
    setIsOpenCV(!isOpenCV);
  };

  return (
    <ContainerPage key="resume-page">
      <main
        className={`sm:col-span-4 sm:col-start-3 sm:row-start-1 min-h-screen sm:my-28 my-16  mx-4 ${
          isOpenCV ? "overflow-y-hidden h-full" : ""
        }`}
      >
        <div className="text-2xl font-semibold text-white">Resume</div>
        <div className="text-sm mt-1 text-white/60">
          Resume cá nhân của tớ cho nhà tuyển dụng.
        </div>
        <div className="text-white/60 mb-2 sm:w-[732px] w-[272px]  sm:overflow-auto overflow-hidden">
          ..................................................................................................................................................................................................................
        </div>

        <img
          onClick={handleOpenCV}
          className="sm:w-full w-[272px]  rounded-md object-cover"
          src="/CVI.png"
        />
        <div className="text-sm text-blue-500 mt-4">
          {" "}
          <a href="/CV.pdf" download="CV.pdf" className="hover:underline">
            Tải xuống CV?
          </a>
        </div>
        <div className="mb-12 h-[72px] text-xs text-white/60 flex mt-2 ">
          <div className="w-3  flex justify-center items-center h-5">
            <svg
              fill="#000000"
              viewBox="0 0 24 24"
              id="left-arrow"
              data-name="Flat Line"
              xmlns="http://www.w3.org/2000/svg"
              className="icon flat-line"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <line
                  id="primary"
                  x1="21"
                  y1="12"
                  x2="3"
                  y2="12"
                  style={{
                    fill: "none",
                    stroke: "#ffffff",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                  }}
                ></line>
                <polyline
                  id="primary-2"
                  data-name="primary"
                  points="6 9 3 12 6 15"
                  style={{
                    fill: "none",
                    stroke: "#ffffff",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                  }}
                ></polyline>
              </g>
            </svg>
          </div>
          <a href="http://localhost:3000/home" className="cursor-pointer">
            Quay lại
          </a>
        </div>
      </main>
      {isOpenCV && (
        <div
          onClick={handleOpenCV}
          className="fixed inset-0 flex justify-center items-center z-[100] backdrop-blur-md overflow-y-hidden bg-black/50"
        >
          <img className="w-[456px] object-cover z-[100]" src="/CVI.png" />
        </div>
      )}
    </ContainerPage>
  );
}
