import React from "react";
import { motion } from "framer-motion";
// Example props: loading (bool), children (button text)
function LoadingButton({ loading, children, type, ...props }) {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      type={type}
      className={`flex w-full items-center justify-center px-4 py-2 rounded-md mt-4 mb-5 bg-black/30 border border-gray-700 hover:border-[var(--text-color)] text-[var(--maintext-color)] font-semibold shadow transition-all duration-300 cursor-pointer disabled:opacity-60 ${
        loading ? "cursor-progress" : ""
      }`}
      disabled={loading}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin h-5 w-5 mr-2 text-emerald-400"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            className="opacity-20"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-60"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>
      )}
      {loading ? "submitting..." : children}
    </motion.button>
  );
}

export default LoadingButton;
