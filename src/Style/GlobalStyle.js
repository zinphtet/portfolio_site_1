import styled, { createGlobalStyle } from 'styled-components';
// font-family: 'Cinzel', serif;
// font-family: 'Lobster Two', cursive;

export const GlobalStyle = createGlobalStyle`
   *,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }
   html{
    font-size: 62.5%;
    font-family: 'Raleway', serif;
    line-height: 1.5;
    scroll-behavior: smooth;
    @media screen and (max-width : 56.25rem){
      font-size:59.375%;
    }
    @media screen and (max-width : 37.5rem){
      font-size:56.25%;
    }
    @media screen and (max-width :25rem){
      font-size:53.125%;
    }
   }
   li{
    list-style-type: none;
   }
   a{
    text-decoration: none;
   }
`;

export const ImgContainer = styled.div`
	max-width: ${(props) => props.width};
	max-height: ${(props) => props.height};
`;
export const IMG = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
