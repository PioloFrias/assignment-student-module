import { students } from "./student.entity";
import { Repository } from "typeorm";
export declare class studentServ {
    private readonly studRep;
    constructor(studRep: Repository<students>);
    getAllData(): Promise<students[]>;
    getOneData(id: number): Promise<students>;
}
