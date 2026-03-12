import { Card } from '../../components/Card/Card';
import { Header } from '../../components/Header/Header';
import { UserInfo } from '../../components/UserInfo/UserInfo';

import { Container, Column, Title, TitleHighlight } from './styles';

export function Feed() {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># RANKING TOP 5 DA SEMANA</TitleHighlight>
          <UserInfo percentual={80} name="Hugo Pereira" image="https://avatars.githubusercontent.com/u/184418432?v=4" />
          <UserInfo percentual={27} name="Hugo Pereira" image="https://avatars.githubusercontent.com/u/184418432?v=4" />
          <UserInfo percentual={89} name="Hugo Pereira" image="https://avatars.githubusercontent.com/u/184418432?v=4" />
          <UserInfo percentual={57} name="Hugo Pereira" image="https://avatars.githubusercontent.com/u/184418432?v=4" />
          <UserInfo percentual={12} name="Hugo Pereira" image="https://avatars.githubusercontent.com/u/184418432?v=4" />
        </Column>
      </Container>
    </>
  );
}
