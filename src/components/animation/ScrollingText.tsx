import "./styles.css"
import { useScroll } from "framer-motion"
import { useRef } from "react";

interface ScrollingTextProps {
    children: JSX.Element[] | JSX.Element;
}

export const ScrollingText = ({ children }: ScrollingTextProps) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });

    return <div>Hello</div>;
}
