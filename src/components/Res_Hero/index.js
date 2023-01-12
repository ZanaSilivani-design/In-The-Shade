import React from "react";
import { Hero, Heading, Content, Links, HeroWrapper } from "./ResHeroElements";
function ResourcesHero() {
  return (
    <>
      <Hero>
        <HeroWrapper>
          <Heading>Resource Center</Heading>
          <Content>
            Below you will find free resources to teach Islamic studies to your
            children at home.
          </Content>
          <Links>
            <span>Content</span>
            <a href="#youtube">YouTube</a>
            <a href="#stories">Stories</a>
            <a href="">Books</a>
            <a href="">Resume</a>
            <a href="">Kahoots</a>
          </Links>
        </HeroWrapper>
      </Hero>
    </>
  );
}

export default ResourcesHero;
