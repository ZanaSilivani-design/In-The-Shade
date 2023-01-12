import React from "react";
import {
  Resume,
  ResumeWrapper,
  Heading,
  HeadingFade,
  StepsWrapper,
  Step,
  Number,
  StepHeading,
  StepDescription,
  Btn,
} from "./ResumeElements";

import { TbUnlink } from "react-icons/tb";
function ResumeSection() {
  return (
    <>
      <Resume>
        <ResumeWrapper>
          <Heading>Four Steps to build your resume</Heading>
          <HeadingFade>Resume</HeadingFade>
          <StepsWrapper>
            <Step>
              <Number>01</Number>
              <StepHeading>Sign up</StepHeading>
              <StepDescription>Sign up for the website</StepDescription>
            </Step>
            <Step>
              <Number>02</Number>
              <StepHeading>Template</StepHeading>
              <StepDescription>Pick a free template </StepDescription>
            </Step>
            <Step>
              <Number>03</Number>
              <StepHeading>Information</StepHeading>
              <StepDescription>Input you information </StepDescription>
            </Step>
            <Step>
              <Number>04</Number>
              <StepHeading>Download</StepHeading>
              <StepDescription>Download the pdf file</StepDescription>
            </Step>
          </StepsWrapper>
          <Btn>
            <a href="#">
              NovoResume <TbUnlink className="icon" />
            </a>
          </Btn>
        </ResumeWrapper>
      </Resume>
    </>
  );
}

export default ResumeSection;
