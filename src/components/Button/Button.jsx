import { ButtonContainer } from './Button.styles';

export function Button({ children, variant = 'primary', onClick }) {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
}
