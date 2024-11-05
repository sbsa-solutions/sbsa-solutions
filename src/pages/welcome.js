import React from "react";
import { Slider } from "../components/welcome/slider";
import { Intro } from "../components/welcome/intro";
import { AboutSection } from "../components/welcome/about";
import { Counter } from "../components/welcome/counter";
import { ServicesSection } from "../components/welcome/services";
import { CTASection } from "../components/welcome/cta";
import { TestimonialSection } from "../components/welcome/testimonial";

export function Welcome() {
  return (
    <>
      <Slider></Slider>
      <Intro></Intro>
      <AboutSection></AboutSection>
      <Counter></Counter>
      <ServicesSection></ServicesSection>
      <CTASection></CTASection>
      <TestimonialSection></TestimonialSection>
    </>
  );
}
