import { z } from 'zod';
import Identify from './Identify';
import ValidateDTO from './ValidateDTO';

const postSchema = z.object({
  title: z
    .string({
      required_error: 'O campo título é obrigatório',
      invalid_type_error: 'Tipo de dado inválido',
    })
    .min(5, {
      message: 'Deve ter no mínimo 5 caracteres',
    }),
  content: z
    .string({
      required_error: 'O campo conteúdo é obrigatório',
      invalid_type_error: 'Tipo de dado inválido',
    })
    .min(10, {
      message: 'Deve ter no mínimo 10 caracteres',
    }),
  user_id: z
    .string({
      required_error: 'O campo usuário é obrigatório',
      invalid_type_error: 'Tipo de dado inválido',
    })
    .uuid({
      message: 'Não é um UUID válido',
    }),
});

export type PostDTO = z.infer<typeof postSchema>;

export default class Post {
  constructor(data = {} as PostDTO) {
    const _post = new ValidateDTO(postSchema, data);
    const _identify = new Identify();
    return _post.isValid() ? { ..._post, ..._identify } : _post;
  }
}
