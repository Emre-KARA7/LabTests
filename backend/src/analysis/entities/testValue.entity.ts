import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TestValue {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  analytId: number;

  @Column()
  testReportId: number;

  @Column()
  value: number;

  @Column()
  expertOpinion: string;
}
