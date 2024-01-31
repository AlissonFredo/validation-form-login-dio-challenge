import { Container } from "./styles";
import { IButton } from "./types";

export const Button = ({ children, ...rest }: IButton) => {
  return <Container {...rest}>{children}</Container>;
};
