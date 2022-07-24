import { FormControl, FormLabel, Input } from '@chakra-ui/react';

type FormProps = { flag?: string };

export const FormContainer: React.FC<FormProps> = ({ flag }) => {
  return (
    <FormControl my="14px">
      {flag === 'register' && (
        <FormControl my="8px">
          <FormLabel>Nome:</FormLabel>
          <Input type="text" />
        </FormControl>
      )}
      <FormControl my="8px">
        <FormLabel>Email:</FormLabel>
        <Input type="email" />
      </FormControl>
      <FormControl my="8px">
        <FormLabel>Senha:</FormLabel>
        <Input type="password" />
      </FormControl>
    </FormControl>
  );
};
