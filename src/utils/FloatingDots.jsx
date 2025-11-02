// import React, { useEffect, useState } from "react";
// const colors = ["#9f4aef", "#341b4c", "#4C4CFF"];
// const InteractiveDots = ({ count = 30 }) => {
//   const [dots, setDots] = useState([]);
//   const [mousePos, setMousePos] = useState({ x: -999, y: -999 });

//   useEffect(() => {
//     const generatedDots = Array.from({ length: count }).map(() => ({
//       id: Math.random(),
//       size: Math.random() * 8 + 4, // 4-12px
//       left: Math.random() * 100,
//       bottom: -10,
//       color: colors[Math.floor(Math.random() * colors.length)],
//       speed: Math.random() * 1 + 0.5, // 0.5 - 1.5 px per frame
//     }));
//     setDots(generatedDots);
//   }, [count]);

//   // Track mouse position
//   useEffect(() => {
//     const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   useEffect(() => {
//     let animationFrame;
//     const animate = () => {
//       setDots((prev) =>
//         prev.map((dot) => {
//           let newBottom = dot.bottom + dot.speed;
//           // Reset when off screen
//           if (newBottom > window.innerHeight + 20) newBottom = -10;

//           // Cursor interaction: attract if close
//           const dotX = (dot.left / 100) * window.innerWidth;
//           const dotY = window.innerHeight - newBottom;
//           const dx = mousePos.x - dotX;
//           const dy = mousePos.y - dotY;
//           const dist = Math.sqrt(dx * dx + dy * dy);

//           let newLeft = dot.left;
//           if (dist < 100) {
//             newLeft += dx * 0.001; // small attraction
//           }

//           return { ...dot, bottom: newBottom, left: newLeft };
//         })
//       );
//       animationFrame = requestAnimationFrame(animate);
//     };
//     animationFrame = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(animationFrame);
//   }, [mousePos]);

//   return (
//     <div className="fixed inset-0 pointer-events-none overflow-hidden">
//       {dots.map((dot) => (
//         <div
//           key={dot.id}
//           className="absolute rounded-full opacity-60 "
//           style={{
//             width: `${dot.size}px`,
//             height: `${dot.size}px`,
//             left: `${dot.left}%`,
//             bottom: `${dot.bottom}px`,
//             backgroundColor: dot.color,
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default InteractiveDots;

// Second Style Dots
import React, { useEffect, useRef, useState } from "react";
// 🎨 Theme colors (3 shades each)
const themeColors = {
  purple: ["#9f4aef", "#7b2fbf", "#341b4c"],
  blue: ["#4C4CFF", "#1d4ed8", "#60a5fa"],
  green: ["#22c55e", "#16a34a", "#064e3b"],
  orange: ["#f97316", "#fb923c", "#fdba74"],
};

const InteractiveDots = ({ count = 30 }) => {
  const containerRef = useRef(null);
  const dotsRef = useRef([]);
  const mousePos = useRef({ x: -999, y: -999 });
  const [theme, setTheme] = useState("purple");

  // 🔹 Watch theme changes on <html data-theme="">
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const currentTheme =
        document.documentElement.getAttribute("data-theme") || "purple";
      setTheme(currentTheme);
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  // 🔹 Generate dot elements once
  useEffect(() => {
    if (!containerRef.current) return;

    const colors = themeColors[theme] || themeColors.purple;
    const dots = Array.from({ length: count }).map((_, i) => {
      const size = Math.random() * 8 + 4;
      const el = document.createElement("div");
      el.className =
        "absolute rounded-full opacity-70 transition-all duration-300";
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      el.style.left = `${Math.random() * 100}%`;
      el.style.bottom = `-10px`;
      el.style.backgroundColor = colors[i % colors.length];

      containerRef.current.appendChild(el);

      return {
        el,
        size,
        leftPercent: Math.random() * 100,
        bottom: -10,
        speed: Math.random() * 1 + 0.5,
      };
    });

    dotsRef.current = dots;

    return () => {
      dots.forEach((dot) => dot.el.remove());
    };
  }, [count, theme]);

  // 🔹 Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // 🔹 Animation loop
  useEffect(() => {
    let animationFrame;
    const animate = () => {
      const colors = themeColors[theme] || themeColors.purple;

      dotsRef.current.forEach((dot, i) => {
        let newBottom = dot.bottom + dot.speed;
        if (newBottom > window.innerHeight + 20) newBottom = -10;

        const dotX = (dot.leftPercent / 100) * window.innerWidth;
        const dotY = window.innerHeight - newBottom;

        const dx = mousePos.current.x - dotX;
        const dy = mousePos.current.y - dotY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const glow = dist < 120;

        dot.el.style.bottom = `${newBottom}px`;
        dot.el.style.left = `${dot.leftPercent}%`;
        dot.el.style.backgroundColor = colors[i % colors.length];
        dot.el.style.boxShadow = glow
          ? `0 0 12px 4px ${colors[i % colors.length]}`
          : "none";
        dot.el.style.transform = glow ? "scale(1.4)" : "scale(1)";

        dot.bottom = newBottom;
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [theme]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
    />
  );
};

export default InteractiveDots;
