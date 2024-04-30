import styled from "styled-components";
import Link from "next/link";

import ImageWithSpace from "../src/components/layout/ImageWithSpace";
import H2 from "../src/components/typography/H2";
import H6 from "../src/components/typography/H6";
import Button from "../src/components/inputs/Button";
import Input from "../src/components/inputs/Input";
import Text from "../src/components/typography/Text";

import { UserIcon } from "@heroicons/react/24/solid";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

const FormContainer = styled.div`
  width: 100%;
  max-width: 574px;
  max-height: 550px;
  padding: 10px 0;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;

  @media (min-width: ${(props) => props.theme.WIDTH_XL}) {
    max-width: 400px;
    max-height: 100%;
    justify-content: space-evenly;
  }

  @media (max-width: 370px) {
    height: 700px;
    padding: 10px 0 10px 0;
  }

  @media (min-width: 760px) and (min-height: 1000px) {
    margin-top: 70px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;
  width: 85%;
  max-width: 400px;

  @media (min-width: 1000px) {
    gap: 80px;
  }

  @media (min-height: 800px) {
    gap: 70px;
  }
`;

const FormHead = styled.div`
  max-width: 85%;
`;

const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  width: 100%;
`

const FormLine = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  width: 100%;
  padding-bottom: 12px;
  border-bottom: 1px solid ${(props) => props.theme.inputColor};
`;

const StyledUserIcon = styled(UserIcon)`
  color: ${(props) => props.theme.inputColor};
  width: 25px;
  height: 25px;
`;

const StyledEnvelopeIcon = styled(EnvelopeIcon)`
  color: ${(props) => props.theme.inputColor};
  width: 25px;
  height: 25px;
`;

const StyledLockIcon = styled(LockClosedIcon)`
  color: ${(props) => props.theme.inputColor};
  width: 25px;
  height: 25px;
`;

const FormFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export default function SignupPage() {
  return (
    <ImageWithSpace>
      <FormContainer>
        <Form>
          <FormHead>
            <H2>Crie sua conta</H2>
            <H6>
              Por favor, preencha o formulário abaixo para criar sua conta.
            </H6>
          </FormHead>

          <FormBody>
            <FormLine>
              <StyledUserIcon />
              <Input placeholder="Nome de Usuário" type="text" />
            </FormLine>
            <FormLine>
              <StyledEnvelopeIcon />
              <Input placeholder="E-mail" type="email" />
            </FormLine>
            <FormLine>
              <StyledLockIcon />
              <Input placeholder="Senha" type="password" />
            </FormLine>
            <FormLine>
              <StyledLockIcon />
              <Input placeholder="Repita a Senha" type="password" />
            </FormLine>
          </FormBody>

          <FormFooter>
            <Link href="http://localhost:3000">
              <Button>Cadastrar</Button>
            </Link>
            <Text>
              Já possui uma conta? <Link href="/login">Entrar</Link>
            </Text>
          </FormFooter>
        </Form>
      </FormContainer>
    </ImageWithSpace>
  );
}
