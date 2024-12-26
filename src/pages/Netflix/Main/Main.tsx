import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import {
  apiGetPlayingMovies,
  IGetPlayingMovies,
} from "../../../apis/netflix/apiGetMovies";
import { getImgPath } from "../../../utils/utils";
import { AnimatePresence, motion, Variants } from "motion/react";
import { useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";

const sliderVariant: Variants = {
  initial: { x: "calc(100vw + 6px)" },
  visible: { x: 0 },
  exit: { x: "calc(-100vw - 6px)" },
};

export const Main = () => {
  const match = useMatch(`/netflix/:movieId`);
  const navigate = useNavigate();
  const [sliderIdx, setSliderIdx] = useState(0);

  const { data: movieList } = useQuery<IGetPlayingMovies>({
    queryKey: ["movie", "nowPlaying"],
    queryFn: apiGetPlayingMovies,
  });
  const toggleMovieModal = (movieId: number) => {
    navigate(`/netflix/${movieId}`);
  };
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
                  layoutId={"" + it.id}
                  onClick={() => toggleMovieModal(it.id)}
                  whileHover={{
                    scale: 1.6,
                    y: -80,
                    zIndex: 1,
                    transition: { delay: 0.3 },
                  }}
                  animate={{ zIndex: 0, transition: { delay: 0.3 } }}
                  key={it.id}
                  imgSrc={getImgPath(it.backdrop_path!, "w500")}
                >
                  <TitleBox> {it.title}</TitleBox>
                </SliderItem>
              ))}
          </Row>
        </AnimatePresence>
      </Slider>
      {match && <MovieModal movieId={match.params.movieId!} />}
    </MainContainer>
  );
};

export const MovieModal = ({ movieId }: { movieId: string }) => {
  const navigate = useNavigate();
  return (
    <Outlay
      onClick={() => {
        navigate("/netflix");
      }}
    >
      <MovieModalContainer
        exit={{ scale: 3, color: "red" }}
        layoutId={"" + movieId}
      ></MovieModalContainer>
    </Outlay>
  );
};

const Outlay = styled(motion.div)`
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
`;
const MovieModalContainer = styled(motion.div)`
  width: 800px;
  height: 500px;
  position: fixed;
  top: 100px;
  background-color: white;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 16px;
`;

///////////////////////////////////
const MainContainer = styled.div`
  background-color: black;
  height: fit-content;
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
  overflow: hidden;
  align-items: center;
  height: 300px;
  top: -200px;
`;
const Row = styled(motion.div)`
  position: absolute;
  overflow: visible;
  bottom: 0;
  width: 100%;
  padding: 0px 70px;
  display: flex;
  gap: 10px;
`;

const SliderItem = styled(motion.div)<{ imgSrc: string }>`
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

const TitleBox = styled(motion.div)`
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
