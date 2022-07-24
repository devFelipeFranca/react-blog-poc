import { z } from 'zod';

export default class ValidateDTO {
  public errorsMessage: string[] = [];

  constructor(zodSchema: z.AnyZodObject, data: any) {
    try {
      zodSchema.parse(data);
      Object.assign(this, data);
    } catch (err: any) {
      const objectError = JSON.parse(err.message);
      Object.keys(objectError).forEach(key => {
        this.errorsMessage.push(objectError[key].message);
      });
    }
  }

  isValid(): boolean {
    return this.errorsMessage.length === 0;
  }
}
