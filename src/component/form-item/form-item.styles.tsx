import styled,{css} from 'styled-components';
import { ReactNode } from 'react';
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';
const subColor='grey';
const mainColor='black';

const shrinkLabelStyles=css `
top: -15px;
font-size: 12px;
color: ${mainColor};
`;
type FormInputLabelProps={
  shrink?:boolean;
}
export const FormInputLabel=styled.label<FormInputLabelProps>`
color: ${subColor};
    font-size: 16px;
    font-weight: normal;
    position:absolute;
    pointer-events:none;
    left: 5px;
    top: 10px;
    transition: top 300ms ease all;
${({shrink})=>shrink && shrinkLabelStyles}`;

export const Input= styled.input `
background: none;
background-color: white;
color: ${subColor};
font-size: 18px;
padding: 10px 10px 10px 5px;
display: block;
width: 100%;
border:none;
border-radius: 0;
border-bottom: 1px solid ${subColor};
margin: 25px 0;

  &:focus {
    outline:invert;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles}
  }`;

  export const Group=styled.div `
  position: relative;
  margin: 45px 0;
  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

interface StyledComponentsWrapperProps {
  children: ReactNode;
}
// Use StyleSheetManager to filter out unknown props
export const StyledComponentsWrapper:React.FC<StyledComponentsWrapperProps> = ({ children }) => (
  <StyleSheetManager shouldForwardProp={prop => isPropValid(prop)}>
    {children}
  </StyleSheetManager>
);