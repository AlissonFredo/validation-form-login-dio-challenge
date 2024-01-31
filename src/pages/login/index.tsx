import { Title } from "../../components/Title";
import { Input } from "../../components/Input";
import { Container, ContainerLogin } from "./styles";
import { Button } from "../../components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LoginRequest } from "./types";

export const Login = () => {
  const schema = yup
    .object({
      email: yup
        .string()
        .email("Digite um email valido")
        .required("O campo é obrigatorio"),
      password: yup
        .string()
        .min(3, "Digite no minimo 3 caracteres")
        .required("O campo é obrigatorio"),
    })
    .required();

  const {
    register,
    setValue,

    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginRequest>({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const onSubmit = (data: { email: string; password: string }) => {
    console.log(data);
  };

  return (
    <Container>
      <ContainerLogin>
        <Title>Login</Title>
        <Input
          placeholder="Email"
          {...register("email")}
          error={errors?.email?.message}
          onChange={(e) => setValue("email", e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          {...register("password")}
          error={errors?.password?.message}
          onChange={(e) => setValue("password", e.target.value)}
        />
        <Button
          type="button"
          onClick={handleSubmit(onSubmit)}
          disabled={!isValid}
        >
          Entrar
        </Button>
      </ContainerLogin>
    </Container>
  );
};
