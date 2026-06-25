// File: src/components/sections/FraResearch.jsx

import React from "react";
import CountUp from "react-countup";
import { useInView } from 'react-intersection-observer';

// Import all the necessary styled components
import {
  Section,
  SectionTitle,
  LeadParagraph,
  StatGrid,
  StatCard,
  StatNumber,
  StatLabel,
  MethodologyContainer,
  ProcessStepper,
  ProcessStep,
  StepIcon,
  StepTitle,
  StepDescription,
  SecondaryButton // Using this for a less prominent CTA
} from "../styles";

// Import icons for the methodology section
import { FaBook, FaCalculator, FaChartBar } from 'react-icons/fa';

const FraResearch = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.1,    // Trigger when 10% of the element is visible
  });

  return (
    <Section id="fra-research">
      <SectionTitle>Evidence-Based & Scientifically Validated</SectionTitle>
      <LeadParagraph style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
        Our webFCE Fall Risk Assessment (FRA) is built upon a foundation of extensive scientific research to provide the most accurate and reliable screening available.
      </LeadParagraph>

      {/* Suggestion 1: Animated Heroic Numbers */}
      <StatGrid ref={ref}>
        <StatCard>
          <StatNumber>
            {inView ? <CountUp end={12} duration={2.5} /> : '0'}
          </StatNumber>
          <StatLabel>Core Evaluative Tools</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>
            {inView ? <CountUp end={2200} separator="," duration={2.5} /> : '0'}+
          </StatNumber>
          <StatLabel>Fall Risk Studies Examined</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>
            {inView ? <CountUp end={12700} separator="," duration={2.5} /> : '0'}+
          </StatNumber>
          <StatLabel>Population Norms Analyzed</StatLabel>
        </StatCard>
      </StatGrid>

      {/* Suggestion 2: Visualized Methodology */}
      <MethodologyContainer>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Our Methodology</h2>
        <ProcessStepper>
          <ProcessStep>
            <StepIcon><FaBook /></StepIcon>
            <StepTitle>Comprehensive Foundation</StepTitle>
            <StepDescription>
              We synthesized thousands of studies to select 12 core evaluative tools for our assessment.
            </StepDescription>
          </ProcessStep>
          <ProcessStep>
            <StepIcon><FaCalculator /></StepIcon>
            <StepTitle>Advanced Algorithms</StepTitle>
            <StepDescription>
              Each measurement is combined via complex mathematical algorithms to determine an accurate, unified risk score.
            </StepDescription>
          </ProcessStep>
          <ProcessStep>
            <StepIcon><FaChartBar /></StepIcon>
            <StepTitle>Predictive Power</StepTitle>
            <StepDescription>
              The final result predicts the statistical probability of a fall over a 12-month period for diverse populations.
            </StepDescription>
          </ProcessStep>
        </ProcessStepper>
      </MethodologyContainer>
      
      {/* Suggestion 3: Authority-Building CTA */}
      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <SecondaryButton href="/contact">Contact Us</SecondaryButton>
      </div>
    </Section>
  );
};

export default FraResearch;