import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskInterf, TaskStatus } from './task.model';
import { CreateTaskDTO } from './dto/create-task-dto';
import { throws } from 'assert';
import { GetTasksFilter } from './dto/get-tasks-filter-dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation-pipe';
import {getConnection} from "typeorm";
import { Task } from './task.entity';


@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService){}


    // @Get()
    // searchTask(@Query(ValidationPipe) filterTasks : GetTasksFilter): Task[]{

    //     if(Object.keys(filterTasks)){
    //         return this.tasksService.getTasksWithfilter(filterTasks)
    //     }
    //     return this.tasksService.getAllTasks()

    // }

    // @Get('/all')
    // async getAllTasks(): Promise<Task[]>{
    //     var con = await getConnection("db2Connection")
    //     const rawData =  await con.manager.query(`SELECT * FROM tasks`);
    //     console.log(rawData)
    //     return this.tasksService.getAllTasks()
    // }

    @Post()
    @UsePipes(ValidationPipe)
    async createTask(@Body() createTaskDTO : CreateTaskDTO): Promise<TaskInterf & Task>{

        console.log(createTaskDTO)
        return await this.tasksService.createTask(createTaskDTO.description,createTaskDTO.title)
    }

    // @Get('/:id')
    // findById(@Param('id') id: string) : Task{
    //     return this.tasksService.findById(id);
    // }

    // @Delete('/:id')
    // removeTask(@Param('id') id: string ): void {

    //     this.tasksService.removeTask(id)

    // }

    // @Patch('/:id/status')
    // updateStatusTask(@Param('id') id : string, @Body('status',TaskStatusValidationPipe) status: TaskStatus): Task{
    //     return this.tasksService.updateTask(id, status)
    // }
}
