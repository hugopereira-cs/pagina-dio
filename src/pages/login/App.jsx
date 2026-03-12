import { Mail, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import { Header } from '../../components/Header/Header';
import { Input } from '../../components/Input/Input';

import {
  Column,
  Container,
  CriarText,
  EsqueciText,
  Row,
  Title,
  TitleLogin,
  Wrapper,
  SubTitleLogin,
  Form
} from './styles';

export function Login() {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate('/feed');
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias e entrar
            mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubTitleLogin>Faça seu login e make the change.</SubTitleLogin>
            <Form>
              <Input placeHolder="email" leftIcon={<Mail size={20} />} />
              <Input placeHolder="Senha" type="password" leftIcon={<Lock size={20} />} />
              <Button
                title="Entrar"
                variant="secondary"
                onClick={handleClickSignIn}
                type="button"
              />
            </Form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar Conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
}
