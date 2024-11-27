import styled from "@emotion/styled";
import { motion } from "motion/react";

export const Apple = styled("svg")`
  stroke-width: 0.3;
  width: 150px;
  height: 180px;
  stroke: white;
`;
export const Wrapper = styled(motion.div)`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 20px;
  background: linear-gradient(5deg, #45d91a, #f4a9f8);

  .logo {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: white;
    font-family: "CookieRun-bold";
    font-size: 1.3rem;
  }
`;
