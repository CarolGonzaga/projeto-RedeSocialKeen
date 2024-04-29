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

const FormContainer = styled.div`
  width: 100%;
  max-width: 574px;
  max-height: 600px;
  padding: 10px 0;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex-grow: 1;
  gap: 30px;

  @media (min-width: ${(props) => props.theme.WIDTH_XL}) {
    max-width: 400px;
    max-height: 100%;
  }

  @media (max-width: 320px) {
    max-width: 100vw;
    gap: 50px;
  }
`;

const FormHead = styled.div`
  max-width: 85%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;

  width: 85%;
`;

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

const StyledLockIcon = styled(LockClosedIcon)`
  color: ${(props) => props.theme.inputColor};
  width: 25px;
  height: 25px;
`;

const FormFooter = styled.div`
  max-width: 90%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (max-width: 320px) {
    margin-bottom: 30px;
  }
`;

export default function LoginPage() {
  return (
    <ImageWithSpace>
      <FormContainer>
        <FormHead>
          <H2>Acesse sua conta</H2>
          <H6>Preencha os campos abaixo para acessar a comunidade.</H6>
        </FormHead>

        <Form>
          <FormLine>
            <StyledUserIcon />
            <Input placeholder="Usuário ou e-mail" type="email" />
          </FormLine>
          <FormLine>
            <StyledLockIcon />
            <Input placeholder="Senha" type="password" />
          </FormLine>
        </Form>

        <FormFooter>
        <Link href="http://localhost:3000"><Button>Entrar</Button></Link>
          <Text>
            Não possui uma conta? <Link href="/signup">Cadastre-se</Link>
          </Text>
        </FormFooter>
      </FormContainer>
    </ImageWithSpace>
  );
}
