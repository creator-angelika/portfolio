import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const ScrollManager = (props) => {
    const {section, onSectionChange} = props;
    const data = useScroll();
    const lastScroll = useRef(0);
    const isAnimating = useRef(false);

    data.fill.classList.add("top-0");
    data.fill.classList.add("absolute");

   useEffect(() => {
    gsap.to(data.el, {
        duration:1,
        scrollTop: section*data.el.clientHeight,
        onStart: () => {
            isAnimating.current = true;
        },
        onComplete:() => {
            isAnimating.current = false;
        }
    })
   }, [section]);

   useFrame(() => {
    if (isAnimating.current) {
        lastScroll.current = data.scroll.current;
        return;
    }

    const curSection = Math.floor(data.scroll.current * data.pages);
    const prevSection = Math.floor(lastScroll.current * data.pages);

    if (data.scroll.current > lastScroll.current) {
        if (curSection > prevSection) {
            onSectionChange((prevSection + 1) % data.pages);
        } else if (curSection < prevSection) {
            onSectionChange((curSection + 1) % data.pages);
        }
    } else if (data.scroll.current < lastScroll.current) {
        if (curSection < prevSection) {
            onSectionChange((prevSection - 1 + data.pages) % data.pages);
        } else if (curSection > prevSection) {
            onSectionChange((curSection - 1 + data.pages) % data.pages);
        }
    }

    lastScroll.current = data.scroll.current;
});


        
    return null;
};