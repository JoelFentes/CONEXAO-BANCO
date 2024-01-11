import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';
  import { aluno } from './aluno.entity';
  import { MotivoDesistencia } from './motivodesistencia.entity';
  
  @Entity({ name: 'desistencia', schema: 'projetopi' })
  export class Desistencia {
    @PrimaryGeneratedColumn()
    iddesistencia: number;
  
    @Column({ length: 20 })
    justificativa: string;
  
    @Column({ length: 20 })
    status: string;
  
    @Column()
    datasoliticitacao: Date;
  
    @Column()
    dataconclusao: Date;
  
    @ManyToOne(() => aluno, { nullable: false })
    @JoinColumn({ name: 'cpf_aluno' })
    aluno: aluno;
  
    @ManyToOne(() => MotivoDesistencia, { nullable: false })
    @JoinColumn({ name: 'iddesistencia' })
    motivoDesistencia: MotivoDesistencia;
  }