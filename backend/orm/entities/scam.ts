import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Scam {
    @PrimaryColumn({ type: 'text' }) public ip: string;
    @Column({ type: 'text' }) public scamType: string;
    @Column({ type: 'int' }) public count: number;

    public constructor(ip: string, scamType: string) {
        this.ip = ip;
        this.scamType = scamType;
        this.count = 1;
    }
}