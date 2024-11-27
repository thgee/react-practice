import { useScroll, useTransform } from "motion/react";
import { Box } from "./styles";
import { Wrapper } from "./styles";

export const Scroll = () => {
  // scrollY는 px단위, scrollProgress는 0~1 로 변환
  const { scrollY, scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1.4]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 130]);
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    ["#fff", "#153", "#159"]
  );

  return (
    <Wrapper>
      <Box style={{ scale, rotate, backgroundColor }}></Box>
      <span className="logo">Scroll</span>
    </Wrapper>
  );
};
