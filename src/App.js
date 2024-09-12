import React from 'react';
import HomePermadani from './images/logoper.png';
import logo from './images/google.png';
import logo2 from './images/appstore.png';
import styled, { createGlobalStyle } from 'styled-components';

const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body, html {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }
`;

const PageContainer = styled.div`
  background-color: #FFFFFF;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Nunito', sans-serif;
  overflow: hidden;
`;

const TopSection = styled.div`
  background: linear-gradient(180deg, #FF61A6 0%, #1230AE 100%);
  color: white;
  padding: 0;
  border-radius: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  flex-direction: column;
  
  @media (min-width: ${breakpoints.mobile}) {
    flex-direction: row;
  }
`;

const TextAndLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
  
  @media (min-width: ${breakpoints.mobile}) {
    align-items: flex-start;
    text-align: left;
    margin-bottom: 0;
    margin-right: 40px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Logo = styled.img`
  height: 32px;
  cursor: pointer;
   transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const BoldHeading = styled.h1`
  font-family: 'Fira Sans', sans-serif;
  font-weight: 600;
  font-size: 35px;
  color: #FFFFFF;
  margin-bottom: 10px;
  
  @media (min-width: ${breakpoints.mobile}) {
    font-size: 53px;
  }
`;

const BoldText = styled.p`
  font-family: 'Nunito', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #FFFFFF;
  margin-bottom: 20px;
  
  @media (min-width: ${breakpoints.mobile}) {
    font-size: 18px;
  }
`;

const AppScreenshot = styled.img`
  width: 80%;
  max-width: 250px;
  
  @media (min-width: ${breakpoints.mobile}) {
    width: 35%;
    max-width: 230px;
  }
`;

const SplashPage = () => {
  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <TopSection>
          <ContentSection>
            <TextAndLogoContainer>
              <BoldHeading>NAOMI Apps.</BoldHeading>
              <BoldText>Aplikasi mobile untuk memantau kesehatan pasien jantung.</BoldText>
              <LogoContainer>
                <Logo src={logo} alt="Google Play Logo" />
                <Logo src={logo2} style={{ marginLeft: 15 }} alt="App Store Logo" />
              </LogoContainer>
            </TextAndLogoContainer>
            <AppScreenshot src={HomePermadani} alt="App Screenshot" />
          </ContentSection>
        </TopSection>
      </PageContainer>
    </>
  );
};

export default SplashPage;

