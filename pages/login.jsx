import styled from "styled-components";

import ImageWithSpace from "../src/components/layout/ImageWithSpace";
import H2 from "../src/components/typography/H2";
import H6 from "../src/components/typography/H6";

import { UserIcon } from "@heroicons/react/24/solid";
import { LockClosedIcon } from "@heroicons/react/24/solid";

const FormContainer = styled.div`
  
`;

const FormHead = styled.div`
  margin-bottom: 100px;
  margin-top: 100px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

const FormLine = styled.div`
  display: flex;
  gap: 17px;
  padding: 12px;
  border-bottom: 1px solid #6c6b6c;
`;

const StyledUserIcon = styled(UserIcon)`
  color: #6c6b6c;
  width: 24px;
  height: 24px;
`;

const StyledLockIcon = styled(LockClosedIcon)`
  color: #6c6b6c;
  width: 24px;
  height: 24px;
`;

const Text = styled.p`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 100px;
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
            <input placeholder="Usuário ou e-mail" type="email" />
          </FormLine>
          <FormLine>
            <StyledLockIcon />
            <input placeholder="Senha" type="password" />
          </FormLine>
          <button>Entrar</button>
        </Form>
        <Text>
          Não possui uma conta? <a href="#">Cadastre-se</a>
        </Text>
      </FormContainer>
    </ImageWithSpace>
  );
}
