import { User, Mail, Lock } from 'lucide-react';
import { Button } from '../../components/Button/Button';
import { Header } from '../../components/Header/Header';
import { Input } from '../../components/Input/Input';

import {
  Column,
  Container,
  LoginText,
  TermsOfUseText,
  Title,
  TitleLogin,
  Wrapper,
  SubTitleLogin,
  Form
} from './styles';

export function Register() {
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
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubTitleLogin>Crie sua conta e make the change.</SubTitleLogin>
            <Form>
              <Input name="name" placeholder="Nome completo" leftIcon={<User size={20} />} />
              <Input name="email" placeholder="E-mail" leftIcon={<Mail size={20} />} />
              <Input
                name="password"
                placeholder="Senha"
                type="password"
                leftIcon={<Lock size={20} />}
              />
              <Button title="Criar minha conta" variant="secondary" type="submit" />
            </Form>
            <Column>
              <TermsOfUseText>
                Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de
                Privacidade e os Termos de Uso da DIO.
              </TermsOfUseText>
              <LoginText>
                Já tenho conta. <span>Fazer login</span>
              </LoginText>
            </Column>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
}
