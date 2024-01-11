import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { turma } from './turma.entity';

@Entity({ name: 'aluno', schema: 'projetopi' })
export class aluno {
  @PrimaryColumn({ length: 11 })
  cpf: string;

  @Column({ length: 40 })
  nome: string;

  @Column({ length: 40 })
  email: string;

  @Column({ length: 20 })
  telefone: string;

  @Column({ length: 15 })
  status: string;

  @ManyToOne(() => turma, { nullable: false })
  @JoinColumn({ name: 'idturma' })
  turma: number;
}