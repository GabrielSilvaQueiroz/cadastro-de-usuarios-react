import styled from 'styled-components'
import Background from '../../assets/background1.svg'

export const Container = styled.div`
background: url("${Background}");
background-size: cover;

display: flex;
flex-direction: column;
align-items: center;
gap: 40px;
height: 100vh;
`;

export const Image = styled.img`
margin-top: 30px;
`;

export const InputLabel = styled.p`
color: #EEE;
font-size: 18px;
font-family: Roboto;
font-weight: 700;
line-height: 22px;
letter-spacing: -0.408px;

margin-left: 25px;
`;

export const Input = styled.input`
border-radius: 14px;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

height: 58px;
width: 342px;
padding-left: 25px;

border: none;
outline: none;

color: #FFF;
font-size: 20px;
font-family: Roboto;

margin-bottom: 34px;
`;