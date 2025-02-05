import { Drag } from "../../components/Framer/Drag/Drag";
import { Gesture } from "../../components/Framer/Gesture/Gesture";
import { Variant } from "../../components/Framer/Variant/Variant";
import { Bg, FramerContainer } from "./styles";
import { MotionValue } from "../../components/Framer/MotionValue/MotionValue";
import { Scroll } from "../../components/Framer/Scroll/Scroll";
import { Path } from "../../components/Framer/Path/Path";
import { AnimateExit } from "../../components/Framer/AnimateExit/AnimateExit";
import { Layout } from "../../components/Framer/Layout/Layout";
import { LayoutId } from "../../components/Framer/LayoutId/LayoutId";

export const Framer = () => {
  return (
    <Bg>
      <FramerContainer>
        <Variant />
        <Gesture />
        <Drag />
        <MotionValue />
        <Scroll />
        <Path />
        <AnimateExit />
        <Layout />
        <LayoutId />
      </FramerContainer>
    </Bg>
  );
};
