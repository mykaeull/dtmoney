import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  handleOpenNewTransictionModal: () => void;
}

export function Header({ handleOpenNewTransictionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={handleOpenNewTransictionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
