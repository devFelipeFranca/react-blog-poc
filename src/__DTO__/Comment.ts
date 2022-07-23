import { z } from 'zod';
import Identify from './Identify';
import ValidateDTO from './ValidateDTO';

const postComment = z.object({
  content: z
    .string({
      required_error: 'O campo conteúdo é obrigatório',
      invalid_type_error: 'Tipo de dado inválido',
    })
    .min(10, {
      message: 'Deve ter no mínimo 10 caracteres',
    }),
  user_id: z.string().uuid({
    message: 'Algo deu errado',
  }),
  post_id: z.string().uuid({
    message: 'Algo deu errado',
  }),
});

export type PostCommentDTO = z.infer<typeof postComment>;

export default class Comment {
  constructor(data = {} as PostCommentDTO) {
    const _comment = new ValidateDTO(postComment, data);
    const _identify = new Identify();
    return _comment.isValid() ? { ..._comment, ..._identify } : _comment;
  }
}
