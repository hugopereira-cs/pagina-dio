import { Button } from '../Button/Button';
import logo from '../../assets/logo-dio.png';
import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper
} from './Header.styles';

import { Link } from 'react-router';
import { useAuth } from '../../hooks/useAuth.ts';

export function Header({}) {
  const { user, handleLogout } = useAuth();

  return (
    <Wrapper>
      <Container>
        <Row>
          <Link to='/'>
          <img src={logo} alt="Logo da DIO" />
          </Link>
          {user.id ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {user.id ? (
          <>
            <UserPicture src="https://avatars.githubusercontent.com/u/184418432?v=4" />
            <a href="#" onClick={handleLogout}>
              Sair
            </a>
          </>
          ) : (
            <>
              <MenuRight href="#">Home</MenuRight>
              <Button title="Entrar" variant="primary" />
              <Button title="Cadastrar" variant="primary" />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
}
