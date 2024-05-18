import styled from 'styled-components';

import Button from '../button/button.component';

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width:800px){
        margin:50px;
  }
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;
  @media screen and (max-width:800px){
    margin:50px;
    margin-top:30px;
    min-width:400px;
    
}
@media screen and (max-width:400px){
  margin:50px;
  margin-top:15px;
  min-width:300px;
  
}
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 40px;
  @media screen and (max-width:800px){
        margin-right:80px;
  }
`;