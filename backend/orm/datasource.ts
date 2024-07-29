import { DataSource } from 'typeorm';
import { Scam } from './entities/scam';

export const LannyDataSource = new DataSource({
    type: 'sqlite',
    database: 'sqlite.db',
    synchronize: true,
    logging: true,
    entities: [ Scam ],
    subscribers: [],
    migrations: []
});