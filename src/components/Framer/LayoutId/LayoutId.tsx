import { useState } from "react";
import { Wrapper, Card, Overlay } from "./styles";
import { AnimatePresence } from "motion/react";

const overlayVariants = {
  hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
  visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

export const LayoutId = () => {
  const [selectedId, setSelectedId] = useState(-1);

  return (
    <>
      <Wrapper>
        {Array.from({ length: 4 }, (_, i) => i).map((id) => (
          <Card
            key={id}
            layoutId={`card-${id}`}
            onClick={() => setSelectedId(id)}
          />
        ))}

        <span className="logo">Layout 응용</span>
      </Wrapper>
      <AnimatePresence>
        {selectedId !== -1 && (
          <Overlay
            onClick={() => setSelectedId(-1)}
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Card
              layoutId={`card-${selectedId}`}
              style={{ width: 400, height: 300, backgroundColor: "#fff" }}
            />
          </Overlay>
        )}
      </AnimatePresence>
    </>
  );
};
