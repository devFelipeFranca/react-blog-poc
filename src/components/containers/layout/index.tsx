import { Container, useBoolean } from '@chakra-ui/react';
import { LoginCTA } from '../../core/public/loginCTA';
import { DrawerContainer } from '../../views/drawer';
import { Header } from '../../views/header';
import { TabsContainer } from '../../views/tabs';
import { FormContainer } from '../form';

type LayoutProps = { children: React.ReactNode };

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [bool, setBool] = useBoolean();
  return (
    <Container p="0" maxW="full">
      <Header>
        <div></div>
        <div>
          <LoginCTA onClicked={setBool.on} isLoggedIn={false} />
        </div>
      </Header>
      <Container
        pt="48px"
        maxW="800px"
        className="layout-content__public"
        bgColor={'fff'}
      >
        {children}
      </Container>
      <DrawerContainer
        size="md"
        isOpen={bool}
        onClose={setBool.off}
        body={
          <TabsContainer
            tabs={['Login', 'Register']}
            tabPanels={[<FormContainer />, <FormContainer flag="register" />]}
          />
        }
      />
    </Container>
  );
};
