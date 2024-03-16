import React from 'react';
import { StyleSheetManager } from 'styled-components';
import { FormInputLabel, Input, Group } from './form-item.styles';
import isPropValid from '@emotion/is-prop-valid';

const StyledFormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value && otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

// Wrapper component with shouldForwardProp filtering
const FormInputWrapper = ({ children }) => (
  <StyleSheetManager shouldForwardProp={prop => isPropValid(prop)}>
    {children}
  </StyleSheetManager>
);

const FormInput = (props) => (
  <FormInputWrapper>
    <StyledFormInput {...props} />
  </FormInputWrapper>
);

export default FormInput;
/*
mport {FormInputLabel,Input,Group} from './form-item.styles'
const FormInput=({label,...otherProps})=>{
    return(
    <Group>
        <Input {...otherProps} />
        {label && (
        <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>)}
        
              </Group>);
};
export default FormInput;
*/