import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { TestValue } from './testValue.entity';

@Entity()
export class TestReport {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.testReports)
  @JoinColumn({ name: 'userId' }) // This will create the userId column in the database
  user: User;

  @OneToMany(() => TestValue, (testValue) => testValue.testReport)
  testValues: TestValue[];

  @Column()
  examinationRequestTime: Date;

  @Column()
  samplingTime: Date;

  @Column()
  sampleAcceptanceTime: Date;

  @Column()
  expertApprovalTime: Date;
}
