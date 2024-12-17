import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Analyt {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
