import { AppDataSource } from "./data-source"
import { DataSource } from "typeorm"
import { aluno } from "./entity/aluno.entity"
import { Desistencia } from "./entity/desistencia.entity"
import { MotivoDesistencia } from "./entity/motivodesistencia.entity";
import { Professor } from "./entity/professor.entity";
import { Troca } from "./entity/troca.entity";
import { turma } from "./entity/turma.entity";

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const userTest = new aluno()
    userTest.cpf = "12345678911"
    userTest.nome = "Saw"
    userTest.email = "Saw@gmail.com"
    userTest.status = "ativo"
    userTest.telefone = "40028922"
    userTest.turma = 1
   
    await AppDataSource.manager.save(userTest)
    console.log("Saved a new user with cpf: " + userTest.cpf)

    console.log("Loading users from the database...")
   

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
