import { ButtonContainer } from './Button.styles';
import { IButton } from './types';

export function Button({ title, variant = 'primary', onClick }: IButton) {
  return (
    <ButtonContainer $variant={variant} onClick={onClick}>
      {title}
    </ButtonContainer>
  );
}
