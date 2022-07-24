import { z } from 'zod';
import Identify from './Identify';
import ValidateDTO from './ValidateDTO';

const userSchema = z.object({
  name: z
    .string({
      required_error: 'O campo nome é obrigatório',
      invalid_type_error: 'Tipo de dado inválido',
    })
    .min(3, {
      message: 'Deve ter no mínimo 3 caracteres',
    }),
  email: z
    .string({
      required_error: 'O campo email é obrigatório',
      invalid_type_error: 'Tipo de dado inválido',
    })
    .email({
      message: 'Não é um email válido',
    }),
  password: z
    .string({
      required_error: 'O campo senha é obrigatório',
      invalid_type_error: 'Tipo de dado inválido',
    })
    .min(6, {
      message: 'Deve ter no mínimo 6 caracteres',
    }),
});

export type UserDTO = z.infer<typeof userSchema>;

export default class User {
  constructor(data = {} as UserDTO) {
    const _user = new ValidateDTO(userSchema, data);
    const _identify = new Identify();
    return _user.isValid() ? { ..._user, ..._identify, rules: [] } : _user;
  }
}
