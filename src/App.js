import React from "react";
import Container from "./components/Container";
import Reports from "./components/Reports";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import SubTitle from "./components/SubTitle";

function App() {
  return (
    <Container>
      <Title />
      <Wrapper>
        <SubTitle />
        <Reports />
      </Wrapper>
    </Container>
  );
}

export default App;
