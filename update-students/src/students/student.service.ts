import { InjectRepository } from "@nestjs/typeorm";
import { students } from "./student.entity";
import { Repository } from "typeorm";
import { NotFoundException } from "@nestjs/common";
import { updatestudentDto } from "./dto/update.dto";

export class studentServ{
    constructor(
    @InjectRepository(students)
    private readonly studRep : Repository<students>
    ){}

    async updateStud(id: number, updateStudDto: updatestudentDto) {
        const student = this.studRep.findOneBy({id});
        if(!student){
            throw new NotFoundException('Student not found')
        }
        return this.studRep.update(id, updateStudDto);

    }
}