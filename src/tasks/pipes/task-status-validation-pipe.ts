import { BadRequestException, PipeTransform } from "@nestjs/common";
import { TaskStatus } from '../task.model';

export class TaskStatusValidationPipe implements PipeTransform{
    
    readonly allowedStatuses = [
        TaskStatus.OPEN,
        TaskStatus.IN_PROGRESSS,
        TaskStatus.DONE
    ]

    
    transform (value: any){
        if(!this.isStatusValid(value)){
            throw new BadRequestException("Status não encontrado")
        }
    }

    private isStatusValid(status:any){
        const idx = this.allowedStatuses.indexOf(status)
        return idx !== -1
    }
}