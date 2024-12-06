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
  color: #fff;
  font-size: 1.4rem;
  font-family: "CookieRun-bold";
`;

export const Wrapper = styled(motion.div)`
  width: 300px;
  height: 300px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  border-radius: 20px;
  background: linear-gradient(15deg, rgb(235, 33, 177), rgb(129, 42, 255));
  padding: 10px;
  padding-bottom: 60px;
  position: relative;

  .logo {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: white;
    font-family: "CookieRun-bold";
    font-size: 1.3rem;
  }
`;

export const Overlay = styled(motion.div)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  min-height: 100%;
`;

export const Card = styled(motion.div)`
  :first-child,
  :nth-child(4) {
    grid-column: span 2;
  }
  border-radius: 10px;
  cursor: pointer;
  :hover {
    background-color: #ccf;
  }
  transition: background-color 200ms;
  background-color: #fff;
`;
