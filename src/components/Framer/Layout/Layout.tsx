import { useState } from "react";
import { Btn, Circle, End, Start, Wrapper } from "./styles";
import { motion } from "motion/react";

export const Layout = () => {
  const [showBox, setShowBox] = useState(false);

  const handleClick = () => {
    setShowBox((v) => !v);
  };

  return (
    <Wrapper>
      <Btn onClick={handleClick}>Click !</Btn>
      {/* 그냥 layout이라는 속성을 주면 css로 인해 스타일이 변경될 때 */}
      {/* 자동으로 해당 요소에 애니메이션이 적용된다. */}

      {/* 이렇게 layoutId를 같게 해주면 */}
      {/* Framer가 적절하게 해당 요소들을 묶어서 애니메이션을 적용해준다. */}
      {showBox && <Start layoutId="wow" />}
      {!showBox && <End layoutId="wow">우와..</End>}
      <span className="logo">Layout</span>
    </Wrapper>
  );
};
