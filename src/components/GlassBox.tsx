import { ReactNode } from "react";
import styled from "styled-components";

const GlassBox = ({
  className,
  width = "100%",
  height,
  children,
}: IGlassBoxProps) => {
  return (
    <Container className={className} $width={width} $height={height}>
      {children}
    </Container>
  );
};

export default GlassBox;

interface IGlassBoxProps {
  width?: string;
  height?: string;
  children?: ReactNode;
  className?: string;
}

const Container = styled.div<{ $width?: string; $height?: string }>`
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 20px;
  width: ${(p) => p.$width};
  height: ${(p) => p.$height};
`;
