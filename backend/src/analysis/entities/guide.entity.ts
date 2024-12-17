import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Guide {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
