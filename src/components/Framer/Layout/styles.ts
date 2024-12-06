import styled from "@emotion/styled";
import { motion } from "motion/react";

export const Start = styled(motion.div)`
  width: 70px;
  height: 70px;
  border-radius: 1000px;
  background-color: #000;
  position: relative;
  left: -100px;
`;

export const End = styled(motion.span)`
  position: relative;
  right: -100px;
  font-size: 1.4rem;
  font-family: "CookieRun-bold";
`;

export const Wrapper = styled(motion.div)`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  gap: 80px;
  align-items: center;
  position: relative;
  border-radius: 20px;
  background: linear-gradient(245deg, #1bff21, #2ffaff);

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
