import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { AnalytRecord } from './analytRecord.entity';
@Entity()
export class Analyt {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => AnalytRecord, (record) => record.analyt)
  records: AnalytRecord[];
}
