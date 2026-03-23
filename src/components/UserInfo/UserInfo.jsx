import { Container, NameText, Progress, UserPicture } from './UserInfo.styles';
import PropTypes from 'prop-types';

export function UserInfo({ name, image, percentual }) {
  return (
    <Container>
      <UserPicture src={image} />
      <div>
        <NameText>{name}</NameText>
        <Progress percentual={percentual} />
      </div>
    </Container>
  );
}

UserInfo.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  percentual: PropTypes.number.isRequired
};
