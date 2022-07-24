import { v4 as uuidv4 } from 'uuid';

export default class Identify {
  constructor() {
    const date = new Date().toISOString();
    return {
      id: uuidv4(),
      created_at: date,
      updated_at: date,
    };
  }
}
