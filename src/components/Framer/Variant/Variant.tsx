import { Wrapper } from "../../../pages/Framer/styles";
import { Box, Circle } from "./styles";

const boxVariants = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.6,
      staggerChildren: 0.2,
      delayChildren: 0.4,
    },
  },
};

const circleVariants = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    y: 0,
    opacity: 1,
  },
};

export const Variant = () => {
  return (
    <Wrapper>
      <Box variants={boxVariants} initial="start" animate="end">
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
      </Box>
      <span className="logo">Variant</span>
    </Wrapper>
  );
};
