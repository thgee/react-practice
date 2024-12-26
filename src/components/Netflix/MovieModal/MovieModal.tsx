import { useNavigate } from "react-router-dom";
import { IMovie } from "../../../models/netflix/models";
import { getImgPath } from "../../../utils/utils";
import { Overlay, MovieModalContainer, MovieImg, Desc } from "./styles";

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
