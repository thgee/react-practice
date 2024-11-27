import styled from "@emotion/styled";
import { motion } from "motion/react";

export const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  border-radius: 30px;
  background-color: white;
`;

export const Wrapper = styled(motion.div)`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 20px;
  background: linear-gradient(150deg, #ec801b, #ff7a8e);

  .logo {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: white;
    font-family: "CookieRun-bold";
    font-size: 1.3rem;
  }
`;
