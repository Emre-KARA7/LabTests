import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TestReport {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  examinationRequestTime: Date;

  @Column()
  samplingTime: Date;

  @Column()
  sampleAcceptanceTime: Date;

  @Column()
  expertApprovalTime: Date;
}
