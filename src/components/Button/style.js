import styled from 'styled-components'

export const Button = styled.button`
border-radius: 14px;
border: ${props => props.isBack ? '1px solid #FFFFFF' : 'none'};
background: ${props => props.isBack ? 'transparent' : 'rgba(0, 0, 0, 0.80)'};
margin-top: 130px;

width: 342px;
height: 74px;
flex-shrink: 0;
cursor: pointer;

color: #FFF;
font-size: 17px;
font-family: Roboto;
font-weight: 700;
line-height: 28px;

display: flex;
align-items: center;
justify-content: center;
gap: 20px;

&:hover{
    opacity: 0.8;
}

&:active {
    opacity: 0.5;
}
img {
    transform: ${props => props.isBack && 'rotateY(180deg)'} ;
}

`;