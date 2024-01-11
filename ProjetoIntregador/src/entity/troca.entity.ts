import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { aluno } from './aluno.entity';
import { turma } from './turma.entity'; 
 
@Entity({ schema: 'projetopi', name: 'troca' })
export class Troca {

  @PrimaryGeneratedColumn()
  idtroca: number;

  @Column({ type: 'varchar', length: 11 })
  cpf_aluno: string;

  @Column({ type: 'int' })
  id_turma_origem: number;

  @Column({ type: 'int' })
  id_turma_destino: number;

  @Column({ type: 'varchar', length: 200 })
  justificativa: string;

  @Column({ type: 'int' })
  status: number;

  @Column({ type: 'date' })
  datasolicitacao: Date;

  @Column({ type: 'date' })
  dataconclusao: Date;

  @ManyToOne(() => aluno, aluno => aluno.cpf)
  @JoinColumn({ name: 'cpf_aluno' })
  aluno: aluno;

  @ManyToOne(() => turma, turma => turma.idturma)
  @JoinColumn({ name: 'id_turma_origem' })
  turmaOrigem: turma;

  @ManyToOne(() => turma, turma => turma.idturma)
  @JoinColumn({ name: 'id_turma_destino' })
  turmaDestino: turma;

}