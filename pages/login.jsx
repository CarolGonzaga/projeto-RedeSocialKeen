import styled from "styled-components";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import axios from "axios";
import { useRouter } from "next/router";

import { loginSchema } from "../modules/user/user.schema";

import ImageWithSpace from "../src/components/layout/ImageWithSpace";
import H2 from "../src/components/typography/H2";
import Button from "../src/components/inputs/Button";
import Input from "../src/components/inputs/Input";
import Text from "../src/components/typography/Text";

import { UserIcon } from "@heroicons/react/24/solid";
import { LockClosedIcon } from "@heroicons/react/24/solid";

const FormContainer = styled.div`
  width: 100%;
  max-width: 574px;
  max-height: 550px;
  padding: 10px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  @media (min-width: ${(props) => props.theme.WIDTH_XL}) {
    max-width: 400px;
    max-height: 100%;
  }

  @media (max-width: 370px) {
    height: 700px;
    padding: 10px 0 10px 0;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 70px;
  width: 85%;
  max-width: 400px;

  @media (min-width: 1000px) {
    gap: 150px;
  }

  @media (min-height: 800px) {
    gap: 120px;
    padding: 20px;
  }
`;

const FormHead = styled.div`
  width: 100%;
`;

const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  width: 100%;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const StyledText = styled(Text)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;

  @media (max-width: 320px) {
    gap: 0;
  }
`;

function LoginPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: joiResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      const { status } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/login`, data)
      if (status === 200) { 
        router.push('/')
      }

    } catch ({ response }) {
      if (response.data === 'incorrect password') {
        setError('password', {
          message: 'Senha incorreta!'
        })
      } else if (response.data === 'not found') {
        setError('userOrEmail', {
          message: 'Usuário ou E-mail não encontrado!'
        })
      }
    }
  };

  return (
    <ImageWithSpace>
      <FormContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormHead>
            <H2>Acesse sua conta</H2>
          </FormHead>

          <FormBody>
            <FormLine>
              <StyledUserIcon />
              <Input
                label="Usuário ou E-mail"
                {...register("userOrEmail")}
                error={errors.userOrEmail}
              />
            </FormLine>
            <FormLine>
              <StyledLockIcon />
              <Input
                label="Senha"
                type="password"
                {...register("password")}
                error={errors.password}
              />
            </FormLine>
          </FormBody>

          <FormFooter>
          <Button type="submit" disabled={Object.keys(errors).length > 0}>
              Entrar
            </Button>
            <StyledText>
              <span>Não possui uma conta?</span>
              <Link href="/signup">Cadastre-se</Link>
            </StyledText>
          </FormFooter>
        </Form>
      </FormContainer>
    </ImageWithSpace>
  );
}

export default LoginPage
