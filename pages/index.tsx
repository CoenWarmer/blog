import React from "react";
import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";
import styled from "styled-components";

const Home = () => (
  <Container>
    <Head title="Home" />
    <Nav />

    <Hero>
      <Title>Coen Warmer</Title>
      <Description>A collection of some musings and code examples.</Description>

      <Row>
        <Card href="https://github.com/zeit/next.js#getting-started">
          <h3>Presentations</h3>
          <p>Download presentations</p>
        </Card>
        <Card href="https://jsfiddle.net/user/coenwarmer/fiddles/">
          <h3>Algorithms</h3>
          <p>A collection of algorithms.</p>
        </Card>
      </Row>
    </Hero>
  </Container>
);

export default Home;

const Container = styled.div``;

const Card = styled.a`
  padding: 18px 18px 24px;
  width: 220px;
  text-align: left;
  text-decoration: none;
  color: #434343;
  border: 1px solid #9b9b9b;

  &:hover {
    border-color: #067df7;
  }

  > h3 {
    margin: 0;
    color: #067df7;
    font-size: 18px;
  }

  > p {
    margin: 0;
    padding: 12px 0 0;
    font-size: 13px;
    color: #333;
  }
`;

const Row = styled.div`
  max-width: 880px;
  margin: 80px auto 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Title = styled.h1`
  margin: 0;
  width: 100%;
  padding-top: 80px;
  line-height: 1.15;
  font-size: 48px;
  text-align: center;
`;

const Hero = styled.div`
  width: 100%;
  color: #333;
`;

const Description = styled.p`
  text-align: center;
`;
