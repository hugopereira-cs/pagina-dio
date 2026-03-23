import { ButtonContainer } from './Button.styles';
import PropTypes from 'prop-types';

export function Button({ title, variant = 'primary', onClick }) {
  return (
    <ButtonContainer title={title} variant={variant} onClick={onClick}>
      {title}
    </ButtonContainer>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  onClick: PropTypes.func
};
