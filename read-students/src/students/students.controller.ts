import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { studentServ } from './student.service';

@Controller('students')
export class StudentsController {
    constructor(private readonly studentService: studentServ){

    }

    @Get()
    getAllData(){
        return this.studentService.getAllData();
    }

    @Get(':id')
    getOneData(@Param('id') id:string){
        return this.studentService.getOneData(+id);
    }

}
