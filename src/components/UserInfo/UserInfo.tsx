import type { UserInfoProps } from './types.ts';
import { Container, NameText, Progress, UserPicture } from './UserInfo.styles';

export function UserInfo({ name, image, percentual }: UserInfoProps) {
  return (
    <Container>
      <UserPicture image={image} name={name} percentual={percentual} />
      <div>
        <NameText>{name}</NameText>
        <Progress $percentual={percentual} />
      </div>
    </Container>
  );
}
