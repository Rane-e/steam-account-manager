import { v4 as uuidv4 } from 'uuid';

if (!process.env.SERVER_SESSION_ID) {
  process.env.SERVER_SESSION_ID = uuidv4();
}
