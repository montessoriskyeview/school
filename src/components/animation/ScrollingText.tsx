import { Box } from "@mui/material";
import "./styles.css"
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

  return (
    <Box
      sx={{
        marginY: 50,
        height: 300,
        width: "95%",
      }}
    >
      <Box
        sx={{
          paddingTop: "30px",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        ref={ref}>
        <figure className="progress">
          {children}
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
            {/* {children} */}
          </svg>
        </figure>
      </Box>
    </Box>
  );
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