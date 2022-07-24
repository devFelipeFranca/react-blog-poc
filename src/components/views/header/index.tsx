import { Container } from '@chakra-ui/react';

import './styles.scss';

type HeaderProps = { children: React.ReactNode };

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return <Container className="layout-header__public">{children}</Container>;
};
