import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { studentServ } from './student.service';
import { updatestudentDto } from './dto/update.dto';

@Controller('students')
export class StudentsController {
    constructor(private readonly studentService: studentServ){

    }

    @Put(':id')
    update(@Param('id') id:string, @Body() updatestudentDto:updatestudentDto){
        return this.studentService.updateStud(+id,updatestudentDto)
    }

}
