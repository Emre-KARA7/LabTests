import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { AnalytRecord } from './analytRecord.entity';
import { TestValue } from './testValue.entity';

@Entity()
export class Analyt {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => AnalytRecord, (record) => record.analyt)
  records: AnalytRecord[];

  @OneToMany(() => TestValue, (testValue) => testValue.analyt)
  testValues: TestValue[];
}
