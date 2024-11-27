import { MutableRefObject } from "react";
import { Box } from "./styles";
import { Variants } from "motion/react";

const boxVariants: Variants = {
  drag: {
    backgroundColor: "#ff912a",
    transition: {
      type: "spring",
      damping: 4,
    },
  },
};

interface IDragProps {
  dragRef: MutableRefObject<null>;
}
export const Drag = ({ dragRef }: IDragProps) => {
  return (
    <div>
      <Box
        // drag = 'x', 'y' 로 축 고정 가능
        drag
        variants={boxVariants}
        whileDrag={"drag"}
        // 현재 위치 기준으로 해당 범위 내에 고정
        // dragConstraints={{ top: -100, bottom: 100, left: -100, right: 100 }}
        dragConstraints={dragRef} // ref로 고정하는것도 가능하다.
        // dragSnapToOrigin // 제자리로 돌아오기
        dragElastic={0.2} // 고정 계수 (0 ~ 1)
      ></Box>
    </div>
  );
};
