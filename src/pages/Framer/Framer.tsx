import { Drag } from "../../components/Framer/Drag/Drag";
import { Gesture } from "../../components/Framer/Gesture/Gesture";
import { Variant } from "../../components/Framer/Variant/Variant";
import { Bg, FramerContainer } from "./styles";
import { MotionValue } from "../../components/Framer/MotionValue/MotionValue";

export const Framer = () => {
  return (
    <Bg>
      <FramerContainer>
        <Variant />
        <Gesture />
        <Drag />
        <MotionValue />
      </FramerContainer>
    </Bg>
  );
};
