import React, { Component } from "react";
import Header from "parts/Header";
import Hero from "parts/Hero";
import Slider from "parts/Slider";
import { HomeWrapper } from "parts/Style";

class LandingPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero></Hero>
        <HomeWrapper>
          <Slider></Slider>
        </HomeWrapper>
      </>
    );
  }
}

export default LandingPage;
