import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export const NavBar = () => {
  return (
    <Nav>
      <Logo>
        <img src="/images/duckai_logo.png" alt="DuckAI Logo" />
        <h1>DuckAI</h1>
      </Logo>
      <NavLinks>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/tokenomics">Tokenomics</StyledLink>
        <StyledLink to="/roadmap">Roadmap</StyledLink>
        <StyledLink to="/nft">NFT Marketplace</StyledLink>
        <StyledLink to="/ai-chatbot">AI Chatbot</StyledLink>
      </NavLinks>
      <WalletButton>
        <WalletMultiButton />
      </WalletButton>
    </Nav>
  );
};

const Nav = styled.nav`
  /* Styles for the navigation bar */
`;

const Logo = styled.div`
  /* Styles for the logo */
`;

const NavLinks = styled.div`
  /* Styles for navigation links */
`;

const StyledLink = styled(Link)`
  /* Styles for individual links */
`;

const WalletButton = styled.div`
  /* Styles for the wallet button */
`;
