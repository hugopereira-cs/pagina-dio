import { ButtonContainer } from './Button.styles';
import type { ButtonProps } from './types.ts';

export function Button({ title, variant = 'primary', onClick }: ButtonProps) {
  return (
    <ButtonContainer $variant={variant} onClick={onClick}>
      {title}
    </ButtonContainer>
  );
}
