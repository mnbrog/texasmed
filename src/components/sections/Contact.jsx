// File: src/components/sections/Contact.jsx

import React from "react";
import {
  Section,
  SectionTitle,
  ContactLayout,
  ContactInfo,
  Subheading,
  ContactParagraph,
  ContactDetail,
  ContactForm, // Note: This styled component should be a <form> tag
  PrivacyNote
} from "../styles";
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Contact = ({ isPulsePage = false }) => (
  <Section id="contact">
    <SectionTitle>Get in Touch</SectionTitle>

    <ContactLayout>
      <ContactInfo>
        <Subheading>
            {isPulsePage ? "Let’s Talk Cardiovascular Wellness." : "Let’s Talk Fall Prevention."}
        </Subheading>
        <ContactParagraph>
            {isPulsePage
                ? "Learn how our Pulse4Pulse assessment program can benefit your practice and patients. Contact us for a demo, billing details, or to discuss how to implement this turnkey service."
                : "Interested in learning more about how our Fall Risk Assessment program can benefit your practice and patients? Contact us for a demo, pricing information, or a partnership discussion."
            }
        </ContactParagraph>

        <ContactDetail>
          <FaEnvelope color="#darkBlue" size="24" />
          <a href="mailto:sales@gulftexas.com">sales@gulftexas.com</a>
        </ContactDetail>
      </ContactInfo>
      
      {/* This is now a real form that Netlify can process.
        I've used "contact-form" as the name, which is how it will appear in your Netlify dashboard.
      */}
      <ContactForm 
        name="contact-form" 
        method="POST" 
        data-netlify="true"
      >
        {/* This hidden input is required for JavaScript-rendered forms */}
        <input type="hidden" name="form-name" value="contact-form" />
        
        <input type="text" name="name" placeholder="Full Name" required />
        <input type="email" name="email" placeholder="Work Email" required />
        
        <select name="subject" required defaultValue="">
          <option value="" disabled>I'm interested in...</option>
          <option value="Fall Risk Inquiry">Fall Risk Inquiry</option>
          <option value="Demo Request">Requesting a Demo</option>
          <option value="Pricing Information">Pricing Information</option>
          <option value="Partnership">Partnership Inquiry</option>
          <option value="General Question">General Question</option>
        </select>

        <textarea name="message" rows="5" placeholder="Your message..."></textarea>
        <button type="submit">Send Message</button>

        <PrivacyNote>
          We respect your privacy and will never share your information.
        </PrivacyNote>
      </ContactForm>
    </ContactLayout>
  </Section>
);

export default Contact;