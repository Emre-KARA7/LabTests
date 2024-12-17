import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AnalytRecord {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  guideId: number;

  @Column()
  analytId: number;

  @Column()
  dayMin: number;

  @Column()
  dayMax: number;

  @Column()
  arithmeticMin: number;

  @Column()
  arithmeticMax: number;

  @Column()
  geometricMin: number;

  @Column()
  geometricMax: number;

  @Column()
  min: number;

  @Column()
  max: number;
}
