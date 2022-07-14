export class ToDo {
    TaskName: string;
    Completed: boolean;

    constructor(TaskName: string, Completed: boolean) {
        this.TaskName = TaskName;
        this.Completed = Completed;
    }
}