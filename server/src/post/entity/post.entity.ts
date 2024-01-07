import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Post')
export class PostEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 30 })
  title: string;
}
