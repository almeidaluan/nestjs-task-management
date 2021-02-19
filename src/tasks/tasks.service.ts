import { TaskRepository } from './task.repository';
import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { TaskInterf, TaskStatus } from './task.model';

import {v4 as uuidv4} from 'uuid'
import { GetTasksFilter } from './dto/get-tasks-filter-dto';
import { throws } from 'assert';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {

    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository: TaskRepository) {
    }



    // private tasks : Task[] = []

    // getAllTasks(): Task[]{
    //     return this.tasks;
    // }

    async createTask(description: string, title: string): Promise<TaskInterf & Task>{
        const task: TaskInterf = {
            title: title,
            description: description,
            status: TaskStatus.OPEN
        }

        return await this.taskRepository.save(task)
    }

    //     //this.tasks.push(task)
    //     //this.taskRepository.save(task)

    //     return null;
    // }

    // findById(id: string): Task {
    //     var found =  this.tasks.find( x => x.id === id)

    //     if(!found){
    //         throw new  NotFoundException("Task não encontrada")
    //     }
    //     return found
    // }

    // removeTask(id: string): void{

    //     var found = this.findById(id);
    //     this.tasks = this.tasks.filter( x => x.id !== found.id)
    // }

    // updateTask(id: string, status: TaskStatus): Task{
    //     var task = this.findById(id)
    //     task.status = status
    //     return task
    // }

    // getTasksWithfilter(taskFilter : GetTasksFilter): Task[]{

    //     const { status,search} = taskFilter

    //     let tasks = this.getAllTasks()

    //     if(status) {
    //         tasks = tasks.filter( task => task.status === status)
    //     }

    //     if(search){
    //         tasks = tasks.filter( task =>
    //             task.title.includes(search) ||
    //             task.description.includes(search))
    //     }
    //     return tasks
    // }
}
