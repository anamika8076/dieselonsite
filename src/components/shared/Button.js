import styled from 'styled-components';

export const Button = styled.button`
  padding: 1rem 2rem;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const PrimaryButton = styled(Button)`
  background: white;
  color: #ff6b00;
  border: none;
`;

export const SecondaryButton = styled(Button)`
  background: transparent;
  color: white;
  border: 2px solid white;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;