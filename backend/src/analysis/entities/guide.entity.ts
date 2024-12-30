import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { AnalytRecord } from './analytRecord.entity';

@Entity()
export class Guide {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => AnalytRecord, (record) => record.guide)
  records: AnalytRecord[];
}
