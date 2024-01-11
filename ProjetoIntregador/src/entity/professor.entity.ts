import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { turma } from './turma.entity';

@Entity({ name: 'professor', schema: 'projetopi' })
export class Professor {
  @PrimaryColumn({ length: 11 })
  cpf: string;

  @Column({ length: 50 })
  nome: string;

  @ManyToOne(() => turma, { nullable: false })
  @JoinColumn({ name: 'idTurma' })
  turma: turma;
}