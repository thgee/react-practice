import { useMotionValue, useTransform } from "motion/react";
import { Box } from "./styles";
import { Wrapper } from "./styles";

export const MotionValue = () => {
  // motionValue는 값이 변경되어도 리렌더링이 일어나지 않으면서 애니메이션이 작동한다.
  const x = useMotionValue(0);

  // transform으로 특정 값을 내가 원하는 값으로 변환하기
  const scale = useTransform(x, [-400, 0, 400], [1.5, 1, 1.5]);
  const gradient = useTransform(
    x,
    [-400, 0, 400],
    [
      "linear-gradient(135deg, #c5d84a, #44e978)",
      "linear-gradient(195deg, #eb21b1, #812aff)",
      "linear-gradient(25deg, #ec801b, #ff2a4a)",
    ]
  );

  return (
    <Wrapper style={{ background: gradient }}>
      {/* motionValue를 특정 속성에 연결하면 해당 속성이 변경될 때 motionValue값도 업데이트된다. */}
      <Box style={{ x, scale }} drag="x" dragSnapToOrigin></Box>
      <span className="logo">MotionValue & Transform</span>
    </Wrapper>
  );
};
