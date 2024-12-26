import { useNavigate } from "react-router-dom";
import Draggable from "react-draggable";
import {
  FramerBtn,
  FramerWrap,
  HomeContainer,
  NetflixBtn,
  NetflixWrap,
  TrelloBtn,
  TrelloWrap,
} from "./styles";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <Draggable>
        <TrelloWrap onDoubleClick={() => navigate("/trello")}>
          <TrelloBtn />
          <span>Trello</span>
        </TrelloWrap>
      </Draggable>

      <Draggable>
        <FramerWrap onDoubleClick={() => navigate("/framer")}>
          <FramerBtn />
          <span>Framer</span>
        </FramerWrap>
      </Draggable>

      <Draggable>
        <NetflixWrap onDoubleClick={() => navigate("/netflix")}>
          <NetflixBtn />
          <span>Netflix</span>
        </NetflixWrap>
      </Draggable>
    </HomeContainer>
  );
};
