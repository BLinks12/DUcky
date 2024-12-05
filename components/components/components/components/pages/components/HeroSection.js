import React, { Suspense } from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Particles } from './Particles';
import { OrbitControls } from '@react-three/drei';

export const HeroSection = () => {
  return (
    <HeroContainer>
      <CanvasWrapper>
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <Particles />
            <OrbitControls enableZoom={false} />
          </Suspense>
        </Canvas>
      </CanvasWrapper>
      <Content>
        <h2>Welcome to DuckAI</h2>
        <h3>The Ultimate Memecoin on Solana</h3>
        <button>Buy $DUCKY Now</button>
      </Content>
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
  /* Styles for hero section */
`;

const CanvasWrapper = styled.div`
  /* Styles for the Three.js canvas */
`;

const Content = styled.div`
  /* Styles for the content overlay */
`;
