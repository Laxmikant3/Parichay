import { useEffect, createContext, useContext, useState } from "react";
import Lenis from "lenis";

const SmoothScrollContext = createContext(null);

export function useLenis() {
  return useContext(SmoothScrollContext);
}

export default function SmoothScrollProvider({ children }) {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    const l = new Lenis({
      lerp: 0.18, // smoother + faster than fixed duration
      smoothWheel: true,
      smoothTouch: false,
    });

    setLenis(l); // ✅ now context gets updated after mount

    let frameId;
    function raf(time) {
      l.raf(time);
      frameId = requestAnimationFrame(raf);
    }
    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      l.destroy();
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={lenis}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
