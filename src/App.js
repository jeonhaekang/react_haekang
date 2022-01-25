import React from 'react';
import styled from 'styled-components'
import { Route, Switch } from "react-router-dom";
import Score from './Score';
import Review from './Review';



function App() {
  let days = ['월', '화', '수', '목', '금', '토', '일'];

  return (
    <Container>
      <Route path="/" exact>
        <Title>내 일주일은?</Title>
        {days.map((list, index) => {
          return (
            <Score day={list} key={index}/>
          );
        })}
      </Route>
      <Route path="/review/:day">
        <Review/>
      </Route>
    </Container>
  );
}

const Container = styled.div`
  max-width: 350px;
  width: 80vw;
  height: 80vh;
  margin: 5vw auto;
  padding: 20px;
  border: 1px solid rgb(221, 221, 221);
  box-sizing: border-box;
  border-radius: 5px;
`;

const Title = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

const CircleContainer = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ScoreCircle = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 30px;
    margin: 5px;
    background-color: yellow;
`;

export default App;