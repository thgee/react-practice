import { useQuery } from "@tanstack/react-query";
import {
  apiGetPlayingMovies,
  IGetPlayingMovies,
} from "../../../apis/netflix/apiGetMovies";
import { getImgPath } from "../../../utils/utils";
import { AnimatePresence, Variants } from "motion/react";
import { useEffect, useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import { MovieModal } from "../../../components/Netflix/MovieModal/MovieModal";
import {
  MainContainer,
  Banner,
  Title,
  Overview,
  Slider,
  SliderItem,
  TitleBox,
} from "./styles";

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
