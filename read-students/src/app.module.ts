import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { students } from './students/student.entity';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'students',
  entities: [students],
  synchronize: true,
  })
  ,StudentsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
