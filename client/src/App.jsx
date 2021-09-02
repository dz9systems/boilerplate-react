import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
 margin-top:5rem;
//  height:100vh;
`;
const Button = styled.button`
  width: 9rem;
  height: 2rem;
  background-color: transparent;
  border: 1px solid;
  cursor:pointer;
`;

const Ptag = styled.p`
  font-size:3rem;
`;

const App = () => {
  const [likes, setLikes] = React.useState(0);
  return (
      <Container>
        <h1>REACT BOILER PLATE</h1>
        <h2>Congradulations!!!</h2>
        <h3>You have Successfully Deployed this Application.</h3>
        <Button onClick={() => setLikes(likes + 1)}>Like</Button>
        {likes>0?<Ptag>{likes}</Ptag>:null}
      </Container>
  );
};

export default App;