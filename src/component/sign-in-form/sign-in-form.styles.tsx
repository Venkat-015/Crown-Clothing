import styled from 'styled-components';
import Button from '../button/button.component';
export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 10px 0;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    margin-right: 10px;
  }
`;
export const StyledButton = styled(Button)`
  width: 180px; /* Set a fixed width for the buttons */
  padding: 10px; /* Adjust padding as needed */
`;
