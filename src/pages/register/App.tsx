import { User, Mail, Lock } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
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

const schema = yup.object({
  name: yup.string().min(3, 'Nome muito curto').required('Campo obrigatório'),
  email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
  password: yup.string().min(3, 'Senha muito curta').required('Campo obrigatório'),
}).required();

export function Register() {

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = (data: any) => {
    console.log(data);
    // Lógica de cadastro aqui
  }

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
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Input 
                name="name" 
                placeholder="Nome completo" 
                leftIcon={<User size={20} />} 
                control={control} 
                errorMessage={errors?.name?.message} 
              />
              <Input 
                name="email" 
                placeholder="E-mail" 
                leftIcon={<Mail size={20} />} 
                control={control} 
                errorMessage={errors?.email?.message} 
              />
              <Input
                name="password"
                placeholder="Senha"
                type="password"
                leftIcon={<Lock size={20} />}
                control={control}
                errorMessage={errors?.password?.message}
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
