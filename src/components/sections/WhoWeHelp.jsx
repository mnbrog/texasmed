// File: src/components/sections/WhoWeHelp.jsx

import React, { useState } from "react";
// Import all the necessary styled components
import {
  Section,
  SectionTitle,
  TwoColumnLayout,
  LeadParagraph,
  TabContainer,
  TabButton,
  TabContent,
  BulletList,
  CTAWrapper,
  HeroButton,
  IconWrapper // Reusing this for visual flair
} from "../styles";

// Import icons for each profile
import { FaUserMd, FaUserFriends, FaHeartbeat } from 'react-icons/fa';

// Define the content for our tabs in an array for clean code
const whoWeHelpData = [
  {
    id: 'providers',
    title: 'Healthcare Providers',
    icon: <FaUserMd />,
    description: "Our platform provides vital fall-prevention solutions to thousands of Physicians and Healthcare clinics across the United States, enabling superior patient care and new revenue opportunities.",
    benefits: [
      "Implement an evidence-based screening protocol.",
      "Create new service lines for your practice.",
      "Improve patient outcomes and satisfaction.",
      "Utilize detailed reporting for better care coordination."
    ]
  },
  {
    id: 'seniors',
    title: 'Senior Patients (65+)',
    icon: <FaUserFriends />,
    description: "Our primary focus is the +65 population. We provide the tools to help seniors maintain their independence and safety by proactively identifying and managing fall risks.",
    benefits: [
      "Gain a clear understanding of your personal fall risk.",
      "Receive a customized plan to improve balance and strength.",
      "Maintain independence and confidence in daily activities.",
      "Share clear, understandable results with family and doctors."
    ]
  },
  {
    id: 'at-risk',
    title: 'At-Risk Populations',
    icon: <FaHeartbeat />,
    description: "There is a growing need for introducing a Fall Risk plan of care for patients with underlying conditions (neurological, vestibular, etc.) that can contribute to falls at any age.",
    benefits: [
      "Address fall risks associated with specific medical conditions.",
      "Integrate fall prevention into post-operative rehabilitation.",
      "Manage risks related to medication side effects.",
      "Provide a proactive layer of care for complex patients."
    ]
  }
];

const WhoWeHelp = () => {
  const [activeTab, setActiveTab] = useState(whoWeHelpData[0].id);

  const activeContent = whoWeHelpData.find(tab => tab.id === activeTab);

  return (
    <Section id="who-we-help">
      <SectionTitle>Who We Help</SectionTitle>
      
      <TabContainer>
        {whoWeHelpData.map(tab => (
          <TabButton
            key={tab.id}
            active={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </TabButton>
        ))}
      </TabContainer>

      {activeContent && (
        <TabContent key={activeContent.id}>
          <TwoColumnLayout>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <IconWrapper style={{ marginBottom: '1.5rem' }}>{activeContent.icon}</IconWrapper>
              <LeadParagraph>{activeContent.description}</LeadParagraph>
            </div>
            <div>
              <h3 style={{ marginBottom: '1rem' }}>Key Benefits:</h3>
              <BulletList>
                {activeContent.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </BulletList>
            </div>
          </TwoColumnLayout>
        </TabContent>
      )}

      <CTAWrapper>
        <h2 style={{ marginBottom: '1rem' }}>Ready to Enhance Patient Care?</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 1.5rem auto' }}>
          We would welcome the opportunity to discuss the value this Fall Risk program could bring to your practice.
        </p>
        <HeroButton href="/contact">Schedule a Consultation</HeroButton>
      </CTAWrapper>
    </Section>
  );
};

export default WhoWeHelp;