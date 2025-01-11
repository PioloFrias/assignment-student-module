import { studentServ } from './student.service';
export declare class StudentsController {
    private readonly studentService;
    constructor(studentService: studentServ);
    delete(id: string): Promise<import("./student.entity").students>;
}
