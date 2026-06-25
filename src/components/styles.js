// File: src/components/styles/index.js

import styled from "styled-components";

export const COLORS = {
  darkBlue: "#0A2640",
  teal: "#1868cf",
  cardBg: "#FFFFFF",
  // FIX 1: Added missing color definitions
  lightTeal: "#color(srgb 0.11 0.19 0.4)",
  seriousRed: "#EF4444",
  neutralGray: "#6B7280",
  lightBg: "#F9FAFB",
};


export const NavBar = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  max-width: 100vw;
  background: ${COLORS.cardBg};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  z-index: 200;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0.75rem 1rem 0.65rem;
  box-sizing: border-box;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 0.7rem 3.5rem 0.7rem;
  }
`;



export const LogoWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 0.35rem;
  box-sizing: border-box;
  min-width: 0;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    min-width: 0;
  }

  img {
  display: block;
  width: clamp(280px, 36vw, 520px);
  max-width: min(92vw, 520px);
  height: auto;
  max-height: 200px;
  object-fit: contain;
}

@media (max-width: 768px) {
  margin-bottom: 0;

  img {
    width: clamp(200px, 66vw, 320px);
    max-width: 82vw;
    max-height: 130px;
  }
}

@media (max-width: 420px) {
  img {
    width: clamp(170px, 72vw, 250px);
    max-width: 78vw;
    max-height: 105px;
  }
}
`;


export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  gap: clamp(0.35rem, 2vw, 1rem);
  margin: 0;
  padding: 0.25rem 1rem;
  width: 100%;
  max-width: 1000px;
  position: relative;
  box-sizing: border-box;

  > li {
    position: relative;
  }

  a,
  button {
    display: block;
    padding: 0.45rem 0.7rem;
    font-size: clamp(0.9rem, 1.8vw, 1rem);
    background: none;
    border: none;
    text-align: left;
    cursor: pointer;
    width: 100%;
    color: ${COLORS.darkBlue};
    transition: color 0.2s ease-in-out, font-weight 0.2s ease-in-out;
    text-decoration: none;
    white-space: nowrap;
  }

  a:hover,
  button:hover {
    background: #f2f4f5;
    color: ${COLORS.teal};
  }

  a.active {
    color: ${COLORS.teal};
    font-weight: 600;
    text-decoration: underline;
  }

  ul {
    display: none;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: ${COLORS.cardBg};
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    margin: 0;
    padding: 0;
    list-style: none;
    min-width: 200px;
    z-index: 10;
  }

  li:hover > ul,
  li:focus-within > ul {
    display: block;
  }

  ul li {
    position: relative;
    white-space: nowrap;
  }

  ul li ul {
    top: 0;
    left: 100%;
    transform: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: min(78vw, 280px);

    padding: 6rem 1rem 1rem;
    transform: translateX(-100%);
    transition: transform 0.2s ease;
    background: ${COLORS.cardBg};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
    z-index: 199;

    &.open {
      transform: translateX(0);
    }

    > li {
      width: 100%;
    }

    a,
    button {
      font-size: 1rem;
      padding: 0.75rem;
      white-space: normal;
    }

    ul {
      position: static;
      transform: none;
      box-shadow: none;
      min-width: 100%;
      padding-left: 0.75rem;
    }

    ul li ul {
      position: static;
    }
  }
`;



export const Section = styled.section`
  max-width: 1100px;
  margin: 5rem auto;
  padding: 2rem 1.5rem;
  scroll-margin-top: 200px; 
`;

export const SectionTitle = styled.h2`
  font-size: clamp(1.75rem, 5vw, 2.25rem);
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 700;
`;


export const BulletList = styled.ul`
  margin-left: 1.25rem;

  li {
    margin-bottom: 0.5rem;
    position: relative;
    padding-left: 1rem;

    &::before {
      content: "•";
      position: absolute;
      left: 0;
      color: ${COLORS.teal};
    }
  }
`;



export const HeroVideo = styled.section`
  position: relative;
  height: 70vh; /* A bit more height */
  min-height: 450px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    height: auto; /* Let height be determined by content */
    min-height: 0;
    padding: 6rem 1rem; /* Add vertical padding for content */
  }
`;

export const BackgroundVideo = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  z-index: 1;
  object-fit: cover;
  filter: brightness(0.6);
`;



export const HeroButton = styled.a`
  background: ${COLORS.teal};
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  transition: background 0.2s ease-in-out;
  display: inline-block;
  margin-top: 2rem; /* push button lower */


  &:hover {
    background: #64ffda;
  }
`;



export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 400px;
  margin: 0 auto;

  input,
  textarea {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    background: ${COLORS.teal};
    color: #fff;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
  }
`;



// --- STYLES FOR THE "NEED SCREEN" SECTION ---

export const ImpactText = styled.h3`
  font-size: clamp(1.25rem, 3vw, 2rem);
  font-weight: 700;
  line-height: 1.2;
  color: ${COLORS.darkBlue};
  margin-bottom: 0.75rem;
`;

export const QuoteText = styled.p`
  font-style: italic;
  font-size: clamp(0.7rem, 1.5vw, 1rem);
  line-height: 1.6;
  color: #334D6E;
  max-width: 550px;
  margin: 0 auto 1.5rem auto;
  position: relative;
  padding: 0 1rem;

  &::before, &::after {
    content: '"';
    font-size: 2rem;
    color: ${COLORS.lightTeal};
    position: absolute;
    line-height: 1;
  }

  &::before {
    top: -0.25rem;
    left: 0;
  }

  &::after {
    bottom: -1rem;
    right: 0;
  }
`;


// Recommended responsive 3-column grid
export const StatGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  width: 100%;
  margin: 1.5rem 0;

  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// Define StatNumber FIRST to prevent initialization errors
export const StatNumber = styled.p`
  font-size: clamp(1.2rem, 3.5vw, 1.8rem);
  font-weight: 700;
  color: ${COLORS.darkBlue};
  line-height: .7;
  transition: color 0.3s ease-in-out;
`;

export const StatLabel = styled.p`
  font-size: 0.85rem;
  color: #334D6E;
  line-height: 1.4;
`;

export const StatCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: transparent;
  padding: 0.75rem;
  border-top: 3px solid ${COLORS.lightTeal};
  transition: transform 0.3s ease;

  &.serious {
    border-top-color: ${COLORS.seriousRed};
  }

  &:hover {
    transform: translateY(-5px);

    ${StatNumber} {
      color: ${COLORS.seriousRed};
    }
  }
`;

export const BridgeText = styled.p`
  font-size: clamp(0.7rem, 1.8vw, 1rem);
  font-weight: 500;
  max-width: 550px;
  margin: 0 auto 1.25rem auto;
  line-height: 1.6;
`;

export const SourceText = styled.p`
  font-size: 0.5rem;
  color: ${COLORS.neutralGray};
  margin-top: 3rem;

  a {
    color: ${COLORS.neutralGray};
    text-decoration: underline;
    transition: color 0.2s ease;

    &:hover {
      color: ${COLORS.teal};
    }
  }
`;

export const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const LeadParagraph = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  line-height: 1.6;
  color: #334D6E;
  margin-bottom: 1.5rem;
`;
export const ImageWrapper = styled.div`
  img {
    width: 100%;
    height: auto;
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(10, 38, 64, 0.1);
  }
`;

export const FeatureGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  
  scroll-margin-top: 400px;

  grid-template-columns: 1fr;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const FeatureCard = styled.div`
  background: ${COLORS.cardBg};
  border-radius: 12px;
  border: 1px solid #EAECEF;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03), 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 2px 4px rgba(0,0,0,0.05), 0 8px 16px rgba(0,0,0,0.08);
  }
`;

export const IconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: ${COLORS.lightTeal};
  border-radius: 50%;
  margin-bottom: 1rem;
  color: ${COLORS.darkBlue};
  font-size: 1.75rem;
`;

export const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

export const FeatureDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: #334D6E;
`;

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  h2, p {
    text-align: center;
  }

  a {
    align-self: center;
    margin-top: 1.5rem;
  }
`;

export const MethodologyContainer = styled.div`
  margin-top: 4rem;
`;

// Find and replace the existing ProcessStepper with this version



export const StepIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  background-color: ${COLORS.darkBlue};
  border-radius: 50%;
  margin-bottom: 1rem;
  color: ${COLORS.cardBg};
  font-size: 2rem;
  box-shadow: 0 4px 12px rgba(10, 38, 64, 0.2);
`;

export const StepTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

export const StepDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: #334D6E;
`;

export const SecondaryButton = styled.a`
  display: inline-block;
  background: transparent;
  color: ${COLORS.darkBlue};
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  border: 1px solid ${COLORS.neutralGray};
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;

  &:hover {
      background: ${COLORS.lightBg};
      border-color: ${COLORS.darkBlue};
  }
`;

export const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;
  border-bottom: 1px solid #EAECEF;
`;

export const TabButton = styled.button`
  padding: 1rem 1.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: ${props => props.active ? COLORS.darkBlue : COLORS.neutralGray};
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 3px;
    background-color: ${COLORS.teal};
    transform: ${props => props.active ? 'scaleX(1)' : 'scaleX(0)'};
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    color: ${COLORS.darkBlue};
  }
`;

export const TabContent = styled.div`
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

export const CTAWrapper = styled.div`
  text-align: center;
  margin-top: 4rem;
  padding: 3rem 1.5rem;
  background: ${COLORS.cardBg};
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(10, 38, 64, 0.08);
`;

export const AboutIntroWrapper = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem auto;
`;

export const MissionStatement = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.6;
  color: #334D6E;
  margin-bottom: 2rem;
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

export const TeamMemberCard = styled.div`
  background: ${COLORS.cardBg};
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  }
`;

export const MemberPhoto = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1.5rem;
  border: 4px solid ${COLORS.lightTeal};
`;

export const MemberName = styled.h4`
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
`;

export const MemberTitle = styled.p`
  font-size: 1rem;
  color: ${COLORS.teal};
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const MemberBio = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: #334D6E;
`;

export const ContactLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 3rem;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactInfo = styled.div`
`;

export const Subheading = styled.h3`
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 1rem;
`;

export const ContactParagraph = styled.p`
  font-size: 1.125rem;
  color: #334D6E;
  margin-bottom: 2rem;
`;

export const ContactDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-weight: 500;

  a {
    color: ${COLORS.darkBlue};
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: ${COLORS.darkBlue};
    }
  }
`;

export const PrivacyNote = styled.p`
  font-size: 0.875rem;
  color: ${COLORS.neutralGray};
  margin-top: 1rem;
  text-align: center;
`;
// Find and replace the existing ProcessStepper with this version


export const CenteredTextColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
// ... (existing styles)



export const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 201;

  div {
    width: 25px;
    height: 3px;
    background-color: ${COLORS.darkBlue};
    margin: 4px 0;
    transition: 0.4s;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

export const CloseIcon = styled.div`
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 25px;
    height: 3px;
    background-color: ${COLORS.darkBlue};
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;

// ... (rest of the styles)
// ... (existing styles)

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  color: #ffffff;
  max-width: 950px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;

  h2 { /* Targets the SectionTitle */
    font-size: clamp(2.25rem, 6vw, 3.5rem);
    margin-bottom: 1rem;
  }

  h3 { /* Targets the MissionStatement */
    font-size: clamp(1.1rem, 4vw, 1.35rem);
    font-weight: 500; /* Ensure this is not too bold */
    line-height: 1.6;
    max-width: 800px;
    margin: 0 auto 2rem auto; /* Center and provide bottom margin */
  }
`;
// ... (existing styles)

// Find and replace the existing ProcessStepper with this version
export const ProcessStepper = styled.div`
  display: grid;
  /* This now defaults to a responsive grid and will adjust on smaller screens */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem; /* Increased gap for more space */
`;

export const ProcessStep = styled.div`
  text-align: center;
  position: relative;
  padding: 0 1rem;

  &:not(:last-child)::after {
    content: '→';
    font-size: 2.5rem;
    color: ${COLORS.lightTeal};
    position: absolute;
    top: 30px;
    right: -40px; /* Increased space for the right arrow */

    @media (max-width: 820px) {
      content: '↓';
      top: auto;
      bottom: -50px; /* Increased space for the down arrow */
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

// ... (rest of the styles)

// ... (rest of the styles)