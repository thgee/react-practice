import { Wrapper } from "../../../pages/Framer/styles";
import { Box } from "./styles";
import { Variants } from "motion/react";

const boxVariants: Variants = {
  hover: { scale: 1.5, rotate: 120 },
  tap: { borderRadius: "50%", scale: 1.2, rotate: 0 },
};

export const Gesture = () => {
  return (
    <Wrapper>
      <Box variants={boxVariants} whileHover={"hover"} whileTap={"tap"}></Box>
      <span className="logo">Gesture</span>
    </Wrapper>
  );
};
