import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'turma', schema: 'projetopi' })
export class turma {
  @PrimaryGeneratedColumn()
  idturma: number;

  @Column({ length: 20 })
  turno: string;

  @Column({ length: 20 })
  local: string;

  @Column({ length: 30 })
  diasemana: string;

  @Column({ length: 20 })
  trilha: string;
}