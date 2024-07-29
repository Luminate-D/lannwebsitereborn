import { injectable } from 'inversify';
import { LannyDataSource } from '../orm/datasource';
import { Scam } from '../orm/entities/scam';
import { Repository } from 'typeorm';

@injectable()
export class ScamCounter {
    private repo: Repository<Scam>;

    public constructor() {
        this.repo = LannyDataSource.getRepository<Scam>(Scam);
    }

    public async init() {
    }

    public async total(type: string): Promise<number> {
        return (await this.repo.findBy({ scamType: type })).reduce((a, b) => a + b.count, 0);
    }

    public async scam(ip: string, type: 'moonlight' | 'jokerge'): Promise<number> {
        let scam = await this.repo.findOneBy({ ip: ip, scamType: type });
        if(!scam) {
            await this.repo.save(new Scam(ip, type));
            return 1;
        }

        scam.count++;

        return (await this.repo.save(scam)).count;
    }
}