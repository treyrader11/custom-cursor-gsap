// "use client";

// import { cn } from "@/lib/utils";
// import gsap from "gsap";
// import { useEffect, useRef } from "react";
// import ScrollTrigger from "gsap/dist/ScrollTrigger";

// export default function Cursor() {
//   const cursor = useRef<HTMLDivElement>(null);
//   const follower = useRef<HTMLDivElement>(null);

//   const moveCursor = (e: MouseEvent): void => {
//     gsap.to(cursor.current, {
//       x: e.clientX,
//       y: e.clientY,
//       duration: 0.2,
//     });

//     gsap.to(follower.current, {
//       x: e.clientX,
//       y: e.clientY,
//       duration: 0.9,
//     });
//   };

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     gsap.set(cursor, {
//       xPercent: 100,
//       yPercent: 100,
//     });

//     gsap.set(follower, {
//       xPercent: -20,
//       yPercent: -20,
//     });
//     window.addEventListener("mouseover", moveCursor);
//   }, []);

//   return (
//     <div className={cn("")}>
//       <div
//         ref={cursor}
//         className={cn(
//           "cursor",
//           "size-1.5",
//           "rounded-full",
//           "fixed",
//           "z-[999]",
//           "bg-white"
//         )}
//       ></div>
//       <div
//         ref={follower}
//         className={cn(
//           "follower-cursor",
//           "size-7",
//           "bg-transparent",
//           "border",
//           "border-white",
//           "fixed",
//           "z-[999]",
//           "rounded-full"
//         )}
//       ></div>
//     </div>
//   );
// }

"use client";

import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function Cursor() {
  const cursor = useRef<HTMLDivElement>(null);
  const follower = useRef<HTMLDivElement>(null);

  const moveCursor = (e: MouseEvent): void => {
    if (cursor.current && follower.current) {
      gsap.to(cursor.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
      });

      gsap.to(follower.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.9,
      });
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (cursor.current && follower.current) {
      gsap.set(cursor.current, {
        xPercent: 100,
        yPercent: 100,
      });

      gsap.set(follower.current, {
        xPercent: -20,
        yPercent: -20,
      });
    }

    window.addEventListener("mousemove", moveCursor);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div className={cn("")}>
      <div
        ref={cursor}
        className={cn(
          "cursor",
          "size-1.5",
          "rounded-full",
          "fixed",
          "z-[999]",
          "bg-white"
        )}
      ></div>
      <div
        ref={follower}
        className={cn(
          "follower-cursor",
          "size-7",
          "bg-transparent",
          "border",
          "border-white",
          "fixed",
          "z-[999]",
          "rounded-full"
        )}
      ></div>
    </div>
  );
}

