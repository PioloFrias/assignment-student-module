import { students } from "./student.entity";
import { Repository } from "typeorm";
import { updatestudentDto } from "./dto/update.dto";
export declare class studentServ {
    private readonly studRep;
    constructor(studRep: Repository<students>);
    updateStud(id: number, updateStudDto: updatestudentDto): Promise<import("typeorm").UpdateResult>;
}
