import { Container } from '@chakra-ui/react';
import { Header } from '../../views/header';

type LayoutProps = { children: React.ReactNode };

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Header></Header>
      <Container className="layout-content__public">{children}</Container>
    </Container>
  );
};
