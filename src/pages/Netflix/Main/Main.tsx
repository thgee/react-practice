import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import {
  apiGetPlayingMovies,
  IGetPlayingMovies,
} from "../../../apis/netflix/apiGetMovies";
import { getImgPath } from "../../../utils/utils";
import { AnimatePresence, motion, Variants } from "motion/react";
import { useEffect, useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import { IMovie } from "../../../models/netflix/models";

const sliderVariant: Variants = {
  initial: { x: "calc(100vw + 6px)" },
  visible: { x: 0 },
  exit: { x: "calc(-100vw - 6px)" },
};

export const Main = () => {
  const match = useMatch(`/netflix/:movieId`);
  const navigate = useNavigate();
  const [sliderIdx, setSliderIdx] = useState(0);

  // 모달이 띄워진 상태로 새로고침 시 모달 없는 상태로 만듬
  useEffect(() => {
    if (match) navigate("/netflix");
  }, []);

  const { data: movieList } = useQuery<IGetPlayingMovies>({
    queryKey: ["movie", "nowPlaying"],
    queryFn: apiGetPlayingMovies,
  });
  const toggleMovieModal = (movieId: number) => {
    navigate(`/netflix/${movieId}`);
  };

  const getSelectedMovieInfo = () =>
    movieList?.results.find((it) => "" + it.id === match?.params.movieId!);

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
      <AnimatePresence initial={false}>
        <Slider
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
        </Slider>
        <div style={{ height: 200 }} />
      </AnimatePresence>
      {match && (
        <MovieModal
          movieId={match.params.movieId!}
          movieInfo={getSelectedMovieInfo()!}
        />
      )}
    </MainContainer>
  );
};

interface IMovieModalProps {
  movieId: string;
  movieInfo: IMovie;
}

export const MovieModal = ({ movieId, movieInfo }: IMovieModalProps) => {
  const navigate = useNavigate();

  return (
    <>
      <Overlay onClick={() => navigate("/netflix")} />
      <MovieModalContainer layoutId={"" + movieId}>
        <MovieImg imgsrc={getImgPath(movieInfo?.backdrop_path, "w500")}>
          <h1>{movieInfo?.title}</h1>
        </MovieImg>
        <Desc>{movieInfo?.overview}</Desc>
      </MovieModalContainer>
    </>
  );
};

const Overlay = styled(motion.div)`
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
`;
const MovieImg = styled.div<{ imgsrc: string }>`
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
const Desc = styled(motion.p)`
  color: white;
  padding: 20px;
  line-height: 30px;
`;
const MovieModalContainer = styled(motion.div)`
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

///////////////////////////////////
const MainContainer = styled.div`
  background-color: black;
  overflow: hidden;
  position: relative;
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

const Slider = styled(motion.div)`
  position: absolute;
  width: 100%;
  padding: 0px 70px;
  bottom: 150px;
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
