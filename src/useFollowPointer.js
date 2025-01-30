import { useState, useEffect } from "react";
import { useMotionValue, useSpring, frame } from "framer-motion";

const spring = { damping: 7, stiffness: 40, restDelta: 0.1 };

export function useFollowPointer(ref) {
    const xPoint = useMotionValue(0);
    const yPoint = useMotionValue(0);
    const x = useSpring(xPoint, spring);
    const y = useSpring(yPoint, spring);

    // Variables to accumulate scroll offsets
    let accumulatedScrollX = 0;
    let accumulatedScrollY = 0;

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
        let timeoutId;

        const handleScroll = () => {
            // Accumulate scroll offsets
            accumulatedScrollX += (window.scrollX || window.pageXOffset) * 0.1; // Damping factor
            accumulatedScrollY += (window.scrollY || window.pageYOffset) * 0.1; // Damping factor

            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                frame.update(() => {
                    // Apply accumulated scroll offsets
                    xPoint.set(xPoint.get() + accumulatedScrollX);
                    yPoint.set(yPoint.get() + accumulatedScrollY);
                    accumulatedScrollX = 0;
                    accumulatedScrollY = 0;
                });
            }, 16); // Throttle to approximately 60 fps
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timeoutId);
        };
    }, [xPoint, yPoint]);

    return { x, y };
}
