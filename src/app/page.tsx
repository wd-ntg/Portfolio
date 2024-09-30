"use client";
import dynamic from "next/dynamic";
// import { Dog } from "../../components/Dog";
import VoxelDogLoader from "../components/voxel-dog-loader";
import { ContainerPage } from "@/components/ContainerPage";
import MusicPlayer from "@/components/MusicPlayer";
import { useMode } from "@/lib/context/modeContext";

const LazyVoxelDog = dynamic(() => import("../components/voxel-dog"), {
  ssr: false,
  loading: () => <VoxelDogLoader />,
});

const track = {
  title: "Bạn Đời",
  src: "/track.mp3",
};

export default function Home() {
  const { mode } = useMode();

  return (
    <ContainerPage key="home-page ">
      <main className="sm:col-span-4 sm:col-start-3 sm:row-start-1  sm:my-28 my-16  mx-4">
        <div className={`text-2xl font-bold sm:text-3xl font-playfair text-white`}>
          Nguyễn Trường Giang
        </div>
        <div className="text-sm mt-1 text-white/60">
          Web Developer / JS - TS - Golang - Java
        </div>
        <div className="border-b-[1px] sm:w-[245px] border-white/20 my-4"></div>

        <div className="text-sm text-white/60">
          Xin chào, tớ là Nguyễn Trường Giang (WD), sinh viên chuyên ngành Kỹ
          thuật phần mềm tại Học viện công nghệ Bưu chính viễn thông. Hiện tại
          tớ đang là sinh viên năm 4 và là một freelance part time. Tớ đang
          hướng tới trở thành một Fullstack Developer và thực hiện thêm nhiều
          ước mơ phía trước.
        </div>

        <div className="flex items-center space-x-2 my-6">
          <div className="w-6 h-6 border-[1px] border-white rounded-sm p-1">
            <svg
              viewBox="0 -0.5 17 17"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="si-glyph si-glyph-window"
              fill="#ffffff"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>921</title> <defs> </defs>{" "}
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  {" "}
                  <g transform="translate(1.000000, 0.000000)" fill="#ffffff">
                    {" "}
                    <path
                      d="M7.885,7.826 L8.781,1.59 C8.504,1.463 8.223,1.321 7.943,1.151 C5.855,-0.132 3.673,-0.085 2.052,0.257 L1.068,6.823 C2.592,6.478 5.276,6.237 7.885,7.826 L7.885,7.826 Z"
                      className="si-glyph-fill"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M15.177,7.688 L15.94,1.547 C14.907,2.019 12.536,2.84 9.978,1.953 L9.091,8.136 C11.565,9.47 14.029,8.373 15.177,7.688 L15.177,7.688 Z"
                      className="si-glyph-fill"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M7.674,9.199 C5.109,7.613 2.357,7.956 0.972,8.286 L0.065,14.021 C1.224,13.537 4.116,13.268 7,14.508 L7.718,9.224 C7.701,9.214 7.689,9.208 7.674,9.199 L7.674,9.199 Z"
                      className="si-glyph-fill"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M14.238,15.737 L15.041,9.301 C14.187,9.733 12.932,10.203 11.514,10.203 C10.702,10.203 9.833,10.043 8.961,9.632 L8.26,14.841 C8.326,14.88 8.395,14.907 8.464,14.948 C10.584,16.205 12.721,16.098 14.238,15.737 L14.238,15.737 Z"
                      className="si-glyph-fill"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </div>
          <div className="w-6 h-6 border-[1px] border-white rounded-sm p-1 flex justify-center items-center text-white">
            k
          </div>
          <div className="text-sm text-white/60 italic">để khám phá ,,,</div>
        </div>

        <div className="h-[1px] w-[152px] bg-white/20"></div>

        <div className="flex items-center space-x-4 my-6">
          <div className="border-[1px] border-white rounded-md p-1 flex items-center justify-center text-center text-[11px] cursor-pointer">
            <a className="text-white" href="http://localhost:3000/resume">
              {" "}
              Resume
            </a>
          </div>

          <div className="w-[1px] h-[24px] bg-white/20"></div>

          <div
            className="w-6 h-6 cursor-pointer"
            onClick={() => {
              window.open(
                "https://www.facebook.com/nguyengiang66/?locale=vi_VN",
                "_blank"
              );
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6ZM6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H12V13H11C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11H12V9.5C12 7.567 13.567 6 15.5 6H16.1C16.6523 6 17.1 6.44772 17.1 7C17.1 7.55228 16.6523 8 16.1 8H15.5C14.6716 8 14 8.67157 14 9.5V11H16.1C16.6523 11 17.1 11.4477 17.1 12C17.1 12.5523 16.6523 13 16.1 13H14V20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6Z"
                  fill="#ffffff"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <div
            className="w-6 h-6 cursor-pointer"
            onClick={() => {
              window.open("https://www.instagram.com/giang_.nt/", "_blank");
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                  fill="#ffffff"
                ></path>{" "}
                <path
                  d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                  fill="#ffffff"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                  fill="#ffffff"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <div
            className="w-6 h-6 cursor-pointer"
            onClick={() => {
              window.open("https://github.com/wd-ntg", "_blank");
            }}
          >
            <svg
              viewBox="0 0 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>github [#ffffff]</title>{" "}
                <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  {" "}
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-140.000000, -7559.000000)"
                    fill="#ffffff"
                  >
                    {" "}
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      {" "}
                      <path
                        d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                        id="github-[#ffffff]"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </div>
          <div
            className="w-6 h-6 cursor-pointer"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/truonggiangnguyen-web-dev/",
                "_blank"
              );
            }}
          >
            <svg
              fill="#ffffff"
              height="24px"
              width="24px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="-143 145 512 512"
              xmlSpace="preserve"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7 c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4 c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6 c35.5,0,63.3,23,63.3,72.4V508.1z"></path>{" "}
              </g>
            </svg>
          </div>
        </div>
        <div className="h-[1px] w-[94px] bg-white/20"></div>

        <div className="mt-36">
          <LazyVoxelDog />
        </div>
        <div className="mt-56">
          <div className="h-[1px] w-[94px] bg-white/20 mb-4"></div>
          <div>
            <div className="flex ml-4  items-center">
              <div className="w-[2px] h-[24px] bg-white mr-2"></div>
              <div className="text-xs text-white/60 italic">
                Lossless music player.
              </div>
            </div>
            <div className="mt-12 sm:max-w-full max-w-full ">
              <MusicPlayer track={track} />
            </div>
          </div>
        </div>
        <div className="mt-12">
          <div className="h-[1px] w-[94px] bg-white/20 mb-4"></div>
          <div className="flex ml-4  items-center">
            <div className="w-[2px] h-[24px] bg-white mr-2"></div>

            <div className="text-xs text-white/60 italic">
              Mr. Snake eating my contributions.
            </div>
          </div>
          <img
            src={`${!mode ? "https://raw.githubusercontent.com/yunkhngn/yunkhngn/output/github-contribution-grid-snake-dark.svg" : "https://raw.githubusercontent.com/yunkhngn/yunkhngn/output/github-contribution-grid-snake.svg"}`}
            alt="Snake Eating Contributions"
            className="w-full h-full"
          />
        </div>
        <div className="h-[1px] w-[56px] bg-white/20 mt-3"></div>
        <div className="text-xs text-white/20  italic mt-4 mx-4 sm:mb-2 mb-4 h-8">
          Dùng máy tính để có trải nghiệm tốt nhất
        </div>
      </main>
    </ContainerPage>
  );
}
