"use client";

import { useState } from "react";
import { ContainerPage } from "@/components/ContainerPage";
import { repositoryData } from "@/utils/data";

export default function Project() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRepositories, setFilteredRepositories] =
    useState(repositoryData);

  const handleSearchChange = (event: any) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = repositoryData.filter(
      (repo) =>
        repo.name.toLowerCase().includes(value) ||
        repo.des.toLowerCase().includes(value)
    );
    setFilteredRepositories(filtered);
  };

  return (
    <ContainerPage key="project-page">
      <main className="sm:col-span-4 sm:col-start-3 sm:row-start-1 sm:my-28 my-16 mx-4">
        <div className="text-2xl font-bold sm:text-3xl font-playfair text-white">
          Dự án
        </div>
        <div className="text-sm mt-1 text-white/60 ">
          Những dự án lập trình cá nhân/pet projects của tớ từ Github.
        </div>
        <div className="text-white/60 my-4 sm:w-[732px] w-[464px] sm:overflow-auto overflow-hidden">
          ..................................................................................................................................................................................................................
        </div>
        <div className="font-semibold text-white/70">
          Tìm kiếm repository Github
        </div>
        <div className="text-sm text-white/60 my-2">
          Các pet project/public repository sử dụng Node.js, React...
        </div>
        <div className="mx-2 my-4">
          <input
            className="outline-none px-4 w-full py-4 flex justify-center items-center rounded-md bg-black/10"
            type="text"
            placeholder="Tìm kiếm repository Github"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="text-white/60 h-[1px] bg-white/20 my-4 sm:w-[732px] w-[464px] sm:overflow-auto overflow-hidden"></div>

        {filteredRepositories.length > 0 ? (
          filteredRepositories.map((item, index) => (
            <div key={index}>
              <div
                onClick={() => window.open(item.link, "_blank")}
                className="flex justify-between items-center px-4 hover:bg-white/10 py-4 rounded-md duration-200 cursor-pointer"
              >
                <div>
                  <div className="text-xl font-bold">{item.name}</div>
                  <div className="text-sm text-white/60 my-4">{item.des}</div>
                  <div className="flex space-x-2">
                    <div
                      className={`${
                        item.tec === "Typescript"
                          ? "text-[#368eb7] border-[#368eb7]"
                          : item.tec === "Java"
                          ? "text-[#ef6972] border-[#ef6972]"
                          : "text-[#30916e] border-[#30916e]"
                      } border-[1px] rounded-sm px-2 text-xs font-semibold flex justify-center items-center`}
                    >
                      {item.tec}
                    </div>
                    {item.fork !== 0 && (
                      <div className="text-red-500/90 border-[1px] rounded-sm px-2 border-red-500/90 text-xs font-semibold flex justify-center items-center">
                        {item.fork} Fork
                      </div>
                    )}
                    <div className="text-[#efe809]/90 border-[1px] rounded-sm px-2 border-[#efe809]/90 text-xs font-semibold flex justify-center items-center">
                      MIT License
                    </div>
                    <div className="text-sm text-black bg-white rounded-sm px-2 flex justify-center items-center">
                      Cập nhật lúc {item.update}
                    </div>
                  </div>
                </div>
                <div className="text-sm font-semibold">Start: {item.start}</div>
              </div>
              <div className="text-white/60 h-[1px] bg-white/20 my-4 sm:w-[732px] w-[464px] sm:overflow-auto overflow-hidden"></div>
            </div>
          ))
        ) : (
          <div className="text-white/60">Không tìm thấy repository nào.</div>
        )}
        <div className="text-sm text-white/60 mb-6">
          <a
            className="hover:text-white duration-200"
            href="https://github.com/wd-ntg"
          >
            Xem Github của tớ ....
          </a>
        </div>
      </main>
      
    </ContainerPage>
  );
}
