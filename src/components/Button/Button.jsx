import { ButtonContainer } from './Button.styles';

export function Button({ title, variant = 'primary', onClick }) {
  return (
    <ButtonContainer title={title} variant={variant} onClick={onClick}>
      {title}
    </ButtonContainer>
  );
}
