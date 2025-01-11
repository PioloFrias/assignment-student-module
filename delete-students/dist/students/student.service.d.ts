import { students } from "./student.entity";
import { Repository } from "typeorm";
export declare class studentServ {
    private readonly studRep;
    constructor(studRep: Repository<students>);
    removeStud(id: number): Promise<students>;
}
