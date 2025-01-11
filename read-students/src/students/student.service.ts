import { InjectRepository } from "@nestjs/typeorm";
import { students } from "./student.entity";
import { Repository } from "typeorm";
import { NotFoundException } from "@nestjs/common";

export class studentServ{
    constructor(
    @InjectRepository(students)
    private readonly studRep : Repository<students>
    ){}

    async getAllData(){
        return await this.studRep.find();
    }

    async getOneData(id: number){
        const studs = await this.studRep.findOneBy({id});
        if(!studs){
            throw new NotFoundException('Student Not Found');
        }
        return studs;
    }
}