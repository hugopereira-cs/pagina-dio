import { Mail, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import { Header } from '../../components/Header/Header';
import { Input } from '../../components/Input/Input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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

const schema = yup
  .object({
    email: yup.string().email('email não é válido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório')
  })
  .required();

export function Login() {
  const navigate = useNavigate();

  const { control, handleSubmit, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: ''
    }
  });

  console.log(isValid, errors);

  const onSubmit = (data) => console.log(data);

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
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Input control={control} name="email" errorMessage={errors?.email?.message} placeholder="email" leftIcon={<Mail size={20} />} />
              <Input control={control} name="password" errorMessage={errors?.password?.message} placeholder="Senha" type="password" leftIcon={<Lock size={20} />} />
              <Button title="Entrar" variant="secondary" type="submit" />
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
