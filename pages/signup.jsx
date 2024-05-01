import styled from "styled-components";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import axios from "axios";
import { useRouter } from "next/router";

import { signupSchema } from "../modules/user/user.schema";

import ImageWithSpace from "../src/components/layout/ImageWithSpace";
import H2 from "../src/components/typography/H2";
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
  gap: 60px;
  width: 85%;
  max-width: 400px;

  @media (min-width: 1000px) {
    gap: 100px;
  }

  @media (min-height: 800px) {
    gap: 80px;
    padding: 20px;
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

function SignupPage() {
  
  const router = useRouter() 
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm({
    resolver: joiResolver(signupSchema),
  });

  const handleForm = async (data) => {
    try {
      const { status } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/signup`, data)
      if (status === 201) {
        router.push('/')
      }

    } catch (err) {
      if (err.response.data.code === 11000) {
        setError(err.response.data.duplicatedKey, {
          type: 'duplicated'
        })
      }
    }
  };

  return (
    <ImageWithSpace>
      <FormContainer>
        <Form onSubmit={handleSubmit(handleForm)}>
          <FormHead>
            <H2>Crie sua conta</H2>
          </FormHead>

          <FormBody>
            <FormLine>
              <StyledUserIcon />
              <Input
                label="Usuário"
                type="text"
                {...register("username")}
                error={errors.username}
              />
            </FormLine>
            <FormLine>
              <StyledEnvelopeIcon />
              <Input
                label="E-mail"
                type="email"
                {...register("email")}
                error={errors.email}
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
              Cadastrar
            </Button>
            <StyledText>
              Já possui uma conta?
              <Link href="/login">Entrar</Link>
            </StyledText>
          </FormFooter>
        </Form>
      </FormContainer>
    </ImageWithSpace>
  );
}

export default SignupPage;
