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

  @Column({ type: 'float' })
  arithmeticMin: number;

  @Column({ type: 'float' })
  arithmeticMax: number;

  @Column({ type: 'float' })
  geometricMin: number;

  @Column({ type: 'float' })
  geometricMax: number;

  @Column({ type: 'float' })
  min: number;

  @Column({ type: 'float' })
  max: number;
}
