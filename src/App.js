import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  ${(props) => props.theme}
`;

const Text = styled.h2`
  color: ${(props) => props.theme.dd};
`;

function App() {
  return (
    <div>
      <Wrapper>
        <Text color="blue" s="300px">
          hi
        </Text>
      </Wrapper>
    </div>
  );
}

export default App;
