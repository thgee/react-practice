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
  background: linear-gradient(115deg, #fbf221, #ff2aff);

  .logo {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: white;
    font-family: "CookieRun-bold";
    font-size: 1.3rem;
  }
`;

export const Btn = styled.button`
  padding: 6px 12px;
  border: 2px solid #123512;
  border-radius: 8px;
  font-family: "CookieRun-bold";
  position: absolute;
  top: 10px;
  left: 10px;
  cursor: pointer;
  transition: all 0.2s;
  :hover {
    scale: 1.1;
  }
`;
