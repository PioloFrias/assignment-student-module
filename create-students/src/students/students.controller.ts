import { Body, Controller, Post } from '@nestjs/common';
import { createstudentDto } from './dto/create.dto';
import { studentServ } from './student.service';

@Controller('students')
export class StudentsController {
    constructor(private readonly studentService: studentServ){}

    @Post()
    createStud(@Body() createstudentDto: createstudentDto){
        return this.studentService.create(createstudentDto)
    }
}
