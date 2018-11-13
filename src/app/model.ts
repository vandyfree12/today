export class Model {
    user;
    items;
    
    constructor() {
        this.user = "Vandyck";
        this.items = [new TodoItem("Morning Devoation", false),
                      new TodoItem("Pray", false),
                      new TodoItem("Listen to Citi Fm", false),
                      new TodoItem("Shower", false ),
                      new TodoItem("Dress up", false ),
                      new TodoItem("Siri Schedule", false )];  
                    
    }
}

export class TodoItem {
    action;
    done;

    constructor(action, done) {
        this.action = action;
        this.done = done;
    }
}
