import { studentServ } from './student.service';
export declare class StudentsController {
    private readonly studentService;
    constructor(studentService: studentServ);
    getAllData(): Promise<import("./student.entity").students[]>;
    getOneData(id: string): Promise<import("./student.entity").students>;
}
