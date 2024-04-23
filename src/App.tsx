import React, { Dispatch, FormEvent, SetStateAction, useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  border-radius: 10px;
  border: 1px solid orange;
  width: 200px;
  height: 30px;
  padding: 4px;
  display: block;
`;

function App() {
  const [name, setName] = useState<number>();
  const [age, setAge] = useState<number | undefined>(2);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault;
    console.log("전송");
  };

  const handleChange = <T,>(
    e: React.FormEvent<HTMLInputElement>,
    setVal: Dispatch<SetStateAction<T | undefined>>
  ) => {
    setVal(e.currentTarget.value as T);
  };

  console.log(typeof age);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <Input
          placeholder="이름"
          type="text"
          onChange={(e) => handleChange<number>(e, setName)}
          value={name}
        />
      </form>
    </div>
  );
}

export default App;
