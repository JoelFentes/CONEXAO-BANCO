import "reflect-metadata"
import { DataSource } from "typeorm"
import { aluno } from "./entity/aluno.entity"
import { Desistencia } from "./entity/desistencia.entity"
import { MotivoDesistencia } from "./entity/motivodesistencia.entity";
import { Professor } from "./entity/professor.entity";
import { Troca } from "./entity/troca.entity";
import { turma } from "./entity/turma.entity";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "postgres",
    synchronize: true,
    logging: true,
    entities: [aluno, Desistencia, MotivoDesistencia, Professor, turma, Troca],
    migrations: [],
    subscribers: [],
})
