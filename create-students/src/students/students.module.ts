import { Module } from '@nestjs/common';
import { StudentsController } from './students.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { students } from './student.entity';
import { studentServ } from './student.service';

@Module({
  imports: [TypeOrmModule.forFeature([students])],
  providers: [studentServ],
  controllers: [StudentsController]
})
export class StudentsModule {}
