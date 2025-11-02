import React, { useState } from "react";
import MotionWrapper from "../utils/MotionWrapper";
import { motion } from "framer-motion";
import { ChevronsRight } from "./ChevronsRight";

const LeetCodeChart = () => {
  const [LeetCodeLoader, setLeetCodeLoader] = useState(true);

  setTimeout(() => {
    setLeetCodeLoader(false);
  }, 5000);

  // Mock data for calendar view (you can replace with actual data)
  const calendarData = Array.from({ length: 365 }, (_, i) => ({
    date: new Date(Date.now() - (364 - i) * 24 * 60 * 60 * 1000),
    count: Math.floor(Math.random() * 5) // Random problems solved per day
  }));

  const getColor = (count) => {
    if (count === 0) return "#ebedf0";
    if (count === 1) return "#9be9a8";
    if (count === 2) return "#40c463";
    if (count === 3) return "#30a14e";
    return "#216e39";
  };

  return LeetCodeLoader ? (
    <div>
      <MotionWrapper direction="y">
        <div className="py-10 flex flex-col items-center gap-y-10">
          <div className="border w-85 h-30 rounded-[8px] border-[var(--text-color)] flex flex-col items-center justify-center p-2.5 text-[var(--maintext-color)]">
            <h1>Loading LeetCode Stats Just for you . . .</h1>
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
                LeetCode Activity
              </h3>
              <p className="text-[var(--maintext-color)] mt-4 max-w-2xl mx-auto text-center">
                My coding journey visualized through daily problem-solving activity.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-[var(--maintext-color)]">
              {/* Calendar Grid */}
              <div className="grid grid-cols-[auto_1fr] gap-4 items-start mb-6">
                {/* Month labels */}
                <div className="grid grid-rows-7 gap-1 text-xs text-[#A1A1AA]">
                  <div>Mon</div>
                  <div></div>
                  <div>Wed</div>
                  <div></div>
                  <div>Fri</div>
                  <div></div>
                  <div>Sun</div>
                </div>
                
                {/* Calendar squares */}
                <div className="grid grid-cols-52 grid-rows-7 gap-1">
                  {calendarData.map((day, index) => (
                    <div
                      key={index}
                      className="w-3 h-3 rounded-sm"
                      style={{ backgroundColor: getColor(day.count) }}
                      title={`${day.count} problems on ${day.date.toLocaleDateString()}`}
                    />
                  ))}
                </div>
              </div>

              <div className="px-4 py-2 text-[13px] text-[#A1A1AA] rounded-sm">
                Problems solved in the last year
              </div>

              <div className="flex gap-5 items-center mb-6">
                <span className="text-[#A1A1AA]">Less</span>
                <div className="w-3 h-3 rounded-sm bg-[#ebedf0]" />
                <div className="w-3 h-3 rounded-sm bg-[#9be9a8]" />
                <div className="w-3 h-3 rounded-sm bg-[#40c463]" />
                <div className="w-3 h-3 rounded-sm bg-[#30a14e]" />
                <div className="w-3 h-3 rounded-sm bg-[#216e39]" />
                <span className="text-[#A1A1AA]">More</span>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--text-color)]">600+</div>
                  <div className="text-[#A1A1AA] text-xs">Total Solved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--text-color)]">1650+</div>
                  <div className="text-[#A1A1AA] text-xs">Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--text-color)]">3★</div>
                  <div className="text-[#A1A1AA] text-xs">CodeChef</div>
                </div>
              </div>

              <motion.a
                href="https://leetcode.com/u/3rr0r3/"
                whileTap={{ scale: 0.9 }}
                className="mt-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center gap-2 cursor-pointer w-50 h-8 border py-2 border-[var(--text-color)] rounded-md justify-center pl-2">
                  View  Profile{" "}
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

export default LeetCodeChart;