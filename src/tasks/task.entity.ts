import { TaskStatus } from './task.model';
import { identity } from "rxjs";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task extends BaseEntity{

  @PrimaryGeneratedColumn('increment',{name: 'id'})
  id: number

  @Column({name: 'title'})
  title: string

  @Column({name: 'description'})
  description: string

  @Column({name: 'status'})
  status: TaskStatus
}
