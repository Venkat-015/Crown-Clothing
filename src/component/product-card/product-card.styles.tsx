import styled, { keyframes } from 'styled-components';

export const ProductCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 360px;
  align-items: center;
  position: relative;

  img {
    width: 101.5%;
    height: 90%;
    object-fit: cover;
    margin-bottom: 5px;
    border: 1px solid black;
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;
    
    button {
      display: block;
      opacity: 0.9;
      min-width: unset;
      padding: 0px 10px;

      &:hover {
        img {
          opacity: unset;
        }
        button {
          opacity: unset;
        }
      }
    }
  }
`;

const pulse = keyframes`
  0% {
    background: linear-gradient(to bottom right,#89ABE3FF,#FCF6F5FF);
  }
  100% {
    background: linear-gradient(to bottom right,#FCF6F5FF,#89ABE3FF);
  }
`;

export const Footer = styled.div`
  width: 101.5%;
  height: 6%;
  display: flex;
  margin-top: 3px;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 550;
  position: relative;
  background: linear-gradient(to bottom right,#89ABE3FF,#FCF6F5FF);
  animation: ${pulse} 2s infinite alternate;
  border: 1px solid black;
  @media screen and (max-width: 800px){
    font-size:16px;
  }
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  @media screen and (max-width: 800px){
    font-size:15.5px;
  }
`;

export const Price = styled.span`
  width: 10%;
  @media screen and (max-width: 800px){
    font-size:15.5px;
    margin-right:2px;

  }
`;
