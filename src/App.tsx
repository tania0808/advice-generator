import React from "react";
import GlobalStyle from "./theme/globals";
import { useFetch } from "./hooks/useFetch";
import { Container } from "./components/Container/Container.styled";
import { Advice } from "./components/Advice/Advice";
import { LoadingSpinner } from "./components/Spinner/LoadingSpinner";
import icon from "./images/pattern-divider-mobile.svg";
import dice from "./images/icon-dice.svg";

const URL = "https://api.adviceslip.com/advice";

function App() {
  const { data, error, handleFetch } = useFetch(URL);

  if (error) {
    return (
      <Container>
        <Advice> Error in fetching advices</Advice>
      </Container>
    );
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <Advice>
          {data === null ? (
            <LoadingSpinner />
          ) : (
            <>
              <Advice.Heading>Advice # {data.id}</Advice.Heading>
              <Advice.Body>{data.advice}</Advice.Body>
              <Advice.Divider>
                <Advice.IconDivider src={icon} alt="icon divider" />
                <Advice.DividerLine />
              </Advice.Divider>
              <Advice.Button onClick={() => handleFetch(URL)}>
                <Advice.ButtonIcon src={dice} alt="dice icon" />
              </Advice.Button>
            </>
          )}
        </Advice>
      </Container>
    </>
  );
}

export default App;
