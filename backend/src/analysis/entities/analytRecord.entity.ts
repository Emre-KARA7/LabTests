import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Analyt } from './analyt.entity';
import { Guide } from './guide.entity';

@Entity()
export class AnalytRecord {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Analyt, (analyt) => analyt.records)
  @JoinColumn({ name: 'analytId' }) // This will create the analytId column in the database
  analyt: Analyt;

  @ManyToOne(() => Guide, (guide) => guide.records)
  @JoinColumn({ name: 'guideId' }) // This will create the guideId column in the database
  guide: Guide;

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
