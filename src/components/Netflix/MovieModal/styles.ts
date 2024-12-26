import styled from "@emotion/styled";
import { motion } from "motion/react";

export const Overlay = styled(motion.div)`
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
`;
export const MovieImg = styled.div<{ imgsrc: string }>`
  height: 50%;
  width: 100%;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)),
    url(${(p) => p.imgsrc});
  background-size: cover;
  position: relative;

  h1 {
    position: absolute;
    bottom: 20px;
    left: 20px;
    font-size: 2rem;
    color: white;
  }
`;
export const Desc = styled(motion.p)`
  color: white;
  padding: 20px;
  line-height: 30px;
`;
export const MovieModalContainer = styled(motion.div)`
  width: 700px;
  height: 700px;
  position: fixed;
  top: 120px;
  background-color: #333;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 16px;
`;
