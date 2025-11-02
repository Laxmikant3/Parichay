import React, { useState } from "react";
import GitBox from "./GitBox";
import MotionWrapper from "../utils/MotionWrapper";
import { motion } from "framer-motion";
import { ChevronsRight } from "./ChevronsRight";
const GithubChart = () => {
  const [GitChartLoader, setGitChartLoader] = useState(true);

  setTimeout(() => {
    setGitChartLoader(false);
  }, 5000);

  return GitChartLoader ? (
    <div>
      <MotionWrapper direction="y">
        <div className="py-10 flex flex-col items-center gap-y-10">
          <div className="border w-85 h-30 rounded-[8px] border-[var(--text-color)] flex flex-col items-center justify-center p-2.5 text-[var(--maintext-color)]">
            <h1>Loading GitChart Just for you . . .</h1>
            <div className="mt-2 animate-spin"> ⌛ </div>
          </div>
        </div>
      </MotionWrapper>
    </div>
  ) : (
    <div>
      <MotionWrapper direction="y">
        <div>
          <div className="py-10 flex flex-col items-center gap-y-10">
            <div className="space-y-2 items-center">
              <h3 className="text-[35px] md:text-[40px] lg:text-6xl font-bold aladin-regular text-[var(--text-color)] text-center">
                GitHub Contributions
              </h3>
              <p className="text-[var(--maintext-color)] mt-4 max-w-2xl mx-auto text-center">
                When I look back at where I started, the progress feels both
                inspiring, & deeply motivating to continue.
              </p>
            </div>
            <div className="flex flex-col items-center text-[var(--maintext-color)]">
              <img
                src="https://ghchart.rshah.org/00ff00/Laxmikant3"
                alt=" ＞﹏＜ "
                loading="lazy"
              />
              <div className="px-4 py-2 text-[13px] text-[#A1A1AA] rounded-sm ">
                Contributions in 2025
              </div>

              <div className="flex gap-5 items-center">
                {" "}
                <span className="text-[#A1A1AA]">Less</span>
                <GitBox color="#ebedf0" />
                <GitBox color="#9be9a8" />
                <GitBox color="#40c463" />
                <GitBox color="#30a14e" />
                <GitBox color="#216e39" />
                <span className="text-[#A1A1AA]">More</span>{" "}
              </div>
              <motion.a
                href="https://github.com/laxmikant3"
                whileTap={{ scale: 0.9 }}
                className="mt-4"
                target="_blank"
              >
                <button className="flex items-center gap-2 cursor-pointer w-50 h-8 border py-2 border-[var(--text-color)] rounded-md justify-center pl-2">
                  {" "}
                  View Github Profile{" "}
                  <ChevronsRight stroke="var(--text-color)" height="15px" />
                </button>
              </motion.a>
            </div>
          </div>
        </div>
      </MotionWrapper>
    </div>
  );
};
export default GithubChart;
