import { useEffect } from "react";
import { useMotionValue, useSpring, frame } from "framer-motion";

const spring = { damping: 10, stiffness: 80, restDelta: 0.1 };

export function useFollowPointer(ref) {
  const xPoint = useMotionValue(0);
  const yPoint = useMotionValue(0);
  const x = useSpring(xPoint, spring);
  const y = useSpring(yPoint, spring);

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }) => {
      const element = ref.current;

      // Check if the pointer is over an interactive element
      const target = document.elementFromPoint(clientX, clientY);
      if (target && (target.tagName === 'BUTTON' || target.tagName === 'A' || target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
        return;
      }

      frame.update(() => {
        const scrollX = window.scrollX || window.pageXOffset;
        const scrollY = window.scrollY || window.pageYOffset;

        // Increase the offset to the box's position
        const offsetX = 25; // Adjust this value as needed
        const offsetY = 25; // Adjust this value as needed

        xPoint.set(clientX - element.offsetLeft - element.offsetWidth / 2 + scrollX + offsetX);
        yPoint.set(clientY - element.offsetTop - element.offsetHeight / 2 + scrollY + offsetY);
      });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [ref, xPoint, yPoint]);

  return { x, y };
}
