import { useNavigate } from "react-router-dom";
import Draggable from "react-draggable";
import { HomeContainer, TrelloBtn, TrelloWrap } from "./styles";

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
    </HomeContainer>
  );
};
