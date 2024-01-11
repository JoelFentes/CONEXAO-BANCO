import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'motivodesistencia', schema: 'projetopi' })
export class MotivoDesistencia {
  @PrimaryGeneratedColumn()
  idmotivo: number;

  @Column({ length: 100 })
  motivo: string;
}