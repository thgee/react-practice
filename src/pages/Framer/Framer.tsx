import { Drag } from "../../components/Framer/Drag/Drag";
import { Gesture } from "../../components/Framer/Gesture/Gesture";
import { Variant } from "../../components/Framer/Variant/Variant";
import { Bg, FramerContainer } from "./styles";
import { MotionValue } from "../../components/Framer/MotionValue/MotionValue";
import { Scroll } from "../../components/Framer/Scroll/Scroll";

export const Framer = () => {
  return (
    <Bg>
      <FramerContainer>
        <Variant />
        <Gesture />
        <Drag />
        <MotionValue />
        <Scroll />
      </FramerContainer>
    </Bg>
  );
};
