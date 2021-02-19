export interface TaskInterf{
    title: string,
    description: string,
    status: TaskStatus;
}

export enum TaskStatus {
    OPEN = 1,
    IN_PROGRESSS = 2,
    DONE = 3
}
