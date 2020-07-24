export class Task{
    id: number;
    description: string;
    complete: boolean;

    constructor(){
        this.id = 0;
        this.description = '';
        this.complete = false;
    }
}
