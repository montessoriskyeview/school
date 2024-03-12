import "./styles.css"
import { Box } from "@mui/material";
import { motion, useScroll } from "framer-motion"
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

/**
 * 
function Item() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  });

  return (
    <section>
      <div ref={ref}>
        <figure className="progress">
          <svg id="progress" width="75" height="75" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="indicator"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
        </figure>
      </div>
    </section>
  );
}
 */