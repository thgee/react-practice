import { useState } from "react";
import { Box, Btn, Wrapper } from "./styles";
import { AnimatePresence, Variants } from "motion/react";

export const AnimateExit = () => {
  const [showBox, setShowBox] = useState(false);

  const handleClick = () => {
    setShowBox((v) => !v);
  };

  const variants: Variants = {
    initial: {
      scale: 0,
      opacity: 0,
    },
    animate: {
      scale: 1.5,
      opacity: 1,
      rotateX: 2360,
      backgroundColor: "#704",
    },
    exit: {
      scale: 0,
      opacity: 0,
      y: 30,
    },
  };

  return (
    <Wrapper>
      {/* 컴포넌트가 언마운트 될 때의 애니메이션을 지정해줄 수 있다. */}
      {/* custom 속성을 넣어주면 variants에서 매개변수를 사용할 수 있는데,
      필요하다면 검색해볼것. 슬릭 ui를 구현할 때 initial, exit의 방향을 바꿔야 할 때 필요하다.*/}
      <AnimatePresence>
        {showBox && (
          <Box
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          />
        )}
      </AnimatePresence>
      <Btn onClick={handleClick}>Click !</Btn>
      <span className="logo">AnimatePresence</span>
    </Wrapper>
  );
};
