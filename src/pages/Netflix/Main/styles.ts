import styled from "@emotion/styled";
import { motion } from "motion/react";

export const MainContainer = styled.div`
  background-color: black;
  overflow: hidden;
  position: relative;
`;

export const Banner = styled.div<{ img: string }>`
  padding: 60px;
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(p) => p.img});
`;
export const Title = styled.div`
  font-size: 3rem;
  color: #fff;
`;
export const Overview = styled.div`
  font-size: 1.8;
  max-width: 800px;
  color: #fff;
`;

export const Slider = styled(motion.div)`
  position: absolute;
  width: 100%;
  padding: 0px 70px;
  bottom: 150px;
  display: flex;
  gap: 10px;
`;

export const SliderItem = styled(motion.div)<{ imgSrc: string }>`
  flex-grow: 1;
  aspect-ratio: 1.5/1;
  background-image: url(${(p) => p.imgSrc});
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  position: relative;

  cursor: pointer;
  :first-child {
    transform-origin: left;
  }
  :last-child {
    transform-origin: right;
  }
`;

export const TitleBox = styled(motion.div)`
  height: 30px;
  color: #fff;
  background-color: #222;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
`;
