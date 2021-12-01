export class Todo {
  
    constructor(name) {
        this.name = name;
        this.completed = false;
    }

completed() {
    this.completed = true;
}

    }