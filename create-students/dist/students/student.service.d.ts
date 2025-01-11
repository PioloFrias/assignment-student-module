import { students } from "./student.entity";
import { Repository } from "typeorm";
import { createstudentDto } from "./dto/create.dto";
export declare class studentServ {
    private readonly studRep;
    constructor(studRep: Repository<students>);
    create(createStud: createstudentDto): Promise<createstudentDto & students>;
}
