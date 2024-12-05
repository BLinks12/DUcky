import React from 'react';
import styled from 'styled-components';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { TokenomicsSection } from '../components/TokenomicsSection';
import { RoadmapSection } from '../components/RoadmapSection';
import { HowToBuySection } from '../components/HowToBuySection';
import { CommunitySection } from '../components/CommunitySection';
import { AIChatbotSection } from '../components/AIChatbotSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TokenomicsSection />
      <RoadmapSection />
      <HowToBuySection />
      <CommunitySection />
      <AIChatbotSection />
    </>
  );
};

export default Home;
