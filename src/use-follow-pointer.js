import { useState, useEffect } from "react";
import { useMotionValue, useSpring, frame } from "framer-motion";

const spring = { damping: 7, stiffness: 40, restDelta: 0.1 };

export function useFollowPointer(ref) {
  const xPoint = useMotionValue(0);
  const yPoint = useMotionValue(0);
  const x = useSpring(xPoint, spring);
  const y = useSpring(yPoint, spring);

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }) => {
      const element = ref.current;

      frame.update(() => {
        const scrollX = window.scrollX || window.pageXOffset;
        const scrollY = window.scrollY || window.pageYOffset;

        xPoint.set(clientX - element.offsetLeft - element.offsetWidth / 2 + scrollX);
        yPoint.set(clientY - element.offsetTop - element.offsetHeight / 2 + scrollY);
      });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [ref, xPoint, yPoint]);

  useEffect(() => {
    const handleScroll = () => {
      frame.update(() => {
        const scrollX = window.scrollX || window.pageXOffset;
        const scrollY = window.scrollY || window.pageYOffset;

        xPoint.set(xPoint.get() + scrollX);
        yPoint.set(yPoint.get() + scrollY);
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [xPoint, yPoint]);

  return { x, y };
}
