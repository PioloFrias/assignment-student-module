import { createstudentDto } from './dto/create.dto';
import { studentServ } from './student.service';
export declare class StudentsController {
    private readonly studentService;
    constructor(studentService: studentServ);
    createStud(createstudentDto: createstudentDto): Promise<createstudentDto & import("./student.entity").students>;
}
