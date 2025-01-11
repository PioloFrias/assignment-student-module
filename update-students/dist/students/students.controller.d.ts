import { studentServ } from './student.service';
import { updatestudentDto } from './dto/update.dto';
export declare class StudentsController {
    private readonly studentService;
    constructor(studentService: studentServ);
    update(id: string, updatestudentDto: updatestudentDto): Promise<import("typeorm").UpdateResult>;
}
