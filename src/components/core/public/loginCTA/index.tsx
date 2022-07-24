import { Button } from '@chakra-ui/react';

type LoginCTAProps = {
  isLoggedIn: boolean;
  onClicked: () => void;
};

export const LoginCTA: React.FC<LoginCTAProps> = ({
  onClicked,
  isLoggedIn,
}) => {
  return (
    <Button
      size="sm"
      onClick={onClicked}
      colorScheme={!isLoggedIn ? 'blue' : 'red'}
      variant="solid"
    >
      {!isLoggedIn ? 'login' : 'logout'}
    </Button>
  );
};
