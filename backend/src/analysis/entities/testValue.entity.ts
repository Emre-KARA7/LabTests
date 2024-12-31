import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { TestReport } from './testReport.entity';
import { Analyt } from './analyt.entity';

@Entity()
export class TestValue {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Analyt, (analyt) => analyt.testValues)
  @JoinColumn({ name: 'analytId' }) // This will create the analytId column in the database
  analyt: Analyt;

  @ManyToOne(() => TestReport, (testReport) => testReport.testValues)
  @JoinColumn({ name: 'testReportId' }) // This will create the testReportId column in the database
  testReport: TestReport;

  @Column({ type: 'float' })
  value: number;

  @Column()
  expertOpinion: string;
}
