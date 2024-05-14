import React from 'react';
import { StyleSheetManager } from 'styled-components';
import { FormInputLabel, Input, Group } from './form-item.styles';
import isPropValid from '@emotion/is-prop-valid';
import { InputHTMLAttributes,FC } from 'react';
export type FormInputProps={
  label:string;
}& InputHTMLAttributes<HTMLInputElement>
export const StyledFormInput:FC<FormInputProps>= ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={Boolean(otherProps.value && typeof otherProps.value==='string' && otherProps.value.length)}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export const FormInputWrapper:FC<FormInputProps> = ({ children }) => (
  <StyleSheetManager shouldForwardProp={prop => isPropValid(prop)}>
    {children}
  </StyleSheetManager>
);

export const FormInput:FC<FormInputProps> = (props) => (
  <FormInputWrapper label={''}>
    <StyledFormInput {...props} />
  </FormInputWrapper>
);

export default FormInput;
