import { InjectRepository } from "@nestjs/typeorm";
import { students } from "./student.entity";
import { Repository } from "typeorm";
import { createstudentDto } from "./dto/create.dto";

export class studentServ{
    constructor(
    @InjectRepository(students)
    private readonly studRep : Repository<students>
    ){}
    async create(createStud:createstudentDto){
        return await this.studRep.save(createStud); 
    }
}