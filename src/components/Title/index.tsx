import { Container } from "./styles";
import { ITitle } from "./types";

export const Title = ({ children, ...rest }: ITitle) => {
  return <Container {...rest}>{children}</Container>;
};
