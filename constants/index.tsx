export type Todo = {
    id: number;
    title: string;
    completed: boolean;
}

let todos: Array<Todo> = [];

todos = [
    {
        id: 1,
        title: 'Go Shopping',
        completed: false
    }, 
    {
        id: 2,
        title: 'Clean the house',
        completed: false
    }
]

export { todos };