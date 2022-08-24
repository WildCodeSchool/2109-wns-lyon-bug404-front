import { createConnection } from 'typeorm';
import { config } from '../../src/config/config';
import path from 'path';

export const testConn = (drop: boolean = false) => {
  return createConnection({
    type: config.server as 'mysql',
    url: `${config.server}://${config.db_uname}:${config.db_password}@${config.host}/test`,
    entities: [path.resolve(__dirname, '../../src/models/*.{ts,js}')],
    synchronize: true
    // dropSchema: true
  });
};
