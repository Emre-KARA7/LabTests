import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { TestReport } from '../../analysis/entities/testReport.entity';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  @Column()
  password: string;

  @Column({ default: 'user' })
  role: string;

  @OneToMany(() => TestReport, (testReport) => testReport.user)
  testReports: TestReport[];
}
