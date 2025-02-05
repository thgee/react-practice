import styled from "@emotion/styled";
import { motion } from "motion/react";

export const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0px 0px 4px 0px #9e24db;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  padding: 12px;
  gap: 12px;
`;

export const Circle = styled(motion.div)`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 9999px;
  background-color: white;
  box-shadow: 0 0 4px 0 #ddd;
`;

export const Wrapper = styled(motion.div)`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 20px;
  background: linear-gradient(25deg, #ec801b, #ff2a4a);
  .logo {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: white;
    font-family: "CookieRun-bold";
    font-size: 1.3rem;
  }
`;
