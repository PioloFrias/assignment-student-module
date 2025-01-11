import { InjectRepository } from "@nestjs/typeorm";
import { students } from "./student.entity";
import { Repository } from "typeorm";
import { NotFoundException } from "@nestjs/common";

export class studentServ{
    constructor(
    @InjectRepository(students)
    private readonly studRep : Repository<students>
    ){}

    async removeStud(id: number){
        const studs = await this.studRep.findOneBy({ id });
        if(!students){
            throw new NotFoundException('Student Not Found');
        }
        return await this.studRep.remove(studs);
    }
}