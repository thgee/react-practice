import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import {
  apiGetPlayingMovies,
  IGetPlayingMovies,
} from "../../../apis/netflix/apiGetMovies";
import { getImgPath } from "../../../utils/utils";
import { AnimatePresence, motion, Variants } from "motion/react";
import { useState } from "react";

const sliderVariant: Variants = {
  initial: { x: "calc(100vw + 6px)" },
  visible: { x: 0 },
  exit: { x: "calc(-100vw - 6px)" },
};

export const Main = () => {
  const [sliderIdx, setSliderIdx] = useState(0);
  const { data: movieList } = useQuery<IGetPlayingMovies>({
    queryKey: ["movie", "nowPlaying"],
    queryFn: apiGetPlayingMovies,
  });
  return (
    <MainContainer>
      <Banner
        onClick={() => {
          let maxPage = Math.floor(movieList?.results.length! / 6) - 1;
          setSliderIdx((v) => (v === maxPage ? 0 : v + 1));
        }}
        img={getImgPath(movieList?.results[0].backdrop_path!)}
      >
        <>
          <Title>{movieList?.results[0].title}</Title>
          <Overview>{movieList?.results[0].overview}</Overview>
        </>
      </Banner>
      <Slider>
        <AnimatePresence initial={false}>
          <Row
            key={sliderIdx}
            variants={sliderVariant}
            initial={"initial"}
            animate="visible"
            exit={"exit"}
            transition={{ duration: 0.8, type: "tween" }}
          >
            {movieList?.results
              .slice(sliderIdx * 6, (sliderIdx + 1) * 6)
              .map((it) => (
                <SliderItem
                  key={it.id}
                  imgSrc={getImgPath(it.backdrop_path!, "w300")}
                />
              ))}
          </Row>
        </AnimatePresence>
      </Slider>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  background-color: black;
`;
const Banner = styled.div<{ img: string }>`
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
const Title = styled.div`
  font-size: 3rem;
  color: #fff;
`;
const Overview = styled.div`
  font-size: 1.8;
  max-width: 800px;
  color: #fff;
`;

const Slider = styled.div`
  position: relative;
  margin: 0 70px;
  height: 200px;
  overflow-x: hidden;
  display: flex;
  align-items: center;
`;
const Row = styled(motion.div)`
  position: absolute;
  left: 0;
  width: 100%;
  display: flex;
  gap: 10px;
`;

const SliderItem = styled.div<{ imgSrc: string }>`
  flex-grow: 1;
  height: 160px;
  background-image: url(${(p) => p.imgSrc});
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  cursor: pointer;
`;
