import { Drag } from "../../components/Framer/Drag/Drag";
import { Gesture } from "../../components/Framer/Gesture/Gesture";
import { Variant } from "../../components/Framer/Variant/Variant";
import { Bg, FramerContainer, Wrapper } from "./styles";

export const Framer = () => {
  return (
    <Bg>
      <FramerContainer>
        <Wrapper>
          <Variant />
          <span className="logo">Variant</span>
        </Wrapper>
        <Wrapper>
          <Gesture />
          <span className="logo">Gesture</span>
        </Wrapper>
        <Wrapper>
          <Drag />
          <span className="logo">Drag</span>
        </Wrapper>
      </FramerContainer>
    </Bg>
  );
};
