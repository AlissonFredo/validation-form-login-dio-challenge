import { InputComponent, InputContainer, InputErro } from "./styles";
import { IInput } from "./types";

export const Input = ({ error, ...rest }: IInput) => {
  return (
    <InputContainer>
      <InputComponent {...rest} />
      {error && <InputErro>teste</InputErro>}
    </InputContainer>
  );
};
