import { Variant } from "../../components/Framer/Variant";
import { FramerContainer, Wrapper } from "./styles";

export const Framer = () => {
  return (
    <FramerContainer>
      <Wrapper>
        <Variant />
        <span className="logo">Variant</span>
      </Wrapper>
    </FramerContainer>
  );
};
