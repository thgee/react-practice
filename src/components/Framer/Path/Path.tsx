import { Variants } from "motion/react";
import { Apple } from "./styles";
import { Wrapper } from "./styles";
import { motion } from "motion/react";

// pathLength를 path에 직접 넣으면 작동하지 않는다. variants 속성으로 넣어주어야 0~1로 작동한다.
// 그리고 반드시 css에 stroke-width와 stroke = "색상" 이 지정되어 있어야 작동한다. pathLength는 stroke를 조절하는 것이기 때문.
//

const appleVariants: Variants = {
  start: { pathLength: 0, fill: "#fff0" },
  end: {
    pathLength: 1,
    fill: "#ffff",

    // 이렇게 end에 바로 transition을 넣어주어도 작동한다.
    // 그러나 이건 해당 end 속성이 들어간 부분에서만 작동한다.
    // transition: {
    //   pathLength: { duration: 3 },
    //   fill: {
    //     delay: 2,
    //     duration: 10,
    //   },
    // },
  },
};

// transition을 따로 속성으로 넣어주면 모든 부분에 대해서 전역으로 작동한다.
const appleTransition = {
  // 그냥넣어주거나 default로 넣어주면 모든 속성에 대해 적용된다.
  // duration: 3,
  default: { duration: 3 },

  // 속성을 따로 명시하는 순간 default로 넣어준 속성은 적용되지 않는다.
  fill: {
    delay: 2,
    duration: 2,
  },
};

export const Path = () => {
  return (
    <Wrapper>
      <Apple viewBox="0 0 16 16">
        <motion.path
          variants={appleVariants}
          initial="start"
          animate="end"
          transition={appleTransition}
          d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"
        ></motion.path>
      </Apple>

      <span className="logo">Path</span>
    </Wrapper>
  );
};
