import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { studentServ } from './student.service';

@Controller('students')
export class StudentsController {
    constructor(private readonly studentService: studentServ){

    }

    @Delete(':id')
    delete(@Param('id') id: string){
        return this.studentService.removeStud(+id);
    }
    

}
