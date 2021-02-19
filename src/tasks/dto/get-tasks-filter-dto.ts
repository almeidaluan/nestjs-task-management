import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';
import { TaskStatus } from '../task.model';

export class GetTasksFilter{

    @IsOptional()
    @IsIn([TaskStatus.DONE,TaskStatus.IN_PROGRESSS,TaskStatus.OPEN])
    status : TaskStatus

    @IsOptional()
    @IsNotEmpty()
    search : string
}